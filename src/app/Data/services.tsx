export type IconKey =
  | "web"
  | "backend"
  | "seo"
  | "cart"
  | "event"
  | "tool"
  | "resume";

export type IncludeIconKey =
  | "strategy"
  | "layout"
  | "form"
  | "seo"
  | "speed"
  | "accessibility"
  | "deploy"
  | "updates"
  | "map"
  | "calendar"
  | "heart"
  | "share"
  | "shield"
  | "dashboard"
  | "gallery"
  | "upload"
  | "auth"
  | "database"
  | "admin"
  | "payments"
  | "cart";

export type IncludeItem =
  | string
  | {
      title: string;
      desc?: string;
      icon?: IncludeIconKey;
    };

export type PlanTier = {
    id: string;
    name: string;
    price: string;
    plus?: string;
    perks: string[];
    featured?: boolean;
};


export type Service = {
    id: string;
    title: string;
    blurb: string;
    long?: string;
    extLong?: string;
    sub?: string[]
    bullets?: string[];
    includes?: IncludeItem[];
    outcome?: string | string[];
    timeline?: string;
    priceFrom?: string;
    priceFlat?: string;
    priceFromValue?: number;
    href?: string;
    icon?: IconKey;
    featured?: boolean;
    active?: boolean;
    plans?: PlanTier[];
    addons?: Addon[];
    note?: string;
    demoUrl?: string;
};

export type Addon = {
    id: string;
    name: string;
    price: string;
    desc?: string;
    popular?: boolean;
    minPlanId?: PlanTier["id"];
}

export type ServiceCategory = {
    id: string;
    title: string;
    items: Service[];
};

