const fs = require('fs');

const seoMeta = {
  'implants-dentaires': {
    title: "Meilleur Dentiste à Ariana | Cabinet Dentaire Dr Ferjani Amir | Implants Dentaires | près de chez vous",
    description: "Découvrez nos solutions d'implants dentaires de haute qualité à Ariana pour restaurer votre sourire de manière durable et naturelle avec le Dr Ferjani Amir."
  },
  'dentisterie-generale': {
    title: "Meilleur Dentiste à Ariana | Cabinet Dentaire Dr Ferjani Amir | Dentisterie Générale | près de chez vous",
    description: "Soins dentaires complets à Ariana : bilan, détartrage et traitements conservateurs. Le Cabinet du Dr Ferjani Amir assure la santé bucco-dentaire de votre famille."
  },
  'dentisterie-esthetique': {
    title: "Meilleur Dentiste à Ariana | Cabinet Dentaire Dr Ferjani Amir | Dentisterie Esthétique | près de chez vous",
    description: "Sublimez votre sourire à Ariana. Blanchiment, facettes et relooking dentaire avec l'expertise du Dr Ferjani Amir pour un résultat éclatant."
  },
  'orthodontie': {
    title: "Meilleur Dentiste à Ariana | Cabinet Dentaire Dr Ferjani Amir | Orthodontie | près de chez vous",
    description: "Alignez vos dents avec les dernières technologies d'orthodontie à Ariana. Invisalign et bagues traditionnelles au Cabinet du Dr Ferjani Amir."
  },
  'soins-pediatriques': {
    title: "Meilleur Dentiste à Ariana | Cabinet Dentaire Dr Ferjani Amir | Soins Pédiatriques | près de chez vous",
    description: "Des soins dentaires doux et adaptés pour vos enfants à Ariana. Le Dr Ferjani Amir crée une expérience rassurante pour les plus petits."
  },
  'urgences-dentaires': {
    title: "Meilleur Dentiste à Ariana | Cabinet Dentaire Dr Ferjani Amir | Urgences Dentaires | près de chez vous",
    description: "Douleur aiguë ou dent cassée ? Urgences dentaires à Ariana. Le Dr Ferjani Amir vous reçoit rapidement pour soulager vos douleurs."
  },
  'chirurgie-orale': {
    title: "Meilleur Dentiste à Ariana | Cabinet Dentaire Dr Ferjani Amir | Chirurgie Orale | près de chez vous",
    description: "Expertise en chirurgie orale à Ariana : extractions complexes, dents de sagesse et soins parodontaux réalisés avec précision par le Dr Ferjani Amir."
  }
};

