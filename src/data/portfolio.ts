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
  roleBasedProjects: [
    {
      role: "Systems & Infrastructure Engineering",
      projects: [
        {
          title: "ZeroTrust TradeCore",
          tech: ["C++", "Docker", "Terraform", "Kubernetes", "GitHub Actions"],
          description: "Low-latency trading engine and zero-trust CI/CD infrastructure.",
          highlights: [
            "Engineered a low-latency C++ trading engine, achieving 6.6M+ orders/sec throughput by implementing a custom 4-level FastBitmap structure for O(1) order book lookups.",
            "Built a zero-trust CI/CD pipeline using GitHub Actions, integrating CodeQL for Static Application Security Testing (SAST) to achieve 100% automated vulnerability scanning on all pull requests.",
            "Optimized container security and delivery via multi-stage Docker builds with aggressive compiler flags (-O3, -flto), reducing image footprint and enforcing least-privilege execution.",
            "Provisioned scalable infrastructure using Terraform and orchestrated Kubernetes Blue/Green deployments, guaranteeing zero-downtime releases for critical system components."
          ],
          github: "",
          category: "Systems Engine"
        },
        {
          title: "High-Performance Low-Latency Message Broker",
          tech: ["C++17", "System Architecture", "Concurrency"],
          description: "Concurrent message broker optimized for real-time, high-frequency data pipelines.",
          highlights: [
            "Engineered a concurrent message broker using custom lock-free SPSC ring buffers, a pattern relevant to storage I/O.",
            "Implemented comprehensive testing frameworks to perform root cause analysis on jitter and hardware contention.",
            "Achieved 8 µs median latency and 307 µs P99 under 50k msg/s load through rigorous performance profiling."
          ],
          github: "https://github.com/randomfunction/MessageBroker",
          category: "Infrastructure"
        }
      ]
    },
    {
      role: "AI & Machine Learning Engineering",
      projects: [
        {
          title: "AutonomousQuant",
          tech: ["Python", "LangChain", "React", "FAISS"],
          description: "Autonomous LangChain-based research agent for quantitative trading strategies.",
          highlights: [
            "Built an autonomous LangChain-based research agent in Python using a 7-step ReAct reasoning loop to fetch market data, formulate hypotheses, and generate executable backtrader strategies.",
            "Engineered a FAISS vector memory layer for semantic recall, enabling retrieval of past backtest metrics and failed strategies to refine future hypotheses.",
            "Integrated APIs via LLM function calling to process structured JSON responses, streaming live execution logs to a React/TypeScript dashboard via asynchronous FastAPI WebSockets."
          ],
          github: "https://github.com/randomfunction/AutonomousQuant",
          category: "AI Agent"
        },
        {
          title: "Intelligent ML-Driven Cache System",
          tech: ["Python", "Linux", "Caching Algorithms"],
          description: "Offline and online cache replacement system approximating Belady’s optimal policy.",
          highlights: [
            "Engineered an offline and online cache replacement system using core Python, approximating optimal Belady memory policies.",
            "Conducted extensive defect analysis and performance testing against system logs, achieving a 66.11% hit rate and outperforming standard LFU metrics."
          ],
          github: "https://github.com/randomfunction/SmartCache",
          category: "ML Systems"
        },
        {
          title: "DnCNN-Fourier: Hybrid Signal/Image Denoising",
          tech: ["PyTorch", "Computer Vision"],
          description: "Hybrid spatial and frequency domain neural network for image denoising.",
          highlights: [
            "Designed a tri-branch model combining spatial CNNs with FFT-based frequency modeling.",
            "Improved baseline performance by +0.33 dB PSNR and +0.0072 SSIM on BSD68.",
            "Conducted controlled ablation studies across multiple noise levels to validate design trade-offs."
          ],
          github: "",
          category: "Research"
        }
      ]
    },
    {
      role: "Full-Stack AI Engineering",
      projects: [
        {
          title: "GitLens.AI",
          tech: ["Python", "FastAPI", "Next.js (React)", "PyTorch"],
          description: "Full-stack platform utilizing GNNs and LLMs to analyze and visualize developer profiles.",
          highlights: [
            "Engineered a full-stack platform using Next.js and a Python (FastAPI) backend to analyze and visualize developer profiles.",
            "Developed a repository recommendation service utilizing PyTorch and Graph Neural Networks (GNN), integrating the Mistral AI API for automated insights.",
            "Built interactive 3D visualizations with Three.js and thoroughly tested API endpoints to ensure reliable integration and responsive UI performance."
          ],
          github: "https://github.com/randomfunction/GitLensAI",
          category: "Full Stack AI"
        }
      ]
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
