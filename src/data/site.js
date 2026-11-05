// Single source of truth for all business content.
// Replace placeholder figures (experience years, customer counts, reviews) with real numbers before go-live.

export const business = {
  name: "Eshwar Pest Solutions",
  shortName: "Eshwar Pest",
  tagline: "Pest-Free Homes & Businesses, Guaranteed",
  owner: "Eshwar",
  ownerTitle: "Founder",
  phoneDisplay: "+91 87906 67642",
  phone: "+918790667642",
  phoneRaw: "918790667642",
  whatsapp: "918790667642",
  email: "contact@eshwarpestsolutions.in",
  established: 2024,
  experienceYears: 2,
  customersServed: "100+",
  corporateClients: "10+",
  teamSize: "5+",
  rating: "4.8",
  reviewCount: "60+",
  social: {
    facebook: "https://facebook.com/eshwarpestsolutions",
    instagram: "https://instagram.com/eshwarpestsolutions",
    twitter: "https://x.com/eshwarpest",
    youtube: "https://youtube.com/@eshwarpestsolutions",
  },
};

export const waLink = (message) =>
  `https://wa.me/${business.whatsapp}?text=${encodeURIComponent(message)}`;

export const defaultWaMessage =
  "Hello! I'm interested in pest control services from Eshwar Pest Solutions. Please share details.";

