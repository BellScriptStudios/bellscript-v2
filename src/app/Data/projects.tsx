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
        subtitle: "Parent company · Venture platform · Brand incubator",
        blurb:
            "Our own parent brand website built to unify and showcase all ventures under our company umbrella.",
        features: [
            "Corporate-polished UI consistent with sub-brand styles",
            "Responsive, mobile-first design for optimal accessibility",
            "Portfolio showcase linking directly to each brand site",
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
        subtitle: "Personal finance tool · CLI application · Data-driven",
        blurb:
            "SmartSpend is a command-line interface (CLI) application designed to make expense tracking simple and efficient.",
        
        features: [
            "Multi-user accounts with personalized data",
            "Full CRUD operations for expense entries",
            "Category-based budgeting tools",
            "CSV export for backup and analysis",
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
        subtitle: "Lifestyle brand · E-commerce · Product storytelling",
        blurb:
            "Something Beautiful is on the Horizon — We’re pouring, curing, and crafting the perfect collection just for you. From healing to hustle, love to glow-up — your phase is about to be lit.",
        features: [
            "Custom brand identity and phase-based product system",
            "E-commerce-ready product layouts",
            "Emotion-led storytelling and copy structure",
            "Mobile-first, performance-focused design",
            "Scalable foundation for future product drops",
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
        subtitle: "AI Smart Mirror · Experimental OS · Raspberry Pi",
        blurb: "A custom Raspberry Pi-powered smart mirror. L.U.C.I intergrates wellness tools, personal dashboards, and AI-powered daily insights — all wrapped in a modern home-tech interface",
        features: [
            "Raspberry Pi 5–powered hardware platform",
            "TypeScript and Python application architecture",
            "Voice command integration with smart assistant AI",
            "Modular, privacy-first ReflectOS environment",
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
        subtitle: "Early brand site · Design exploration · Foundation build",
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