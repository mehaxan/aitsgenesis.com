export interface Product {
  name: string;
  short: string;
  tagline: string;
  description: string;
  href: string;
  iconBg: string;
  iconColor: string;
}

export interface NavigationItem {
  name: string;
  slug: string;
}

export const products: Product[] = [
  {
    name: "Silence",
    short: "SI",
    tagline: "AI-powered enterprise automation",
    description: "All-in-one AI solution to go paperless and fully automate any enterprise or SME.",
    href: "https://silence.aits.mehaxan.com",
    iconBg: "#EFF6FF",
    iconColor: "#2563EB",
  },
  {
    name: "Elma",
    short: "EL",
    tagline: "AI education management platform",
    description: "Complete AI-powered platform for educational institutes of any size.",
    href: "https://elma.aits.mehaxan.com",
    iconBg: "#F0FDF4",
    iconColor: "#16A34A",
  },
  {
    name: "Bonik",
    short: "BN",
    tagline: "AI business automation suite",
    description: "Intelligent all-in-one solution for comprehensive business process automation.",
    href: "https://bonik.aits.mehaxan.com",
    iconBg: "#FAF5FF",
    iconColor: "#9333EA",
  },
  {
    name: "Bonik Bazar",
    short: "BB",
    tagline: "Marketplace for Bonik subscribers",
    description: "A dedicated marketplace for Bonik subscribers to sell and promote goods.",
    href: "https://bonik-bazaar.aits.mehaxan.com",
    iconBg: "#FFF7ED",
    iconColor: "#EA580C",
  },
  {
    name: "Jomidar",
    short: "JM",
    tagline: "Property rental management",
    description: "Complete solution for homeowners managing their rental properties.",
    href: "https://jomidar.aits.mehaxan.com",
    iconBg: "#F0FDFA",
    iconColor: "#0D9488",
  },
  {
    name: "Doctoraloy",
    short: "DA",
    tagline: "All-in-one solution for doctors",
    description: "Comprehensive practice management solution designed for medical professionals.",
    href: "https://doctoraloy.aits.mehaxan.com",
    iconBg: "#FFF1F2",
    iconColor: "#E11D48",
  },
];

export const services: NavigationItem[] = [
  { name: "Web Development", slug: "web-development" },
  { name: "Mobile App Development", slug: "mobile-app-development" },
  { name: "UI/UX Design", slug: "ui-ux-design" },
  { name: "Dedicated Team", slug: "dedicated-team" },
  { name: "Software Development", slug: "software-development" },
  { name: "QA & Testing", slug: "qa-testing" },
  { name: "Technical Support", slug: "technical-support" },
  { name: "IT Consulting", slug: "it-consulting" },
  { name: "CTO-as-a-Service", slug: "cto-as-a-service" },
  { name: "DevOps Consulting", slug: "devops-consulting" },
  { name: "Blockchain Development", slug: "blockchain-development" },
  { name: "AR/VR Development", slug: "ar-vr-development" },
  { name: "SaaS Development", slug: "saas-development" },
];

export const expertise: NavigationItem[] = [
  { name: "Digital Transformation", slug: "digital-transformation" },
  { name: "Data Science", slug: "data-science" },
  { name: "Machine Learning", slug: "machine-learning" },
  { name: "Artificial Intelligence", slug: "artificial-intelligence" },
  { name: "Internet of Things", slug: "internet-of-things" },
  { name: "Big Data", slug: "big-data" },
  { name: "Blockchain", slug: "blockchain" },
  { name: "Augmented Reality", slug: "augmented-reality" },
  { name: "Virtual Reality", slug: "virtual-reality" },
  { name: "User Experience", slug: "user-experience" },
  { name: "User Interface", slug: "user-interface" },
];

export const industries: NavigationItem[] = [
  { name: "Education", slug: "education" },
  { name: "Healthcare", slug: "healthcare" },
  { name: "Banking & Finance", slug: "banking-finance" },
  { name: "Fintech", slug: "fintech" },
  { name: "Retail", slug: "retail" },
  { name: "Insurance", slug: "insurance" },
  { name: "Logistics", slug: "logistics" },
  { name: "Telecommunication", slug: "telecommunication" },
  { name: "Media & Entertainment", slug: "media-entertainment" },
  { name: "E-commerce", slug: "e-commerce" },
  { name: "Travel & Hospitality", slug: "travel-hospitality" },
  { name: "Energy & Utilities", slug: "energy-utilities" },
  { name: "Agritech", slug: "agritech" },
  { name: "Government", slug: "government" },
  { name: "Manufacturing", slug: "manufacturing" },
  { name: "Real Estate", slug: "real-estate" },
  { name: "Transportation", slug: "transportation" },
  { name: "Automotive", slug: "automotive" },
];
