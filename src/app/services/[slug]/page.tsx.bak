import React from 'react';
import { supabase } from '@/lib/supabase';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';
import styles from './ServiceDetail.module.css';
import { Metadata } from 'next';
import Footer from "@/components/common/Footer";

export const revalidate = 60;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const { data: service } = await supabase
    .from('services')
    .select('seo_title, seo_description, title, description')
    .eq('slug', slug)
    .single();

  if (!service) {
    return { title: 'Service Dentaire | Cabinet Dr Ferjani Amir' };
  }

  const title = service.seo_title || service.title;
  const description = service.seo_description || service.description;

  return {
    title,
    description,
    alternates: {
      canonical: `/services/${slug}`,
    },
    openGraph: {
      title,
      description,
      url: `https://www.dentavip.com/services/${slug}`,
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

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const { data: services } = await supabase.from('services').select('slug');
  return (services || []).map((service) => ({
    slug: service.slug,
  }));
}

const ServicePage = async ({ params }: Props) => {
  const { slug } = await params;
  
  const { data: service } = await supabase
    .from('services')
    .select('*')
    .eq('slug', slug)
    .single();

  if (!service) {
    notFound();
  }

  const { data: subServices } = await supabase
    .from('sub_services')
    .select('*')
    .eq('service_id', service.id)
    .order('order', { ascending: true });

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
                  "@id": `https://www.dentavip.com/services/${service.slug}`,
                  "name": service.title,
                  "description": service.description,
                  "url": `https://www.dentavip.com/services/${service.slug}`,
                  "recognizingAuthority": {
                    "@id": "https://www.dentavip.com/#dentist"
                  }
                }
              ]
            })
          }}
        />
        <div className={styles.container}>
          <Link href="/services" className={styles.backLink}>
            <ArrowLeft size={20} />
            <span>Retour aux services</span>
          </Link>
  
          <header className={styles.header}>
            <h1 className={styles.title}>{service.title} à Ariana</h1>
            <p className={styles.description}>{service.description}</p>
          </header>
  
          <section className={styles.subServicesSection}>
            <h2 className={styles.subTitle}>Nos spécialités en {service.title}</h2>
            <div className={styles.grid}>
              {(subServices || []).map((sub) => (
                <Link href={`/services/${slug}/${sub.slug}`} key={sub.id} className={styles.card} style={{ textDecoration: 'none', color: 'inherit' }}>
                  <div className={styles.cardHeader}>
                    <CheckCircle2 className={styles.checkIcon} size={24} />
                    <h3 className={styles.cardTitle}>{sub.title}</h3>
                  </div>
                  <p className={styles.cardDescription}>{sub.description}</p>
                </Link>
              ))}
            </div>
          </section>
  
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

export default ServicePage;
