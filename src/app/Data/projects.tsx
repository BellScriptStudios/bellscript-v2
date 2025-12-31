export type Project = {
    id: string;
    title: string;
    subtitle?: string;
    blurb: string;
    features?: string[];
    link?: { 
        href: string;
        label?: string;
        ariaLabel?: string;
    };
    thumbnail?: {
        src: string;
        alt: string;
        width?: number;
        height?: number;
    };
    status?: "live" | "coming-soon" | "research-develop" | "archived";
    icon?: "umbrella" | "cli" | "shop" | "mirror" | "rnd" | "web";
    featured?: boolean;
    active?: boolean;
    inhouse: boolean;
    homeHero?: boolean;
}

export const PROJECTS: Project[] = [
    {
        id: "tmb",
        title: "The Morning Bell Co.",
        blurb:
            "Our own parent brand website built to unify and showcase all ventures under our company umbrella.",
        features: [
            "Corporate-polished UI consistent with sub-brand styles",
            "Responsive, mobile-first design for optimal accessibility",
            "Portfolio showcase linking directly to each brand site",
            "Optimized for speed, SEO, and cross-browser compatibility",
        ],
        link: { href: "https://www.themorningbell.co"},
        thumbnail: { 
            src: "/images/tmb.png",
            alt: "The Morning Bell Co. thumbnail",
            width: 300, height: 200 },
        status: "live",
        icon: "umbrella",
        featured: true,
        active: true,
        inhouse: true,
        homeHero: true,
    },

    {
        id: "smartspend",
        title: "SmartSpend — CLI Expense Tracker",
        blurb:
            "SmartSpend is a command-line interface (CLI) application designed to make expense tracking simple and efficient.",
        
        features: [
            "Multi-user account support for personalized data tracking",
            "Full CRUD operations to add, edit, and delete expense entries",
            "Budget-setting tools with category-based organization",
            "CSV export for seamless data backup and analysis",
            "Clean, intuitive terminal interface for fast navigation",
        ],

        link: { 
            href: "https://github.com/MTinsley00/CLI_Expense_Tracker.git",
            ariaLabel: "View SmartSpend CLI Expense Tracker project on GitHub",
        },
        thumbnail: { src: "/images/smartspend-thumb.png", alt: "SmartSpend CLI thumbnail", width: 300, height: 200 },
        status: "live",
        icon: "cli",
        featured: false,
        active: true,
        inhouse: false,
    },

    {
        id: "candle-phase",
        title: "Candle Phase",
        blurb:
            "Something Beautiful is on the Horizon — We’re pouring, curing, and crafting the perfect collection just for you. From healing to hustle, love to glow-up — your phase is about to be lit.",
        features: [
            "Polished web brand",
            "Modern storefront base",
            "Mobile-first experience",
        ],
        //link: { href: "https://www.candlephase.com", label: "Coming Soon" },
        thumbnail: { src: "/images/candle-phase-bs-thumbnail.png", alt: "Candle Phase thumbnail", width: 300, height: 200 },
        status: "coming-soon",
        icon: "shop",
        featured: true,
        active: true,
        inhouse: false,
    },

    {
        id: "luci",
        title: "L.U.C.I — Logical Unified Control Interface",
        subtitle: "AI Smart Mirror Prototype",
        blurb: "A custom Raspberry Pi-powered smart mirror. L.U.C.I intergrates wellness tools, personal dashboards, and AI-powered daily insights — all wrapped in a modern home-tech interface",
        features: [
            "Built with Raspberry Pi 5",
            "Designed & coded in TypeScript + Python",
            "Intergrates voice commands & smart assistant AI",
            "Modular, privacy-focused ReflectOS enviroment"
        ],
        status: "research-develop",
        //link: { href: "/luci", label: "R&D Project By BellScript Studios"},
        icon: "rnd",
        featured: true,
        active: true,
        inhouse: true,
        homeHero: true,
    },

    {
        id: "bellscript-v1",
        title: "BellScirpt Studios — Version One",
        subtitle: "The original BellScript Studios site",
        blurb: "The first version of BellScript Studios — a minimal, fast MVP designed to establish the early brand and ship quickly.",
        features: [
            "Rapid MVP build",
            "Early brand exploration",
            "Simple page structure",
            "Clean UI foundations",
            "Launched in under one week"
        ],
        thumbnail: {
            src: "/images/bellscript-v1-thumb2.png", 
            alt: "BellScript Studios Version One Screenshot",
            width: 600,
            height: 400
        },
        status: "archived",
        link: { href: "/projects/bellscript-v1", label: "View Case Study"},
        icon: "web",
        featured: false,
        active: true,
        inhouse: true,
    },
];

export const FEATURED_PROJECTS: Project[] = PROJECTS
    .filter((p) => p.featured && p.active !== false);