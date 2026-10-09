export interface Credential {
  label: string;
}

export interface ExpertiseArea {
  title: string;
  description: string;
}

export interface EquipmentItem {
  name: string;
  description: string;
}

export interface GalleryImage {
  src: string;
  alt: string;
}

export interface Address {
  label: string;
  street: string;
  phone: string;
  hours: string;
  mapUrl: string;
}

export interface SocialLink {
  label: string;
  url: string;
}

export const doctor = {
  fullName: "Dr Hela Farjallah Gharbi",

  specialties: "ORL · Chirurgie de la Face et du Cou · Allergologue",

  seo: {
    title:
      "Dr Hela Farjallah Gharbi | ORL – Chirurgie de la Face et du Cou – Allergologue",

    description:
      "Dr Hela Farjallah Gharbi, spécialiste ORL, chirurgie de la face et du cou et allergologue. Découvrez le cabinet, les domaines d'expertise et les coordonnées.",

    keywords: [
      "ORL",
      "chirurgie de la face et du cou",
      "allergologue",
      "Dr Hela Farjallah Gharbi",
      "Avenue Mongi Slim",
      "Tunis",
    ],
  },

  hero: {
    kicker: "ORL · Chirurgie de la Face et du Cou · Allergologue",

    headline: "Un soin attentif, une expertise reconnue.",

    lede:
      "Le Dr Hela Farjallah Gharbi vous accueille au sein d'un cabinet pensé pour allier rigueur médicale et sérénité.",

    primaryCta: {
      label: "Découvrir le cabinet",
      href: "#cabinet",
    },

    secondaryCta: {
      label: "Nous contacter",
      href: "#contact",
    },

    photoAlt: "Portrait professionnel du Dr Hela Farjallah Gharbi",
  },

  biography: {
    intro:
      "Spécialiste en oto-rhino-laryngologie, chirurgie de la face et du cou et allergologie, le Dr Hela Farjallah Gharbi accompagne ses patients avec une approche à la fois précise et humaine, à chaque étape de leur prise en charge.",

    fullText:
      "",

    photoAlt: "Dr Hela Farjallah Gharbi",
  },

  credentials: [
    {
      label:
        "Diplômes et formations — Faculté de médecine de Tunis",
    },

    {
      label:
        "Expérience professionnelle — Hôpital Habib Thameur, Institut Salah Azaiez, Hôpital Militaire de Tunis, Centre Hospitalo-Universitaire d'Orléans, France",
    },
  ] satisfies Credential[],

  expertise: [
    {
      title: "ORL",

      description:
        "Diagnostic et traitement des pathologies de l'oreille, du nez et de la gorge, avec une prise en charge adaptée à chaque patient.",
    },

    {
      title: "Chirurgie de la Face et du Cou",

      description:
        "Interventions spécialisées dans une démarche exigeante, conjuguant technicité chirurgicale et accompagnement personnalisé.",
    },

    {
      title: "Allergologie",

      description:
        "Identification et suivi des allergies respiratoires et ORL, pour un traitement durable et une meilleure qualité de vie.",
    },
  ] satisfies ExpertiseArea[],

  cabinet: {
    intro:
      "Un espace lumineux et apaisant, conçu pour accueillir chaque patient dans les meilleures conditions. Le cabinet associe confort, discrétion et équipements adaptés à une pratique médicale exigeante.",

    photos: [
      {
        src: "/images/cabinet-1.jpg",
        alt: "Salle d'attente du cabinet",
      },

      {
        src: "/images/cabinet-2.jpg",
        alt: "Salle de consultation",
      },

      {
        src: "/images/cabinet-3.jpg",
        alt: "Entrée du cabinet",
      },
    ] satisfies GalleryImage[],
  },

  equipment: {
    note: "",

    items: [
      {
        name: "Système de vidéonystagmographie",
        description: "",
      },

      {
        name: "Tympanomètre",
        description: "",
      },

      {
        name: "Nasofibroscope ORL",
        description: "",
      },
    ] satisfies EquipmentItem[],
  },

  gallery: [
    {
      src: "/images/gallery-1.jpg",
      alt: "Photographie du cabinet",
    },

    {
      src: "/images/gallery-2.jpg",
      alt: "Photographie du cabinet",
    },

    {
      src: "/images/gallery-3.jpg",
      alt: "Photographie du cabinet",
    },

    {
      src: "/images/gallery-4.jpg",
      alt: "Photographie du cabinet",
    },
  ] satisfies GalleryImage[],

  addresses: [
    {
      label: "Cabinet — Avenue Mongi Slim",

      street: "V763+XPC, Avenue Mongi Slim, Tunis, Tunisie",

      phone: "+216 93 066 757",

      hours:
        "Lundi – Vendredi : 08h00 – 18h00 · Samedi : 08h00 – 15h00",

      mapUrl:
        "https://www.google.com/maps/place/ORL+Dr+Hela+Farjallah+Gharbi/@36.8624322,10.2542658,17z",
    },
  ] satisfies Address[],

  contact: {
    phone: "+216 93 066 757",

    email: "dr.helafarjallah@gmail.com",

    socials: [] as SocialLink[],
  },

  footer: {
    copyright: `© ${new Date().getFullYear()} Dr Hela Farjallah Gharbi. Tous droits réservés.`,
  },
};

export type Doctor = typeof doctor;