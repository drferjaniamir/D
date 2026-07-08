import React from 'react';
import styles from './Footer.module.css';
import { Send, Instagram, Facebook, Twitter, MapPin, Phone } from 'lucide-react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.brand}>
            <div className={styles.logo}>
              <img
                src="/logo.webp"
                alt="Cabinet dentaire Dr Ferjani Amir"
                style={{ height: '36px', width: 'auto', display: 'block' }}
              />
            </div>
            <p className={styles.brandDesc}>
              Redéfinir les soins dentaires grâce à la technologie et à des expériences patient personnalisées. Dévoués à votre sourire depuis 2012.
            </p>
            <div className={styles.socials}>
              <a href="#"><Instagram size={20} /></a>
              <a href="#"><Facebook size={20} /></a>
              <a href="#"><Twitter size={20} /></a>
            </div>
          </div>

          <div className={styles.links}>
            <h3>Expertise</h3>
            <ul>
              <li><Link href="/services/dentisterie-esthetique">Esthétique</Link></li>
              <li><Link href="/services/dentisterie-generale">Générale</Link></li>
              <li><Link href="/services/chirurgie-orale">Chirurgicale</Link></li>
              <li><Link href="/services/soins-pediatriques">Pédiatrique</Link></li>
            </ul>
          </div>

          <div className={styles.links}>
            <h3>Entreprise</h3>
            <ul>
              <li><Link href="/#about">À Propos</Link></li>
              <li><a href="#">Journal</a></li>
              <li><a href="#">Carrières</a></li>
            </ul>
          </div>

          <div className={styles.newsletter}>
            <h3>Rejoignez notre Liste Bien-être</h3>
            <p>Recevez des conseils dentaires et des actualités sur la santé bucco-dentaire directement dans votre boîte de réception.</p>
            <form className={styles.form}>
              <input type="email" placeholder="email@exemple.com" />
              <button type="submit">
                <Send size={18} />
              </button>
            </form>
          </div>
        </div>

        <div className={styles.bottom}>
          <div className={styles.info}>
            <span>Cabinet dentaire Dr Ferjani Amir</span>
            <span><MapPin size={16} /> 14 Rue Hamza Ibn abdelmotaleb, Ariana 2083, Tunisie</span>
            <span><Phone size={16} /> +216 26 790 175</span>
          </div>
          <div className={styles.copyright}>
            © {new Date().getFullYear()} Cabinet dentaire Dr Ferjani Amir. Tous droits réservés.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
