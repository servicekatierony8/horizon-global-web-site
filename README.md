# HORIZON GLOBAL SARL — Site vitrine

Site vitrine de démonstration pour **HORIZON GLOBAL SARL**, entreprise multiservices basée à Songon (Abidjan, Côte d'Ivoire) : construction et travaux publics, études de bâtiment, rénovation, génie civil, immobilier et gestion foncière, matériaux et mobilier, automobile, transport et services financiers de proximité.

Slogans officiels : « Bâtissons ensemble votre avenir ! » — « Votre satisfaction, notre priorité ! »

## Structure du site

| Fichier | Contenu |
|---|---|
| `index.html` | Accueil immersif : hero plein écran, chiffres clés, les 9 pôles, valeurs et clientèles, bande d'appel |
| `poles.html` | Les 9 pôles d'activité en liste éditoriale numérotée 01–09 |
| `construction.html` | Focus construction : bâtiment/TP, études, rénovation, génie civil, méthode en 4 étapes |
| `immobilier-services.html` | Immobilier & foncier, matériaux et mobilier, automobile, transport, services financiers |
| `entreprise.html` | Présentation, valeurs, clientèles et informations légales (CEPICI) |
| `contact.html` | Coordonnées complètes, contacts secondaires, réseaux sociaux et formulaire de devis WhatsApp |
| `assets/css/style.css` | Design moderne : noir / blanc cassé / orange chantier, typographies Anton + Archivo |
| `assets/js/main.js` | Menu mobile et construction du lien WhatsApp du formulaire |
| `assets/images/` | Logo officiel et visuels publiés par l'entreprise (tous hébergés en local) |

## Fonctionnement

- Site 100 % statique (HTML/CSS/JS), aucune dépendance serveur.
- Le formulaire « Demande de devis » ouvre WhatsApp avec un message pré-rempli vers le numéro de l'entreprise : **(+225) 05 64 32 37 11**.
- Les images sont chargées en différé (`loading="lazy"`) pour la rapidité sur mobile.
- Les liens sociaux affichent les logos officiels des marques (SVG) : Facebook, TikTok, Instagram, LinkedIn et WhatsApp.

## Déploiement sur Cloudflare (envoi direct)

1. Cloudflare → **Workers & Pages** → **Create** → **Upload assets** (envoi direct de fichiers, comme pour les autres sites).
2. Déposer le **dossier complet** `site-moderne/` (ou le zip `horizon-global-site-moderne.zip`, dont les fichiers sont à la racine).
3. Le fichier `index.html` doit se trouver à la racine du déploiement.
4. Valider : le site est publié sur une adresse `*.workers.dev` (ou `*.pages.dev`).

Alternative : héberger le contenu du dossier chez n'importe quel hébergeur de sites statiques.

## Informations publiées

Toutes les informations proviennent des sources publiques vérifiées de l'entreprise (fiche Go Africa Online, avis de constitution CEPICI) : coordonnées de Songon, 9 pôles d'activité, informations légales (SARL créée en 2025, capital 1 000 000 F CFA, RCCM CI-ABJ-03-2025-B13-10843). Les contacts dits « secondaires » sont ceux publiés sur la fiche « Immobilier » de l'entreprise. Aucun horaire ni email n'est affiché : ils ne sont pas publiés par l'entreprise.

> Aperçu de démonstration — en attente de validation par l'entreprise.
