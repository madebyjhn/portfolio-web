import image1 from "/app/assets/image.png";
import image2 from "/app/assets/image copy.png";
import image3 from "/app/assets/image copy 2.png";
import image4 from "/app/assets/image copy 3.png";
import image5 from "/app/assets/image copy 4.png";
import image6 from "/app/assets/image copy 5.png";

export const projects = [
  {
    id: "studio-lumiere",
    name: "Luna Studio",
    description: "Site vitrine moderne pour un studio photo professionnel",
    image: image1,
    tech: ["Next.js", "Tailwind CSS", "Framer Motion"],
    category: "Site Vitrine",
    fullDescription:
      "Site web élégant et moderne créé pour un studio photo professionnel. Mise en valeur du portfolio avec une galerie interactive et un système de prise de rendez-vous.",
    features: [
      "Galerie photo interactive avec lightbox",
      "Formulaire de contact et prise de rendez-vous",
      "Optimisation des images pour un chargement rapide",
      "Design responsive adapté à tous les écrans",
      "Animations fluides et transitions",
    ],
    screenshots: [image2, image3],
  },
  {
    id: "novatech-landing",
    name: "NovaTech",
    description:
      "Landing page moderne et dynamique pour une startup tech innovante",
    image: image4,
    tech: ["Next.js", "Tailwind CSS", "Framer Motion"],
    category: "Landing Page",
    fullDescription:
      "Landing page premium et ultra-moderne développée pour NovaTech, une startup technologique fictive. Le site intègre un design minimaliste avec touches de neumorphisme, animations fluides, et sections axées conversion. Le tout optimisé pour la performance, le SEO et la responsivité.",

    features: [
      "Hero section immersive avec gradient text et animations",
      "4 statistiques clés affichées avec mise en page moderne",
      "Cartes de fonctionnalités en neumorphisme",
      "Section avantages 'Why NovaTech' en layout deux colonnes",
      "Illustrations et métriques visuelles intégrées",
      "Section témoignages avec notes 5 étoiles",
      "Bannière CTA dynamique avec boutons accentués",
      "Navigation fixe avec menu mobile",
      "Animations scroll-triggered (fade-in, slide, stagger)",
      "Code modulaire avec App Router (Next.js 13)",
    ],

    screenshots: [image5, image6],
  },
];

export const services = [
  {
    title: "Création de site vitrine",
    description:
      "Site web sur mesure pour présenter votre activité et attirer de nouveaux clients.",
    icon: "Layout",
  },
  {
    title: "Refonte complète",
    description:
      "Modernisation de votre site existant avec les dernières technologies web.",
    icon: "RefreshCw",
  },
  {
    title: "Maintenance & mises à jour",
    description:
      "Suivi régulier et corrections pour garantir le bon fonctionnement de votre site.",
    icon: "Settings",
  },
];

export const skills = [
  { name: "HTML/CSS", level: 90 },
  { name: "JavaScript/TypeScript", level: 85 },
  { name: "React/Next.js", level: 80 },
  { name: "Tailwind CSS", level: 85 },
  { name: "Responsive Design", level: 90 },
  { name: "SEO & Performance", level: 75 },
];

export const techStack = [
  {
    name: "Next.js",
    color: "bg-gray-900 dark:bg-white dark:text-gray-900 text-white",
  },
  { name: "Tailwind", color: "bg-cyan-500 text-white" },
  {
    name: "Vercel",
    color: "bg-black dark:bg-white dark:text-black text-white",
  },
];
