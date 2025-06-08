// Portfolio content extracted from resume
export const portfolioData = {
  personal: {
    name: "Jacob Siau",
    orgName: "jakedevsthings",
    title: "Senior Associate Software Engineer",
    location: "Plano, TX",
    email: "jacob.e.siau@gmail.com",
    phone: "(469) 805-5938",
    linkedin: "https://linkedin.com/in/jacob-siau",
    github: "https://github.com/jakedevsthings", // Inferred from repo URL
  },

  summary:
    "Results-driven Senior Associate Software Engineer with expertise in scalable API platform solutions, cloud automation, and secure authentication. Adept at leading enterprise-grade initiatives, optimizing CI/CD and DevSecOps pipelines, and developing intelligent automation workflows using Python and agentic AI tools. Experienced with LLMs, cloud APIs, and containerized deployments, with a strong focus on reliability, security, and performance. Passionate about software architecture, machine learning, and mentoring, with a fast-learning mindset and relentless drive to push technical boundaries.",

  currentFocus:
    "Assisting cloud and datacenter migration efforts while developing Python-based tooling for operational insights at JPMorgan Chase & Co. Currently pursuing Master of Science in Data Science with focus on AI, Predictive Analytics, Big Data, and LLM Deployment.",

  experience: [
    {
      company: "JPMorgan Chase & Co.",
      position: "Senior Associate Software Engineer",
      location: "Plano, TX",
      duration: "Sep 2022 – Present",
      highlights: [
        "Build and maintain secure, scalable API platform solutions supporting 50–100 internal/external clients",
        "Lead key cloud and datacenter migration efforts, redesigning API onboarding and governance workflows",
        "Develop Python-based tooling for operational insights, including a CI/CD metrics dashboard and a security config analytics engine",
        "Collaborate with 100+ stakeholders and external teams to align on API security, SSO/OAuth2, and integration standards",
        "Train and mentor junior engineers; serve as backup tech lead for a 30-person org-wide initiative",
        "Enhance deployment pipelines using Jenkins, Git, Docker, and internal CI/CD tools",
        "Beta tested internal CI/CD enhancement tools and led cross-team adoption, reducing deployment times by 30%",
      ],
    },
    {
      company: "Texas Instruments",
      position: "Software Engineer",
      location: "Dallas, TX",
      duration: "Feb 2020 – Jul 2022",
      highlights: [
        "Built Python-based automation frameworks to generate and validate HDL code, reducing manual dev effort",
        "Led QA system testing automation for internal and 3rd-party tooling, enhancing product validation speed",
        "Supported Agile processes, including CI/CD improvements and test suite reliability tracking",
      ],
    },
    {
      company: "Texas Instruments",
      position: "Test Engineering Intern",
      location: "Dallas, TX",
      duration: "May 2019 – Aug 2019",
      highlights: [
        "Delivered robust C++ test updates for semiconductor devices with 1M+ production volume",
        "Increased test reliability and throughput for mission-critical manufacturing systems",
      ],
    },
    {
      company: "Texas Instruments",
      position: "Software Engineering Intern",
      location: "Dallas, TX",
      duration: "May 2018 – Aug 2018",
      highlights: [
        "Developed full-stack internal dashboard (Java, Spring Boot, Oracle DB) for anomaly detection in fab data",
        "Enabled real-time insights for process engineers using scalable back-end filtering and visualizations",
      ],
    },
  ],

  education: [
    {
      institution: "Bellevue University",
      location: "Bellevue, NE (Online)",
      degree: "Master of Science in Data Science",
      year: "Expected 2027",
      details:
        "Relevant Topics: AI, Predictive Analytics, Big Data, LLM Deployment",
    },
    {
      institution: "Texas Tech University",
      location: "Lubbock, TX",
      degree: "Bachelor of Science in Computer Engineering",
      year: "2019",
      additionalDegree: "Bachelor of Science in Physics",
      minor: "Minor in Mathematics",
    },
  ],

  skills: {
    "IDEs and Assistants": [
      "GitHub Copilot",
      "Cursor",
      "VS Code",
      "Windsurf",
      "PyCharm",
    ],
    "LLMs & Prompting": [
      "OpenAI Models",
      "Claude Models",
      "Gemini Models",
      "Prompt Engineering",
      "Agentic AI Tools",
    ],
    "Programming Languages": [
      "Python",
      "JavaScript",
      "Java",
      "C++",
      "C",
      "Verilog",
    ],
    "API & Cloud Gateways": [
      "Secure On-Prem & Cloud API Gateways",
      "n8n automation",
      "Facebook Graph API",
      "AWS API Gateway",
      "APIGEE API Gateway",
      "API Security Standards",
      "OAuth2 flows",
    ],
    "DevOps / Cloud Infra": [
      "Jenkins",
      "Docker",
      "AWS EC2",
      "S3",
      "Cloudflare Tunnel",
    ],
    "Security & Auth": [
      "OAuth2",
      "IAM Roles",
      "token lifecycle management",
      "SSO integration",
    ],
    "Automation & Analytics": [
      "Python scripting for CI/CD telemetry",
      "n8n",
      "S3 orchestration",
      "API monitoring",
    ],
    "Configuration Mgmt": [
      "JSON",
      "YAML",
      "XML for infrastructure and API deployments",
    ],
    "Agile Tooling": [
      "Jira",
      "Confluence",
      "Scrum",
      "Retrospectives",
      "Story Sizing & Prioritization",
    ],
  },
  projects: [
    {
      title: "Automated Instagram Science Posts — @thephysicsexplainer",
      description:
        "Fully automated content creation pipeline that generates daily science explainer posts for Instagram. Combines AI-powered illustration and caption generation with automated publishing workflows for consistent educational content delivery.",
      technologies: [
        "n8n",
        "OpenAI GPT-Image-1",
        "GPT-4o",
        "Instagram Graph API",
        "AWS S3",
        "Gmail API",
        "Cloud Automation",
      ],
      highlights: [
        "Topic selection and tracking system using S3 storage for physics/cosmology content",
        "Mobile-optimized scientific illustrations generated via OpenAI GPT-Image-1",
        "Intelligent caption crafting with GPT-4o for engaging educational content",
        "Zero-touch Instagram Graph API publishing with error handling",
        "Gmail integration for automated workflow monitoring and notifications",
        "Serverless cloud architecture ensuring 24/7 reliable operation",
      ],
      isPublic: true,
      githubStatus: "to-be-created", // Options: "to-be-created", "link", "private"
      githubUrl: null,
      instagramUrl: "https://www.instagram.com/thephysicsexplainer",
      liveUrl: null,
      status: "active", // Currently running and posting daily
    },
    {
      title: "Self-hosted n8n Automation Server",
      description:
        "Personal end-to-end AI automation pipelines with cloud deployment. A self-hosted solution for automating complex workflows and integrating various APIs and AI services.",
      technologies: [
        "Docker",
        "AWS EC2",
        "Lightsail",
        "Cloudflare Tunnel",
        "n8n",
      ],
      highlights: [
        "Self-hosted automation infrastructure",
        "AI integration pipelines",
        "Cloud deployment with secure tunneling",
      ],
      isPublic: true,
      githubStatus: "to-be-created", // Options: "to-be-created", "link", "private"
      githubUrl: null,
      liveUrl: null,
      status: "active",
    },
    {
      title: "Portfolio Website",
      description:
        "This portfolio website built with React, Vite, and Tailwind CSS. Features responsive design, dark/light mode, and modern animations.",
      technologies: [
        "React",
        "Vite",
        "Tailwind CSS",
        "Framer Motion",
        "JavaScript",
      ],
      highlights: ["Optimized performance", "Clean, accessible UI"],
      isPublic: true,
      githubStatus: "link", // Options: "to-be-created", "link", "private"
      githubUrl: "https://github.com/jakedevsthings/jakedevsthings.github.io",
      liveUrl: "https://jakedevsthings.com",
      status: "active",
    },
    {
      title: "Security Config Analytics Engine (Proprietary)",
      description:
        "Enterprise security configuration analysis system for API platforms at JPMorgan Chase. Analyzes and validates security configurations across multiple environments.",
      technologies: [
        "Python",
        "OAuth2",
        "SSO",
        "API Security",
        "Kubernetes",
        "Docker",
        "Jenkins",
      ],
      highlights: [
        "Enterprise-grade security standards",
        "100+ stakeholder collaboration",
        "Proprietary JPMorgan Chase system",
      ],
      isPublic: false,
      githubStatus: "private", // Options: "to-be-created", "link", "private"
      githubUrl: null,
      proprietary: true,
      status: "active",
    },
    {
      title: "CI/CD Metrics Dashboard (Proprietary)",
      description:
        "Internal Python-based tooling for operational insights and deployment pipeline analytics at JPMorgan Chase. Provides real-time metrics and optimization recommendations.",
      technologies: ["Python", "Jenkins", "Docker", "CI/CD"],
      highlights: [
        "Reduced deployment times by 30%",
        "Supports 50-100 internal/external clients",
        "Proprietary JPMorgan Chase system",
      ],
      isPublic: false,
      githubStatus: "private", // Options: "to-be-created", "link", "private"
      githubUrl: null,
      proprietary: true,
      status: "active",
    },
    {
      title: "HDL Code Generation Framework (Proprietary)",
      description:
        "Proprietary Python-based automation framework for HDL code generation and validation at Texas Instruments. Streamlined semiconductor design workflows.",
      technologies: ["Python", "Verilog", "VHDL", "Test Automation", "Jenkins"],
      highlights: [
        "Reduced manual development effort",
        "Enhanced validation speed",
        "Proprietary Texas Instruments system",
      ],
      isPublic: false,
      githubStatus: "private", // Options: "to-be-created", "link", "private"
      githubUrl: null,
      proprietary: true,
      status: "completed",
    },
    {
      title: "Fab Data Anomaly Detection Dashboard (Proprietary)",
      description:
        "Proprietary full-stack internal dashboard for semiconductor manufacturing data analysis at Texas Instruments. Real-time monitoring and anomaly detection for fab operations.",
      technologies: ["Java", "Spring", "Oracle DB", "Data Visualization"],
      highlights: [
        "Real-time insights for process engineers",
        "Scalable back-end filtering",
        "Proprietary Texas Instruments system",
      ],
      isPublic: false,
      githubStatus: "private", // Options: "to-be-created", "link", "private"
      githubUrl: null,
      proprietary: true,
      status: "completed",
    },
    {
      title: "Modular RISC Processor Architecture in Verilog",
      description:
        "Educational Verilog-based processor project implementing a modular, multi-stage pipelined RISC CPU from the ground up. Developed for Microprocessor Architecture (ECE 4375) course, emphasizing clarity, control flow, and expandability.",
      technologies: [
        "Verilog",
        "RISC Architecture",
        "CPU Design",
        "Pipeline Design",
        "HDL",
        "Digital Logic",
      ],
      highlights: [
        "Five-stage RISC pipeline with modular implementation (Fetch, Decode, Execute, Memory, Writeback)",
        "Custom ALU and efficient barrel shifter module design",
        "Branch prediction and hazard management with data forwarding",
        "Configurable memory architecture with instruction/data memory simulation",
        "Complete top-level integration forming a functional CPU system",
        "Educational focus on RISC architecture and pipelined CPU design principles",
      ],
      isPublic: true,
      githubStatus: "link", // Options: "to-be-created", "link", "private"
      githubUrl: "https://github.com/jakedevsthings/MPA_RISC",
      liveUrl: null,
      status: "completed",
    },
  ],

  additionalInfo: [
    "Contributor to firm-wide API security standards and CI/CD adoption strategies",
    "Passionate about software architecture, AI, and mentoring junior engineers",
    "Built and deployed self-hosted automation infrastructure using modern cloud technologies",
    "Created end-to-end AI automation pipelines integrating multiple technologies",
    "Regularly collaborate with 100+ internal stakeholders and external partners on enterprise API strategy",
  ],
};