// ---------------- Services ----------------
export const services = [
  {
    slug: "termite-control",
    name: "Termite Control",
    icon: "Bug",
    short: "Pre- and post-construction anti-termite treatment with 5-year protection.",
    description:
      "Termites can silently destroy a building's structure before any visible sign appears. We use chemical soil treatment and bait-station systems to cut off colonies at the source, protecting both new and existing structures.",
    points: [
      "Pre-construction anti-termite soil treatment",
      "Post-construction drilling & chemical injection",
      "Bait station monitoring system",
      "5-year warranty with free re-treatment",
    ],
    priceFrom: 2499,
    priceUnit: "per treatment (up to 1000 sq ft)",
  },
  {
    slug: "cockroach-control",
    name: "Cockroach Control",
    icon: "Zap",
    short: "Gel-based and spray treatment for kitchens, cafeterias and storage areas.",
    description:
      "German and American cockroach infestations spread fast in kitchens and food-storage areas. Our gel-bait and residual spray combination breaks the breeding cycle without the strong odour of older treatments.",
    points: [
      "Odourless gel-bait treatment",
      "Safe for kitchens & food-prep zones",
      "Crack & crevice residual spray",
      "Follow-up visit included",
    ],
    priceFrom: 1299,
    priceUnit: "per visit (1-2 BHK)",
  },
  {
    slug: "rodent-control",
    name: "Rat & Rodent Control",
    icon: "Rat",
    short: "Trapping, baiting and entry-point sealing for homes, godowns and kitchens.",
    description:
      "Rodents damage wiring, contaminate food stock and spread disease. We combine snap traps, tamper-proof bait stations and entry-point sealing to clear existing populations and block re-entry.",
    points: [
      "Tamper-proof bait stations",
      "Non-toxic options for homes with pets/kids",
      "Entry-point & gap sealing",
      "Ideal for warehouses & godowns",
    ],
    priceFrom: 1799,
    priceUnit: "per visit",
  },
  {
    slug: "bed-bug-control",
    name: "Bed Bug Control",
    icon: "BedDouble",
    short: "Heat and chemical treatment for mattresses, furniture and wooden fittings.",
    description:
      "Bed bugs hide deep in mattress seams, bed frames and wooden furniture. We treat every harbourage point with a combination of residual spray and steam/heat application for complete elimination.",
    points: [
      "Mattress, sofa & wardrobe treatment",
      "Steam + chemical combination",
      "Child & pet-safe formulations",
      "2 follow-up visits in 21 days",
    ],
    priceFrom: 1999,
    priceUnit: "per room",
  },
  {
    slug: "ant-control",
    name: "Ant Control",
    icon: "Bug",
    short: "Colony-targeted treatment for kitchen, garden and perimeter ant trails.",
    description:
      "Surface spraying alone rarely solves an ant problem since it doesn't reach the colony. We use bait-based treatment that worker ants carry back to the nest, clearing the colony at the root.",
    points: [
      "Colony-elimination bait treatment",
      "Indoor + garden perimeter coverage",
      "Safe around food-prep areas",
      "Effective on black & red ants",
    ],
    priceFrom: 999,
    priceUnit: "per visit",
  },
  {
    slug: "mosquito-control",
    name: "Mosquito Control",
    icon: "Wind",
    short: "Fogging, larvicide treatment and breeding-source control.",
    description:
      "We target mosquitoes at every stage — fogging for adults, larvicide treatment for stagnant water, and breeding-source removal around the property to stop re-infestation.",
    points: [
      "Cold fogging & misting",
      "Larvicide treatment for drains/tanks",
      "Breeding-source identification",
      "Recommended monthly for societies",
    ],
    priceFrom: 1499,
    priceUnit: "per visit",
  },
  {
    slug: "fly-control",
    name: "Fly Control",
    icon: "Wind",
    short: "Residual spray and UV trap installation for kitchens and dining areas.",
    description:
      "Flies are a major hygiene risk in restaurants and food-processing units. We combine residual spray treatment with UV light-trap installation for continuous control.",
    points: [
      "Residual + space spray treatment",
      "UV fly-trap installation (optional)",
      "FSSAI-aligned hygiene protocol",
      "Ideal for restaurants & food units",
    ],
    priceFrom: 1299,
    priceUnit: "per visit",
  },
  {
    slug: "wood-borer-control",
    name: "Wood Borer Control",
    icon: "Hammer",
    short: "Injection treatment for furniture, doors and wooden structures.",
    description:
      "Wood-boring beetles tunnel through furniture and structural wood, leaving fine powder trails behind. We inject treatment directly into bore holes to kill larvae inside the wood.",
    points: [
      "Direct bore-hole injection",
      "Furniture & door-frame treatment",
      "Surface coating for prevention",
      "1-year warranty",
    ],
    priceFrom: 1799,
    priceUnit: "per room",
  },
  {
    slug: "anti-termite-piping",
    name: "Anti-Termite Piping System",
    icon: "Workflow",
    short: "Pre-installed reticulation piping for long-term termite protection in new builds.",
    description:
      "A network of pipes is embedded in the foundation during construction, allowing chemical re-treatment every few years without breaking tiles or flooring — the most reliable long-term termite defence for new buildings.",
    points: [
      "Installed during foundation stage",
      "Re-treatable every 3-5 years, no digging",
      "Ideal for villas, gated communities",
      "10-year structural warranty option",
    ],
    priceFrom: 18,
    priceUnit: "per sq ft (built-up area)",
  },
  {
    slug: "general-pest-control",
    name: "General Pest Control (AMC)",
    icon: "ShieldCheck",
    short: "Combined year-round protection against all common pests on an annual contract.",
    description:
      "Our Annual Maintenance Contract bundles cockroach, ant, spider and general pest treatment into scheduled quarterly visits, so you never have to call in a one-off emergency.",
    points: [
      "Quarterly scheduled visits",
      "Covers cockroach, ant, spider, general pests",
      "Priority emergency call-outs",
      "Single annual invoice",
    ],
    priceFrom: 3999,
    priceUnit: "per year (1-2 BHK)",
  },
];

// ---------------- Sectors served ----------------
export const sectors = [
  { name: "Residential Homes & Villas", icon: "Home" },
  { name: "Apartments & Gated Communities", icon: "Building2" },
  { name: "Offices & Corporate Buildings", icon: "Briefcase" },
  { name: "Restaurants, Hotels & Cafes", icon: "UtensilsCrossed" },
  { name: "Hospitals & Healthcare Centers", icon: "HeartPulse" },
  { name: "Schools & Educational Institutions", icon: "GraduationCap" },
  { name: "Warehouses & Godowns", icon: "Warehouse" },
  { name: "Factories & Manufacturing Units", icon: "Factory" },
  { name: "Shopping Malls & Retail Outlets", icon: "ShoppingBag" },
  { name: "Cold Storage & Food Processing", icon: "Snowflake" },
  { name: "Pre & Post Construction Sites", icon: "HardHat" },
  { name: "Farmhouses & Resorts", icon: "Trees" },
];

