export type NavItem = {
  label: string;
  href: string;
  navKey: "home" | "about" | "stack" | "projects" | "experience" | "contact";
};

export type TrustMetric = {
  value: string;
  label: string;
  detail: string;
};

export type HighlightItem = {
  title: string;
  description: string;
};

export type StackItem = {
  name: string;
  category: "Frontend" | "Backend" | "Mobile" | "Data & Styling";
  note: string;
};

export type ProjectLink = {
  label: string;
  href: string;
  kind: "case-study" | "github" | "demo";
};

export type ProjectFeature = {
  title: string;
  description: string;
};

export type ProjectMedia = {
  title: string;
  caption: string;
  stat: string;
  imageSrc?: string;
  imageAlt?: string;
};

export type ProjectCaseStudy = {
  slug: string;
  title: string;
  category: string;
  impactLine: string;
  summary: string;
  description: string;
  role: string;
  result: string;
  stack: string[];
  features: ProjectFeature[];
  overview: string;
  problem: string;
  goal: string;
  process: string[];
  challenges: string[];
  solution: string[];
  outcome: string[];
  media: ProjectMedia[];
  accent: {
    from: string;
    to: string;
  };
  links: ProjectLink[];
};

export type ExperienceItem = {
  role: string;
  company: string;
  period: string;
  location: string;
  summary: string;
  highlights: string[];
  tags: string[];
};

export type ServiceItem = {
  title: string;
  description: string;
};

export type ProofItem = {
  title: string;
  description: string;
};

export type ContactLink = {
  label: string;
  href: string;
  display: string;
  icon: "mail" | "github" | "linkedin" | "facebook";
};

export type PortfolioData = {
  siteMeta: {
    title: string;
    description: string;
    url: string;
    keywords: string[];
  };
  profile: {
    name: string;
    initials: string;
    title: string;
    location: string;
    availability: string;
    summary: string;
    tagline: string;
    photo: {
      src: string;
      alt: string;
      objectPosition: string;
      caption: string;
      badge: string;
    };
  };
  navItems: NavItem[];
  hero: {
    eyebrow: string;
    title: string;
    subtitle: string;
    supportingText: string;
    supportingNote: string;
    ctas: {
      primary: { label: string; href: string };
      secondary: { label: string; href: string };
      tertiary: { label: string; href: string; download: boolean };
    };
    profileCard: {
      eyebrow: string;
      title: string;
      description: string;
    };
    bottomPills: string[];
  };
  trustMetrics: TrustMetric[];
  about: {
    eyebrow: string;
    title: string;
    intro: string;
    paragraphs: string[];
    highlights: HighlightItem[];
  };
  whyHireMe: {
    eyebrow: string;
    title: string;
    intro: string;
    reasons: HighlightItem[];
  };
  techStack: {
    eyebrow: string;
    title: string;
    intro: string;
    items: StackItem[];
  };
  projectsSection: {
    eyebrow: string;
    title: string;
    intro: string;
  };
  projects: ProjectCaseStudy[];
  experienceSection: {
    eyebrow: string;
    title: string;
    intro: string;
    items: ExperienceItem[];
  };
  servicesSection: {
    eyebrow: string;
    title: string;
    intro: string;
    items: ServiceItem[];
  };
  proofSection: {
    eyebrow: string;
    title: string;
    intro: string;
    items: ProofItem[];
    availabilityHeading: string;
    availabilityBody: string;
  };
  contactSection: {
    eyebrow: string;
    title: string;
    intro: string;
    closingLine: string;
    links: ContactLink[];
  };
  footer: {
    tagline: string;
    copyright: string;
    backToTopLabel: string;
  };
};

