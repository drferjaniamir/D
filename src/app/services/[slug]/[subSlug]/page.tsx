import React from 'react';
import { supabase } from '@/lib/supabase';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import styles from '../ServiceDetail.module.css';
import { Metadata } from 'next';
import Footer from "@/components/common/Footer";

interface Props {
  params: Promise<{
    slug: string;
    subSlug: string;
  }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug, subSlug } = await params;
  
  const { data: service } = await supabase
    .from('services')
    .select('id')
    .eq('slug', slug)
    .single();

  if (!service) {
    return { title: 'Service Dentaire | Cabinet Dr Ferjani Amir' };
  }

  const { data: subService } = await supabase
    .from('sub_services')
    .select('seo_title, seo_description, title, description')
    .eq('slug', subSlug)
    .eq('service_id', service.id)
    .single();

  if (!subService) {
    return { title: 'Service Dentaire | Cabinet Dr Ferjani Amir' };
  }

  const title = subService.seo_title || subService.title;
  const description = subService.seo_description || subService.description;

  return {
    title,
    description,
    alternates: {
      canonical: `/services/${slug}/${subSlug}`,
    },
    openGraph: {
      title,
      description,
      url: `https://www.dentavip.com/services/${slug}/${subSlug}`,
      siteName: 'Cabinet Dentaire Dr Ferjani Amir',
      images: [
        {
          url: "/logo.webp",
          width: 1200,
          height: 630,
          alt: "Cabinet Dentaire Dr Ferjani Amir",
        },
      ],
      locale: 'fr_FR',
      type: 'website',
    },
  };
}

export async function generateStaticParams() {
  const { data: services } = await supabase
    .from('services')
    .select('slug, sub_services(slug)');
    
  const params: { slug: string; subSlug: string }[] = [];
  
  services?.forEach(service => {
    service.sub_services?.forEach((sub: any) => {
      params.push({ slug: service.slug, subSlug: sub.slug });
    });
  });
  
  return params;
}

const SubServicePage = async ({ params }: Props) => {
  const { slug, subSlug } = await params;
  
  const { data: service } = await supabase
    .from('services')
    .select('*')
    .eq('slug', slug)
    .single();

  if (!service) {
    notFound();
  }

  const { data: subService } = await supabase
    .from('sub_services')
    .select('*')
    .eq('service_id', service.id)
    .eq('slug', subSlug)
    .single();

  if (!subService) {
    notFound();
  }

  return (
    <>
      <main className={styles.main}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Dentist",
                  "@id": "https://www.dentavip.com/#dentist",
                  "name": "Cabinet dentaire Dr Ferjani Amir",
                  "url": "https://www.dentavip.com"
                },
                {
                  "@type": "MedicalProcedure",
                  "name": subService.title,
                  "description": subService.description,
                  "url": `https://www.dentavip.com/services/${subService.slug}`,
                  "provider": {
                    "@id": "https://www.dentavip.com/#dentist"
                  }
                }
              ]
            })
          }}
        />
        <div className={styles.container}>
          <Link href={`/services/${slug}`} className={styles.backLink}>
            <ArrowLeft size={20} />
            <span>Retour à {service.title}</span>
          </Link>
  
          <header className={styles.header}>
            <h1 className={styles.title}>{subService.title} à Ariana</h1>
            <p className={styles.description}>{subService.description}</p>
          </header>
  
          {subService.content && (
            <section className={styles.subServicesSection} style={{ marginTop: '2rem' }}>
              <div dangerouslySetInnerHTML={{ __html: subService.content }} />
            </section>
          )}
  
          <section className={styles.cta}>
            <div className={styles.ctaContent}>
              <h2>Besoin d'un rendez-vous ?</h2>
              <p>Nos experts sont là pour vous accompagner dans votre parcours de soin.</p>
              <Link href="/contact" className={styles.ctaButton}>
                Prendre rendez-vous
              </Link>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default SubServicePage;
