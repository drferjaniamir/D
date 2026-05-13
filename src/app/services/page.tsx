import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { supabase } from '@/lib/supabase';
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import styles from '@/components/sections/Services.module.css';
import { 
  Baby, 
  Gem, 
  Activity, 
  Flame, 
  Smile, 
  HeartPulse, 
  Syringe,
  ArrowLeft
} from 'lucide-react';

export const metadata: Metadata = {
  title: "Nos Services Dentaires à Ariana | Cabinet dentaire Dr Ferjani Amir",
  description: "Découvrez tous les services dentaires proposés par le Cabinet dentaire Dr Ferjani Amir à Ariana : implants, orthodontie, blanchiment, urgences et plus.",
  alternates: {
    canonical: "/services",
  },
};

const iconMap: Record<string, React.ReactNode> = {
  'implants-dentaires': <Syringe size={32} />,
  'dentisterie-generale': <Smile size={32} />,
  'dentisterie-esthetique': <Gem size={32} />,
  'orthodontie': <Activity size={32} />,
  'soins-pediatriques': <Baby size={32} />,
  'urgences-dentaires': <HeartPulse size={32} />,
  'chirurgie-orale': <Flame size={32} />
};

export default async function ServicesPage() {
  const { data } = await supabase.from('services').select('*').order('order', { ascending: true });
  const services = data || [];

  return (
    <>
      <Header />
      <main style={{ paddingTop: '140px' }}>
        <section className={styles.section}>
          <div className={styles.container}>
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

            {/* Header Section */}
            <div className={styles.header}>
              <span className={styles.label}>Notre Expertise</span>
              <h1 className={styles.title}>Nos Services Dentaires à <span className={styles.highlight}>Ariana</span></h1>
              <p className={styles.subtitle}>
                Bienvenue au Cabinet dentaire Dr Ferjani Amir. Nous mettons à votre disposition une gamme complète de soins dentaires modernes et personnalisés.
              </p>
            </div>

            {/* SEO Introduction */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px', marginBottom: '60px' }}>
              <div style={{ background: 'white', padding: '30px', borderRadius: '20px', border: '1px solid var(--border)' }}>
                <p style={{ color: 'var(--foreground)', lineHeight: '1.7' }}>
                  Le <strong>Cabinet dentaire Dr Ferjani Amir</strong> est fier de servir la communauté d'<strong>Ariana</strong> avec des soins dentaires d'excellence. Que vous recherchiez une solution pour remplacer des dents manquantes, aligner votre sourire ou simplement maintenir une hygiène bucco-dentaire impeccable, notre équipe utilise des technologies de pointe pour des résultats durables et naturels.
                </p>
              </div>
              <div style={{ background: 'white', padding: '30px', borderRadius: '20px', border: '1px solid var(--border)' }}>
                <p style={{ color: 'var(--foreground)', lineHeight: '1.7' }}>
                  Notre approche repose sur l'écoute et le confort du patient. Nous savons qu'une visite chez le <strong>dentiste à Ariana</strong> peut être source d'appréhension, c'est pourquoi nous avons conçu notre cabinet pour être un espace apaisant. De la dentisterie préventive aux interventions chirurgicales complexes, chaque geste est effectué avec la plus grande précision.
                </p>
              </div>
            </div>

            {/* Services Grid (Reusing homepage classes) */}
            <div className={styles.grid}>
              {services.map((service) => (
                <div key={service.id} className={styles.card}>
                  <div className={styles.icon}>{iconMap[service.slug]}</div>
                  <h3 className={styles.serviceTitle}>{service.title}</h3>
                  <p className={styles.serviceDescription}>
                    {service.description}
                  </p>
                  <Link href={`/services/${service.slug}`} className={styles.link}>
                    En Savoir Plus →
                  </Link>
                </div>
              ))}
            </div>

            {/* Deep SEO Content */}
            <div style={{ marginTop: '80px', background: 'white', padding: '40px', borderRadius: '30px', border: '1px solid var(--border)' }}>
              <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                <h2 style={{ fontSize: '2rem', fontWeight: 700, color: 'var(--secondary)', marginBottom: '30px', textAlign: 'center' }}>
                  Engagement Qualité et Soins Modernes
                </h2>
                <div style={{ color: 'var(--foreground)', lineHeight: '1.8', fontSize: '1.1rem' }}>
                  <p style={{ marginBottom: '20px' }}>
                    La santé de votre bouche est notre priorité absolue. Au Cabinet dentaire Dr Ferjani Amir, nous croyons qu'une dentisterie de qualité doit être accessible et transparente. C'est pourquoi nous prenons le temps d'expliquer chaque procédure et de discuter de toutes les options possibles pour vos <strong>soins dentaires à Ariana</strong>.
                  </p>
                  <p style={{ marginBottom: '20px' }}>
                    Nous utilisons des matériaux de première qualité et respectons les normes d'hygiène et de stérilisation les plus strictes. Notre cabinet est équipé pour traiter les <strong>urgences dentaires</strong> rapidement, afin de vous soulager dans les meilleurs délais.
                  </p>
                  <p>
                    Situé idéalement à <strong>Ariana</strong>, notre cabinet est le choix privilégié pour ceux qui recherchent un <strong>dentiste</strong> compétent et attentionné. Nous vous invitons à prendre rendez-vous pour découvrir comment nous pouvons transformer votre sourire et améliorer votre qualité de vie.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

