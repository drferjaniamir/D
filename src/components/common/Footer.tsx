import React from 'react';
import styles from './Footer.module.css';
import { Send, Instagram, Facebook, Twitter, Linkedin, MapPin, Phone } from 'lucide-react';
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
              <a href="https://www.linkedin.com/company/cabinet-dentaire-dr-ferjani-amir" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><Linkedin size={20} /></a>
              <a href="https://www.pinterest.com/drferjaniamir/" target="_blank" rel="noopener noreferrer" aria-label="Pinterest">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 0 1 .083.345c-.091.378-.293 1.189-.332 1.355-.053.218-.173.265-.4.159-1.492-.694-2.424-2.875-2.424-4.627 0-3.769 2.737-7.229 7.892-7.229 4.144 0 7.365 2.953 7.365 6.899 0 4.117-2.595 7.431-6.199 7.431-1.211 0-2.348-.63-2.738-1.374l-.746 2.844c-.27 1.031-1.002 2.324-1.492 3.116C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z" />
                </svg>
              </a>
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
