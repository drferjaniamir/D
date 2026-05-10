import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import styles from '@/components/sections/Services.module.css';
import { 
  Phone, 
  MessageCircle, 
  MapPin, 
  Mail, 
  ArrowLeft,
  Navigation
} from 'lucide-react';

export const metadata: Metadata = {
  title: "Contact & Rendez-vous | Cabinet dentaire Dr Ferjani Amir à Ariana",
  description: "Prenez rendez-vous rapidement avec le Dr Ferjani Amir via WhatsApp ou téléphone. Situé à Ariana Essoghra.",
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main style={{ paddingTop: '140px' }}>
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

            {/* Header Section */}
            <div className={styles.header}>
              <span className={styles.label}>Prendre Rendez-vous</span>
              <h1 className={styles.title}>Contact & <span className={styles.highlight}>Rendez-vous</span></h1>
              <p className={styles.subtitle}>
                Nous sommes à votre écoute pour toute question ou pour planifier votre prochaine visite au cabinet.
              </p>
            </div>

            {/* Contact Grid */}
            <div className={styles.grid}>
              {/* WhatsApp Card */}
              <div className={styles.card} style={{ borderLeft: '6px solid #25D366' }}>
                <div className={styles.icon} style={{ background: 'rgba(37, 211, 102, 0.1)', color: '#25D366' }}>
                  <MessageCircle size={32} />
                </div>
                <h3 className={styles.serviceTitle}>WhatsApp</h3>
                <p className={styles.serviceDescription}>
                  Le moyen le plus rapide pour prendre rendez-vous ou poser une question rapide.
                </p>
                <a 
                  href="https://wa.me/21626790175" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={styles.link}
                  style={{ color: '#25D366' }}
                >
                  Démarrer la discussion →
                </a>
              </div>

              {/* Phone Card */}
              <div className={styles.card}>
                <div className={styles.icon}>
                  <Phone size={32} />
                </div>
                <h3 className={styles.serviceTitle}>Téléphone</h3>
                <p className={styles.serviceDescription}>
                  Appelez-nous directement pour les urgences ou les demandes spécifiques.
                </p>
                <a href="tel:+21626790175" className={styles.link}>
                  +216 26 790 175 →
                </a>
              </div>

            </div>

            {/* Bottom Section */}
            <div style={{ marginTop: '80px', background: 'white', padding: '40px', borderRadius: '30px', border: '1px solid var(--border)', textAlign: 'center' }}>
              <h2 style={{ fontSize: '2rem', fontWeight: 700, color: 'var(--secondary)', marginBottom: '20px' }}>
                Horaires d'Ouverture
              </h2>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', color: 'var(--muted-foreground)' }}>
                <div>
                  <p><strong>Lundi - Vendredi</strong></p>
                  <p>08:30 - 18:00</p>
                </div>
                <div>
                  <p><strong>Samedi</strong></p>
                  <p>08:00 - 13:00</p>
                </div>
                <div>
                  <p><strong>Dimanche</strong></p>
                  <p>Fermé</p>
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
