import nova from "@/assets/model-nova.jpg";
import orbital from "@/assets/model-orbital.jpg";
import horizon from "@/assets/model-horizon.jpg";
import luna from "@/assets/model-luna.jpg";
import aero from "@/assets/model-aero.jpg";
import terra from "@/assets/model-terra.jpg";
import zenith from "@/assets/model-zenith.jpg";
import solace from "@/assets/model-solace.jpg";
import interior1 from "@/assets/interior-1.jpg";
import interior2 from "@/assets/interior-2.jpg";
import interior3 from "@/assets/interior-3.jpg";

export type UseCase =
  | "Luxury Resorts"
  | "Farmhouses"
  | "Backyard Studios"
  | "Eco Stays"
  | "Office Pods"
  | "Tourism Cabins";

export interface Product {
  slug: string;
  name: string;
  tagline: string;
  startingPrice: string;
  size: string;
  dimensions: string;
  capacity: string;
  shortDescription: string;
  longDescription: string;
  features: string[];
  specifications: { label: string; value: string }[];
  images: string[];
  cover: string;
  floorPlanHighlights: string[];
  interiorHighlights: string[];
  exteriorHighlights: string[];
  useCases: UseCase[];
  seoTitle: string;
  seoDescription: string;
  faqs: { q: string; a: string }[];
}

