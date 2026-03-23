// Complete project list based on your GitHub repositories (all projects included)
const projectsData = [
  {
    id: "educonnect-lms",
    name: "EduConnect LMS",
    shortDesc: "Multi-panel Learning Management System with Admin, Staff, and User interfaces.",
    fullDesc: "EduConnect is a full-featured LMS built with PHP (Laravel) and MySQL. It provides role-based dashboards: admins manage courses & users, staff upload materials, and students access learning resources, assignments, and grades. Real-time notifications and responsive UI.",
    tech: ["PHP", "Laravel", "MySQL", "Tailwind CSS", "JavaScript", "Chart.js"],
    features: ["Role-based panels (Admin/Staff/Student)", "Assignment submission & grading", "Live course progress tracking", "Announcement system", "Interactive reports"],
    repo: "https://github.com/deshan2004/educonnect-lms",
    liveDemo: "#"
  },
  {
    id: "neth-sawan",
    name: "Neth-Sawan",
    shortDesc: "AI-driven digital assistant for real-time transcription and image recognition.",
    fullDesc: "Neth-Sawan (Vision of the Future) is an intelligent assistant leveraging TensorFlow.js and Web Speech API. It converts speech to text in real-time and uses image recognition models to describe uploaded images or camera feeds. Built for accessibility.",
    tech: ["React.js", "TensorFlow.js", "Web Speech API", "Tailwind CSS", "IndexedDB"],
    features: ["Live speech-to-text transcription", "Image classification (MobileNet)", "Camera capture & analysis", "Dark/light mode", "Offline-ready caching"],
    repo: "https://github.com/deshan2004/neth-sawan",
    liveDemo: "#"
  },
  {
    id: "employee-management-system",
    name: "Employee Management System",
    shortDesc: "Comprehensive system for project tracking, attendance, and employee records.",
    fullDesc: "A robust employee management portal developed with PHP (native) and MySQL. HR and managers can track employee details, manage leave requests, monitor project assignments, and generate payroll summaries with secure authentication.",
    tech: ["PHP", "MySQL", "Bootstrap", "jQuery", "Chart.js"],
    features: ["Employee CRUD & departments", "Leave management & approval", "Project assignment tracker", "Attendance logs", "Monthly payroll reports"],
    repo: "https://github.com/deshan2004/employee-project-management-system",
    liveDemo: "#"
  },
  {
    id: "tailwatch",
    name: "TailWatch",
    shortDesc: "Community-Powered Stray Dog Care & Rabies Prevention Platform.",
    fullDesc: "TailWatch connects local communities to help stray dogs by providing health tracking, vaccination reminders, and rescue coordination. Built with HTML/CSS/JS and Firebase integration for real-time updates.",
    tech: ["HTML5", "CSS3", "JavaScript", "Firebase", "Leaflet.js"],
    features: ["Stray dog registry & mapping", "Vaccination alerts", "Community reporting", "Rescue request system", "Admin dashboard"],
    repo: "https://github.com/deshan2004/TailWatch",
    liveDemo: "#"
  },
  {
    id: "cinemate",
    name: "CineMate",
    shortDesc: "Movie discovery & recommendation web app with TMDB API.",
    fullDesc: "CineMate helps users discover trending movies, search films, and get personalized recommendations based on genres. Built with vanilla JS and modern CSS grid layout.",
    tech: ["JavaScript", "HTML5", "CSS3", "TMDB API", "LocalStorage"],
    features: ["Trending movies carousel", "Search with filters", "Movie details modal", "Watchlist saving", "Responsive design"],
    repo: "https://github.com/deshan2004/CineMate",
    liveDemo: "#"
  },
  {
    id: "deshan-portfolio",
    name: "Deshan Portfolio",
    shortDesc: "Modern developer portfolio with dark theme & project showcases.",
    fullDesc: "This very portfolio! Built with HTML/CSS/JS featuring dynamic project cards, smooth scrolling, and separate project pages. Fully responsive and optimized for GitHub Pages.",
    tech: ["HTML5", "CSS3", "JavaScript", "FontAwesome"],
    features: ["Dark theme UI", "Project detail pages", "Smooth animations", "GitHub repo links", "Mobile friendly"],
    repo: "https://github.com/deshan2004/Deshan-Portfolio",
    liveDemo: "#"
  }
];

