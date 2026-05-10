import React from 'react';
import { services } from '@/data/services';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';
import styles from './ServiceDetail.module.css';
import { Metadata } from 'next';
import Footer from "@/components/common/Footer";

const seoMeta: Record<string, { title: string; description: string }> = {
  'implants-dentaires': {
    title: "Meilleur Dentiste à Ariana | Cabinet Dentaire Dr Ferjani Amir | Implants Dentaires | près de chez vous",
    description: "Découvrez nos solutions d'implants dentaires de haute qualité à Ariana pour restaurer votre sourire de manière durable et naturelle avec le Dr Ferjani Amir."
  },
  'dentisterie-generale': {
    title: "Meilleur Dentiste à Ariana | Cabinet Dentaire Dr Ferjani Amir | Dentisterie Générale | près de chez vous",
    description: "Soins dentaires complets à Ariana : bilan, détartrage et traitements conservateurs. Le Cabinet du Dr Ferjani Amir assure la santé bucco-dentaire de votre famille."
  },
  'dentisterie-esthetique': {
    title: "Meilleur Dentiste à Ariana | Cabinet Dentaire Dr Ferjani Amir | Dentisterie Esthétique | près de chez vous",
    description: "Sublimez votre sourire à Ariana. Blanchiment, facettes et relooking dentaire avec l'expertise du Dr Ferjani Amir pour un résultat éclatant."
  },
  'orthodontie': {
    title: "Meilleur Dentiste à Ariana | Cabinet Dentaire Dr Ferjani Amir | Orthodontie | près de chez vous",
    description: "Alignez vos dents avec les dernières technologies d'orthodontie à Ariana. Invisalign et bagues traditionnelles au Cabinet du Dr Ferjani Amir."
  },
  'soins-pediatriques': {
    title: "Meilleur Dentiste à Ariana | Cabinet Dentaire Dr Ferjani Amir | Soins Pédiatriques | près de chez vous",
    description: "Des soins dentaires doux et adaptés pour vos enfants à Ariana. Le Dr Ferjani Amir crée une expérience rassurante pour les plus petits."
  },
  'urgences-dentaires': {
    title: "Meilleur Dentiste à Ariana | Cabinet Dentaire Dr Ferjani Amir | Urgences Dentaires | près de chez vous",
    description: "Douleur aiguë ou dent cassée ? Urgences dentaires à Ariana. Le Dr Ferjani Amir vous reçoit rapidement pour soulager vos douleurs."
  },
  'chirurgie-orale': {
    title: "Meilleur Dentiste à Ariana | Cabinet Dentaire Dr Ferjani Amir | Chirurgie Orale | près de chez vous",
    description: "Expertise en chirurgie orale à Ariana : extractions complexes, dents de sagesse et soins parodontaux réalisés avec précision par le Dr Ferjani Amir."
  }
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const meta = seoMeta[slug];

  if (!meta) {
    return { title: 'Service Dentaire | Cabinet Dr Ferjani Amir' };
  }

  return {
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: `/services/${slug}`,
    },
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: `https://www.dentavip.com/services/${slug}`,
      siteName: 'Cabinet Dentaire Dr Ferjani Amir',
      images: [
        {
          url: "/logo.png",
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
  return services.map((service) => ({
    slug: service.slug,
  }));
}

const ServicePage = async ({ params }: Props) => {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) {
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
              "@type": "Dentist",
              "name": "Cabinet dentaire Dr Ferjani Amir",
              "image": "https://www.dentavip.com/logo.png",
              "@id": "https://www.dentavip.com",
              "url": `https://www.dentavip.com/services/${slug}`,
              "telephone": "+21626790175",
              "priceRange": "$$",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "14 hamza ibn abdelmotaleb",
                "addressLocality": "Ariana Essoghra",
                "postalCode": "2083",
                "addressCountry": "TN"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 36.89935,
                "longitude": 10.18378
              }
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
              {service.subServices.map((sub, index) => (
                <div key={index} className={styles.card}>
                  <div className={styles.cardHeader}>
                    <CheckCircle2 className={styles.checkIcon} size={24} />
                    <h3 className={styles.cardTitle}>{sub.title}</h3>
                  </div>
                  <p className={styles.cardDescription}>{sub.description}</p>
                </div>
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
