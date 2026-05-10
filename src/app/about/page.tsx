import React from 'react';
import { Metadata } from 'next';
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import styles from '@/components/sections/Services.module.css';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export const metadata: Metadata = {
  title: "À Propos | Cabinet dentaire Dr Ferjani Amir",
  description: "Découvrez l'engagement et l'expertise du Dr Ferjani Amir au service de votre sourire à Ariana.",
};

export default function AboutPage() {
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
              <h1 className={styles.title}>À <span className={styles.highlight}>Propos</span></h1>
              <p style={{ fontSize: '1.25rem', color: 'var(--muted-foreground)', maxWidth: '800px', margin: '40px auto' }}>
                Le Cabinet dentaire Dr Ferjani Amir est dédié à fournir des soins dentaires d'excellence et personnalisés à Ariana depuis 2012.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
