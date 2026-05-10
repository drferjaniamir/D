import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { areas } from '@/data/areas';
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import styles from '@/components/sections/Services.module.css';
import { MapPin, ArrowLeft } from 'lucide-react';

export const metadata: Metadata = {
  title: "Zones Desservies à Ariana | Cabinet dentaire Dr Ferjani Amir",
  description: "Le Cabinet dentaire Dr Ferjani Amir dessert Ariana Essoghra et Ariana Ville.",
  alternates: {
    canonical: "/areas",
  },
};

export default function AreasPage() {
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
              <span className={styles.label}>Proximité & Accessibilité</span>
              <h1 className={styles.title}>Zones Desservies à <span className={styles.highlight}>Ariana</span></h1>
              <p className={styles.subtitle}>
                Le Cabinet dentaire Dr Ferjani Amir accueille les patients de toute la région d'Ariana.
              </p>
            </div>

            {/* Areas Grid */}
            <div className={styles.grid}>
              {areas.map((area) => (
                <div key={area.id} className={styles.card}>
                  <div className={styles.icon}>
                    <MapPin size={32} />
                  </div>
                  <h3 className={styles.serviceTitle}>{area.name}</h3>
                  <p className={styles.serviceDescription}>
                    {area.description}
                  </p>
                  <Link href={`/areas/${area.slug}`} className={styles.link}>
                    Voir le Dentiste à {area.name} →
                  </Link>
                </div>
              ))}
            </div>

            {/* Bottom Paragraph */}
            <div style={{ marginTop: '60px', textAlign: 'center', maxWidth: '800px', margin: '60px auto 0' }}>
              <p style={{ color: 'var(--foreground)', lineHeight: '1.7', fontSize: '1.1rem' }}>
                Notre cabinet est stratégiquement situé pour offrir des soins dentaires de haute qualité aux résidents d'Ariana Essoghra et Ariana Ville. Nous nous engageons à fournir un accès facile et des soins personnalisés à chaque patient de notre communauté.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
