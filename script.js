  const projectsData = [
    {
      id: "educonnect-lms",
      name: "EduConnect LMS",
      shortDesc: "Multi-panel Learning Management System with role-based dashboards.",
      fullDesc: "Built with PHP, MySQL, Tailwind CSS, and JavaScript. Features admin, staff, and student panels with course tracking, assignment submission, and authentication.",
      tech: ["PHP", "MySQL", "Tailwind CSS", "JavaScript"],
      features: ["Role-based panels (Admin/Staff/Student)", "Assignment submission & grading", "Course tracking & progress", "Secure Authentication (BCrypt)"],
      repo: "https://github.com/Maleesha-Sanjana/Edu-Connect",
      liveDemo: "#"
    },
    {
      id: "neth-sawan",
      name: "Neth-Sawan",
      shortDesc: "AI-driven digital assistant with real-time transcription & image recognition.",
      fullDesc: "Intelligent assistant using React.js, TensorFlow.js, and Web Speech API. Provides real-time speech-to-text and object detection for accessibility.",
      tech: ["React.js", "TensorFlow.js", "Web Speech API", "AI Integration"],
      features: ["Real-time speech-to-text conversion", "Object recognition via camera", "Accessibility-first design", "Cross-platform ready"],
      repo: "https://github.com/deshan2004/neth-sawan",
      liveDemo: "#"
    },
    {
      id: "employee-system",
      name: "Employee Management System",
      shortDesc: "Full-stack employee & project tracker with payroll summaries.",
      fullDesc: "Robust PHP & MySQL application with employee CRUD, project assignment, work logs, and payroll modules. Features jQuery and Bootstrap frontend.",
      tech: ["PHP", "MySQL", "Bootstrap", "jQuery"],
      features: ["Employee CRUD operations", "Project assignment tracking", "Work log with timestamps", "Payroll & summary reports"],
      repo: "https://github.com/deshan2004/employee-project-managment-system",
      liveDemo: "#"
    },
    {
      id: "tailwatch",
      name: "TailWatch",
      shortDesc: "Community-powered stray dog care & rabies prevention platform.",
      fullDesc: "Built with HTML5, CSS3, JavaScript, and Firebase. Enables stray dog registry, vaccination alerts, and community reporting.",
      tech: ["HTML5", "CSS3", "JavaScript", "Firebase"],
      features: ["Stray dog registry with geolocation", "Vaccination reminders", "Community rescue reports", "Real-time data sync via Firebase"],
      repo: "https://github.com/deshan2004/TailWatch",
      liveDemo: "#"
    },
    {
      id: "cinemate",
      name: "CineMate",
      shortDesc: "Movie discovery & recommendation app with TMDB API.",
      fullDesc: "Dynamic JavaScript web app fetching trending movies, search filters, and watchlist saving using local storage. Pure HTML/CSS/JS with API integration.",
      tech: ["JavaScript", "HTML5", "CSS3", "API Integration"],
      features: ["Trending movies & search", "Dynamic DOM rendering", "Personal watchlist", "Detailed movie modals"],
      repo: "https://github.com/deshan2004/CineMate",
      liveDemo: "#"
    },

    {
  id: "sky-drifter",
  name: "Sky Drifter",
  shortDesc: "Celestial platformer game built with Phaser 3 engine.",
  fullDesc: "A high-performance 2D platformer featuring arcade physics, smooth animations, and a glassmorphism UI. Developed using the Phaser 3 framework, showcasing advanced state management and real-time asset loading.",
  tech: ["Phaser 3", "JavaScript (ES6+)", "HTML5 Canvas", "Arcade Physics"],
  features: ["Dynamic level progression", "Interactive glassmorphism HUD", "Neon-visual aesthetics", "High-score persistence via LocalStorage"],
  repo: "https://github.com/deshan2004/sky-drifter", // ඔයාගේ නිවැරදි repo link එක දාන්න
  liveDemo: "game/index.html" // ගේම් එක තියෙන path එක මෙතනට දෙන්න
}
  ];

  function renderProjects() {
    const grid = document.getElementById('projectGrid');
    if (!grid) return;
    grid.innerHTML = '';
    projectsData.forEach(proj => {
      const card = document.createElement('div');
      card.className = 'project-card';
      const techBadges = proj.tech.slice(0, 3).map(t => `<span style="font-size: 0.7rem; color: #6ab0de; border: 1px solid #2c7da0; padding: 2px 8px; border-radius: 10px;">${t}</span>`).join('');
      card.innerHTML = `
        <div style="margin-bottom: 1rem; display: flex; gap: 0.5rem; flex-wrap: wrap;">
          ${techBadges}
        </div>
        <h3>${proj.name}</h3>
        <p>${proj.shortDesc}</p>
        <div class="project-links">
          <a href="#" onclick="showProjectDetail('${proj.id}'); return false;"><i class="fas fa-plus-circle"></i> Learn More</a>
          <a href="${proj.repo}" target="_blank"><i class="fab fa-github"></i> Code</a>
        </div>
      `;
      grid.appendChild(card);
    });
  }

  window.showProjectDetail = function(projectId) {
    const project = projectsData.find(p => p.id === projectId);
    if (!project) return;
    const modalDiv = document.createElement('div');
    modalDiv.id = 'projectModal';
    modalDiv.style.position = 'fixed';
    modalDiv.style.top = '0';
    modalDiv.style.left = '0';
    modalDiv.style.width = '100%';
    modalDiv.style.height = '100%';
    modalDiv.style.backgroundColor = 'rgba(0,0,0,0.88)';
    modalDiv.style.backdropFilter = 'blur(10px)';
    modalDiv.style.zIndex = '2000';
    modalDiv.style.display = 'flex';
    modalDiv.style.alignItems = 'center';
    modalDiv.style.justifyContent = 'center';
    modalDiv.style.padding = '1rem';
    
    const modalContent = document.createElement('div');
    modalContent.style.maxWidth = '620px';
    modalContent.style.width = '100%';
    modalContent.style.background = '#11181c';
    modalContent.style.borderRadius = '2rem';
    modalContent.style.border = '1px solid #2c7da0';
    modalContent.style.padding = '2rem';
    modalContent.style.position = 'relative';
    modalContent.style.color = '#eef2ff';
    
    const techList = project.tech.map(t => `<span style="background:#1e2a3a; padding:0.2rem 0.9rem; border-radius:30px; font-size:0.75rem; margin-right:0.5rem; display:inline-block; margin-bottom:0.5rem; border:1px solid #2c7da0;">${t}</span>`).join('');
    const featuresHtml = project.features.map(f => `<div style="display:flex; align-items:center; gap:0.7rem; margin-bottom:0.7rem;"><i class="fas fa-check-circle" style="color:#ffb347;"></i> <span>${f}</span></div>`).join('');
    
    modalContent.innerHTML = `
      <button id="closeModalBtn" style="position:absolute; top:1rem; right:1.5rem; background:none; border:none; color:#9ca3af; font-size:2rem; cursor:pointer;">&times;</button>
      <h2 style="font-size:1.8rem; margin-bottom:0.7rem;">${project.name}</h2>
      <div style="margin-bottom:1rem;">${techList}</div>
      <p style="margin-bottom:1.2rem; color:#cbd5e6; line-height:1.5;">${project.fullDesc}</p>
      <div style="background:#0a0f12; border-radius:1rem; padding:1rem; margin:1rem 0;">
        <h3 style="margin-bottom:0.8rem; font-size:1.2rem;"><i class="fas fa-star"></i> Key Features</h3>
        ${featuresHtml}
      </div>
      <div style="display:flex; gap:1rem; margin-top:1rem;">
        <a href="${project.repo}" target="_blank" class="btn" style="padding:0.6rem 1.2rem;"><i class="fab fa-github"></i> Repository</a>
        ${project.liveDemo !== '#' ? `<a href="${project.liveDemo}" target="_blank" class="btn btn-outline">Live Demo</a>` : ''}
      </div>
    `;
    modalDiv.appendChild(modalContent);
    document.body.appendChild(modalDiv);
    
    const closeBtn = modalDiv.querySelector('#closeModalBtn');
    const closeModal = () => modalDiv.remove();
    closeBtn.addEventListener('click', closeModal);
    modalDiv.addEventListener('click', (e) => { if(e.target === modalDiv) closeModal(); });
  };

  document.addEventListener('DOMContentLoaded', () => {
    renderProjects();
    
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    });
    
    const projectBtn = document.querySelector('.hero-btns .btn');
    if(projectBtn) {
      projectBtn.addEventListener('click', (e) => {
        e.preventDefault();
        document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
      });
    }
  });document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');

    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        const icon = menuToggle.querySelector('i');
        icon.classList.toggle('fa-bars');
        icon.classList.toggle('fa-times');
    });

    const sections = document.querySelectorAll('section');
    const navItems = document.querySelectorAll('.nav-links a');

    window.addEventListener('scroll', () => {
        let current = "";
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (pageYOffset >= sectionTop - 100) {
                current = section.getAttribute('id');
            }
        });

        navItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('href').includes(current)) {
                item.classList.add('active');
            }
        });
    });
});