export const products: Product[] = [
  {
    slug: "nova-capsule-s1",
    name: "Nova Capsule S1",
    tagline: "The signature smart capsule for modern compact living.",
    startingPrice: "$28,900",
    size: "215 sq ft",
    dimensions: "20 ft × 10 ft × 9 ft",
    capacity: "2 guests",
    shortDescription:
      "A flagship aerodynamic capsule house with floor-to-ceiling glass, smart climate control, and premium prefab build.",
    longDescription:
      "The Nova Capsule S1 is our signature prefab capsule house — engineered for fast installation, premium comfort, and a clean futuristic aesthetic. With a fully insulated composite shell, panoramic glazing, and integrated smart living systems, the Nova S1 is ideal for compact luxury living, resort stays, and backyard studios.",
    features: [
      "Smart climate & lighting control",
      "Triple-glazed panoramic windows",
      "Premium thermal insulation (R-28)",
      "Solar-ready electrical system",
      "Modular bathroom & kitchenette",
      "Weatherproof composite exterior",
    ],
    specifications: [
      { label: "Interior area", value: "215 sq ft" },
      { label: "Exterior dimensions", value: "20 × 10 × 9 ft" },
      { label: "Weight", value: "3,200 kg" },
      { label: "Installation time", value: "1–2 days" },
      { label: "Warranty", value: "10 years structure" },
      { label: "Power", value: "220V / Solar ready" },
    ],
    cover: nova,
    images: [nova, interior1, interior2, interior3],
    floorPlanHighlights: [
      "Open living zone with convertible sofa-bed",
      "Compact full bathroom with rain shower",
      "Integrated kitchenette with induction cooktop",
      "Smart-storage wardrobe wall",
    ],
    interiorHighlights: [
      "Curved white composite walls",
      "Engineered oak flooring",
      "Ambient LED lighting profiles",
      "Acoustic ceiling panels",
    ],
    exteriorHighlights: [
      "Seamless white gelcoat shell",
      "Hidden LED perimeter lighting",
      "Tinted panoramic glazing",
      "Anti-corrosion steel chassis",
    ],
    useCases: ["Backyard Studios", "Eco Stays", "Tourism Cabins"],
    seoTitle: "Nova Capsule S1 — Smart Prefab Capsule House | CapsuleHaus",
    seoDescription:
      "The Nova Capsule S1 is a premium prefab capsule house with smart climate, panoramic glass, and 1–2 day installation. Starting from $28,900.",
    faqs: [
      { q: "How long does Nova S1 installation take?", a: "Most Nova S1 installations are completed in 1–2 days on a prepared site." },
      { q: "Is Nova S1 suitable for cold climates?", a: "Yes — the R-28 insulation and triple glazing make it suitable for sub-zero environments." },
      { q: "Can I customize the interior?", a: "Yes, finishes, layout and smart features are fully customizable at order time." },
    ],
  },
  {
    slug: "orbital-capsule-x2",
    name: "Orbital Capsule X2",
    tagline: "A sculpted dark capsule with cinematic interiors.",
    startingPrice: "$36,500",
    size: "260 sq ft",
    dimensions: "22 ft × 11 ft × 9.5 ft",
    capacity: "2–3 guests",
    shortDescription:
      "Dark-shell capsule with cinematic ambient lighting, sculpted glazing and premium acoustic interiors.",
    longDescription:
      "The Orbital X2 is built for those who want a bold, sculptural capsule house. Its anthracite composite shell and cinematic interior lighting create a futuristic, gallery-like living atmosphere — perfect for premium resorts and design-led getaways.",
    features: [
      "Cinematic ambient lighting system",
      "Acoustic-tuned interior shell",
      "Smart glass dimming",
      "Premium fixtures & finishes",
      "Integrated audio system",
      "Wi-Fi mesh & smart hub",
    ],
    specifications: [
      { label: "Interior area", value: "260 sq ft" },
      { label: "Exterior dimensions", value: "22 × 11 × 9.5 ft" },
      { label: "Weight", value: "3,800 kg" },
      { label: "Installation time", value: "2 days" },
      { label: "Warranty", value: "10 years structure" },
      { label: "Power", value: "220V / Solar ready" },
    ],
    cover: orbital,
    images: [orbital, interior3, interior1, interior2],
    floorPlanHighlights: [
      "King bedroom with mood lighting",
      "Premium walk-in shower",
      "Dual lounge seating",
      "Compact wet bar",
    ],
    interiorHighlights: [
      "Matte black millwork",
      "Velvet acoustic panels",
      "Tunable white lighting",
      "Dark stone flooring",
    ],
    exteriorHighlights: [
      "Anthracite carbon-look shell",
      "Hidden glow strips",
      "Smart dimmable glass",
      "Brushed steel detailing",
    ],
    useCases: ["Luxury Resorts", "Tourism Cabins"],
    seoTitle: "Orbital Capsule X2 — Cinematic Dark Capsule House | CapsuleHaus",
    seoDescription:
      "Orbital X2 is a sculpted dark-shell capsule house with cinematic ambient lighting and acoustic-tuned interiors. From $36,500.",
    faqs: [
      { q: "Can the Orbital X2 be used as a hotel suite?", a: "Yes — it's a top choice for boutique resorts and luxury glamping operators." },
      { q: "Is the smart glass standard?", a: "Smart-dimming glass is included as standard on the Orbital X2." },
    ],
  },
  {
    slug: "horizon-pod-villa",
    name: "Horizon Pod Villa",
    tagline: "Panoramic cliffside pod villa with wraparound deck.",
    startingPrice: "$54,000",
    size: "420 sq ft",
    dimensions: "28 ft × 15 ft × 10 ft",
    capacity: "3–4 guests",
    shortDescription:
      "A spacious pod villa with full-height glass walls and a wraparound deck — built for breathtaking views.",
    longDescription:
      "The Horizon Pod Villa is the largest in our capsule range. Designed for hilltop, cliff and beachfront sites, it pairs full-height glazing with a wraparound timber deck so every angle becomes a viewpoint. Ideal for premium resorts and signature private retreats.",
    features: [
      "Full-height glass walls",
      "Wraparound hardwood deck",
      "Open-plan kitchen & living",
      "Private bedroom suite",
      "Underfloor heating",
      "Storm-rated structural frame",
    ],
    specifications: [
      { label: "Interior area", value: "420 sq ft" },
      { label: "Deck area", value: "180 sq ft" },
      { label: "Exterior dimensions", value: "28 × 15 × 10 ft" },
      { label: "Installation time", value: "3–4 days" },
      { label: "Warranty", value: "15 years structure" },
      { label: "Power", value: "220V / Solar / Off-grid" },
    ],
    cover: horizon,
    images: [horizon, interior1, interior2, interior3],
    floorPlanHighlights: [
      "Open living + dining + kitchen",
      "Separated bedroom suite",
      "Full bathroom with soaking tub",
      "Outdoor lounge zone",
    ],
    interiorHighlights: [
      "Engineered hardwood floors",
      "Stone feature wall",
      "Custom millwork kitchen",
      "Designer lighting",
    ],
    exteriorHighlights: [
      "Cedar wraparound deck",
      "Cantilevered roofline",
      "Glass safety railing",
      "Storm-rated cladding",
    ],
    useCases: ["Luxury Resorts", "Farmhouses", "Tourism Cabins"],
    seoTitle: "Horizon Pod Villa — Panoramic Capsule Villa | CapsuleHaus",
    seoDescription:
      "Horizon Pod Villa is a 420 sq ft prefab capsule villa with full-height glass and wraparound deck. From $54,000.",
    faqs: [
      { q: "Can the Horizon Villa be installed on a cliffside?", a: "Yes — engineered for cantilever installations with site-specific foundations." },
    ],
  },
  {
    slug: "luna-smart-cabin",
    name: "Luna Smart Cabin",
    tagline: "A compact smart cabin for nordic and forest sites.",
    startingPrice: "$24,500",
    size: "175 sq ft",
    dimensions: "18 ft × 10 ft × 9 ft",
    capacity: "2 guests",
    shortDescription:
      "Compact insulated capsule cabin engineered for snow, forest and remote off-grid locations.",
    longDescription:
      "The Luna Smart Cabin is built for adventurous sites. With cold-climate insulation, off-grid solar capability and a warm minimalist interior, Luna is the perfect choice for eco stays, nordic retreats and remote glamping.",
    features: [
      "Cold-climate R-32 insulation",
      "Off-grid solar + battery",
      "Wood-look composite cladding",
      "Compact wood-style heater",
      "Skylight window",
      "Snow-rated roof",
    ],
    specifications: [
      { label: "Interior area", value: "175 sq ft" },
      { label: "Exterior dimensions", value: "18 × 10 × 9 ft" },
      { label: "Weight", value: "2,600 kg" },
      { label: "Installation time", value: "1 day" },
      { label: "Warranty", value: "10 years structure" },
      { label: "Power", value: "Off-grid solar / 220V" },
    ],
    cover: luna,
    images: [luna, interior2, interior1, interior3],
    floorPlanHighlights: [
      "Cozy queen bedroom",
      "Compact wet room",
      "Mini kitchenette",
      "Reading nook with skylight",
    ],
    interiorHighlights: [
      "Warm oak millwork",
      "Soft linen textiles",
      "Recessed warm lighting",
      "Heated flooring",
    ],
    exteriorHighlights: [
      "Snow-rated rounded shell",
      "Wood-look cladding",
      "Recessed door",
      "Tundra-grade sealing",
    ],
    useCases: ["Eco Stays", "Tourism Cabins"],
    seoTitle: "Luna Smart Cabin — Off-Grid Capsule Cabin | CapsuleHaus",
    seoDescription:
      "Luna is an off-grid prefab capsule cabin built for snow, forest and remote sites. From $24,500.",
    faqs: [
      { q: "Can Luna run fully off-grid?", a: "Yes — Luna ships solar + battery ready with optional generator backup." },
    ],
  },
  {
    slug: "aero-capsule-suite",
    name: "Aero Capsule Suite",
    tagline: "An aerodynamic resort suite with sculpted glazing.",
    startingPrice: "$42,000",
    size: "320 sq ft",
    dimensions: "24 ft × 12 ft × 10 ft",
    capacity: "2–3 guests",
    shortDescription:
      "A premium resort capsule suite with curved glazing, king bedroom and integrated spa-style bathroom.",
    longDescription:
      "The Aero Capsule Suite is built for premium resorts. Its sculpted aerodynamic shell, curved feature window and spa-style bathroom create a five-star guest experience in a fully prefab capsule footprint.",
    features: [
      "Sculpted feature window",
      "King bedroom suite",
      "Spa-style bathroom",
      "Smart lighting scenes",
      "Mini-bar & coffee station",
      "Premium HVAC",
    ],
    specifications: [
      { label: "Interior area", value: "320 sq ft" },
      { label: "Exterior dimensions", value: "24 × 12 × 10 ft" },
      { label: "Weight", value: "4,100 kg" },
      { label: "Installation time", value: "2–3 days" },
      { label: "Warranty", value: "10 years structure" },
      { label: "Power", value: "220V / Solar ready" },
    ],
    cover: aero,
    images: [aero, interior1, interior3, interior2],
    floorPlanHighlights: [
      "King bedroom with view window",
      "Spa bath + rain shower",
      "Lounge with mini-bar",
      "Sound-isolated entry vestibule",
    ],
    interiorHighlights: [
      "Warm sand tones",
      "Premium textiles",
      "Curved feature wall",
      "Soft cove lighting",
    ],
    exteriorHighlights: [
      "Aerodynamic gelcoat shell",
      "Sculpted oval window",
      "Hidden LED skirt",
      "Premium hardware",
    ],
    useCases: ["Luxury Resorts", "Tourism Cabins"],
    seoTitle: "Aero Capsule Suite — Premium Resort Capsule | CapsuleHaus",
    seoDescription:
      "Aero Capsule Suite is a 320 sq ft premium resort capsule with spa bath and king bedroom. From $42,000.",
    faqs: [
      { q: "Is the Aero Suite designed for hospitality use?", a: "Yes — it's optimized for guest turnover, durability and brand-grade finishes." },
    ],
  },
  {
    slug: "terra-eco-pod",
    name: "Terra Eco Pod",
    tagline: "An eco-luxury timber pod for forest and farm sites.",
    startingPrice: "$31,800",
    size: "240 sq ft",
    dimensions: "22 ft × 11 ft × 10 ft",
    capacity: "2 guests",
    shortDescription:
      "A warm timber-clad eco pod with green roof option, designed for forest and farmhouse environments.",
    longDescription:
      "The Terra Eco Pod blends sustainable materials with futuristic capsule shaping. Its barrel-vaulted timber shell, optional green roof and natural interior palette make it the most eco-aligned model in our range.",
    features: [
      "Sustainable timber shell",
      "Optional green roof",
      "Natural ventilation system",
      "Low-VOC finishes",
      "Rainwater-ready downspouts",
      "Solar + battery ready",
    ],
    specifications: [
      { label: "Interior area", value: "240 sq ft" },
      { label: "Exterior dimensions", value: "22 × 11 × 10 ft" },
      { label: "Weight", value: "3,400 kg" },
      { label: "Installation time", value: "2 days" },
      { label: "Warranty", value: "10 years structure" },
      { label: "Power", value: "220V / Solar / Off-grid" },
    ],
    cover: terra,
    images: [terra, interior2, interior1, interior3],
    floorPlanHighlights: [
      "Queen bedroom",
      "Eco bathroom with composting option",
      "Open kitchenette & lounge",
      "Covered timber porch",
    ],
    interiorHighlights: [
      "Natural timber lining",
      "Warm clay-toned walls",
      "Linen & wool textiles",
      "Low-VOC finishes",
    ],
    exteriorHighlights: [
      "Barrel-vaulted timber shell",
      "Optional moss-green roof",
      "Hardwood entry deck",
      "Recessed lighting",
    ],
    useCases: ["Eco Stays", "Farmhouses", "Tourism Cabins"],
    seoTitle: "Terra Eco Pod — Sustainable Capsule Pod | CapsuleHaus",
    seoDescription:
      "Terra Eco Pod is a sustainable timber capsule house with optional green roof. From $31,800.",
    faqs: [
      { q: "Is Terra suitable for tropical climates?", a: "Yes — the timber shell with cross-ventilation performs well in tropical and subtropical zones." },
    ],
  },
  {
    slug: "zenith-resort-capsule",
    name: "Zenith Resort Capsule",
    tagline: "A two-level resort capsule for premium destinations.",
    startingPrice: "$72,000",
    size: "540 sq ft",
    dimensions: "26 ft × 14 ft × 18 ft",
    capacity: "4 guests",
    shortDescription:
      "A two-level capsule villa with private upper suite — built for flagship resort sites.",
    longDescription:
      "The Zenith Resort Capsule is our flagship two-level capsule villa. With a private upper suite, double-height lounge and premium signature finishes, Zenith is engineered for flagship beach, mountain and destination resorts.",
    features: [
      "Two-level layout",
      "Private upper suite",
      "Double-height lounge",
      "Premium finishes throughout",
      "Smart hospitality systems",
      "Storm-rated structure",
    ],
    specifications: [
      { label: "Interior area", value: "540 sq ft" },
      { label: "Floors", value: "2" },
      { label: "Exterior dimensions", value: "26 × 14 × 18 ft" },
      { label: "Installation time", value: "5–7 days" },
      { label: "Warranty", value: "15 years structure" },
      { label: "Power", value: "220V / Solar / Hybrid" },
    ],
    cover: zenith,
    images: [zenith, interior1, interior3, interior2],
    floorPlanHighlights: [
      "Ground-floor lounge & kitchen",
      "Ground-floor guest bathroom",
      "Upper master suite",
      "Upper private bathroom",
    ],
    interiorHighlights: [
      "Double-height lounge",
      "Designer staircase",
      "Premium stone bathrooms",
      "Custom millwork",
    ],
    exteriorHighlights: [
      "Two-tier sculpted shell",
      "Wraparound glazing",
      "Storm-rated cladding",
      "Premium hardware",
    ],
    useCases: ["Luxury Resorts", "Tourism Cabins"],
    seoTitle: "Zenith Resort Capsule — Two-Level Capsule Villa | CapsuleHaus",
    seoDescription:
      "Zenith is a two-level capsule villa with private upper suite — engineered for flagship resorts. From $72,000.",
    faqs: [
      { q: "Can Zenith be installed beachfront?", a: "Yes — Zenith is engineered with corrosion-resistant materials suitable for beachfront installation." },
    ],
  },
  {
    slug: "solace-office-pod",
    name: "Solace Office Pod",
    tagline: "A focused backyard office pod for premium remote work.",
    startingPrice: "$18,900",
    size: "130 sq ft",
    dimensions: "14 ft × 9 ft × 9 ft",
    capacity: "1–2 people",
    shortDescription:
      "A minimal dark office pod for backyards — fully insulated, acoustic-tuned and connectivity-ready.",
    longDescription:
      "The Solace Office Pod is a premium backyard workspace. With acoustic-tuned interiors, fast power-and-data hookup and a fully insulated shell, Solace turns any backyard into a focused, design-led office in under a day.",
    features: [
      "Acoustic-tuned interior",
      "Insulated for year-round use",
      "Power + data ready",
      "Built-in desk option",
      "Climate control",
      "Same-day setup",
    ],
    specifications: [
      { label: "Interior area", value: "130 sq ft" },
      { label: "Exterior dimensions", value: "14 × 9 × 9 ft" },
      { label: "Weight", value: "1,900 kg" },
      { label: "Installation time", value: "1 day" },
      { label: "Warranty", value: "10 years structure" },
      { label: "Power", value: "220V" },
    ],
    cover: solace,
    images: [solace, interior3, interior2, interior1],
    floorPlanHighlights: [
      "Open workstation zone",
      "Optional built-in desk wall",
      "Lounge nook",
      "Coat & storage corner",
    ],
    interiorHighlights: [
      "Matte black walls",
      "Acoustic ceiling",
      "Tunable task lighting",
      "Engineered timber floor",
    ],
    exteriorHighlights: [
      "Standing-seam dark cladding",
      "Full-glass front",
      "Hidden gutter",
      "Compact entry step",
    ],
    useCases: ["Office Pods", "Backyard Studios"],
    seoTitle: "Solace Office Pod — Backyard Office Capsule | CapsuleHaus",
    seoDescription:
      "Solace is a premium 130 sq ft backyard office pod, insulated and acoustic-tuned. From $18,900.",
    faqs: [
      { q: "Do I need a permit for a Solace office pod?", a: "Most jurisdictions don't require a permit at this footprint, but we recommend checking local rules." },
    ],
  },
];

export const getProduct = (slug: string) => products.find((p) => p.slug === slug);
export const getOtherProducts = (slug: string) => products.filter((p) => p.slug !== slug);

export const useCases: { label: UseCase; description: string }[] = [
  { label: "Luxury Resorts", description: "Boutique capsule suites for premium hospitality." },
  { label: "Farmhouses", description: "Modular capsule homes for rural and farm estates." },
  { label: "Backyard Studios", description: "Premium studios that fit any backyard footprint." },
  { label: "Eco Stays", description: "Sustainable capsule pods for nature retreats." },
  { label: "Office Pods", description: "Focused, design-led remote-work workspaces." },
  { label: "Tourism Cabins", description: "Turnkey cabins for tourism and glamping operators." },
];