// Function to dynamically generate project cards linking to separate HTML files
function renderProjects() {
  const grid = document.getElementById('projectGrid');
  if (!grid) return;
  grid.innerHTML = '';
  projectsData.forEach(proj => {
    const card = document.createElement('div');
    card.className = 'project-card';
    card.innerHTML = `
      <h3>${proj.name}</h3>
      <p>${proj.shortDesc}</p>
      <div class="project-links">
        <a href="projects/${proj.id}.html" class="project-detail-link"><i class="fas fa-info-circle"></i> Details</a>
        <a href="${proj.repo}" target="_blank"><i class="fab fa-github"></i> Repository</a>
        ${proj.liveDemo !== '#' ? `<a href="${proj.liveDemo}" target="_blank"><i class="fas fa-external-link-alt"></i> Live Demo</a>` : ''}
      </div>
    `;
    grid.appendChild(card);
  });
}

// Generate each project page HTML (for separate files)
function generateProjectPage(project) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${project.name} | Deshan Siriwardhana</title>
  <link href="https://fonts.googleapis.com/css2?family=Inter:opsz,wght@14..32,300;14..32,400;14..32,600;14..32,700;14..32,800&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
  <style>
    * { margin:0; padding:0; box-sizing:border-box; }
    body {
      font-family: 'Inter', sans-serif;
      background: #0a0c10;
      color: #eef2ff;
      line-height: 1.5;
    }
    .project-page-container {
      max-width: 1000px;
      margin: 0 auto;
      padding: 2rem;
    }
    .back-nav {
      margin: 2rem 0 1rem;
    }
    .back-nav a {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      text-decoration: none;
      color: #6ab0de;
      font-weight: 500;
      transition: 0.2s;
    }
    .back-nav a:hover { gap: 0.8rem; color: #ffb347; }
    .project-header {
      background: #11181c;
      border-radius: 2rem;
      padding: 2rem;
      margin-bottom: 2rem;
      border: 1px solid #2c7da0;
      box-shadow: 0 8px 20px rgba(0,0,0,0.3);
    }
    .project-header h1 {
      font-size: 2.5rem;
      font-weight: 800;
      margin-bottom: 1rem;
      background: linear-gradient(135deg, #eef2ff, #6ab0de);
      -webkit-background-clip: text;
      background-clip: text;
      color: transparent;
    }
    .tech-stack {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
      margin: 1rem 0;
    }
    .tech-stack span {
      background: #1e2a3a;
      padding: 0.25rem 1rem;
      border-radius: 40px;
      font-size: 0.8rem;
      font-weight: 500;
      border: 1px solid #2c7da0;
      color: #a5f3fc;
    }
    .project-description, .features-list {
      background: #11181c;
      border-radius: 1.5rem;
      padding: 1.8rem;
      margin-bottom: 1.5rem;
      border: 1px solid #2c3e44;
    }
    .project-description h2, .features-list h2 {
      font-size: 1.5rem;
      margin-bottom: 1rem;
      font-weight: 700;
      color: #6ab0de;
    }
    .features-list ul {
      list-style: none;
      padding-left: 0;
    }
    .features-list li {
      margin-bottom: 0.6rem;
      display: flex;
      align-items: center;
      gap: 0.7rem;
      color: #cbd5e1;
    }
    .features-list li i {
      color: #ffb347;
      width: 1.4rem;
    }
    .action-buttons {
      display: flex;
      gap: 1.2rem;
      flex-wrap: wrap;
      margin-top: 1.5rem;
    }
    .btn-project {
      background: #2c7da0;
      color: white;
      padding: 0.7rem 1.5rem;
      border-radius: 40px;
      text-decoration: none;
      font-weight: 600;
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      transition: 0.2s;
    }
    .btn-project:hover {
      background: #1e5a74;
      transform: translateY(-2px);
    }
    .btn-outline-project {
      background: transparent;
      border: 1px solid #2c7da0;
      color: #6ab0de;
    }
    .btn-outline-project:hover {
      background: #2c7da0;
      color: white;
    }
    footer {
      text-align: center;
      margin-top: 3rem;
      padding: 1.5rem;
      border-top: 1px solid #1e2a3a;
      color: #6c7a8a;
    }
    @media (max-width: 700px) {
      .project-page-container { padding: 1rem; }
      .project-header h1 { font-size: 1.8rem; }
    }
  </style>
</head>
<body>
<div class="project-page-container">
  <div class="back-nav">
    <a href="../index.html"><i class="fas fa-arrow-left"></i> Back to Portfolio</a>
  </div>
  <div class="project-header">
    <h1>${project.name}</h1>
    <div class="tech-stack">
      ${project.tech.map(t => `<span>${t}</span>`).join('')}
    </div>
    <p style="margin-top: 1rem; font-size:1.1rem; color:#cbd5e1;">${project.fullDesc}</p>
  </div>
  
  <div class="features-list">
    <h2><i class="fas fa-star"></i> Key Features</h2>
    <ul>
      ${project.features.map(f => `<li><i class="fas fa-check-circle"></i> ${f}</li>`).join('')}
    </ul>
    <div class="action-buttons">
      <a href="${project.repo}" target="_blank" class="btn-project"><i class="fab fa-github"></i> View Source Code</a>
      ${project.liveDemo !== '#' ? `<a href="${project.liveDemo}" target="_blank" class="btn-project btn-outline-project"><i class="fas fa-globe"></i> Live Demo</a>` : ''}
    </div>
  </div>
  <div class="project-description">
    <h2>📌 About this project</h2>
    <p>${project.fullDesc} Developed with modern best practices, responsive design, and scalability in mind. Part of my software engineering journey — more updates coming soon.</p>
    <br>
    <p><i class="fab fa-github"></i> Full source code available on GitHub. Feel free to explore, fork, or contribute!</p>
  </div>
  <footer>
    <p>© 2026 Deshan Siriwardhana — <a href="https://github.com/deshan2004" style="color:#6ab0de;">github.com/deshan2004</a></p>
  </footer>
</div>
</body>
</html>`;
}

// Navbar scroll effect
function initNavbarScroll() {
  const nav = document.querySelector('nav');
  if (!nav) return;
  
  window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
      nav.style.background = 'rgba(10, 12, 16, 0.98)';
      nav.style.borderBottom = '1px solid #2c7da0';
    } else {
      nav.style.background = 'rgba(10, 12, 16, 0.92)';
      nav.style.borderBottom = '1px solid rgba(44, 125, 160, 0.2)';
    }
  });
}

// Smooth scroll for navigation links
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
}

// Console instructions for creating separate project files
function showSetupInstructions() {
  console.log("🎯 DARK THEME PORTFOLIO + ALL PROJECTS INCLUDED");
  console.log("📁 To complete the portfolio structure, create a 'projects' folder and generate the following HTML files:");
  projectsData.forEach(proj => {
    console.log(`\n📄 File: projects/${proj.id}.html`);
    console.log("─────────────────────────────────────────────────");
    console.log(generateProjectPage(proj));
    console.log("─────────────────────────────────────────────────\n");
  });
  console.log("✨ All 6 projects (EduConnect LMS, Neth-Sawan, Employee Management System, TailWatch, CineMate, Deshan Portfolio) are included.");
  console.log("🌙 Dark theme applied globally. Each project page has its own dark-themed layout.");
  console.log("🔗 Links point to real GitHub repositories: deshan2004/*");
}

// Initialize everything when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  renderProjects();
  initNavbarScroll();
  initSmoothScroll();
});

// Show setup instructions on load (for development purposes)
window.addEventListener('load', () => {
  showSetupInstructions();
  console.log("✅ Portfolio loaded successfully!");
});