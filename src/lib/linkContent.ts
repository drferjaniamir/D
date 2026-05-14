import { supabase } from '@/lib/supabase';

export async function getInternalLinks() {
  const { data: links } = await supabase
    .from('internal_links')
    .select('keyword, target_url, source_slug');
  
  return links || [];
}

/**
 * Automatically wraps keywords in <a> tags.
 * Only links the FIRST occurrence of each keyword to avoid spam.
 * Avoids replacing text inside existing HTML tags.
 */
export function applyInternalLinks(
  content: string, 
  links: { keyword: string; target_url: string; source_slug?: string | null }[],
  currentSlug: string
) {
  let processedContent = content;

  // Filter links: include Global links (no source_slug) OR Local links (matching currentSlug)
  const filteredLinks = links.filter(link => 
    !link.source_slug || link.source_slug === currentSlug
  );

  // Sort keywords by length (longest first) to avoid partial matches
  const sortedLinks = [...filteredLinks].sort((a, b) => b.keyword.length - a.keyword.length);

  sortedLinks.forEach(({ keyword, target_url }) => {
    // SEO Protection: Don't link a page to itself
    if (target_url.endsWith(`/${currentSlug}`) || target_url === currentSlug) {
      return;
    }

    // Escaping regex special characters in keyword
    const escapedKeyword = keyword.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    
    // This regex matches the keyword only if it's not inside a tag
    const regex = new RegExp(`(?<!<[^>]*)(${escapedKeyword})(?![^<]*>)`, 'i');
    
    processedContent = processedContent.replace(regex, (match) => {
      return `<a href="${target_url}" class="internal-link">${match}</a>`;
    });
  });

  return processedContent;
}
