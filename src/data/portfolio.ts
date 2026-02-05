export const PORTFOLIO = {
  personal: {
    name: "Tanishq Parihar",
    role: "Computer Science Engineer",
    tagline: "Engineering high-performance systems & intelligent AI solutions.",
    email: "tanishqparihar3@gmail.com",
    phone: "+91 7987495536",
    github: "https://github.com/randomfunction",
    linkedin: "", // Not provided in resume, leaving blank or omitting
    location: "India",
  },
  education: {
    institution: "Indian Institute of Information Technology Nagpur",
    degree: "B.Tech in Computer Science and Engineering",
    cgpa: "8.02/10",
    coursework: ["Data Structures & Algorithms", "OS", "DBMS", "CN", "Machine Learning"],
    period: "2023 – 2027" // Inferred from resume Aug 2023 - Aug 2027
  },
  sdeProjects: [
    {
      title: "GitLens.AI",
      tech: ["Next.js", "FastAPI", "PyTorch", "GNNs", "Three.js"],
      description: "Full-stack AI system that generates real-time developer insights from GitHub profiles.",
      highlights: [
        "Implemented a GNN-based recommendation engine achieving 92% semantic similarity.",
        "Developed interactive 3D visualizations with Three.js for developer networks.",
        "Optimized API architecture, reducing response latency by 35%."
      ],
      github: "https://github.com/randomfunction/GitLensAI",
      category: "AI & Web"
    },
    {
      title: "High-Performance Low-Latency Message Broker",
      tech: ["C++17", "Systems", "Concurrency", "Lock-free"],
      description: "Engineered a high-performance message broker optimized for real-time, high-frequency data pipelines.",
      highlights: [
        "Designed a custom lock-free SPSC ring buffer, reducing jitter and improving predictability.",
        "Introduced per-topic queue isolation, cutting lock contention.",
        "Achieved 8 µs median and 307 µs P99 latency in a 50k-message benchmark."
      ],
      github: "https://github.com/randomfunction/MessageBroker",
      category: "Systems"
    },
    {
      title: "ChatterBox",
      tech: ["Next.js", "TypeScript", "Prisma", "MySQL", "Socket.IO", "Tailwind CSS"],
      description: "Real-time community platform with messaging, channels, and role-based access control.",
      highlights: [
        "Implemented real-time chat and 1:1 video calling using Socket.IO.",
        "Built a modern, responsive UI using TailwindCSS and shadcn/ui with secure authentication via Clerk.",
        "Designed scalable database schemas using Prisma and enabled infinite message loading via TanStack Query."
      ],
      github: "https://github.com/randomfunction/ChatterBox",
      category: "Web Dev"
    },
    {
      title: "Intelligent ML-Driven Cache System",
      tech: ["Python", "Scikit-learn", "XGBoost", "Zipf", "Systems"],
      description: "Built offline+online cache replacement approximating Belady’s optimal policy.",
      highlights: [
        "Achieved 66.11% hit rate vs LFU (47.76%) using adaptive online models.",
        "Implemented online predictor with 95.09% accuracy using river library.",
        "Built offline+online cache replacement approximating Belady’s optimal policy."
      ],
      github: "https://github.com/randomfunction/SmartCache",
      category: "ML Systems"
    },
  ],
  researchProjects: [
    {
      title: "DnCNN-Fourier: Hybrid Image Denoising",
      tech: ["Python", "PyTorch", "FFT", "Computer Vision"],
      description: "Tri-branch denoising model combining DnCNN residual backbone with FFT-based global frequency modeling.",
      highlights: [
        "Outperformed FFT-only and wavelet-only variants in PSNR and SSIM on CIFAR-10/BSD68.",
        "Improved over baseline DnCNN by +0.33 dB PSNR.",
        "Validated joint spatial–frequency fusion for stable denoising."
      ],
      github: "https://github.com/randomfunction/DnCNNFourier",
      category: "Computer Vision"
    },
    {
      title: "Digital Approach to Rainwater Harvesting",
      tech: ["GIS", "Computer Vision", "Research"],
      description: "Developed a GIS + computer-vision pipeline for rooftop detection and watershed segmentation.",
      highlights: [
        "Accepted at 16th ICCCNT 2025.",
        "Validated estimates using 117 years of IMD rainfall data.",
        "Produced region-wise cost and storage sizing estimates."
      ],
      github: "",
      category: "Research"
    }
  ],
  skills: {
    languages: ["Python", "Java", "C++17/20", "Rust"],
    backend: ["FastAPI", "Node.js", "gRPC", "WebSockets", "Microservices"],
    databases: ["Redis", "PostgreSQL", "MongoDB"],
    systems: ["Concurrency", "Multithreading", "Lock-free Data Structures", "Linux", "Docker"],
    ai: ["PyTorch", "CNNs", "GNNs", "Model Optimization"]
  },
  achievements: [
    "Top 4% rank (262 / 7000+ teams) - Amazon ML Challenge 2025.",
    "Global Rank 105 - CodeChef Division 3 (Max Rating 1798).",
    "Codeforces Pupil.",
    "LeetCode 600+ Questions Solved."
  ]
};
