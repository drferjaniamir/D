import React from 'react';
import { Metadata } from 'next';
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import styles from '@/components/sections/Services.module.css';
import Link from 'next/link';
import { ArrowLeft, Sparkles } from 'lucide-react';
import { supabase } from "@/lib/supabase";
import BeforeAfterSlider from "@/components/sections/BeforeAfterSlider";
import { getInternalLinks, applyInternalLinks } from "@/lib/linkContent";

export const metadata: Metadata = {
  title: "Transformation & Galerie | Cabinet dentaire Dr Ferjani Amir",
  description: "Découvrez les transformations de sourires réalisées par le Dr Ferjani Amir. Galerie avant-après.",
  alternates: {
    canonical: "/transformation",
  },
};

export default async function TransformationPage() {
  const [casesResult, internalLinks] = await Promise.all([
    supabase
      .from('gallery_cases')
      .select('*')
      .order('order', { ascending: true }),
    getInternalLinks()
  ]);

  const cases = casesResult.data;
  const hasCases = cases && cases.length > 0;

  return (
    <>
      <Header />
      <main style={{ paddingTop: '140px', minHeight: '60vh' }}>
        <section className={styles.section}>
          <div className={styles.container}>
            {/* Back to Home */}
            <Link 
              href="/" 
              style={{ 
                display: 'inline-flex', 
                alignItems: 'center', 
                gap: '8px', 
                color: 'var(--primary)', 
                textDecoration: 'none',
                marginBottom: '2rem',
                fontWeight: 600
              }}
            >
              <ArrowLeft size={20} />
              Retour à l'accueil
            </Link>

            <div style={{ textAlign: 'center' }}>
              <div style={{ display: 'inline-flex', padding: '12px', borderRadius: '50%', background: 'rgba(var(--primary-rgb), 0.1)', color: 'var(--primary)', marginBottom: '24px' }}>
                <Sparkles size={32} />
              </div>
              <h1 className={styles.title}>Galerie de <span className={styles.highlight}>Transformation</span></h1>
              <p style={{ fontSize: '1.25rem', color: 'var(--muted-foreground)', maxWidth: '800px', margin: '40px auto' }}>
                Découvrez les résultats exceptionnels de nos traitements et comment nous redéfinissons les sourires de nos patients.
              </p>
              
              {hasCases ? (
                <div style={{ 
                  display: 'grid', 
                  gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
                  gap: '40px', 
                  marginTop: '60px' 
                }}>
                  {cases.map((c) => {
                    const processedTitle = applyInternalLinks(c.title || '', internalLinks, 'transformation');
                    const processedDescription = applyInternalLinks(c.description || '', internalLinks, 'transformation');
                    return (
                      <BeforeAfterSlider
                        key={c.id}
                        beforeImage={c.before_image_url}
                        afterImage={c.after_image_url}
                        title={processedTitle}
                        description={processedDescription}
                      />
                    );
                  })}
                </div>
              ) : (
                <div style={{ 
                  padding: '100px 40px', 
                  background: 'var(--accent)', 
                  borderRadius: '30px', 
                  border: '1px solid var(--border)',
                  marginTop: '60px'
                }}>
                  <h3 style={{ fontSize: '1.5rem', fontWeight: 600, color: 'var(--secondary)' }}>Contenu de la galerie à venir</h3>
                  <p style={{ color: 'var(--muted-foreground)', marginTop: '16px' }}>Nous préparons une sélection de nos plus belles transformations pour vous inspirer.</p>
                </div>
              )}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
