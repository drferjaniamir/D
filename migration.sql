DO $$
DECLARE
  srv_0 uuid;
  srv_1 uuid;
  srv_2 uuid;
  srv_3 uuid;
  srv_4 uuid;
  srv_5 uuid;
  srv_6 uuid;
BEGIN

  INSERT INTO public.services (slug, title, description, seo_title, seo_description, "order")
  VALUES ('implants-dentaires', 'Implants Dentaires', 'Des solutions permanentes et d''apparence naturelle pour remplacer les dents manquantes et restaurer votre sourire.', 'Meilleur Dentiste à Ariana | Cabinet Dentaire Dr Ferjani Amir | Implants Dentaires | près de chez vous', 'Découvrez nos solutions d''implants dentaires de haute qualité à Ariana pour restaurer votre sourire de manière durable et naturelle avec le Dr Ferjani Amir.', 1)
  RETURNING id INTO srv_0;
  
  INSERT INTO public.sub_services (service_id, slug, title, description, "order")
  VALUES (srv_0, 'implant-unitaire', 'Implant unitaire', 'Remplacement d''une seule dent avec un implant et une couronne.', 1);
    
  INSERT INTO public.sub_services (service_id, slug, title, description, "order")
  VALUES (srv_0, 'implants-multiples', 'Implants multiples', 'Solutions pour plusieurs dents manquantes côte à côte.', 2);
    
  INSERT INTO public.sub_services (service_id, slug, title, description, "order")
  VALUES (srv_0, 'prothese-implanto-portee', 'Prothèse implanto-portée', 'Prothèses fixes ou amovibles stabilisées par des implants.', 3);
    
  INSERT INTO public.sub_services (service_id, slug, title, description, "order")
  VALUES (srv_0, 'greffe-osseuse', 'Greffe osseuse', 'Procédure pour renforcer l''os de la mâchoire avant l''implantation.', 4);
    
  INSERT INTO public.sub_services (service_id, slug, title, description, "order")
  VALUES (srv_0, 'implants-a-charge-immediate', 'Implants à charge immédiate', 'Pose de la prothèse le jour même de l''intervention.', 5);
    
  INSERT INTO public.sub_services (service_id, slug, title, description, "order")
  VALUES (srv_0, 'all-on-4-all-on-6', 'All-on-4 / All-on-6', 'Restauration complète de l''arcade sur 4 ou 6 implants.', 6);
    
  INSERT INTO public.services (slug, title, description, seo_title, seo_description, "order")
  VALUES ('dentisterie-generale', 'Dentisterie Générale', 'Examens de routine, détartrages et soins préventifs pour tous les âges.', 'Meilleur Dentiste à Ariana | Cabinet Dentaire Dr Ferjani Amir | Dentisterie Générale | près de chez vous', 'Soins dentaires complets à Ariana : bilan, détartrage et traitements conservateurs. Le Cabinet du Dr Ferjani Amir assure la santé bucco-dentaire de votre famille.', 2)
  RETURNING id INTO srv_1;
  
  INSERT INTO public.sub_services (service_id, slug, title, description, "order")
  VALUES (srv_1, 'consultation-et-bilan-dentaire', 'Consultation et bilan dentaire', 'Examen complet de votre santé bucco-dentaire.', 1);
    
  INSERT INTO public.sub_services (service_id, slug, title, description, "order")
  VALUES (srv_1, 'detartrage-et-polissage', 'Détartrage et polissage', 'Nettoyage professionnel pour éliminer tartre et taches.', 2);
    
  INSERT INTO public.sub_services (service_id, slug, title, description, "order")
  VALUES (srv_1, 'soins-des-caries', 'Soins des caries', 'Traitements conservateurs pour restaurer les dents abîmées.', 3);
    
  INSERT INTO public.sub_services (service_id, slug, title, description, "order")
  VALUES (srv_1, 'couronnes-dentaires', 'Couronnes dentaires', 'Protections sur mesure pour les dents fragilisées.', 4);
    
  INSERT INTO public.sub_services (service_id, slug, title, description, "order")
  VALUES (srv_1, 'bridges-dentaires', 'Bridges dentaires', 'Remplacement de dents manquantes par un pont fixe.', 5);
    
  INSERT INTO public.sub_services (service_id, slug, title, description, "order")
  VALUES (srv_1, 'traitement-des-gencives', 'Traitement des gencives', 'Soins parodontaux pour des gencives saines.', 6);
    
  INSERT INTO public.services (slug, title, description, seo_title, seo_description, "order")
  VALUES ('dentisterie-esthetique', 'Dentisterie Esthétique', 'Blanchiment, facettes et relooking du sourire pour booster votre confiance.', 'Meilleur Dentiste à Ariana | Cabinet Dentaire Dr Ferjani Amir | Dentisterie Esthétique | près de chez vous', 'Sublimez votre sourire à Ariana. Blanchiment, facettes et relooking dentaire avec l''expertise du Dr Ferjani Amir pour un résultat éclatant.', 3)
  RETURNING id INTO srv_2;
  
  INSERT INTO public.sub_services (service_id, slug, title, description, "order")
  VALUES (srv_2, 'blanchiment-dentaire', 'Blanchiment dentaire', 'Éclaircissement professionnel pour un sourire éclatant.', 1);
    
  INSERT INTO public.sub_services (service_id, slug, title, description, "order")
  VALUES (srv_2, 'facettes-en-porcelaine', 'Facettes en porcelaine', 'Fines pellicules pour corriger forme, couleur et alignement.', 2);
    
  INSERT INTO public.sub_services (service_id, slug, title, description, "order")
  VALUES (srv_2, 'composite-de-stratification', 'Composite de stratification', 'Restauration esthétique directe en résine.', 3);
    
  INSERT INTO public.sub_services (service_id, slug, title, description, "order")
  VALUES (srv_2, 'contourage-dentaire', 'Contourage dentaire', 'Remodelage léger pour harmoniser le sourire.', 4);
    
  INSERT INTO public.sub_services (service_id, slug, title, description, "order")
  VALUES (srv_2, 'sourire-hollywood', 'Sourire Hollywood', 'Conception globale pour un sourire parfait.', 5);
    
  INSERT INTO public.sub_services (service_id, slug, title, description, "order")
  VALUES (srv_2, 'restauration-de-l-email', 'Restauration de l''émail', 'Traitements pour renforcer et protéger l''émail.', 6);
    
  INSERT INTO public.services (slug, title, description, seo_title, seo_description, "order")
  VALUES ('orthodontie', 'Orthodontie', 'Solutions modernes comme Invisalign et bagues traditionnelles pour un alignement parfait.', 'Meilleur Dentiste à Ariana | Cabinet Dentaire Dr Ferjani Amir | Orthodontie | près de chez vous', 'Alignez vos dents avec les dernières technologies d''orthodontie à Ariana. Invisalign et bagues traditionnelles au Cabinet du Dr Ferjani Amir.', 4)
  RETURNING id INTO srv_3;
  
  INSERT INTO public.sub_services (service_id, slug, title, description, "order")
  VALUES (srv_3, 'bagues-metalliques', 'Bagues métalliques', 'Appareillage traditionnel robuste et efficace.', 1);
    
  INSERT INTO public.sub_services (service_id, slug, title, description, "order")
  VALUES (srv_3, 'bagues-ceramiques', 'Bagues céramiques', 'Option discrète avec des attaches de la couleur des dents.', 2);
    
  INSERT INTO public.sub_services (service_id, slug, title, description, "order")
  VALUES (srv_3, 'aligneurs-transparents-invisalign', 'Aligneurs transparents (Invisalign)', 'Correction invisible et amovible.', 3);
    
  INSERT INTO public.sub_services (service_id, slug, title, description, "order")
  VALUES (srv_3, 'orthodontie-linguale', 'Orthodontie linguale', 'Appareillage fixé sur la face interne des dents.', 4);
    
  INSERT INTO public.sub_services (service_id, slug, title, description, "order")
  VALUES (srv_3, 'contention-post-traitement', 'Contention post-traitement', 'Dispositifs pour stabiliser l''alignement final.', 5);
    
  INSERT INTO public.sub_services (service_id, slug, title, description, "order")
  VALUES (srv_3, 'orthodontie-interceptive-enfants', 'Orthodontie interceptive (enfants)', 'Traitements précoces pour guider la croissance.', 6);
    
  INSERT INTO public.services (slug, title, description, seo_title, seo_description, "order")
  VALUES ('soins-pediatriques', 'Soins Pédiatriques', 'Expériences dentaires douces et amusantes pour vos tout-petits.', 'Meilleur Dentiste à Ariana | Cabinet Dentaire Dr Ferjani Amir | Soins Pédiatriques | près de chez vous', 'Des soins dentaires doux et adaptés pour vos enfants à Ariana. Le Dr Ferjani Amir crée une expérience rassurante pour les plus petits.', 5)
  RETURNING id INTO srv_4;
  
  INSERT INTO public.sub_services (service_id, slug, title, description, "order")
  VALUES (srv_4, 'premiere-consultation-bebe', 'Première consultation bébé', 'Approche douce pour familiariser l''enfant au cabinet.', 1);
    
  INSERT INTO public.sub_services (service_id, slug, title, description, "order")
  VALUES (srv_4, 'soins-des-dents-de-lait', 'Soins des dents de lait', 'Traitements adaptés aux besoins des plus jeunes.', 2);
    
  INSERT INTO public.sub_services (service_id, slug, title, description, "order")
  VALUES (srv_4, 'scellements-de-fissures', 'Scellements de fissures', 'Protection préventive contre les caries.', 3);
    
  INSERT INTO public.sub_services (service_id, slug, title, description, "order")
  VALUES (srv_4, 'fluoration-preventive', 'Fluoration préventive', 'Application de fluor pour renforcer les dents.', 4);
    
  INSERT INTO public.sub_services (service_id, slug, title, description, "order")
  VALUES (srv_4, 'education-bucco-dentaire', 'Éducation bucco-dentaire', 'Apprendre les bons gestes de brossage en s''amusant.', 5);
    
  INSERT INTO public.sub_services (service_id, slug, title, description, "order")
  VALUES (srv_4, 'orthodontie-pediatrique', 'Orthodontie pédiatrique', 'Suivi de la croissance et de l''alignement.', 6);
    
  INSERT INTO public.services (slug, title, description, seo_title, seo_description, "order")
  VALUES ('urgences-dentaires', 'Urgences Dentaires', 'Soins rapides et fiables pour les problèmes dentaires inattendus.', 'Meilleur Dentiste à Ariana | Cabinet Dentaire Dr Ferjani Amir | Urgences Dentaires | près de chez vous', 'Douleur aiguë ou dent cassée ? Urgences dentaires à Ariana. Le Dr Ferjani Amir vous reçoit rapidement pour soulager vos douleurs.', 6)
  RETURNING id INTO srv_5;
  
  INSERT INTO public.sub_services (service_id, slug, title, description, "order")
  VALUES (srv_5, 'douleur-dentaire-aigue', 'Douleur dentaire aiguë', 'Soulagement immédiat des rages de dents.', 1);
    
  INSERT INTO public.sub_services (service_id, slug, title, description, "order")
  VALUES (srv_5, 'dent-cassee-ou-fracturee', 'Dent cassée ou fracturée', 'Réparation d''urgence pour sauver la dent.', 2);
    
  INSERT INTO public.sub_services (service_id, slug, title, description, "order")
  VALUES (srv_5, 'dent-avulsee-arrachee', 'Dent avulsée (arrachée)', 'Réimplantation rapide en cas d''accident.', 3);
    
  INSERT INTO public.sub_services (service_id, slug, title, description, "order")
  VALUES (srv_5, 'abces-dentaire', 'Abcès dentaire', 'Traitement de l''infection et drainage.', 4);
    
  INSERT INTO public.sub_services (service_id, slug, title, description, "order")
  VALUES (srv_5, 'couronne-ou-bridge-decolle', 'Couronne ou bridge décollé', 'Recollement ou remplacement rapide.', 5);
    
  INSERT INTO public.sub_services (service_id, slug, title, description, "order")
  VALUES (srv_5, 'saignement-des-gencives', 'Saignement des gencives', 'Diagnostic et arrêt des saignements importants.', 6);
    
  INSERT INTO public.services (slug, title, description, seo_title, seo_description, "order")
  VALUES ('chirurgie-orale', 'Chirurgie Orale', 'Procédures chirurgicales sûres et confortables par nos experts.', 'Meilleur Dentiste à Ariana | Cabinet Dentaire Dr Ferjani Amir | Chirurgie Orale | près de chez vous', 'Expertise en chirurgie orale à Ariana : extractions complexes, dents de sagesse et soins parodontaux réalisés avec précision par le Dr Ferjani Amir.', 7)
  RETURNING id INTO srv_6;
  
  INSERT INTO public.sub_services (service_id, slug, title, description, "order")
  VALUES (srv_6, 'extraction-dentaire-simple', 'Extraction dentaire simple', 'Retrait d''une dent endommagée ou gênante.', 1);
    
  INSERT INTO public.sub_services (service_id, slug, title, description, "order")
  VALUES (srv_6, 'extraction-des-dents-de-sagesse', 'Extraction des dents de sagesse', 'Procédure courante pour libérer de l''espace.', 2);
    
  INSERT INTO public.sub_services (service_id, slug, title, description, "order")
  VALUES (srv_6, 'chirurgie-des-kystes', 'Chirurgie des kystes', 'Retrait de lésions bénignes des mâchoires.', 3);
    
  INSERT INTO public.sub_services (service_id, slug, title, description, "order")
  VALUES (srv_6, 'gingivectomie', 'Gingivectomie', 'Remodelage chirurgical des gencives.', 4);
    
  INSERT INTO public.sub_services (service_id, slug, title, description, "order")
  VALUES (srv_6, 'frenectomie', 'Frenectomie', 'Libération du frein labial ou lingual.', 5);
    
  INSERT INTO public.sub_services (service_id, slug, title, description, "order")
  VALUES (srv_6, 'chirurgie-pre-implantaire', 'Chirurgie pré-implantaire', 'Préparation des tissus avant la pose d''implants.', 6);
    END $$;