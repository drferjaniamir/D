import React from 'react';
import styles from './Services.module.css';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Stethoscope, MapPin } from 'lucide-react';

const Services = () => {
  return (
    <section id="services" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.label}>Notre Expertise</span>
          <h2 className={styles.title}>Services Dentaires <span className={styles.highlight}>Complets</span></h2>
          <p className={styles.subtitle}>De l'entretien de routine aux procédures avancées, nous couvrons tout ce dont vous avez besoin pour un sourire sain toute votre vie.</p>
        </div>
        <div className={styles.grid}>

          <motion.div
            className={styles.card}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className={styles.icon}><Stethoscope size={32} /></div>
            <h3 className={styles.serviceTitle}>Nos Services Dentaires</h3>
            <p className={styles.serviceDescription}>Implants, blanchiment, orthodontie, facettes, couronnes et plus — découvrez tous les soins proposés par le Dr Ferjani Amir.</p>
            <Link href="/services" className={styles.link}>
              Voir Tous les Services →
            </Link>
          </motion.div>

          <motion.div
            className={styles.card}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className={styles.icon}><MapPin size={32} /></div>
            <h3 className={styles.serviceTitle}>Zones Desservies</h3>
            <p className={styles.serviceDescription}>Nous accueillons les patients d'Ariana et des environs. Trouvez votre quartier et consultez sans vous déplacer loin.</p>
            <Link href="/areas" className={styles.link}>
              Voir les Zones →
            </Link>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Services;

