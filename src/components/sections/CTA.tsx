"use client";

import React from 'react';
import styles from './CTA.module.css';
import { motion } from 'framer-motion';
import { Calendar, Phone } from 'lucide-react';

import Link from 'next/link';

const CTA = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <motion.div 
          className={styles.card}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <div className={styles.content}>
            <h2 className={styles.title}>Prêt à Transformer Votre Sourire ?</h2>
            <p className={styles.description}>
              Rejoignez plus de 15 000 patients satisfaits et découvrez l'avenir des soins dentaires. Prenez votre premier rendez-vous et bénéficiez de soins personnalisés dès aujourd'hui.
            </p>
            <div className={styles.actions}>
              <Link href="/contact" className={styles.btnPrimary}>
                <Calendar size={18} />
                Réserver Maintenant
              </Link>
              <button className={styles.btnSecondary}>
                <Phone size={18} />
                Nous Appeler
              </button>
            </div>
          </div>
          
          <div className={styles.visual}>
            <div className={styles.circle} />
            <div className={styles.circleSmall} />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
