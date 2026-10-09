# Dr Hela Farjallah Gharbi — Site vitrine

Site vitrine professionnel (Next.js + TypeScript + Tailwind CSS), construit à partir du
cahier des charges v1.1 et du prototype HTML fourni.

## Démarrage local

```bash
npm install
npm run dev
```

Ouvrir [http://localhost:3000](http://localhost:3000).

## Structure

```
src/
├── app/
│   ├── layout.tsx      # polices, métadonnées SEO
│   ├── page.tsx        # assemble toutes les sections
│   └── globals.css
├── components/         # une section = un composant
└── data/
    └── doctor.ts        # TOUT le contenu du site, y compris les placeholders
public/
├── images/              # déposer les photographies réelles ici
└── logo/                # déposer le logo ici
```

## Contenu à valider avant mise en production

Toutes les informations non confirmées sont centralisées dans **`src/data/doctor.ts`**
et marquées `[À CONFIRMER]` :

- Biographie complète, diplômes, formations, expérience, titres
- Adresses exactes, téléphones, horaires
- Email et réseaux sociaux
- Noms et fonctions des équipements
- Photographies (le hero, le portrait, le cabinet et la galerie utilisent des
  emplacements en dégradé de couleur en attendant les fichiers réels)

Pour intégrer une photographie réelle :
1. Déposer le fichier dans `public/images/`.
2. Remplacer le `div` en dégradé correspondant par un composant `next/image`
   pointant vers ce fichier (le chemin est déjà préparé dans `doctor.ts`).

## Formulaire de contact

Le formulaire de la section Contact fonctionne côté client mais n'est **pas** encore
relié à un service d'envoi d'email (aucun backend n'a été ajouté, conformément au
cahier des charges). Pour l'activer, prévoir par exemple :
- une Vercel Serverless Function / Route Handler faisant appel à un fournisseur
  d'emailing (Resend, Postmark, etc.), ou
- un service tiers de formulaire (Formspree, etc.).

## Déploiement (Vercel)

1. Pousser ce projet sur un dépôt GitHub.
2. Importer le dépôt dans Vercel.
3. Vercel détecte automatiquement Next.js — aucune configuration supplémentaire
   n'est nécessaire.
4. Une URL de prévisualisation est générée à chaque déploiement, à valider avec
   le médecin avant la mise en production définitive.
5. Une fois validé, associer un nom de domaine personnalisé depuis les
   paramètres du projet Vercel.

## Ce qui n'est volontairement pas inclus

Conformément au cahier des charges, ce projet ne contient :
- aucun compte patient ni dossier médical,
- aucun système de paiement,
- aucune prise de rendez-vous en ligne,
- aucune base de données ni authentification.

Il s'agit exclusivement d'un site vitrine.