// ---------------- Why choose us ----------------
export const whyChooseUs = [
  { title: "Licensed & Insured", desc: "Fully licensed pest control operators with liability insurance on every job.", icon: "ShieldCheck" },
  { title: "Eco-Friendly Products", desc: "Low-toxicity, pet and child-safe formulations used wherever possible.", icon: "Leaf" },
  { title: "Free Inspection", desc: "No-cost property inspection and quote before any treatment begins.", icon: "Search" },
  { title: "Same-Day Response", desc: "Emergency slots available for urgent infestations across Hyderabad.", icon: "Clock" },
  { title: "Warranty Backed", desc: "Written warranty on termite and major treatments, with free re-visits.", icon: "FileCheck" },
  { title: "Trained Technicians", desc: "In-house trained team, not third-party contractors.", icon: "Users" },
];

// ---------------- Process / How it works ----------------
export const process = [
  { step: 1, title: "Book a Visit", desc: "Call, WhatsApp or fill the booking form with your pest issue and area." },
  { step: 2, title: "Free Inspection", desc: "Our technician inspects the property and identifies the extent of infestation." },
  { step: 3, title: "Custom Treatment Plan", desc: "You get a clear quote and treatment plan before any work starts." },
  { step: 4, title: "Safe Treatment", desc: "Treatment is carried out using approved, low-odour products." },
  { step: 5, title: "Follow-Up & Warranty", desc: "Scheduled follow-up visits as per the service warranty." },
];

// ---------------- FAQs ----------------
export const faqs = [
  {
    q: "How soon can you send a technician after I book?",
    a: "For most areas inside Hyderabad we can schedule a visit the same day or next day. Emergency requests are prioritised — mention it when booking.",
  },
  {
    q: "Are the chemicals safe for children and pets?",
    a: "Yes. We use low-toxicity, government-approved formulations and recommend keeping pets and children away from treated areas only for the short drying window your technician will specify.",
  },
  {
    q: "Do you provide a warranty on termite treatment?",
    a: "Yes, termite treatments come with a written warranty period with free re-treatment if termites reappear within that window.",
  },
  {
    q: "Do you offer Annual Maintenance Contracts (AMC)?",
    a: "Yes, our General Pest Control AMC covers quarterly visits for cockroaches, ants, spiders and general pests under one annual plan.",
  },
  {
    q: "Which areas and districts do you cover?",
    a: "We operate across all localities in Hyderabad and serve clients throughout Telangana, including Medak, Siddipet, Sangareddy, Warangal, Nizamabad, Khammam, Karimnagar and all other districts on request.",
  },
  {
    q: "Do you handle commercial contracts for offices, restaurants or factories?",
    a: "Yes, we service offices, restaurants, hospitals, schools, warehouses, factories and other commercial sites with customised scheduled plans.",
  },
  {
    q: "What payment methods do you accept?",
    a: "Cash, UPI, and bank transfer. Corporate clients can request GST invoicing.",
  },
];

// ---------------- Testimonials (placeholder — replace with real reviews before go-live) ----------------
export const testimonials = [
  {
    name: "Customer testimonial — replace with real review",
    text: "Placeholder review text. Swap this with an actual customer quote once collected, ideally with permission to use their name.",
    rating: 5,
  },
  {
    name: "Customer testimonial — replace with real review",
    text: "Placeholder review text. Swap this with an actual customer quote once collected.",
    rating: 5,
  },
  {
    name: "Customer testimonial — replace with real review",
    text: "Placeholder review text. Swap this with an actual customer quote once collected.",
    rating: 4,
  },
];

