import React from 'react';
import styles from './Hero.module.css';
import { motion } from 'framer-motion';
import { Calendar, Shield } from 'lucide-react';

import Link from 'next/link';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.content}>
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className={styles.tagline}>Cabinet Dentaire Dr Ferjani Amir</span>
            <h1 className={styles.title}>
              Dentiste <br />
              à <span className={styles.highlight}>Ariana</span>
            </h1>
            <p className={styles.description}>
              Nous combinons une technologie de pointe avec une approche centrée sur le patient pour vous offrir les soins dentaires que vous méritez. Découvrez la différence des soins modernes.
            </p>
            <div className={styles.actions}>
              <button className={styles.btnSecondary} onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}>Nos Services</button>
              <Link href="/contact" className={styles.btnPrimary}>Prendre Rendez-vous</Link>
            </div>
            
            <div className={styles.stats}>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>15k+</span>
                <span className={styles.statLabel}>Patients Satisfaits</span>
              </div>
              <div className={styles.statDivider} />
              <div className={styles.statItem}>
                <span className={styles.statNumber}>99%</span>
                <span className={styles.statLabel}>Taux de Réussite</span>
              </div>
            </div>
          </motion.div>
        </div>

        <div className={styles.visual}>
          <motion.div 
            className={styles.imageCard}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            {/* Placeholder for dental image, using a gradient for now as a luxury background */}
            <div className={styles.luxuryBg}>
              <img 
                src="/images/hero-dental.png" 
                alt="Premium Dental Care" 
                className={styles.luxuryImage} 
              />
              <div className={styles.floatingBadges}>
                <motion.div 
                  className={`${styles.badge} glass`}
                  animate={{ y: [0, -10, 0] }}
                  transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                >
                  <Calendar size={18} />
                  <span>Réservation rapide</span>
                </motion.div>
                <motion.div 
                  className={`${styles.badge} glass`}
                  style={{ top: '60%', right: '-20px' }}
                  animate={{ y: [0, 10, 0] }}
                  transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                >
                  <Shield size={18} />
                  <span>Soins 100% sécurisés</span>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