const services = [
  {
    id: 'implants',
    slug: 'implants-dentaires',
    title: 'Implants Dentaires',
    description: 'Des solutions permanentes et d\'apparence naturelle pour remplacer les dents manquantes et restaurer votre sourire.',
    subServices: [
      { title: 'Implant unitaire', description: 'Remplacement d\'une seule dent avec un implant et une couronne.' },
      { title: 'Implants multiples', description: 'Solutions pour plusieurs dents manquantes côte à côte.' },
      { title: 'Prothèse implanto-portée', description: 'Prothèses fixes ou amovibles stabilisées par des implants.' },
      { title: 'Greffe osseuse', description: 'Procédure pour renforcer l\'os de la mâchoire avant l\'implantation.' },
      { title: 'Implants à charge immédiate', description: 'Pose de la prothèse le jour même de l\'intervention.' },
      { title: 'All-on-4 / All-on-6', description: 'Restauration complète de l\'arcade sur 4 ou 6 implants.' }
    ]
  },
  {
    id: 'generale',
    slug: 'dentisterie-generale',
    title: 'Dentisterie Générale',
    description: 'Examens de routine, détartrages et soins préventifs pour tous les âges.',
    subServices: [
      { title: 'Consultation et bilan dentaire', description: 'Examen complet de votre santé bucco-dentaire.' },
      { title: 'Détartrage et polissage', description: 'Nettoyage professionnel pour éliminer tartre et taches.' },
      { title: 'Soins des caries', description: 'Traitements conservateurs pour restaurer les dents abîmées.' },
      { title: 'Couronnes dentaires', description: 'Protections sur mesure pour les dents fragilisées.' },
      { title: 'Bridges dentaires', description: 'Remplacement de dents manquantes par un pont fixe.' },
      { title: 'Traitement des gencives', description: 'Soins parodontaux pour des gencives saines.' }
    ]
  },
  {
    id: 'esthetique',
    slug: 'dentisterie-esthetique',
    title: 'Dentisterie Esthétique',
    description: 'Blanchiment, facettes et relooking du sourire pour booster votre confiance.',
    subServices: [
      { title: 'Blanchiment dentaire', description: 'Éclaircissement professionnel pour un sourire éclatant.' },
      { title: 'Facettes en porcelaine', description: 'Fines pellicules pour corriger forme, couleur et alignement.' },
      { title: 'Composite de stratification', description: 'Restauration esthétique directe en résine.' },
      { title: 'Contourage dentaire', description: 'Remodelage léger pour harmoniser le sourire.' },
      { title: 'Sourire Hollywood', description: 'Conception globale pour un sourire parfait.' },
      { title: 'Restauration de l\'émail', description: 'Traitements pour renforcer et protéger l\'émail.' }
    ]
  },
  {
    id: 'orthodontie',
    slug: 'orthodontie',
    title: 'Orthodontie',
    description: 'Solutions modernes comme Invisalign et bagues traditionnelles pour un alignement parfait.',
    subServices: [
      { title: 'Bagues métalliques', description: 'Appareillage traditionnel robuste et efficace.' },
      { title: 'Bagues céramiques', description: 'Option discrète avec des attaches de la couleur des dents.' },
      { title: 'Aligneurs transparents (Invisalign)', description: 'Correction invisible et amovible.' },
      { title: 'Orthodontie linguale', description: 'Appareillage fixé sur la face interne des dents.' },
      { title: 'Contention post-traitement', description: 'Dispositifs pour stabiliser l\'alignement final.' },
      { title: 'Orthodontie interceptive (enfants)', description: 'Traitements précoces pour guider la croissance.' }
    ]
  },
  {
    id: 'pediatrique',
    slug: 'soins-pediatriques',
    title: 'Soins Pédiatriques',
    description: 'Expériences dentaires douces et amusantes pour vos tout-petits.',
    subServices: [
      { title: 'Première consultation bébé', description: 'Approche douce pour familiariser l\'enfant au cabinet.' },
      { title: 'Soins des dents de lait', description: 'Traitements adaptés aux besoins des plus jeunes.' },
      { title: 'Scellements de fissures', description: 'Protection préventive contre les caries.' },
      { title: 'Fluoration préventive', description: 'Application de fluor pour renforcer les dents.' },
      { title: 'Éducation bucco-dentaire', description: 'Apprendre les bons gestes de brossage en s\'amusant.' },
      { title: 'Orthodontie pédiatrique', description: 'Suivi de la croissance et de l\'alignement.' }
    ]
  },
  {
    id: 'urgences',
    slug: 'urgences-dentaires',
    title: 'Urgences Dentaires',
    description: 'Soins rapides et fiables pour les problèmes dentaires inattendus.',
    subServices: [
      { title: 'Douleur dentaire aiguë', description: 'Soulagement immédiat des rages de dents.' },
      { title: 'Dent cassée ou fracturée', description: 'Réparation d\'urgence pour sauver la dent.' },
      { title: 'Dent avulsée (arrachée)', description: 'Réimplantation rapide en cas d\'accident.' },
      { title: 'Abcès dentaire', description: 'Traitement de l\'infection et drainage.' },
      { title: 'Couronne ou bridge décollé', description: 'Recollement ou remplacement rapide.' },
      { title: 'Saignement des gencives', description: 'Diagnostic et arrêt des saignements importants.' }
    ]
  },
  {
    id: 'chirurgie',
    slug: 'chirurgie-orale',
    title: 'Chirurgie Orale',
    description: 'Procédures chirurgicales sûres et confortables par nos experts.',
    subServices: [
      { title: 'Extraction dentaire simple', description: 'Retrait d\'une dent endommagée ou gênante.' },
      { title: 'Extraction des dents de sagesse', description: 'Procédure courante pour libérer de l\'espace.' },
      { title: 'Chirurgie des kystes', description: 'Retrait de lésions bénignes des mâchoires.' },
      { title: 'Gingivectomie', description: 'Remodelage chirurgical des gencives.' },
      { title: 'Frenectomie', description: 'Libération du frein labial ou lingual.' },
      { title: 'Chirurgie pré-implantaire', description: 'Préparation des tissus avant la pose d\'implants.' }
    ]
  }
];

const escapeSql = (str) => {
  if (!str) return 'NULL';
  return "'" + str.replace(/'/g, "''") + "'";
};

const makeSlug = (str) => {
  return str.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
};

let sql = `DO $$
DECLARE
`;

services.forEach((s, idx) => {
  sql += `  srv_${idx} uuid;\n`;
});

sql += `BEGIN\n`;

services.forEach((s, idx) => {
  const meta = seoMeta[s.slug] || { title: '', description: '' };
  
  sql += `
  INSERT INTO public.services (slug, title, description, seo_title, seo_description, "order")
  VALUES (${escapeSql(s.slug)}, ${escapeSql(s.title)}, ${escapeSql(s.description)}, ${escapeSql(meta.title)}, ${escapeSql(meta.description)}, ${idx + 1})
  RETURNING id INTO srv_${idx};
  `;
  
  s.subServices.forEach((sub, subIdx) => {
    sql += `
  INSERT INTO public.sub_services (service_id, slug, title, description, "order")
  VALUES (srv_${idx}, ${escapeSql(makeSlug(sub.title))}, ${escapeSql(sub.title)}, ${escapeSql(sub.description)}, ${subIdx + 1});
    `;
  });
});

sql += `END $$;`;

fs.writeFileSync('migration.sql', sql);