export const SERVICE_CATEGORIES: ServiceCategory[] = [
    {
        id: "signature-packages",
        title: "Signature Packages",
        items: [
            {
                id:"website-in-a-week",
                title: "Website-in-a-Week",
                blurb: "A focused, fast-track website build designed to get you live in just five days—without cutting corners or dragging things out.",
                long: "Website in a Week is a streamlined build for clients who need a professional website live quickly. We work within a clearly defined scope, make fast decisions, and move from kickoff to launch in one focused week. The result is a custom, mobile-ready website that looks polished, performs well, and is ready to share—without the usual back-and-forth or extended timelines.",
                extLong: "This service is ideal for launches, rebrands, and businesses that value momentum. By keeping the process intentional and efficient, we’re able to deliver speed without sacrificing quality.",
                sub: [
                    "Businesses preparing for a launch or rebrand",
	                "Founders who need a site live quickly and decisively",
		            "Teams with content and assets ready to go",
                    "Clients who value momentum over endless revisions",
                ],
                bullets: [
                    "Live website in 5 days",
                    "Focused scope, fast decisions",
                    "Custom design & build",
                ],
                includes: [
                    { title: "Strategy kickoff & scope alignment", icon: "strategy", desc: "Lock scope, pages/sections, and launch goals up front." },
                    { title: "Custom website (up to 5 sections or pages)", icon: "layout", desc: "Designed and built custom—no templates." },
                    { title: "Contact form or lead capture", icon: "form", desc: "A clear conversion path for inquiries." },
                    { title: "Basic SEO setup (titles, meta, indexing)", icon: "seo", desc: "Clean metadata so you’re ready to be found." },
                    { title: "Performance & accessibility optimization", icon: "speed", desc: "Fast load times and clean, usable UX." },
                    { title: "Hosting setup & deployment", icon: "deploy", desc: "Launch handled end-to-end." },
                    { title: "Daily progress updates", icon: "dashboard", desc: "Clear check-ins so decisions stay fast." },
                    { title: "One focused revision pass", icon: "updates", desc: "A tight refinement pass that keeps momentum." },
                ],
                outcome: [
                    "A professional website live in one week",
                    "Clear messaging without endless revisions",
                    "Faster launch without sacrificing quality",
                    "A site ready to share, promote, and grow",
                ],
                timeline: "5 business days",
                priceFrom: "Starting at $1,500",
                priceFromValue: 1500,
                href: "/services/website-in-a-week",
                icon: "web",
                featured: true,
                active: true,
                note: "Requires finalized content, brand assets, and fast client feedback.",
                demoUrl: "/services/demos/chef-liora"
            },
            {
                id:"local-business-bundle",
                title: "Local Business Bundle",
                blurb: "A complete, done-for-you website bundle designed to help local businesses show up professionally, attract nearby customers, and turn visits into calls.",
                long: "The Local Business Website Bundle is an all-in solution for businesses that want a strong online presence without managing multiple vendors or decisions. We design and build a custom website tailored to your business, location, and customers—covering everything from layout and performance to search visibility and contact flow.",
                extLong: "This bundle is built for clarity and conversion. Your site will be mobile-friendly, fast, and easy to navigate, with clear business information, maps, and calls to action that make it simple for customers to reach you. It’s ideal for shops, service providers, and local brands that need a professional site that works immediately and scales as they grow.",
                sub: [
                    "Local businesses that need a professional online presence",
                    "Service providers who rely on calls, messages, or bookings",
                    "Shops and brands looking to attract nearby customers",
                    "Owners who want everything handled in one package",
                ],
                bullets: [
                    "Custom business website",
                    "Mobile-friendly design",
                    "Local SEO basics",
                    "Contact & map integration",
                    "Built to convert visitors",
                ],
                includes: [
                    {
                        title: "Custom website design (3–5 pages or sections)",
                        icon: "layout",
                        desc: "A clean, custom layout built around your services and goals.",
                    },
                    {
                        title: "Mobile-first, responsive layout",
                        icon: "accessibility",
                        desc: "Designed to feel smooth on phones first—then scaled up.",
                    },
                    {
                        title: "Business info (services, hours, location)",
                        icon: "strategy",
                        desc: "Structured so customers can quickly find what they need.",
                    },
                    {
                        title: "Contact form & click-to-call",
                        icon: "form",
                        desc: "A direct path for calls, messages, and inquiries.",
                    },
                    {
                        title: "Embedded Google Map",
                        icon: "map",
                        desc: "Easy directions so local customers can find you fast.",
                    },
                    {
                        title: "Basic local SEO setup (titles, meta, indexing)",
                        icon: "seo",
                        desc: "Solid SEO fundamentals so you’re ready to show up in search.",
                    },
                    {
                        title: "Performance & accessibility optimization",
                        icon: "speed",
                        desc: "Fast load times with usability baked in.",
                    },
                    {
                        title: "Social sharing preview",
                        icon: "share",
                        desc: "Clean preview cards for texts, DMs, and social links.",
                    },
                    {
                        title: "Hosting setup & deployment",
                        icon: "deploy",
                        desc: "Launch handled end-to-end—no technical handoffs.",
                    },
                    {
                        title: "First month of Site Care included (Basic)",
                        icon: "updates",
                        desc: "Post-launch support to keep things stable and stress-free.",
                    },
                ],
                outcome: [
                    "A professional online presence customers trust",
                    "Easier discovery in local search results",
                    "More calls, messages, and inquiries",
                    "A site that works immediately and scales with the business",
                ],
                timeline: "2 weeks",
                priceFrom: "Starting at $1,200",
                priceFromValue: 1200,
                href: "/services/local-business-bundle",
                icon: "web",
                featured: false,
                active: true,
                note: "Everything your local business needs to look credible online—handled in one streamlined package.",
            },
            {
                id:"comment-app-mvp",
                title: "Comment App MVP",
                blurb: " A lean MVP for a comment/discussion experience.",
                long: "A lightweight but functional app with accounts, comments, likes, and moderation—everything you need for a Minimum Viable Product",
                bullets: ["Auth & roles", "Posts/comments/likes", "Admin portal"],
                includes: [
                    "User authentication & roles",
                    "Posts, comments, likes",
                    "Admin portal",
                    "Basic analytics dashboard",
                    "Responsive design",
                ],
                outcome: [
                    "Validate your community idea fast",
                    "Gain early adopters with a real product",
                    "Collect feedback before scaling"
                ],
                timeline: "4 weeks",
                priceFrom: "Starting at $6,000",
                priceFromValue: 6000,
                href: "/services/comment-app-mvp",
                icon: "backend",
                featured: false,
                active: false,
            },
            {
                id:"ecommerce-lite",
                title: "E-commerce Lite",
                blurb: "Launch a simple storefront with the essentials.",
                long: "Sell products quickly and securely with a streamlined online store powered by Stripe.",
                bullets: ["Product pages", "Cart/Checkout", "Stripe checkout"],
                includes: [
                    "Product pages",
                    "Shopping cart",
                    "Stripe checkout",
                    "Order dashboard",
                    "Tax/shipping integration",
                    "SEO‑friendly responsive design",
                ],
                outcome: [
                    "Start selling securely online",
                    "Deliver a smooth checkout experience",
                    "Grow with an SEO-friendly storefront"
                ],
                timeline: "2-4 weeks",
                priceFrom: "Starting at $4,000",
                priceFromValue: 4000,
                icon: "cart",
                featured: false,
                active: false,
            },
        ],
    },
    {
        id: "celebration-sites",
        title: "Celebration Sites",
        items: [
            {
                id:"wedding-website",
                title: "Wedding Website",
                blurb: "A beautifully designed wedding website that keeps all your details, RSVPs, and guest information in one elegant place—so you can focus on the celebration.",
                long: "Your wedding website is the central hub for everything your guests need to know. From schedules and locations to RSVPs and special notes, we design a custom site that feels personal, polished, and easy to use on any device.",
                extLong: "Our wedding websites are thoughtfully designed to reduce guest questions and last-minute confusion while reflecting your style as a couple. The result is a timeless, shareable website that makes planning smoother, communication clearer, and your wedding experience more enjoyable—for you and your guests.",
                sub: [
                    "Couples who want all wedding details in one place",
	                "Weddings with multiple events or locations",
                    "Couples who want a polished, shareable site for guests",
                    "Anyone tired of answering the same questions repeatedly",
                ],
                bullets: [
                    "Custom wedding website",
                    "RSVP with guest details",
                    "Schedule & locations",
                    "Mobile-friendly design",
                    "Easy to share with guests",
                ],
                includes: [
                    { title: "Custom-designed wedding website", icon: "layout", desc: "Designed to match your style with a clean, modern layout." },
                    { title: "Couple story or welcome section", icon: "heart", desc: "A personal touch that sets the tone and feels intentional." },
                    { title: "Wedding schedule & event details", icon: "calendar", desc: "Clear, mobile-first schedules guests can actually follow." },
                    { title: "Locations with maps", icon: "map", desc: "Google Maps links for every venue and event." },
                    { title: "RSVP form with plus-one support", icon: "form", desc: "Collect responses cleanly—no spreadsheet chaos." },
                    { title: "Dietary notes & song requests", icon: "dashboard", desc: "All guest notes organized and easy to export." },
                    { title: "Travel & hotel information", icon: "strategy", desc: "Everything guests need, in one place." },
                    { title: "Social sharing preview", icon: "share", desc: "Beautiful preview cards for texts and invitations." },
                    { title: "Hosting setup & deployment", icon: "deploy", desc: "Launch handled end-to-end—no stress." },
                ],
                outcome: [
                    "All wedding details in one beautiful place",
                    "Guests know exactly where to be and when",
                    "Fewer questions and last-minute confusion",
                    "A timeless website worth keeping after the day",
                ],
                timeline: "1-2 weeks",
                priceFrom: "Starting at $500",
                priceFromValue: 500,
                href: "/services/wedding-website",
                icon: "event",
                featured: true,
                active: true,
                note: "Designed to be beautiful now—and worth keeping long after the day has passed.",
                demoUrl: "/services/demos/happily-ever-after",
            },
            {
                id:"event-website",
                title: "Event & Party Website",
                blurb: "A polished event website that keeps all your details, RSVPs, and schedules in one easy-to-share place—so guests know exactly where to be and when.",
                long: "Event and party websites are designed to simplify communication and make hosting easier. We create custom websites that clearly present event details, schedules, locations, and RSVPs in a single, mobile-friendly experience your guests can access anywhere.",
                extLong: "Whether you’re planning a birthday party, corporate event, fundraiser, or special celebration, this service provides a professional, organized hub for your event. The result is fewer questions, smoother coordination, and a clean, shareable website you can confidently send to every guest.",
                sub: [
                    "Hosts planning parties, celebrations, or special events",
                    "Corporate teams organizing events or fundraisers",
                    "Anyone who needs to share schedules, locations, and RSVPs",
                    "Events where clarity and communication matter",
                ],
                bullets: [
                    "Custom event website",
                    "RSVP & guest details",
                    "Schedule & location info",
                    "Mobile-friendly design",
                    "Easy to share link",
                ],
                includes: [
                    {
                        title: "Custom-designed event website",
                        icon: "layout",
                        desc: "A clean, polished site tailored to your event and audience.",
                    },
                    {
                        title: "Event overview (date, time, location)",
                        icon: "strategy",
                        desc: "Clear details presented upfront so nothing gets missed.",
                    },
                    {
                        title: "Schedule or agenda section",
                        icon: "calendar",
                        desc: "Organized timelines guests can follow easily on any device.",
                    },
                    {
                        title: "RSVP form with guest fields",
                        icon: "form",
                        desc: "Collect responses cleanly without manual tracking.",
                    },
                    {
                        title: "Embedded map & directions",
                        icon: "map",
                        desc: "Direct Google Maps integration for smooth navigation.",
                    },
                    {
                        title: "Things to Know or FAQ section",
                        icon: "dashboard",
                        desc: "Answer common questions before they’re asked.",
                    },
                    {
                        title: "Mobile-responsive design",
                        icon: "accessibility",
                        desc: "Built to look and function perfectly on phones first.",
                    },
                    {
                        title: "Social sharing preview",
                        icon: "share",
                        desc: "Beautiful preview cards for invitations and links.",
                    },
                    {
                        title: "Hosting setup & deployment",
                        icon: "deploy",
                        desc: "Launch handled completely—no technical stress.",
                    },
                ],

                outcome: [
                    "All event details in one clear place",
                    "Guests know where to be and when",
                    "Fewer questions and follow-ups",
                    "A polished link you can confidently share",
                ],
                timeline: "1-2 weeks",
                priceFrom: "Starting at $350",
                priceFromValue: 350,
                href: "/services/event-website",
                icon: "event",
                featured: false,
                active: true,
                addons: [
                    {
                        id: "extra-page",
                        name: "Extra Page",
                        price: "$75-$125",
                    },
                    {
                        id: "care",
                        name: "Site Care (post-event archive / edits)",
                        price: "$25-$50",
                    },
                ],
                note: "Designed to keep your event organized—and your guests informed",
                demoUrl: "/services/demos/wedding-cocktail",
            },
            {
                id:"party-website",
                title: "Party Website",
                blurb: "A fun, sharable page with details and RSVPs.",
                long: "A personalized event site for details, RSVPs, and memories.",
                bullets: ["Invite & RSVP", "Photos", "Wishlist/registry (optional)"],
                includes: [
                    {
                        title: "1–2 pages (Party Details + RSVP)",
                        icon: "layout",
                        desc: "A focused, streamlined layout that keeps everything simple.",
                    },
                    {
                        title: "RSVP form",
                        icon: "form",
                        desc: "Quick guest responses without messy group texts.",
                    },
                    {
                        title: "Photo gallery or slideshow",
                        icon: "gallery",
                        desc: "Share memories, highlights, or event photos beautifully.",
                    },
                    {
                        title: "Venue details",
                        icon: "map",
                        desc: "Clear address, directions, and location info.",
                    },
                    {
                        title: "Optional wishlist or registry links",
                        icon: "share",
                        desc: "Easy access to gift links without clutter.",
                    },
                    {
                        title: "Themed design",
                        icon: "heart",
                        desc: "A playful design style that fits the vibe of your party.",
                    },
                ],
                outcome: "Make your party unforgettable with RSVPs, details, and memories in one place.",
                timeline: "5 business days",
                priceFrom: "Starting at $1,200",
                priceFromValue: 1200,
                href: "/services/birthday-website",
                icon: "event",
                featured: false,
                active: false,
            },
        ],
    },
    {
        id: "professional-personal-sites",
        title: "Professional & Personal Sites",
        items: [
            {
                id:"resume-website",
                title: "Resume Website",
                blurb: "A polished personal website that showcases your experience, skills, and work in one professional, easy-to-share place.",
                long: "A resume website gives you more control over how your experience is presented than a traditional PDF alone. We design a clean, modern website that highlights your background, skills, and accomplishments while remaining easy to navigate and accessible on any device.",
                extLong: "This service is ideal for professionals, creatives, and career switchers who want to stand out with a professional online presence. Your resume website acts as a living extension of your resume—perfect for job applications, networking, and sharing your work with confidence.",
                bullets: [
                    "Personal resume website",
                    "Experience & skills sections",
                    "Mobile-friendly design",
                    "Easy to share link",
                    "Professional presentation",
                ],
                includes: [
                    {
                        title: "Custom-designed resume website",
                        icon: "layout",
                        desc: "A clean, modern presentation tailored to your career goals.",
                    },
                    {
                        title: "Experience, skills & education sections",
                        icon: "strategy",
                        desc: "Structured clearly so hiring managers find what matters fast.",
                    },
                    {
                        title: "Project or portfolio highlights",
                        icon: "gallery",
                        desc: "Show real work with context—not just bullet points.",
                    },
                    {
                        title: "Mobile-responsive design",
                        icon: "accessibility",
                        desc: "Optimized for recruiters reviewing on any device.",
                    },
                    {
                        title: "Contact button or email link",
                        icon: "form",
                        desc: "Make it easy to connect without friction.",
                    },
                    {
                        title: "Downloadable PDF resume (optional)",
                        icon: "upload",
                        desc: "Pair your website with a traditional resume when needed.",
                    },
                    {
                        title: "Basic SEO & social preview setup",
                        icon: "seo",
                        desc: "Professional search and link previews built in.",
                    },
                    {
                        title: "Hosting setup & deployment",
                        icon: "deploy",
                        desc: "Launch handled end-to-end—ready to share immediately.",
                    },
                ],

                outcome: [
                    "A professional online presence that stands out",
                    "An easy link to share with employers and recruiters",
                    "Clear presentation of skills and experience",
                    "A site that complements a traditional resume",
                ],
                timeline: "5 business days",
                priceFrom: "Starting at $250",
                priceFromValue: 250,
                href: "/services/resume-website",
                icon: "resume",
                featured: false,
                active: true,
                note: "A professional presence that works alongside your resume—not instead of it.",
                demoUrl: "/services/demos/ariana-james-resume"
            },
            {
                id: "portfolio-strater-website",
                title: "Portfolio Starter Website",
                blurb:"A clean, modern website designed to showcase your work and make it easy for clients to reach you. Ideal for creatives who’ve outgrown templates and want something more intentional.",
                long: "The Portfolio Starter Site is a streamlined, professional website built specifically for creatives who want their work to speak for itself.",
                extLong: "If you’re relying on social media or a DIY template, this gives you a polished online home you can confidently share with clients, collaborators, and opportunities.",
                sub: [
                    "Creatives who want a polished online home for their work",
                    "Photographers, designers, stylists, chefs, and creative professionals",
                    "Anyone who’s outgrown templates or social-only portfolios",
                    "Those who want something professional without unnecessary complexity",
                ],
                bullets: [
                    "Custom portfolio website",
                    "Image-focused design",
                    "Mobile-friendly layout",
                    "Easy contact options",
                ],
                includes: [
                    {
                        title: "Custom 1–3 page website",
                        icon: "layout",
                        desc: "A focused, streamlined structure built to showcase your work.",
                    },
                    {
                        title: "Image-focused design",
                        icon: "gallery",
                        desc: "Clean layouts that let your visuals lead without distraction.",
                    },
                    {
                        title: "Personalized styling",
                        icon: "strategy",
                        desc: "Typography, spacing, and tone aligned with your creative identity.",
                    },
                    {
                        title: "Launch-ready setup",
                        icon: "deploy",
                        desc: "Fully deployed and optimized—ready to share immediately.",
                    },
                ],

                outcome: [
                    "A professional website you can confidently share with clients and collaborators",
                    "polished online home that reflects the quality of your work",
                    "A clean, distraction-free portfolio that works across devices",
                    "site that feels intentional, credible, and easy to navigate",
                ],
                timeline: "7-10 business days",
                priceFrom: "Starting at $250",
                priceFromValue: 250,
                href: "/services/portfolio-strater-website",
                icon: "resume",
                addons: [
                    {
                        id: "extra-page",
                        name: "Additional Page",
                        price: "$50"
                    },
                    {
                        id: "extra-gallery",
                        name: "Extra Gallery",
                        price: "$40",
                    },
                    {
                        id: "booking-integration",
                        name: "Booking Integration",
                        price: "$50",
                    },
                    {
                        id: "copy-assistance",
                        name: "Copy Assistance",
                        price: "$50",
                    },
                ],
                featured: true,
                active: true,
                note: "This service is focused on presentation and clarity. It’s ideal for showcasing your work, not for complex systems, dashboards, or custom functionality.",
            },
        ],
    },
    {
        id: "fix-and-care",
        title: "Fix & Care (Support & Optimization)",
        items: [
            {
                id:"fix-and-refresh-package",
                title: "Fix & Refresh Package",
                blurb: "A focused audit and cleanup designed to fix issues, improve performance, and refresh your existing website—without starting from scratch.",
                long: "Fix & Care is a targeted service for websites that mostly work but need professional attention. We begin with a full audit to identify issues affecting usability, performance, and reliability, then apply a focused set of fixes and optimizations to bring your site back up to modern standards.",
                extLong: "This package is ideal for outdated sites, recent launches with lingering bugs, or businesses that need stability and polish before investing in a full rebuild. The goal is simple: fix what’s broken, refresh what matters, and leave you with a website that feels solid, fast, and dependable.",
                sub: [
                   " Websites that mostly work but need professional cleanup",
                    "Sites with bugs, layout issues, or performance problems",
                    "Businesses not ready for a full redesign",
                    "Owners who want stability and polish without starting over",
                ],
                bullets: [
                    "Website audit & cleanup",
                    "Bug & layout fixes",
                    "Performance optimization",
                    "Security & SSL updates",
                    "No full rebuild required",
                ],
                includes: [
                    {
                        title: "Full website audit (UX, layout, performance)",
                        icon: "strategy",
                        desc: "A structured review to identify usability, layout, and speed issues.",
                    },
                    {
                        title: "Bug fixes and broken layout repairs",
                        icon: "updates",
                        desc: "Resolve functional issues and clean up visual inconsistencies.",
                    },
                    {
                        title: "Responsive & mobile cleanup",
                        icon: "accessibility",
                        desc: "Ensure smooth behavior across phones, tablets, and desktops.",
                    },
                    {
                        title: "Performance optimization",
                        icon: "speed",
                        desc: "Improve load times and overall site responsiveness.",
                    },
                    {
                        title: "SSL and security updates",
                        icon: "shield",
                        desc: "Stabilize and secure your site against common vulnerabilities.",
                    },
                    {
                        title: "Light UI/UX polish",
                        icon: "layout",
                        desc: "Subtle refinements that improve clarity and visual consistency.",
                    },
                    {
                        title: "Browser and device testing",
                        icon: "dashboard",
                        desc: "Cross-browser testing to catch edge cases before users do.",
                    },
                    {
                        title: "Two focused revision rounds",
                        icon: "updates",
                        desc: "Structured refinement without scope creep.",
                    },
                    {
                        title: "Summary of fixes applied",
                        icon: "deploy",
                        desc: "A clear breakdown of improvements and next steps.",
                    },
                ],

                outcome: [
                    "A more stable and reliable website",
                    "Faster load times and smoother performance",
                    "Fewer bugs and layout issues",
                    "A refreshed site ready to support business goals",
                ],
                timeline: "3-7 business days",
                priceFrom: "Starting at $150",
                priceFromValue: 150,
                href: "/services/fix-and-refresh-package",
                icon: "tool",
                featured: false,
                active: true,
                note: "Not intended for full redesigns or large feature builds.",
            },
            {
                id:"optimization-pass",
                title: "Optimization Pass",
                blurb: "A one-time performance and accessibility tune-up designed to make your website faster, smoother, and easier to use.",
                long: "The Optimization Pass is a focused, one-time service for improving how your website performs. We analyze speed, accessibility, and mobile behavior, then apply targeted optimizations to bring your site up to modern performance standards—without changing its core design or structure.",
                extLong: "This service is ideal for sites that look fine but feel slow, score poorly in audits, or struggle on mobile. The result is a faster, more accessible website that loads quickly, performs reliably, and delivers a better experience for every visitor.",
                bullets: [
                    "Performance & accessibility audit",
                    "Speed & mobile optimization",
                    "Core Web Vitals improvements",
                    "90+ Lighthouse targets",
                    "One-time optimization pass",
                ],
                includes: [
                    {
                        title: "Performance audit (Lighthouse & Core Web Vitals)",
                        icon: "speed",
                        desc: "Detailed scoring across performance, accessibility, and best practices.",
                    },
                    {
                        title: "Accessibility review (WCAG basics)",
                        icon: "accessibility",
                        desc: "Baseline accessibility improvements for inclusive usability.",
                    },
                    {
                        title: "Mobile performance optimization",
                        icon: "dashboard",
                        desc: "Targeted refinements to improve speed and responsiveness on phones.",
                    },
                    {
                        title: "Image, asset, and load-time optimizations",
                        icon: "seo",
                        desc: "Compression, lazy loading, and asset cleanup for faster delivery.",
                    },
                    {
                        title: "Fixes targeting 90+ Lighthouse scores",
                        icon: "strategy",
                        desc: "Focused improvements designed to raise measurable performance metrics.",
                    },
                    {
                        title: "Before-and-after performance report",
                        icon: "share",
                        desc: "Clear comparison so you can see exactly what improved.",
                    },
                    {
                        title: "Cross-device testing",
                        icon: "updates",
                        desc: "Validation across modern browsers and devices.",
                    },
                ],
                outcome: [
                    "Faster page load times",
                    "Improved accessibility and usability",
                    "Higher performance audit scores",
                    "A smoother experience across devices",
                ],
                timeline: "3-7 business days",
                priceFlat: "$200",
                priceFromValue: 200,
                href: "/services/optimization-pass",
                icon: "seo",
                featured: false,
                active: true,
                note: "Focused on performance and accessibility—not design changes or feature development.",
            },
            {
                id:"site-care-plans",
                title: "Site Care Plans",
                blurb: "Ongoing website care that keeps your site secure, up to date, and running smoothly—without the stress of handling it yourself.",
                long: "Site Care Plans provide continuous maintenance and support for websites that need to stay reliable over time. Instead of reacting to issues when something breaks, we proactively handle updates, backups, performance checks, and small improvements to keep your site running smoothly behind the scenes.",
                extLong: "This service is ideal for businesses and creators who rely on their website and want peace of mind after launch. With ongoing care, your site stays secure, current, and supported—so you can focus on your work while we handle the technical upkeep.",
                plans: [
                    {
                        id: "essential",
                        name: "Essential",
                        price: "$49/mo",
                        perks: [
                            "Hosting + uptime monitoring",
                            "Security updates",
                            "Monthly backups",
                            "Minor content edits (up to ~30 mins/month)",
                            "Email support",
                        ],
                        featured: false,
                    },
                    {
                        id: "growth",
                        name: "Growth",
                        price: "$99/mo",
                        plus: "Includes everything in Essential, plus:",
                        perks: [
                            "Priority support",
                            "Performance checks & optimization",
                            "Content updates (up to ~1.5 hrs/month)",
                            "Monthly site health report",
                            "SEO + analytics monitoring",
                        ],
                        featured: true,
                    },
                    {
                        id: "studio",
                        name: "Studio",
                        price: "$199/mo",
                        plus: "Includes everything in Growth, plus:",
                        perks: [
                            "Up to ~4 hrs/month of updates or improvements",
                            "Feature tweaks / small enhancements",
                            "On-call dev support",
                            "Quarterly strategy check-in",
                            "Emergency fixes (same-day response)",
                        ],
                        featured: false,
                    },
                ],
                includes: [
                    {
                        title: "Proactive monitoring",
                        icon: "dashboard",
                        desc: "Continuous uptime and health checks to catch issues early.",
                    },
                    {
                        title: "Security & stability",
                        icon: "shield",
                        desc: "Ongoing updates and protection to reduce risk.",
                    },
                    {
                        title: "Performance oversight",
                        icon: "speed",
                        desc: "Regular checks to keep your site running smoothly.",
                    },
                    {
                        title: "Content support",
                        icon: "updates",
                        desc: "Structured time for edits, tweaks, and small improvements.",
                    },
                    {
                        title: "Clear communication",
                        icon: "strategy",
                        desc: "Defined support structure—no disappearing devs.",
                    },
                ],

                outcome: [
                    "A website that stays secure, current, and dependable",
                    "Proactive care instead of reactive fixes",
                    "Ongoing improvements that compound over time",
                    "Confidence knowing your digital presence is supported",
                ],

                addons: [
                    {
                        id: "extra-dev-time",
                        name: "Extra Development Time",
                        price: "$50/hr",
                        desc: "Additional development time beyond your plan’s included hours.",
                        popular: true,
                    },
                    {
                        id: "seo-lite",
                        name: "SEO Lite Monitoring",
                        price: "$29/mo",
                        desc: "On-page checks and basic SEO health monitoring.",
                    },
                    {
                        id: "content-updates",
                        name: "Content Writing & Updates",
                        price: "From $75/mo",
                        desc: "Light copy updates and page content assistance.",
                    },
                    {
                        id: "hosting-only",
                        name: "Hosting Only",
                        price: "$19/mo",
                        desc: "Secure hosting without updates or content changes.",
                    },
                ],
                href: "/services/site-care-plans",
                icon: "tool",
                featured: false,
                active: true,
                note: "Designed for sites that need ongoing attention—not set-it-and-forget-it launches.",
            },
        ],
    },
    {
        id: "design-and-integrations",
        title: "Design and Integrations",
        items: [
            {
                id: "brand-starter-kit",
                title: "Brand Starter Kit",
                blurb: "A lightweight visual identity to guide design.",
                long: "A lightweight branding system to guide your website or app design.",
                bullets: ["Logo/marks", "Colors & type", "UI screens"],
                includes: [
                    "Moodboard",
                    "Color palette",
                    "Typography",
                    "Component starter library",
                    "3–5 high‑fidelity UI screens",
                ],
                outcome: "A clear, lightweight visual identity to guide your website or app design.",
                timeline: "1-2 weeks",
                priceFrom: "Starting at $1,200",
                priceFromValue: 1200,
                href: "/services/brand-starter-kit",
                icon: "web",
                featured: false,
                active: false,
            },
            {
                id:"integrations-and-automation",
                title: "Integrations & Automation",
                blurb: "Connect tools and automate your workflow.",
                long: "Streamline processes with integrations between your apps and services.",
                bullets: ["Stripe/Notion/Airtable", "Dashboards", "Zapier/Make"],
                includes: [
                    "Stripe, Notion, Airtable, Google Sheets",
                    "Zapier/Make",
                    "Webhooks",
                    "Dashboards",
                    "Custom email notifications",
                ],
                outcome: [
                    "Save time with automated workflows",
                    "Connect your tools seamlessly",
                    "Track everything with custom dashboards"
                ],
                timeline: "2-10 days",
                priceFrom: "Starting at $660 per integration",
                priceFromValue: 660,
                href: "/services/integrations-and-automation",
                icon: "backend",
                featured: false,
                active: false,
            },
        ],
    },
    {
        id: "software-solutions",
        title: "Software Solutions",
        items: [
            {
                id: "custom-web-app",
                title: "Custom Web Application",
                blurb: "Tailored applications built for your unique workflows.",
                long: "We design and develop custom web applications that go beyond marketing websites. From internal tools to dashboards and client portals, we build scalable, secure solutions that evolve with your business.",
                bullets: ["Scalable full-stack architecture", "Secure user authentication", "Intuitive dashboards & UIs"],
                includes: [
                    "Full-stack development (frontend + backend)",
                    "Authentication & authorization",
                    "Database design & integration",
                    "Responsive UI/UX design",
                    "Deployment & hosting setup",
                ],
                outcome: [
                    "A scalable app built to grow with your business",
                    "Improved efficiency through tailored workflows",
                    "Secure, reliable access for your team and customers",
                ],
                timeline: "4-6 weeks",
                priceFrom: "Starting at $5,000",
                priceFromValue: 5000,
                href: "/services/software-solutions",
                icon: "backend",
                featured: false,
                active:false,
            },
            {
                id: "saas-mvp-package",
                title: "SaaS MVP Package",
                blurb: "Launch your SaaS idea with a lean, production-ready MVP.",
                long: "Designed for founders and startups, this package delivers a working SaaS prototype with just the essential features to test, onboard early adopters, and attract investors.",
                bullets: ["Subscription billing built-in", "Admin and user dashboards", "Secure, scalable deployment"],
                includes: [
                    "Authentication & user accounts",
                    "Stripe subscriptions & billing logic",
                    "User dashboards + admin panel",
                    "Responsive SaaS-ready UI",
                    "Secure deployment & CI/CD setup",
                ],
                outcome: [
                    "A functioning SaaS MVP ready for first users",
                    "Ability to test, iterate, and validate your idea",
                    "Core infrastructure set for scaling",
                ],
                timeline: "6-8 weeks",
                priceFrom: "Starting at $8,000",
                priceFromValue: 8000,
                href: "/services/saas-mvp-package",
                icon: 'backend',
                featured: false,
                active:false,
            },
            {
                id: "api-development-and-integration",
                title: "API Development & Integration",
                blurb: "Connect your systems with custom APIs or seamless integrations.",
                long: "Whether you need a new API or integrations with third-party services, we ensure your apps, websites, and tools communicate smoothly.",
                bullets: ["REST & GraphQL APIs", "Third-party service integrations", "Clean documentation included"],
                includes: [
                    "Custom REST/GraphQL APIs",
                    "Integrations with Stripe, Notion, Airtable, Google Sheets, etc.",
                    "Workflow automation endpoints",
                    "API docs & handoff guide",
                ],
                outcome: [
                    "Reliable connections between apps & systems",
                    "Faster, automated workflows",
                    "Reduced errors and data duplication",
                ],
                timeline: "1-3 weeks",
                priceFrom: "Starting at $1,500",
                priceFromValue: 1500,
                href: "/services/api-development-and-integration",
                icon: "backend",
                featured: false,
                active:false,
            },
            {
                id: "automation-and-workflow-tools",
                title: "Automation & Workflow Tools",
                blurb: "Automate repetitive tasks and save hours every week.",
                long: "Stop wasting time on manual busywork. We build automations that sync data, generate reports, and streamline your team’s daily processes.",
                bullets: ["Zapier & Make (Integromat) setups", "Custom Node.js scripts", "Automated reporting & notifications"],
                includes: [
                    "Workflow automation setup",
                    "Data syncing between apps",
                    "Reporting dashboards",
                    "Custom scripts & notifications",
                ],
                outcome: [
                    "Hours saved on repetitive tasks",
                    "Greater accuracy and consistency",
                    "Smooth cross-app data flows",
                ],
                timeline: "1-3 weeks",
                priceFrom: "Starting at $1,200",
                priceFromValue: 1200,
                href: "/services/automation-and-workflow-tools",
                icon: "backend",
                featured: false,
                active:false,
            },
            {
                id: "database-design-and-management",
                title: "Database Design & Management",
                blurb: "Reliable database architecture for performance at scale.",
                long: "A properly structured database keeps your systems fast, secure, and easy to maintain. We handle design, optimization, and ongoing management.",
                bullets: ["Optimized schema design", "High-performance queries", "Backup & recovery strategies"],
                includes: [
                    "Schema planning & setup",
                    "Postgres/MySQL configuration",
                    "Supabase or Firebase integration",
                    "Indexing & performance tuning",
                    "Backup & monitoring setup",
                ],
                outcome: [
                    "Faster performance and scalability",
                    "Secure and reliable data handling",
                    "Peace of mind with backups & monitoring",
                ],
                timeline: "2-4 weeks",
                priceFrom: "Starting at $2,500",
                priceFromValue: 2500,
                href: "/services/database-design-and-management",
                icon: "backend",
                featured: false,
                active:false,
            },
            {
                id: "internal-tools-package",
                title: "Internal Tools Package",
                blurb: "Software designed specifically for your team’s operations.",
                long: "When off-the-shelf tools don’t fit, we build internal software to match your workflows — from scheduling to project tracking and beyond.",
                bullets: ["Role-based access & permissions", "Custom dashboards & reports", "Secure deployment included"],
                includes: [
                    "Authentication & role management",
                    "Dashboards tailored to workflows",
                    "Reporting & data visualization",
                    "Secure deployment setup",
                ],
                outcome: [
                    "Centralized tools built just for your team",
                    "Better visibility into operations",
                    "Increased productivity and collaboration",
                ],
                timeline: "3-5 weeks",
                priceFrom: "Starting at $3,500",
                priceFromValue: 3500,
                href: "/services/internal-tools-package",
                icon: "backend",
                featured: false,
                active:false,
            },
        ],
    },
];

export const FEATURED_SERVICES: Service[] = SERVICE_CATEGORIES
    .flatMap((c) => c.items)
    .filter((s) => s.featured && s.active !== false);

export function getServiceByIcon(icon: IconKey) {
    return allServices.filter(s => s.icon === icon);
}

export function getActiveServices() {
    return allServices.filter(s => s.active !== false);
}

export function getSortedByPrice() {
    return allServices
        .filter(
            (s): s is Service & { priceFromValue: number } =>
                typeof s.priceFromValue === "number"
        )
        .sort((a, b) => a.priceFromValue - b.priceFromValue);
}

export const allServices = SERVICE_CATEGORIES.flatMap((c) => c.items);

export function getServiceById(id: string | undefined) {
    if (!id) return undefined;

    const norm = id.trim().toLowerCase();

    return allServices.find(
        (s) => s.id.trim().toLowerCase() === norm
    )
}