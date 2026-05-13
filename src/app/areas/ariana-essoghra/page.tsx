import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
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
import { supabase } from '@/lib/supabase';

export const metadata: Metadata = {
  title: "Dentiste à Ariana Essoghra | Cabinet dentaire Dr Ferjani Amir",
  description: "Vous cherchez un dentiste à Ariana Essoghra ? Cabinet dentaire Dr Ferjani Amir.",
  alternates: {
    canonical: "/areas/ariana-essoghra",
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

export default async function ArianaEssoghraPage() {
  const { data } = await supabase.from('services').select('*').order('order', { ascending: true });
  const services = data || [];

  return (
    <>
      <Header />
      <main style={{ paddingTop: '140px' }}>
        <section className={styles.section}>
          <div className={styles.container}>
            {/* Header Section */}
            <div className={styles.header}>
              <span className={styles.label}>Votre Cabinet de Proximité</span>
              <h1 className={styles.title}>Dentiste à <span className={styles.highlight}>Ariana Essoghra</span></h1>
              <p className={styles.subtitle}>
                Contenu à venir.
              </p>
            </div>

            {/* Services Section */}
            <div style={{ marginTop: '80px' }}>
              <h2 style={{ fontSize: '2.5rem', fontWeight: 700, color: 'var(--secondary)', marginBottom: '40px', textAlign: 'center' }}>
                Nos Services
              </h2>
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
            </div>

            {/* Back to Areas Link */}
            <div style={{ marginTop: '60px', textAlign: 'center' }}>
              <Link 
                href="/areas" 
                style={{ 
                  display: 'inline-flex', 
                  alignItems: 'center', 
                  gap: '10px', 
                  color: 'var(--primary)', 
                  fontWeight: 600,
                  fontSize: '1.1rem',
                  textDecoration: 'none'
                }}
              >
                <ArrowLeft size={20} /> Retour aux zones desservies
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