export const portfolioData: PortfolioData = {
  siteMeta: {
    title: "Mark Brian Lloyd D. Cardoza | Full Stack Developer",
    description:
      "Premium recruiter-first portfolio for Mark Brian Lloyd D. Cardoza, a BSIT graduate building modern web and mobile systems with practical workflows and scalable architecture.",
    url: "https://example.com",
    keywords: [
      "Mark Brian Lloyd D. Cardoza",
      "Full Stack Developer",
      "Next.js Portfolio",
      "BSIT Developer",
      "Philippines Developer",
      "Web Development",
      "Mobile Development",
    ],
  },
  profile: {
    name: "Mark Brian Lloyd D. Cardoza",
    initials: "MBDC",
    title: "Full Stack Developer",
    location: "Philippines",
    availability:
      "Available for junior developer roles, internships, freelance projects, and collaborations.",
    summary:
      "BSIT graduate building modern web and mobile applications with clean UI, secure workflows, and real operational value.",
    tagline:
      "Full stack developer focused on practical systems, polished interfaces, and reliable product execution.",
    photo: {
      src: "/images/mark-brian-lloyd-d-cardoza.jpg",
      alt: "Graduation portrait of Mark Brian Lloyd D. Cardoza",
      objectPosition: "center 12%",
      caption: "BSIT graduate from Saint Joseph College - Maasin City, Southern Leyte.",
      badge: "Profile portrait",
    },
  },
  navItems: [
    { label: "Home", href: "#home", navKey: "home" },
    { label: "About", href: "#about", navKey: "about" },
    { label: "Stack", href: "#stack", navKey: "stack" },
    { label: "Projects", href: "#projects", navKey: "projects" },
    { label: "Experience", href: "#experience", navKey: "experience" },
    { label: "Contact", href: "#contact", navKey: "contact" },
  ],
  hero: {
    eyebrow: "Graduating BSIT Developer From The Philippines",
    title: "Mark Brian Lloyd D. Cardoza",
    subtitle:
      "Full Stack Developer",
    supportingText:
      "Building modern web and mobile systems with clean UI, secure workflows, and scalable architecture for teams that need dependable software, not just attractive screens.",
    supportingNote:
      "I turn operational needs into polished products, from internal government-style workflow systems to responsive platforms with real functionality, practical logic, and recruiter-ready execution.",
    ctas: {
      primary: { label: "Contact Me", href: "#contact" },
      secondary: { label: "View Projects", href: "#projects" },
      tertiary: {
        label: "Download CV",
        href: "/Mark_Brian_Cardoza_Resume.docx",
        download: true,
      },
    },
    profileCard: {
      eyebrow: "Graduating BSIT",
      title: "Mark Brian Lloyd D. Cardoza",
      description:
        "Developer intern experience, system workflow projects, and recruiter-ready presentation.",
    },
    bottomPills: [
      "DENR PENRO Intern",
      "Workflow Systems",
      "Web & Mobile",
      "Available for Junior Roles",
    ],
  },
  trustMetrics: [
    {
      value: "4 real systems",
      label: "Built around practical operations",
      detail: "From service requests to payroll and routing workflows.",
    },
    {
      value: "Web + Mobile",
      label: "Full stack capability",
      detail: "Comfortable across interface work, APIs, and data flows.",
    },
    {
      value: "DENR PENRO",
      label: "Developer internship exposure",
      detail: "Contributed to internal workflow-focused solutions.",
    },
    {
      value: "Workflow-first",
      label: "Built for actual users",
      detail: "Focused on approvals, records, visibility, and operational clarity.",
    },
  ],
  about: {
    eyebrow: "About",
    title: "Building software that fits real work.",
    intro:
      "I approach development as more than front-end polish or backend wiring. I focus on how people actually use systems, where bottlenecks happen, and how a product should behave when the workflow matters.",
    paragraphs: [
      "As a BSIT graduate from Saint Joseph College - Maasin City, Southern Leyte, I have been building systems that deal with practical business and public-service scenarios, including document routing, travel orders, payroll-related flows, and service request management.",
      "My goal is to create software that looks modern, feels reliable, and supports real operations with clean interfaces, secure logic, and maintainable architecture.",
    ],
    highlights: [
      {
        title: "Full stack delivery",
        description:
          "I work across interface design, backend logic, API integration, authentication-aware flows, and database structure.",
      },
      {
        title: "Workflow understanding",
        description:
          "I build systems around approvals, tracking, records, and operational visibility rather than generic demo features.",
      },
      {
        title: "Product-minded execution",
        description:
          "I care about usability, responsive behavior, and how a system earns trust through clarity and consistency.",
      },
    ],
  },
  whyHireMe: {
    eyebrow: "Why Hire Me",
    title: "A hireable developer with practical system experience.",
    intro:
      "I am positioned to contribute as an entry-level developer because I already think in terms of usable products, structured workflows, and production-ready implementation details.",
    reasons: [
      {
        title: "I build frontend and backend",
        description:
          "I can move from interface structure to API logic, data handling, and application flow without losing consistency across the product.",
      },
      {
        title: "I build for web and mobile",
        description:
          "My experience covers responsive web interfaces and mobile-oriented thinking, helping ideas translate into the right experience for the platform.",
      },
      {
        title: "I focus on clean UI and real functionality",
        description:
          "Visual polish matters, but so do form states, permission-aware actions, records, approvals, and the details users rely on every day.",
      },
      {
        title: "I understand user workflows",
        description:
          "I think about handoffs, statuses, queues, and the friction points that make internal systems confusing when they are not designed carefully.",
      },
      {
        title: "I build responsive modern interfaces",
        description:
          "I care about hierarchy, spacing, and adaptability so the interface remains clear across desktop, tablet, and mobile screens.",
      },
      {
        title: "I turn ideas into usable systems",
        description:
          "I can take a concept, structure the product around the workflow, and turn it into something people can actually use and manage.",
      },
    ],
  },
  techStack: {
    eyebrow: "Stack",
    title: "Modern tools for real product delivery.",
    intro:
      "My stack supports polished interfaces, maintainable logic, and application flows that can grow with the product.",
    items: [
      { name: "HTML", category: "Frontend", note: "Semantic structure" },
      { name: "CSS", category: "Frontend", note: "Responsive styling" },
      { name: "JavaScript", category: "Frontend", note: "Interactive behavior" },
      { name: "React", category: "Frontend", note: "Component architecture" },
      { name: "Next.js", category: "Frontend", note: "App router and SSR" },
      { name: "Node.js", category: "Backend", note: "Runtime and services" },
      { name: "Express", category: "Backend", note: "API development" },
      { name: "Firebase", category: "Backend", note: "Auth and cloud services" },
      { name: "PostgreSQL", category: "Backend", note: "Structured data design" },
      { name: "React Native", category: "Mobile", note: "Mobile interfaces" },
      { name: "Tailwind CSS", category: "Data & Styling", note: "Design systems" },
    ],
  },
  projectsSection: {
    eyebrow: "Featured Projects",
    title: "Real systems presented like real products.",
    intro:
      "These projects are framed around the operational problems they solve, the workflows they support, and the product value they deliver.",
  },
  projects: [
    {
      slug: "maasin-city-help-app",
      title: "Maasin City H.E.L.P. App",
      category: "Capstone Service Marketplace",
      impactLine:
        "Defended capstone platform that connects clients with verified providers through moderated booking, live tracking, and staged payments.",
      summary:
        "A service-booking application where clients can find providers, submit requests with issue images, and move through a workflow designed for verification, safety, and clearer coordination.",
      description:
        "Built and defended as our capstone project, the Maasin City H.E.L.P. App helps clients discover service providers, request assistance, and complete bookings through an admin-reviewed process with provider verification, location tracking, and PayMongo-powered split payments.",
      role: "Capstone Team Member / Full Stack Developer",
      result:
        "Developed a more structured and safety-focused booking workflow that validates providers, reviews requests, and improves coordination between clients and service providers.",
      stack: ["Next.js", "TypeScript", "Node.js", "Express", "PostgreSQL", "PayMongo"],
      features: [
        {
          title: "Verified provider onboarding",
          description:
            "Provider registration requires a face photo, barangay clearance, police clearance, and a government-issued ID before access is approved.",
        },
        {
          title: "Admin-reviewed booking flow",
          description:
            "Clients can book a provider and upload an image of the issue, then the request is reviewed by admin before it is forwarded to the provider for approval.",
        },
        {
          title: "Live tracking and split payment",
          description:
            "Both client and provider can track location during travel, with PayMongo supporting a 50% payment at booking and the remaining 50% after the work is completed.",
        },
      ],
      overview:
        "The Maasin City H.E.L.P. App was developed and defended as our capstone project. It functions as a service-booking platform where clients can find providers, submit requests, and complete transactions through a verified, workflow-driven process.",
      problem:
        "Service booking can become risky and disorganized when clients cannot verify providers, admins cannot review requests, and both sides lack visibility into booking status, travel progress, and payment protection.",
      goal:
        "Create a safer service marketplace that supports verified provider onboarding, reviewed booking requests, live coordination, and staged payments from booking to completion.",
      process: [
        "Mapped the full booking journey from client discovery and request submission to provider approval, travel, and completion.",
        "Designed request screens that let clients describe the problem and upload an image for validation.",
        "Structured the workflow so admin approval happens first, followed by provider approval and booking progression.",
        "Built trust-oriented steps such as provider verification, two-way location tracking, and staged payment handling through PayMongo.",
      ],
      challenges: [
        "Balancing booking convenience with stronger provider verification requirements.",
        "Designing an approval flow that improves safety without making the booking process confusing.",
        "Supporting trust between client and provider during travel, arrival, and payment stages.",
      ],
      solution: [
        "Introduced verified onboarding using a face photo, barangay clearance, police clearance, and a government-issued ID.",
        "Routed bookings through an admin validation step before provider approval so requests are screened before assignment.",
        "Added two-way location tracking and a 50/50 payment model through PayMongo to support safer transactions and clearer completion flow.",
      ],
      outcome: [
        "Presented a more credible booking flow for matching clients with service providers.",
        "Improved trust through verification, request review, live tracking, and staged payments.",
        "Delivered a capstone project centered on practical safety and workflow design rather than a simple listing interface.",
      ],
      media: [
        {
          title: "Client booking flow",
          caption:
            "Client-side booking screen where users choose a provider, upload photos or videos of the issue, review pricing, and confirm the booking with the initial payment.",
          stat: "Booking request",
          imageSrc: "/images/projects/maasin-city-help-app-client-booking-flow.jpg",
          imageAlt: "Client booking flow for the Maasin City H.E.L.P. App with upload and payment summary",
        },
        {
          title: "Admin validation",
          caption:
            "Admin-side bookings management view for reviewing requests, checking booking status, and validating service flow before providers continue through the process.",
          stat: "Admin review",
          imageSrc: "/images/projects/maasin-city-help-app-admin-validation.jpg",
          imageAlt: "Admin validation and bookings management view for the Maasin City H.E.L.P. App",
        },
        {
          title: "Client provider discovery",
          caption:
            "Client home screen with map-based provider discovery, category filtering, search, and nearby service recommendations.",
          stat: "Client discovery",
          imageSrc: "/images/projects/maasin-city-help-app-client-provider-discovery.jpg",
          imageAlt: "Client provider discovery map for the Maasin City H.E.L.P. App",
        },
        {
          title: "Client bookings dashboard",
          caption:
            "Client bookings view for tracking pending, active, completed, and cancelled service requests from one place.",
          stat: "Client tracking",
          imageSrc: "/images/projects/maasin-city-help-app-client-bookings.jpg",
          imageAlt: "Client bookings dashboard for the Maasin City H.E.L.P. App",
        },
        {
          title: "Provider dashboard",
          caption:
            "Provider-side dashboard showing live status, earnings summary, job totals, rating, and quick progress visibility.",
          stat: "Provider overview",
          imageSrc: "/images/projects/maasin-city-help-app-provider-dashboard.jpg",
          imageAlt: "Provider dashboard for the Maasin City H.E.L.P. App",
        },
        {
          title: "Provider analytics",
          caption:
            "Performance analytics view for tracking provider earnings, job activity, weekly totals, and progress toward monthly goals.",
          stat: "Provider analytics",
          imageSrc: "/images/projects/maasin-city-help-app-provider-analytics.jpg",
          imageAlt: "Provider analytics screen for the Maasin City H.E.L.P. App",
        },
        {
          title: "Provider wallet",
          caption:
            "Provider wallet screen for monitoring available balance, earnings history, payout account details, and withdrawal actions.",
          stat: "Provider payout",
          imageSrc: "/images/projects/maasin-city-help-app-provider-wallet.jpg",
          imageAlt: "Provider wallet and payout screen for the Maasin City H.E.L.P. App",
        },
      ],
      accent: {
        from: "#38bdf8",
        to: "#14b8a6",
      },
      links: [
        { label: "View Case Study", href: "/projects/maasin-city-help-app", kind: "case-study" },
        {
          label: "GitHub",
          href: "https://github.com/your-username/maasin-city-help-app",
          kind: "github",
        },
        {
          label: "Live Demo",
          href: "https://gss-maasin-app.vercel.app/",
          kind: "demo",
        },
      ],
    },
    {
      slug: "travel-orders-system",
      title: "Digital Travel Order System",
      category: "Approval Workflow",
      impactLine:
        "Structured travel request and approval workflow for internal coordination, routing, and record visibility.",
      summary:
        "A system that organizes travel order requests into a clearer approval process with status monitoring and document-oriented workflow structure.",
      description:
        "Built to support travel order handling with a more organized digital process for request submission, review, and progress visibility.",
      role: "Developer Intern / Full Stack Contributor",
      result:
        "Helped shape a more manageable workflow for travel order processing and status tracking inside an internal environment.",
      stack: ["React", "Firebase", "Node.js", "Tailwind CSS"],
      features: [
        {
          title: "Request and review flow",
          description:
            "Users can move from initial request details into review and approval steps through a structured flow.",
        },
        {
          title: "Approval-oriented status logic",
          description:
            "Each request can be monitored according to stage, reducing confusion around pending or completed actions.",
        },
        {
          title: "Internal records visibility",
          description:
            "Travel order details stay organized and easier to reference through a consistent interface.",
        },
      ],
      overview:
        "The Travel Orders System focused on making internal request handling more structured by translating a document-heavy process into a digital workflow.",
      problem:
        "Travel orders involve multiple steps, stakeholders, and approval checkpoints, which can become hard to follow when the process depends on manual coordination.",
      goal:
        "Digitize the travel order flow so requests, approvals, and status updates become easier to manage and monitor.",
      process: [
        "Reviewed the shape of the travel order workflow and where users need clarity.",
        "Designed interfaces that surface request details, approval status, and next actions.",
        "Implemented logic to reflect step-based movement through the workflow.",
        "Improved the overall experience so it felt more dependable for internal use.",
      ],
      challenges: [
        "Keeping the experience straightforward while still representing formal approval stages.",
        "Designing for clarity when multiple roles interact with the same request.",
        "Making the interface feel professional enough for internal administrative use.",
      ],
      solution: [
        "Used a step-based structure that makes request movement easier to understand.",
        "Focused on high-clarity layouts for form details, review status, and approval progress.",
        "Built around internal workflow behavior rather than generic task management patterns.",
      ],
      outcome: [
        "Created a cleaner travel order experience with clearer request movement and status awareness.",
        "Supported more dependable internal coordination across the approval flow.",
        "Demonstrated practical experience contributing to formal workflow systems.",
      ],
      media: [
        {
          title: "Travel request intake",
          caption: "Structured request screen with essential travel details and submission clarity.",
          stat: "Request flow",
        },
        {
          title: "Approval tracker",
          caption: "Status-oriented view that shows progress through the travel order workflow.",
          stat: "Approval stages",
        },
        {
          title: "Records summary",
          caption: "Organized travel order history for quick review and internal reference.",
          stat: "Internal history",
        },
      ],
      accent: {
        from: "#22c55e",
        to: "#38bdf8",
      },
      links: [
        { label: "View Case Study", href: "/projects/travel-orders-system", kind: "case-study" },
        {
          label: "GitHub",
          href: "https://github.com/your-username/travel-orders-system",
          kind: "github",
        },
        {
          label: "Live Demo",
          href: "https://penro-travel-order.vercel.app/login",
          kind: "demo",
        },
      ],
    },
    {
      slug: "payslip-leave-credits-generator",
      title: "Payslip & Leave Credits Generator",
      category: "Payroll Operations Platform",
      impactLine:
        "Internal payroll platform for payslips, leave credits, employee records, and release visibility in one structured workspace.",
      summary:
        "A payroll-focused system that organizes payslips, leave credits, employee data, and processing workflows into a cleaner and more dependable admin experience.",
      description:
        "Designed to support payroll-related operations with clearer access to employee records, leave credit management, payslip processing, and dashboard-level visibility across the system.",
      role: "Developer Intern / Full Stack Contributor",
      result:
        "Contributed to a more structured payroll workflow experience with clearer records, stronger dashboard visibility, and easier access to payslip-related actions.",
      stack: ["Next.js", "TypeScript", "Firebase", "PostgreSQL"],
      features: [
        {
          title: "Payslip management",
          description:
            "Organized payroll records and payslip access so users can review and manage releases through a cleaner interface.",
        },
        {
          title: "Leave credits tracking",
          description:
            "Structured handling of employee leave balances and related records inside the same payroll workspace.",
        },
        {
          title: "Dashboard oversight",
          description:
            "The system surfaces key totals, recent payslips, and quick actions so payroll work is easier to monitor.",
        },
      ],
      overview:
        "The Payslip & Leave Credits Generator centered on presenting payroll information more clearly while supporting the record-oriented nature of internal payroll workflows.",
      problem:
        "Payroll-related processes require accuracy, trust, and clarity. When records or payslips are hard to access or understand, confidence in the system drops quickly.",
      goal:
        "Build a cleaner payroll and leave-credit experience that supports organized records, clear access, and dependable presentation.",
      process: [
        "Studied the structure of payroll-related information and the points where usability matters most.",
        "Designed interfaces that prioritize readability and confidence around payroll records.",
        "Implemented data handling that supports structured access and organized views.",
        "Refined the workflow so the product feels serious, clean, and dependable.",
      ],
      challenges: [
        "Presenting payroll information clearly without exposing the interface to unnecessary complexity.",
        "Making a records-heavy system feel modern while preserving trust and seriousness.",
        "Balancing administrative structure with a user-friendly access experience.",
      ],
      solution: [
        "Used a clean, high-clarity layout for payroll records and payslip access points.",
        "Organized information into digestible sections that make records easier to review.",
        "Kept the interface focused on confidence, readability, and dependable workflow behavior.",
      ],
      outcome: [
        "Improved the clarity of payroll-related record presentation and access flow.",
        "Supported a more dependable experience for reviewing and managing payslip information.",
        "Added practical experience working on systems where trust and accuracy are essential.",
      ],
      media: [
        {
          title: "Admin dashboard",
          caption: "Admin dashboard showing employee totals, total payslips, total payroll, recent payslips, and quick actions in one overview.",
          stat: "Operations view",
          imageSrc: "/images/projects/payslip-leave-credits-generator-dashboard.jpg",
          imageAlt: "Admin dashboard for the DENR PENRO Payslip and Leave Credits Generator",
        },
        {
          title: "Secure sign-in",
          caption: "Entry point for authenticated payroll access with a controlled login experience for authorized personnel.",
          stat: "Protected access",
          imageSrc: "/images/projects/payroll-payslip-system-login.jpg",
          imageAlt: "Login interface for the DENR PENRO payroll and payslip system",
        },
        {
          title: "Payroll workspace",
          caption: "Internal workflow surface supporting payslip processing, employee records, and leave-credit management.",
          stat: "Structured flow",
        },
      ],
      accent: {
        from: "#166534",
        to: "#22c55e",
      },
      links: [
        {
          label: "View Case Study",
          href: "/projects/payslip-leave-credits-generator",
          kind: "case-study",
        },
        {
          label: "GitHub",
          href: "https://github.com/your-username/payslip-leave-credits-generator",
          kind: "github",
        },
        {
          label: "Live Demo",
          href: "https://penro-payslip.netlify.app/",
          kind: "demo",
        },
      ],
    },
  ],
  experienceSection: {
    eyebrow: "Experience",
    title: "Grounded in real workflow environments.",
    intro:
      "My experience already reflects the kind of work teams care about: internal systems, structured records, approval flows, and usable software for day-to-day operations.",
    items: [
      {
        role: "BSIT Graduate",
        company: "Saint Joseph College - Maasin City, Southern Leyte",
        period: "Graduated",
        location: "Philippines",
        summary:
          "Bachelor of Science in Information Technology graduate building practical systems and preparing for professional software development roles.",
        highlights: [
          "Focused on real-world application building rather than showcase-only concepts.",
          "Developed projects centered on workflow logic, internal tools, and responsive product execution.",
        ],
        tags: ["BSIT", "Graduate", "Entry-Level Ready"],
      },
      {
        role: "Developer Intern",
        company: "DENR PENRO",
        period: "Internship Experience",
        location: "Capitol Site, Maasin City, Southern Leyte",
        summary:
          "Contributed to internal workflow systems, including travel orders and payroll-related solutions, with a focus on practical process support and clearer digital operations.",
        highlights: [
          "Worked on workflow-oriented systems tied to real organizational processes.",
          "Helped build interfaces and system behavior around approvals, records, and operational clarity.",
          "Strengthened practical understanding of internal tools used by actual teams.",
        ],
        tags: ["Developer Intern", "Travel Orders", "Payroll Systems"],
      },
    ],
  },
  servicesSection: {
    eyebrow: "Services / Strengths",
    title: "Useful for teams, startups, and freelance builds.",
    intro:
      "My strengths translate well across junior developer roles and project-based work because they center on delivery, usability, and dependable implementation.",
    items: [
      {
        title: "Full Stack Web Development",
        description:
          "Building modern, responsive web applications with consistent UX, structured architecture, and maintainable code.",
      },
      {
        title: "Mobile App Development",
        description:
          "Creating mobile-ready experiences with attention to usability, speed, and platform-appropriate interaction.",
      },
      {
        title: "UI/UX Implementation",
        description:
          "Turning interface direction into polished, production-ready frontend experiences with strong hierarchy and clarity.",
      },
      {
        title: "REST API Integration",
        description:
          "Connecting frontend and backend layers through dependable data flows and practical application logic.",
      },
      {
        title: "Real-Time Systems",
        description:
          "Supporting experiences that benefit from live updates, clearer status visibility, and current system state awareness.",
      },
      {
        title: "Database Design",
        description:
          "Structuring data models to support records, workflow state, and application growth with more confidence.",
      },
      {
        title: "Responsive Interfaces",
        description:
          "Designing and developing layouts that remain clear, polished, and functional across devices.",
      },
    ],
  },
  proofSection: {
    eyebrow: "Proof / Credibility",
    title: "Clear signals that I can contribute.",
    intro:
      "This portfolio is built to help recruiters and clients assess readiness quickly through practical proof instead of inflated claims.",
    items: [
      {
        title: "Internship experience",
        description:
          "Hands-on developer exposure through DENR PENRO with workflow-oriented internal systems.",
      },
      {
        title: "Real systems built",
        description:
          "Projects are based on service operations, document tracking, travel orders, and payroll-related workflows.",
      },
      {
        title: "Practical project thinking",
        description:
          "The work centers on approvals, records, internal processes, and usable operational interfaces.",
      },
      {
        title: "Portfolio built for hiring",
        description:
          "Recruiters can review project case studies, stack, experience, contact options, and CV download from one place.",
      },
    ],
    availabilityHeading: "Current availability",
    availabilityBody:
      "Available for junior developer roles, internships, freelance projects, and collaborations.",
  },
  contactSection: {
    eyebrow: "Contact",
    title: "Let’s build something useful and well-crafted.",
    intro:
      "If you are hiring for a junior developer role, internship, or project-based engagement, I am ready to contribute with practical full stack development skills and a strong product mindset.",
    closingLine:
      "Reach out for opportunities involving modern web applications, mobile interfaces, workflow systems, or internal tools.",
    links: [
      {
        label: "Email",
        href: "mailto:markbriancardoza@gmail.com",
        display: "markbriancardoza@gmail.com",
        icon: "mail",
      },
      {
        label: "GitHub",
        href: "https://github.com/markbriannn",
        display: "github.com/markbriannn",
        icon: "github",
      },
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/markbriannn/",
        display: "linkedin.com/in/markbriannn",
        icon: "linkedin",
      },
      {
        label: "Facebook",
        href: "https://www.facebook.com/Markbriannn",
        display: "facebook.com/Markbriannn",
        icon: "facebook",
      },
    ],
  },
  footer: {
    tagline:
      "Full stack developer building modern systems with clean UI, practical workflows, and dependable implementation.",
    copyright: "© 2026 Mark Brian Lloyd D. Cardoza. All rights reserved.",
    backToTopLabel: "Back to top",
  },
};

export const projectSlugs = portfolioData.projects.map((project) => project.slug);

export function getProjectBySlug(slug: string) {
  return portfolioData.projects.find((project) => project.slug === slug);
}
