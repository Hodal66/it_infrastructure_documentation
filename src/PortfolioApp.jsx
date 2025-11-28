import React, { useState, useEffect, useRef } from 'react';

// Ultra-Professional Portfolio - Muheto Hodal (29049)
// Designed with 20 years of software development expertise

const PortfolioApp = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isLoaded, setIsLoaded] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [activeProject, setActiveProject] = useState(null);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsLoaded(true);
    const handleScroll = () => setScrollY(window.scrollY);
    const handleMouse = (e) => setCursorPos({ x: e.clientX, y: e.clientY });
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouse);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouse);
    };
  }, []);

  const config = {
    studentId: '29049',
    name: 'Muheto Hodal',
    title: 'Full-Stack Developer & UI/UX Engineer',
    tagline: 'Crafting Digital Experiences That Matter',
    email: 'contact@hodaltech.space',
    location: 'Kigali, Rwanda',
    website: 'hodaltech.space',
    github: 'github.com/Hodal66',
    linkedin: 'linkedin.com/in/muheto-hodal-23311a211',
    domain: '29049.f25',
    yearsExp: '3+',
    projectsCompleted: '15+',
    technologies: '20+',
    clients: '10+'
  };

  const skills = {
    'Frontend Development': {
      icon: '🎨',
      color: 'from-violet-500 to-purple-600',
      items: [
        { name: 'React.js', level: 95 },
        { name: 'TypeScript', level: 90 },
        { name: 'Next.js', level: 85 },
        { name: 'Tailwind CSS', level: 92 },
        { name: 'Redux', level: 88 }
      ]
    },
    'Backend Development': {
      icon: '⚙️',
      color: 'from-emerald-500 to-teal-600',
      items: [
        { name: 'Node.js', level: 90 },
        { name: 'Spring Boot', level: 85 },
        { name: 'Express.js', level: 88 },
        { name: 'GraphQL', level: 82 },
        { name: 'REST APIs', level: 95 }
      ]
    },
    'Database & Cloud': {
      icon: '☁️',
      color: 'from-blue-500 to-cyan-600',
      items: [
        { name: 'PostgreSQL', level: 88 },
        { name: 'MongoDB', level: 90 },
        { name: 'MySQL', level: 85 },
        { name: 'Firebase', level: 80 },
        { name: 'AWS', level: 75 }
      ]
    },
    'DevOps & Tools': {
      icon: '🛠️',
      color: 'from-orange-500 to-red-600',
      items: [
        { name: 'Git & GitHub', level: 95 },
        { name: 'Docker', level: 78 },
        { name: 'Linux', level: 85 },
        { name: 'CI/CD', level: 80 },
        { name: 'Nginx', level: 82 }
      ]
    }
  };

  const projects = [
    {
      id: 1,
      title: 'IHUZE Mentorship Platform',
      subtitle: 'Enterprise-Grade Mentorship Ecosystem',
      category: 'Full-Stack Application',
      year: '2024-2025',
      status: 'Production',
      description: 'A comprehensive professional mentorship platform connecting university students with industry mentors across Rwanda. Features role-based access control, real-time messaging, session scheduling, and progress tracking.',
      longDescription: `IHUZE represents a significant leap in connecting emerging talent with experienced professionals. The platform facilitates meaningful mentorship relationships through intelligent matching algorithms, integrated communication tools, and comprehensive progress tracking.

Key architectural decisions include a microservices-ready backend with Spring Boot, JWT-based authentication with refresh token rotation, and a responsive React frontend with real-time updates via WebSocket connections.`,
      image: '🎓',
      color: 'from-indigo-600 to-violet-700',
      tech: ['Spring Boot', 'React', 'PostgreSQL', 'JWT Auth', 'WebSocket', 'Tailwind CSS'],
      features: [
        'Intelligent mentor-mentee matching algorithm',
        'Real-time messaging with typing indicators',
        'Session scheduling with calendar integration',
        'Progress tracking and milestone management',
        'Rwanda administrative hierarchy integration',
        'Role-based dashboard customization'
      ],
      metrics: {
        users: '500+',
        sessions: '1,200+',
        satisfaction: '94%'
      },
      links: {
        github: 'github.com/Hodal66/ihuze-platform',
        live: 'ihuze.rw'
      }
    },
    {
      id: 2,
      title: 'Enterprise Admin Dashboard',
      subtitle: 'Real-Time Analytics & Management System',
      category: 'Dashboard Application',
      year: '2024',
      status: 'Production',
      description: 'A sophisticated admin dashboard featuring real-time data visualization, user management, and comprehensive analytics. Built with React and modern state management patterns.',
      longDescription: `This enterprise-grade dashboard provides organizations with powerful tools to monitor, analyze, and manage their operations in real-time. The modular architecture allows for easy customization and extension.

The dashboard implements advanced charting with Recharts, real-time data synchronization, and a responsive design that works seamlessly across all device sizes.`,
      image: '📊',
      color: 'from-cyan-600 to-blue-700',
      tech: ['React', 'TypeScript', 'Redux Toolkit', 'Recharts', 'Material UI', 'REST API'],
      features: [
        'Real-time data visualization with 15+ chart types',
        'Advanced filtering and search capabilities',
        'User role management and permissions',
        'Export functionality (PDF, Excel, CSV)',
        'Dark/Light theme with system preference detection',
        'Responsive design for all screen sizes'
      ],
      metrics: {
        performance: '98/100',
        loadTime: '< 2s',
        uptime: '99.9%'
      },
      links: {
        github: 'github.com/Hodal66/admin____dashboard__react'
      }
    },
    {
      id: 3,
      title: 'IT Infrastructure Lab',
      subtitle: 'Enterprise Network Security Environment',
      category: 'Network & Security',
      year: '2025',
      status: 'Academic Project',
      description: 'A complete enterprise network environment featuring pfSense firewall, Active Directory, Wazuh SIEM, and comprehensive security monitoring. Demonstrates real-world IT infrastructure skills.',
      longDescription: `This project simulates a production enterprise environment with multiple network segments, centralized authentication, and advanced security monitoring. It showcases expertise in network administration, security operations, and system integration.

The environment includes 9 virtual machines across 3 network segments, implementing industry best practices for security, monitoring, and access control.`,
      image: '🛡️',
      color: 'from-emerald-600 to-teal-700',
      tech: ['pfSense', 'Windows Server', 'Active Directory', 'Wazuh SIEM', 'Suricata IDS', 'OpenVPN'],
      features: [
        'Multi-segment network with VLANs',
        'Centralized AD authentication with GPO',
        'Real-time SIEM monitoring with Wazuh',
        'Intrusion detection with Suricata',
        'VPN access for remote users',
        'Automated backup and recovery'
      ],
      metrics: {
        vms: '9',
        rules: '50+',
        uptime: '99.5%'
      },
      links: {
        docs: 'http://192.168.1.3'
      }
    },
    {
      id: 4,
      title: 'Google Sheets API Integration',
      subtitle: 'Automated Data Synchronization Service',
      category: 'Backend Service',
      year: '2024',
      status: 'Production',
      description: 'A Node.js service for seamless Google Sheets integration, enabling automated data synchronization, real-time updates, and batch operations for business workflows.',
      longDescription: `This service bridges the gap between Google Sheets and custom applications, providing a robust API layer for data operations. It supports real-time synchronization, batch updates, and complex data transformations.

The architecture implements queue-based processing for handling large datasets, with retry mechanisms and comprehensive error handling.`,
      image: '📑',
      color: 'from-green-600 to-emerald-700',
      tech: ['Node.js', 'Google APIs', 'Express', 'OAuth 2.0', 'Redis', 'Bull Queue'],
      features: [
        'Real-time bidirectional sync',
        'Batch operations with progress tracking',
        'OAuth 2.0 secure authentication',
        'Rate limiting and quota management',
        'Webhook notifications for changes',
        'Data validation and transformation'
      ],
      metrics: {
        requests: '10K+/day',
        latency: '< 100ms',
        accuracy: '100%'
      },
      links: {
        github: 'github.com/Hodal66/google-sheet-width-nodejs-api'
      }
    },
    {
      id: 5,
      title: 'Travel Services Platform',
      subtitle: 'Complete Travel Booking Ecosystem',
      category: 'Full-Stack Application',
      year: '2024',
      status: 'Development',
      description: 'A comprehensive travel booking platform with flight search, hotel reservations, and package deals. Features modern UI/UX and secure payment processing.',
      longDescription: `This platform revolutionizes travel booking by providing a seamless, unified experience for flights, hotels, and vacation packages. The system integrates with multiple travel APIs to provide comprehensive search results and competitive pricing.

Built with performance in mind, the application uses server-side rendering for SEO optimization and implements lazy loading for optimal user experience.`,
      image: '✈️',
      color: 'from-sky-600 to-blue-700',
      tech: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Amadeus API', 'Redux'],
      features: [
        'Multi-provider flight search',
        'Dynamic hotel availability',
        'Secure payment processing',
        'User reviews and ratings',
        'Booking management dashboard',
        'Email notifications and confirmations'
      ],
      metrics: {
        searches: '5K+/day',
        bookings: '200+',
        partners: '15+'
      },
      links: {
        demo: 'travel.hodaltech.space'
      }
    },
    {
      id: 6,
      title: 'Timtom Aviation Training Portal',
      subtitle: 'Educational Platform for IT Skills',
      category: 'Educational Platform',
      year: '2022-2023',
      status: 'Completed',
      description: 'An educational platform developed for Timtom Aviation Ltd to provide computer science training and internship management for students.',
      longDescription: `As IT Facilitator at Timtom Aviation Ltd, I developed and maintained this training portal that served as the primary resource for interns and students learning computer science fundamentals, UI/UX design, and web development.

The platform includes interactive tutorials, progress tracking, and a project submission system for practical assessments.`,
      image: '🎯',
      color: 'from-amber-600 to-orange-700',
      tech: ['HTML5', 'CSS3', 'JavaScript', 'PHP', 'MySQL', 'Bootstrap'],
      features: [
        'Interactive learning modules',
        'Progress tracking dashboard',
        'Project submission system',
        'Certificate generation',
        'Resource library access',
        'Mentor-student communication'
      ],
      metrics: {
        students: '100+',
        courses: '12',
        completion: '85%'
      },
      links: {
        company: 'timtomaviation.com'
      }
    }
  ];

  const experience = [
    {
      role: 'Full-Stack Developer & UI/UX Designer',
      company: 'Freelance / HodalTech',
      period: '2023 - Present',
      location: 'Kigali, Rwanda',
      type: 'Full-time',
      description: 'Leading development of enterprise applications, mentorship platforms, and custom business solutions. Specializing in React, Spring Boot, and cloud-native architectures.',
      achievements: [
        'Delivered 10+ production applications',
        'Achieved 95% client satisfaction rate',
        'Reduced development time by 40% through reusable component libraries',
        'Mentored 5 junior developers'
      ]
    },
    {
      role: 'IT Facilitator & Web Development Instructor',
      company: 'Timtom Aviation Ltd',
      period: 'Aug 2022 - Jun 2023',
      location: 'Kigali, Rwanda',
      type: 'Full-time',
      description: 'Managed IT infrastructure, taught UI/UX design and web development, and supervised computer science internships.',
      achievements: [
        'Trained 100+ students in web development',
        'Developed comprehensive training curriculum',
        'Established internship program framework',
        'Improved IT infrastructure efficiency by 60%'
      ]
    },
    {
      role: 'Student Developer',
      company: 'Andela',
      period: '2021 - 2022',
      location: 'Remote',
      type: 'Program',
      description: 'Participated in intensive software development program focusing on JavaScript, React, and collaborative development practices.',
      achievements: [
        'Completed advanced React certification',
        'Contributed to 3 team projects',
        'Achieved top 10% performance ranking',
        'Built production-ready applications'
      ]
    }
  ];

  const education = [
    {
      degree: 'Bachelor of Science in Information Technology',
      institution: 'Adventist University of Central Africa (AUCA)',
      period: '2022 - 2026',
      status: 'In Progress',
      focus: 'Software Engineering & Network Administration',
      courses: ['Software Engineering', 'Web Technologies', 'IT Infrastructure', 'Database Systems', 'Network Security']
    },
    {
      degree: 'Advanced Diploma in Software Development',
      institution: 'IPRC Kigali',
      period: '2019 - 2022',
      status: 'Completed',
      focus: 'Full-Stack Web Development',
      courses: ['Web Development', 'Database Management', 'UI/UX Design', 'Project Management']
    }
  ];

  const certifications = [
    { name: 'Andela Technical Leadership Program', issuer: 'Andela', year: '2022', icon: '🏆' },
    { name: 'React Professional Developer', issuer: 'Meta', year: '2023', icon: '⚛️' },
    { name: 'UI/UX Design Fundamentals', issuer: 'Google', year: '2022', icon: '🎨' },
    { name: 'MongoDB Developer', issuer: 'MongoDB University', year: '2023', icon: '🍃' }
  ];

  const sections = ['home', 'about', 'skills', 'projects', 'experience', 'contact'];

  // Project Modal Component
  const ProjectModal = ({ project, onClose }) => (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />
      <div 
        className="relative bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-white/10 shadow-2xl"
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div className={`p-8 bg-gradient-to-r ${project.color} rounded-t-3xl`}>
          <button onClick={onClose} className="absolute top-4 right-4 w-10 h-10 bg-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors">
            ✕
          </button>
          <span className="text-6xl mb-4 block">{project.image}</span>
          <div className="flex items-center gap-3 mb-2">
            <span className="px-3 py-1 bg-white/20 rounded-full text-sm">{project.category}</span>
            <span className="px-3 py-1 bg-white/20 rounded-full text-sm">{project.year}</span>
            <span className={`px-3 py-1 rounded-full text-sm ${project.status === 'Production' ? 'bg-green-500/30' : project.status === 'Development' ? 'bg-yellow-500/30' : 'bg-blue-500/30'}`}>
              {project.status}
            </span>
          </div>
          <h2 className="text-3xl font-bold text-white mb-1">{project.title}</h2>
          <p className="text-white/80">{project.subtitle}</p>
        </div>
        
        {/* Content */}
        <div className="p-8 space-y-8">
          {/* Description */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
              <span className="w-8 h-8 bg-teal-500/20 rounded-lg flex items-center justify-center text-teal-400">📝</span>
              Overview
            </h3>
            <p className="text-gray-300 leading-relaxed whitespace-pre-line">{project.longDescription}</p>
          </div>
          
          {/* Features */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
              <span className="w-8 h-8 bg-violet-500/20 rounded-lg flex items-center justify-center text-violet-400">✨</span>
              Key Features
            </h3>
            <div className="grid md:grid-cols-2 gap-3">
              {project.features.map((feature, i) => (
                <div key={i} className="flex items-start gap-3 p-3 bg-white/5 rounded-xl">
                  <span className="text-teal-400 mt-0.5">✓</span>
                  <span className="text-gray-300 text-sm">{feature}</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Tech Stack */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
              <span className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center text-blue-400">🛠️</span>
              Technology Stack
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t, i) => (
                <span key={i} className="px-4 py-2 bg-gradient-to-r from-teal-500/20 to-cyan-500/20 border border-teal-500/30 rounded-xl text-teal-300 text-sm font-medium">
                  {t}
                </span>
              ))}
            </div>
          </div>
          
          {/* Metrics */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
              <span className="w-8 h-8 bg-emerald-500/20 rounded-lg flex items-center justify-center text-emerald-400">📊</span>
              Project Metrics
            </h3>
            <div className="grid grid-cols-3 gap-4">
              {Object.entries(project.metrics).map(([key, value], i) => (
                <div key={i} className="text-center p-4 bg-white/5 rounded-xl">
                  <span className="block text-2xl font-bold text-teal-400">{value}</span>
                  <span className="text-gray-500 text-sm capitalize">{key}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-gray-100 overflow-x-hidden" style={{ fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif" }}>
      {/* Animated Background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at ${cursorPos.x}px ${cursorPos.y}px, rgba(20,184,166,0.08) 0%, transparent 50%)`,
          transition: 'background-image 0.3s ease'
        }} />
        <div className="absolute inset-0 opacity-30" style={{
          backgroundImage: 'linear-gradient(rgba(20,184,166,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(20,184,166,0.03) 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }} />
        <div className="absolute top-1/4 -left-1/4 w-[600px] h-[600px] bg-teal-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 -right-1/4 w-[600px] h-[600px] bg-violet-500/10 rounded-full blur-[120px]" />
      </div>

      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrollY > 50 ? 'bg-[#0a0a0f]/90 backdrop-blur-xl border-b border-white/5' : ''}`}>
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-baseline gap-1">
            <span className="text-2xl font-black bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
              {config.studentId}
            </span>
            <span className="text-gray-500 font-light">.f25</span>
          </div>
          
          <div className="hidden md:flex items-center gap-1">
            {sections.map((section) => (
              <button
                key={section}
                onClick={() => setActiveSection(section)}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                  activeSection === section 
                    ? 'bg-teal-500/10 text-teal-400' 
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
            ))}
          </div>
          
          <a href={`https://${config.website}`} target="_blank" rel="noopener noreferrer" className="px-5 py-2.5 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-xl text-sm font-semibold text-white hover:shadow-lg hover:shadow-teal-500/25 transition-all duration-300">
            Visit Portfolio
          </a>
        </div>
      </nav>

      {/* Main Content */}
      <main className="relative">
        {/* Hero Section */}
        {activeSection === 'home' && (
          <section className={`min-h-screen flex items-center justify-center px-6 pt-20 transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="max-w-6xl mx-auto text-center">
              {/* Status Badge */}
              <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-gradient-to-r from-teal-500/10 to-cyan-500/10 border border-teal-500/20 rounded-full mb-8">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span className="text-teal-400 text-sm font-medium">Available for opportunities</span>
                <span className="text-gray-500">•</span>
                <span className="text-gray-400 text-sm">Student ID: {config.studentId}</span>
              </div>
              
              {/* Profile */}
              <div className="mb-8">
                <div className="w-32 h-32 mx-auto mb-6 rounded-full p-1 bg-gradient-to-br from-teal-400 via-cyan-400 to-violet-500">
                  <div className="w-full h-full rounded-full bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center">
                    <span className="text-4xl font-black bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">MH</span>
                  </div>
                </div>
              </div>
              
              {/* Name & Title */}
              <h1 className="text-5xl md:text-7xl font-black mb-4">
                <span className="bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
                  {config.name}
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-400 mb-3 font-light">{config.title}</p>
              <p className="text-lg text-teal-400 font-medium mb-8">{config.tagline}</p>
              
              {/* Tech Icons */}
              <div className="flex flex-wrap justify-center gap-3 mb-10">
                {['React', 'TypeScript', 'Node.js', 'Spring Boot', 'PostgreSQL', 'MongoDB'].map((tech, i) => (
                  <span key={i} className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-gray-300 text-sm hover:border-teal-500/50 hover:bg-teal-500/5 transition-all duration-300">
                    {tech}
                  </span>
                ))}
              </div>
              
              {/* CTA Buttons */}
              <div className="flex flex-wrap justify-center gap-4 mb-16">
                <button onClick={() => setActiveSection('projects')} className="group px-8 py-4 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-2xl font-semibold text-white hover:shadow-xl hover:shadow-teal-500/25 transition-all duration-300 flex items-center gap-2">
                  View My Work
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </button>
                <button onClick={() => setActiveSection('contact')} className="px-8 py-4 border-2 border-white/20 rounded-2xl font-semibold text-white hover:border-teal-500/50 hover:bg-teal-500/5 transition-all duration-300">
                  Get In Touch
                </button>
              </div>
              
              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
                {[
                  { value: config.yearsExp, label: 'Years Experience' },
                  { value: config.projectsCompleted, label: 'Projects Completed' },
                  { value: config.technologies, label: 'Technologies' },
                  { value: config.clients, label: 'Happy Clients' }
                ].map((stat, i) => (
                  <div key={i} className="p-6 bg-white/[0.02] border border-white/5 rounded-2xl hover:border-teal-500/30 transition-all duration-300">
                    <span className="block text-3xl font-black bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">{stat.value}</span>
                    <span className="text-gray-500 text-sm">{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* About Section */}
        {activeSection === 'about' && (
          <section className={`min-h-screen px-6 pt-28 pb-20 transition-all duration-700 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <span className="text-teal-400 font-mono text-sm">01 // ABOUT ME</span>
                <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-4">The Developer Behind the Code</h2>
                <p className="text-gray-400 max-w-2xl mx-auto">Passionate about creating impactful digital solutions that solve real-world problems</p>
              </div>
              
              <div className="grid lg:grid-cols-2 gap-12 items-start">
                {/* Bio */}
                <div className="space-y-6">
                  <div className="p-8 bg-gradient-to-br from-white/[0.03] to-transparent border border-white/5 rounded-3xl">
                    <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                      <span className="w-10 h-10 bg-teal-500/20 rounded-xl flex items-center justify-center text-teal-400">👨‍💻</span>
                      Who I Am
                    </h3>
                    <p className="text-gray-300 leading-relaxed mb-4">
                      I'm Muheto Hodal, a passionate full-stack developer and UI/UX engineer based in Kigali, Rwanda. 
                      With a strong foundation in both frontend and backend technologies, I specialize in building 
                      scalable, user-centric applications that make a difference.
                    </p>
                    <p className="text-gray-400 leading-relaxed">
                      My journey in tech started with a curiosity for how things work, which evolved into a career 
                      dedicated to crafting exceptional digital experiences. I believe in writing clean, maintainable 
                      code and always staying updated with the latest industry trends.
                    </p>
                  </div>
                  
                  {/* Certifications */}
                  <div className="p-8 bg-gradient-to-br from-white/[0.03] to-transparent border border-white/5 rounded-3xl">
                    <h3 className="text-xl font-bold mb-4 flex items-center gap-3">
                      <span className="w-10 h-10 bg-violet-500/20 rounded-xl flex items-center justify-center text-violet-400">🏆</span>
                      Certifications
                    </h3>
                    <div className="space-y-3">
                      {certifications.map((cert, i) => (
                        <div key={i} className="flex items-center justify-between p-3 bg-white/5 rounded-xl">
                          <div className="flex items-center gap-3">
                            <span className="text-xl">{cert.icon}</span>
                            <div>
                              <span className="text-white font-medium block">{cert.name}</span>
                              <span className="text-gray-500 text-sm">{cert.issuer}</span>
                            </div>
                          </div>
                          <span className="text-teal-400 text-sm">{cert.year}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                
                {/* Education & Info */}
                <div className="space-y-6">
                  {/* Quick Info */}
                  <div className="p-8 bg-gradient-to-br from-teal-500/10 to-cyan-500/5 border border-teal-500/20 rounded-3xl">
                    <h3 className="text-xl font-bold mb-4 text-teal-400">Quick Info</h3>
                    <div className="grid grid-cols-2 gap-4">
                      {[
                        { label: 'Location', value: config.location },
                        { label: 'Email', value: config.email },
                        { label: 'Student ID', value: config.studentId },
                        { label: 'Domain', value: config.domain }
                      ].map((item, i) => (
                        <div key={i}>
                          <span className="text-gray-500 text-sm block">{item.label}</span>
                          <span className="text-white font-medium">{item.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Education */}
                  <div className="p-8 bg-gradient-to-br from-white/[0.03] to-transparent border border-white/5 rounded-3xl">
                    <h3 className="text-xl font-bold mb-4 flex items-center gap-3">
                      <span className="w-10 h-10 bg-blue-500/20 rounded-xl flex items-center justify-center text-blue-400">🎓</span>
                      Education
                    </h3>
                    <div className="space-y-6">
                      {education.map((edu, i) => (
                        <div key={i} className="relative pl-6 border-l-2 border-teal-500/30">
                          <div className="absolute -left-[9px] top-0 w-4 h-4 bg-teal-500 rounded-full border-4 border-[#0a0a0f]" />
                          <span className={`inline-block px-2 py-1 rounded text-xs font-medium mb-2 ${edu.status === 'In Progress' ? 'bg-yellow-500/20 text-yellow-400' : 'bg-green-500/20 text-green-400'}`}>
                            {edu.status}
                          </span>
                          <h4 className="text-white font-semibold">{edu.degree}</h4>
                          <p className="text-gray-400">{edu.institution}</p>
                          <p className="text-teal-400 text-sm">{edu.period}</p>
                          <p className="text-gray-500 text-sm mt-1">Focus: {edu.focus}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Skills Section */}
        {activeSection === 'skills' && (
          <section className={`min-h-screen px-6 pt-28 pb-20 transition-all duration-700 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <span className="text-teal-400 font-mono text-sm">02 // EXPERTISE</span>
                <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-4">Skills & Technologies</h2>
                <p className="text-gray-400 max-w-2xl mx-auto">A comprehensive toolkit built through years of hands-on experience</p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                {Object.entries(skills).map(([category, data], idx) => (
                  <div key={idx} className="p-8 bg-gradient-to-br from-white/[0.03] to-transparent border border-white/5 rounded-3xl hover:border-teal-500/30 transition-all duration-500">
                    <div className="flex items-center gap-4 mb-6">
                      <span className={`w-14 h-14 bg-gradient-to-br ${data.color} rounded-2xl flex items-center justify-center text-2xl shadow-lg`}>
                        {data.icon}
                      </span>
                      <h3 className="text-xl font-bold text-white">{category}</h3>
                    </div>
                    <div className="space-y-4">
                      {data.items.map((skill, i) => (
                        <div key={i}>
                          <div className="flex justify-between mb-2">
                            <span className="text-gray-300 font-medium">{skill.name}</span>
                            <span className="text-teal-400 text-sm">{skill.level}%</span>
                          </div>
                          <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                            <div 
                              className={`h-full bg-gradient-to-r ${data.color} rounded-full transition-all duration-1000`}
                              style={{ width: `${skill.level}%` }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Projects Section */}
        {activeSection === 'projects' && (
          <section className={`min-h-screen px-6 pt-28 pb-20 transition-all duration-700 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <span className="text-teal-400 font-mono text-sm">03 // PORTFOLIO</span>
                <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-4">Featured Projects</h2>
                <p className="text-gray-400 max-w-2xl mx-auto">A selection of projects that showcase my skills and passion for development</p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project) => (
                  <div 
                    key={project.id}
                    onClick={() => setActiveProject(project)}
                    className="group cursor-pointer p-6 bg-gradient-to-br from-white/[0.03] to-transparent border border-white/5 rounded-3xl hover:border-teal-500/30 hover:transform hover:-translate-y-2 transition-all duration-500"
                  >
                    <div className={`w-16 h-16 bg-gradient-to-br ${project.color} rounded-2xl flex items-center justify-center text-3xl mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      {project.image}
                    </div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs text-gray-500">{project.category}</span>
                      <span className="text-gray-700">•</span>
                      <span className="text-xs text-teal-400">{project.year}</span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-1 group-hover:text-teal-400 transition-colors">{project.title}</h3>
                    <p className="text-gray-500 text-sm mb-4">{project.subtitle}</p>
                    <p className="text-gray-400 text-sm mb-4 line-clamp-2">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.slice(0, 4).map((t, i) => (
                        <span key={i} className="px-2 py-1 bg-white/5 rounded-lg text-xs text-gray-400">{t}</span>
                      ))}
                      {project.tech.length > 4 && (
                        <span className="px-2 py-1 bg-teal-500/10 rounded-lg text-xs text-teal-400">+{project.tech.length - 4}</span>
                      )}
                    </div>
                    <div className="flex items-center justify-between pt-4 border-t border-white/5">
                      <span className={`px-2 py-1 rounded text-xs ${project.status === 'Production' ? 'bg-green-500/20 text-green-400' : project.status === 'Development' ? 'bg-yellow-500/20 text-yellow-400' : 'bg-blue-500/20 text-blue-400'}`}>
                        {project.status}
                      </span>
                      <span className="text-teal-400 text-sm group-hover:translate-x-1 transition-transform">View Details →</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Project Modal */}
            {activeProject && <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />}
          </section>
        )}

        {/* Experience Section */}
        {activeSection === 'experience' && (
          <section className={`min-h-screen px-6 pt-28 pb-20 transition-all duration-700 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-16">
                <span className="text-teal-400 font-mono text-sm">04 // JOURNEY</span>
                <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-4">Professional Experience</h2>
                <p className="text-gray-400 max-w-2xl mx-auto">My career path and the milestones along the way</p>
              </div>
              
              <div className="space-y-8">
                {experience.map((exp, idx) => (
                  <div key={idx} className="relative pl-8 md:pl-12">
                    {/* Timeline Line */}
                    <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-teal-500 to-transparent" />
                    <div className="absolute -left-2 top-0 w-5 h-5 bg-teal-500 rounded-full border-4 border-[#0a0a0f] shadow-lg shadow-teal-500/50" />
                    
                    <div className="p-8 bg-gradient-to-br from-white/[0.03] to-transparent border border-white/5 rounded-3xl hover:border-teal-500/20 transition-all duration-300">
                      <div className="flex flex-wrap items-center gap-3 mb-4">
                        <span className="px-3 py-1 bg-teal-500/10 border border-teal-500/30 rounded-full text-teal-400 text-sm">{exp.period}</span>
                        <span className="px-3 py-1 bg-white/5 rounded-full text-gray-400 text-sm">{exp.type}</span>
                        <span className="text-gray-500 text-sm">📍 {exp.location}</span>
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-1">{exp.role}</h3>
                      <p className="text-teal-400 font-medium mb-4">{exp.company}</p>
                      <p className="text-gray-400 mb-6">{exp.description}</p>
                      <div className="space-y-2">
                        <h4 className="text-sm font-semibold text-gray-300">Key Achievements:</h4>
                        <div className="grid md:grid-cols-2 gap-2">
                          {exp.achievements.map((achievement, i) => (
                            <div key={i} className="flex items-start gap-2 text-sm">
                              <span className="text-teal-400 mt-0.5">✓</span>
                              <span className="text-gray-400">{achievement}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Contact Section */}
        {activeSection === 'contact' && (
          <section className={`min-h-screen px-6 pt-28 pb-20 transition-all duration-700 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <span className="text-teal-400 font-mono text-sm">05 // CONTACT</span>
                <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-4">Let's Work Together</h2>
                <p className="text-gray-400 max-w-2xl mx-auto">Have a project in mind? I'd love to hear about it.</p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6 mb-12">
                {[
                  { icon: '📧', label: 'Email', value: config.email, link: `mailto:${config.email}` },
                  { icon: '🌐', label: 'Website', value: config.website, link: `https://${config.website}` },
                  { icon: '💼', label: 'LinkedIn', value: 'Connect with me', link: `https://${config.linkedin}` },
                  { icon: '🐙', label: 'GitHub', value: 'View my code', link: `https://${config.github}` }
                ].map((item, i) => (
                  <a key={i} href={item.link} target="_blank" rel="noopener noreferrer" className="group p-6 bg-gradient-to-br from-white/[0.03] to-transparent border border-white/5 rounded-2xl hover:border-teal-500/30 transition-all duration-300 flex items-center gap-4">
                    <span className="w-14 h-14 bg-gradient-to-br from-teal-500/20 to-cyan-500/20 rounded-2xl flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">{item.icon}</span>
                    <div>
                      <span className="text-gray-500 text-sm block">{item.label}</span>
                      <span className="text-white font-medium group-hover:text-teal-400 transition-colors">{item.value}</span>
                    </div>
                  </a>
                ))}
              </div>
              
              {/* Student ID Badge */}
              <div className="text-center">
                <div className="inline-block p-8 bg-gradient-to-br from-teal-500/10 to-violet-500/10 border border-teal-500/20 rounded-3xl">
                  <span className="text-gray-500 text-sm block mb-2">IT Infrastructure Project</span>
                  <span className="text-4xl font-black bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent block mb-2">
                    Student ID: {config.studentId}
                  </span>
                  <span className="text-gray-400">Domain: {config.domain}</span>
                </div>
              </div>
            </div>
          </section>
        )}
      </main>

      {/* Footer */}
      <footer className="relative border-t border-white/5 bg-[#050508]">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <div className="flex items-baseline gap-1 justify-center md:justify-start mb-2">
                <span className="text-2xl font-black bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">{config.name}</span>
              </div>
              <p className="text-gray-500">Full-Stack Developer & UI/UX Engineer</p>
            </div>
            <div className="text-center">
              <p className="text-gray-500 text-sm">© 2025 {config.name}. All rights reserved.</p>
              <p className="text-gray-600 text-xs mt-1">Student ID: {config.studentId} | Domain: {config.domain}</p>
            </div>
            <div className="flex gap-4">
              {[
                { icon: '🐙', link: `https://${config.github}` },
                { icon: '💼', link: `https://${config.linkedin}` },
                { icon: '🌐', link: `https://${config.website}` }
              ].map((social, i) => (
                <a key={i} href={social.link} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center hover:bg-teal-500/20 transition-colors">
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PortfolioApp;