// ---------------- Pricing table ----------------
export const pricingPlans = [
  {
    name: "Basic Visit",
    price: 999,
    unit: "per visit",
    desc: "Single-pest treatment for a specific issue (ants, cockroaches, flies).",
    features: ["1 technician visit", "1 pest type covered", "Standard follow-up on request", "Up to 2 BHK"],
    highlight: false,
  },
  {
    name: "Complete Home Shield",
    price: 3999,
    unit: "per year",
    desc: "Our most popular AMC — year-round protection, 4 scheduled visits.",
    features: ["4 quarterly visits", "Cockroach, ant, spider & general pests", "Priority emergency call-out", "Free re-visit between scheduled visits"],
    highlight: true,
  },
  {
    name: "Termite Shield",
    price: 2499,
    unit: "starting",
    desc: "Full anti-termite treatment with written warranty.",
    features: ["Chemical soil / drilling treatment", "5-year warranty", "Free annual inspection", "Bait-station option available"],
    highlight: false,
  },
  {
    name: "Commercial / Custom",
    price: null,
    unit: "custom quote",
    desc: "For offices, restaurants, factories, warehouses and multi-site contracts.",
    features: ["Site-specific treatment plan", "Flexible visit frequency", "GST invoicing", "Dedicated account support"],
    highlight: false,
  },
];

// ---------------- Branch offices ----------------
export const branches = [
  {
    name: "Kukatpally Branch (Head Office)",
    address: "3rd Floor, Srinivasa Towers, KPHB Phase 3, Kukatpally, Hyderabad, Telangana - 500072",
    mapLink: "https://maps.google.com/?q=Kukatpally+Hyderabad",
  },
  {
    name: "Madhapur / Gachibowli Branch",
    address: "Plot 44, Inorbit Mall Road, Madhapur, Hyderabad, Telangana - 500081",
    mapLink: "https://maps.google.com/?q=Madhapur+Hyderabad",
  },
  {
    name: "Secunderabad Branch",
    address: "2-100, SP Road, Secunderabad, Telangana - 500003",
    mapLink: "https://maps.google.com/?q=Secunderabad",
  },
];

// ---------------- Hyderabad localities served ----------------
export const hyderabadAreas = [
  "Kukatpally", "Miyapur", "Madhapur", "Gachibowli", "Hitech City", "Kondapur",
  "Kompally", "Nizampet", "Bachupally", "Pragathi Nagar", "Chandanagar", "Hafeezpet",
  "Jubilee Hills", "Banjara Hills", "Somajiguda", "Punjagutta", "Ameerpet", "Begumpet",
  "Secunderabad", "Alwal", "Bowenpally", "Sainikpuri", "ECIL", "Nacharam",
  "Uppal", "LB Nagar", "Dilsukhnagar", "Kothapet", "Vanasthalipuram", "Nagole",
  "Tarnaka", "Habsiguda", "Malkajgiri", "Narsingi", "Manikonda", "Nanakramguda",
  "Kokapet", "Tellapur", "Gopanpally", "Patancheru", "Serilingampally", "Attapur",
  "Mehdipatnam", "Tolichowki", "Rajendranagar", "Shamshabad", "Falaknuma", "Charminar",
  "Himayat Nagar", "Khairatabad", "Abids",
];

// ---------------- Telangana districts (full coverage) ----------------
export const telanganaDistricts = [
  "Hyderabad", "Rangareddy", "Medchal-Malkajgiri", "Sangareddy", "Medak", "Siddipet",
  "Vikarabad", "Nalgonda", "Suryapet", "Yadadri Bhuvanagiri", "Warangal", "Hanumakonda",
  "Jangaon", "Mahabubabad", "Bhadradri Kothagudem", "Khammam", "Mahabubnagar",
  "Nagarkurnool", "Wanaparthy", "Jogulamba Gadwal", "Narayanpet", "Nirmal", "Nizamabad",
  "Jagtial", "Peddapalli", "Rajanna Sircilla", "Kamareddy", "Adilabad",
  "Kumuram Bheem Asifabad", "Mancherial", "Jayashankar Bhupalapally", "Mulugu", "Karimnagar",
];
