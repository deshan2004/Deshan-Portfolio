// Projects Data
const projectsData = [
  {
    id: "shelflife-ai",
    name: "ShelfLife-AI",
    shortDesc: "AI-powered retail inventory & expiry loss prevention",
    fullDesc: "An innovative AI-powered inventory management system that uses OCR technology and predictive analytics to eliminate expiry losses, digitize traditional stock tracking, and maximize profits for small-scale retailers.",
    tech: ["React.js", "TensorFlow.js", "Node.js", "MongoDB", "OCR"],
    features: ["Expiry date prediction using ML models", "Real-time inventory dashboard with analytics", "Automated alerts for near-expiry items", "OCR-based digitization of stock records", "Waste reduction & profit maximization reports"],
    repo: "https://github.com/deshan2004/ShelfLife-AI",
    liveDemo: "https://shelf-life-ai-46q7.vercel.app/"
  },
  {
    id: "neth-sawan",
    name: "Neth-Sawan",
    shortDesc: "AI-driven accessibility for hearing impaired",
    fullDesc: "An AI-driven accessibility platform designed for the hearing impaired, providing real-time speech-to-sign language translation, object recognition, and sound visualization to bridge communication gaps.",
    tech: ["React.js", "TensorFlow.js", "Web Speech API", "Node.js", "Firebase"],
    features: ["Real-time speech-to-sign language translation", "Object recognition via camera", "Sound visualization for environment awareness", "Cross-platform accessible design"],
    repo: "https://github.com/deshan2004/Neth-Sawan",
    liveDemo: "https://neth-sawan.vercel.app/"
  },
  {
    id: "sky-drifter",
    name: "Sky Drifter",
    shortDesc: "Celestial platformer game with Phaser 3",
    fullDesc: "A high-performance 2D celestial platformer featuring arcade physics, smooth animations, and a stunning glassmorphism UI. Developed using the Phaser 3 framework.",
    tech: ["Phaser 3", "JavaScript (ES6+)", "HTML5 Canvas", "Arcade Physics"],
    features: ["Dynamic level progression with increasing difficulty", "Interactive glassmorphism HUD with neon aesthetics", "High-score persistence via LocalStorage", "Smooth arcade physics and animations"],
    repo: "https://github.com/deshan2004/sky-drifter",
    liveDemo: "https://deshan2004.github.io/Sky-Drifter/"
  },
  {
    id: "cinemate",
    name: "CineMate",
    shortDesc: "Movie discovery web app with real-time data",
    fullDesc: "A sleek and responsive movie and TV show discovery web application built with HTML, CSS, and JavaScript. Features real-time data integration from TMDB, dark-themed UI, and a personalized favorites system.",
    tech: ["JavaScript", "HTML5", "CSS3", "TMDB API"],
    features: ["Real-time trending movies & search", "Dynamic DOM rendering", "Personalized watchlist with local storage", "Detailed movie modals with ratings"],
    repo: "https://github.com/deshan2004/CineMate",
    liveDemo: "https://deshan2004.github.io/CineMate/"
  },
  {
    id: "tailwatch",
    name: "TailWatch",
    shortDesc: "Community stray dog care & rabies prevention",
    fullDesc: "A community-driven platform for stray dog care and rabies prevention. Enables stray dog registry, vaccination alerts, and community reporting to promote animal welfare and public health.",
    tech: ["HTML5", "CSS3", "JavaScript", "Firebase" ,"map","PHP"],
    features: ["Stray dog registry with geolocation", "Vaccination reminder system", "Community rescue and incident reports", "Real-time data synchronization"],
    repo: "https://github.com/deshan2004/TailWatch",
    liveDemo: "https://deshan2004.github.io/TailWatch/"
  },
  {
    id: "educonnect",
    name: "Edu-Connect",
    shortDesc: "Comprehensive learning management system",
    fullDesc: "A full-featured learning management system connecting students and educators with course management, assignment tracking, and collaborative tools.",
    tech: ["HTML5", "CSS3", "JavaScript", "PHP", "MySQL"],
    features: ["Course creation and enrollment", "Assignment submission & grading", "Discussion forums", "Progress analytics"],
    repo: "https://github.com/deshan2004/Edu-Connect",
    liveDemo: "https://edu-connect-rust-eta.vercel.app/"
  }
];

// Toast Notification
function showToast(message, type = 'success') {
  const toast = document.getElementById('toast');
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add('show');
  toast.style.borderLeftColor = type === 'error' ? '#ef4444' : '#4ade80';
  setTimeout(() => {
    toast.classList.remove('show');
  }, 3500);
}

// Generate and Download CV
function generateAndDownloadCV() {
  const cvContent = `DESHAN SIRIWARDHANA
======================

📍 Based in Sri Lanka
📧 deshandhakshitha16@gmail.com
📱 +94 76 977 6315
🔗 github.com/deshan2004

PROFESSIONAL SUMMARY
-------------------
Software Engineering undergraduate passionate about Full-Stack Development, AI Integration, and Software Quality Assurance.

EDUCATION
---------
🎓 BSc (Hons) in Software Engineering (UGC Approved)
   • Expected Graduation: 2026

TECHNICAL SKILLS
---------------
• Languages: JavaScript, Python, PHP, Java, HTML5, CSS3
• Frameworks: React.js, Angular, Node.js, Express.js
• Databases: MySQL, MongoDB, Firebase, PostgreSQL
• AI/ML: TensorFlow.js, Web Speech API, OCR
• QA Tools: Selenium, Manual Testing, JUnit

FEATURED PROJECTS
----------------
1. ShelfLife-AI - AI-powered inventory management system
2. Neth-Sawan - Accessibility platform with speech-to-sign
3. Sky Drifter - Celestial platformer game with Phaser 3
4. CineMate - Movie discovery app with TMDB API
5. TailWatch - Community platform for stray dog care

AVAILABILITY
-----------
✅ Open for Remote & On-site opportunities
✅ Available for freelance and collaborations

CONTACT
-------
📧 deshandhakshitha16@gmail.com
💬 WhatsApp: +94 76 977 6315

---
© 2026 Deshan Siriwardhana`;

  const blob = new Blob([cvContent], { type: 'text/plain' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'Deshan_Siriwardhana_CV.txt';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
  showToast('✅ CV downloaded successfully!', 'success');
}

// Send email via mailto
function sendEmailViaMailto(name, email, subject, message) {
  const recipient = 'deshandhakshitha16@gmail.com';
  const mailtoSubject = `Portfolio Contact: ${subject}`;
  const mailtoBody = `Name: ${name}%0AEmail: ${email}%0A%0AMessage:%0A${message}%0A%0A---%0ASent from portfolio website.`;
  const mailtoLink = `mailto:${recipient}?subject=${encodeURIComponent(mailtoSubject)}&body=${encodeURIComponent(mailtoBody)}`;
  window.location.href = mailtoLink;
  return true;
}

// Render Projects
function renderProjects() {
  const grid = document.getElementById('projectGrid');
  if (!grid) return;
  grid.innerHTML = '';

  projectsData.forEach(proj => {
    const card = document.createElement('div');
    card.className = 'project-card';

    const techChips = proj.tech.slice(0, 2).map(t => 
      `<span style="background:#1e2a3a; padding:2px 10px; border-radius:20px; font-size:0.7rem; margin-right:6px; display:inline-block;">${t}</span>`
    ).join('');

    card.innerHTML = `
      <div style="margin-bottom: 8px;">${techChips}</div>
      <h3>${proj.name}</h3>
      <p>${proj.shortDesc}</p>
      <div class="project-links">
        <a href="#" onclick="window.showProjectDetail('${proj.id}'); return false;">
          <i class="fas fa-expand-alt"></i> Explore
        </a>
        <a href="${proj.repo}" target="_blank">
          <i class="fab fa-github"></i> Code
        </a>
      </div>
    `;
    grid.appendChild(card);
  });
}

// Show Project Details Modal
window.showProjectDetail = function(projectId) {
  const project = projectsData.find(p => p.id === projectId);
  if (!project) return;

  const modalDiv = document.createElement('div');
  modalDiv.className = 'modal-glass';

  const techsHtml = project.tech.map(t => 
    `<span style="background:#1f2e38; margin:3px; padding:3px 12px; border-radius:30px; font-size:0.7rem; display:inline-block;">${t}</span>`
  ).join('');

  const featuresHtml = project.features.map(f => 
    `<div style="margin-bottom: 8px;"><i class="fas fa-caret-right" style="color:#ffb347;"></i> ${f}</div>`
  ).join('');

  modalDiv.innerHTML = `
    <div class="modal-card">
      <button id="closeModalBtn" style="position: absolute; top: 12px; right: 18px; background: none; border: none; color: #9ca3af; font-size: 1.8rem; cursor: pointer; z-index: 10;">&times;</button>
      <h2 style="font-size: 1.5rem; margin-bottom: 0.5rem;">${project.name}</h2>
      <div style="margin: 10px 0;">${techsHtml}</div>
      <p style="margin: 10px 0; line-height: 1.5; color: #cbd5e6;">${project.fullDesc}</p>
      <div style="background: #0b1217; border-radius: 1rem; padding: 1rem; margin: 1rem 0;">
        <h3 style="margin-bottom: 10px; color: #ffb347;"><i class="fas fa-star"></i> Key Features</h3>
        ${featuresHtml}
      </div>
      <div style="display: flex; gap: 1rem; margin-top: 1rem; flex-wrap: wrap;">
        <a href="${project.repo}" target="_blank" class="btn" style="padding: 0.5rem 1.2rem;"><i class="fab fa-github"></i> Repository</a>
        ${project.liveDemo !== '#' ? `<a href="${project.liveDemo}" target="_blank" class="btn btn-outline" style="padding: 0.5rem 1.2rem;"><i class="fas fa-external-link-alt"></i> Live Demo</a>` : '<span style="padding: 0.5rem 1.2rem; opacity: 0.6;">Demo Soon</span>'}
      </div>
    </div>
  `;

  document.body.appendChild(modalDiv);

  const closeBtn = modalDiv.querySelector('#closeModalBtn');
  const closeModal = () => modalDiv.remove();
  closeBtn.addEventListener('click', closeModal);
  modalDiv.addEventListener('click', (e) => {
    if (e.target === modalDiv) closeModal();
  });
};

// Initialize on DOM Load
document.addEventListener('DOMContentLoaded', () => {
  renderProjects();

  // CV Download Button
  const cvBtn = document.getElementById('downloadCvBtn');
  if (cvBtn) {
    cvBtn.addEventListener('click', (e) => {
      e.preventDefault();
      generateAndDownloadCV();
    });
  }

  // Contact Form Handler
  const contactForm = document.getElementById('contactForm');
  const submitBtn = document.getElementById('submitBtn');
  
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('senderName')?.value.trim();
      const email = document.getElementById('senderEmail')?.value.trim();
      const subject = document.getElementById('senderSubject')?.value.trim();
      const message = document.getElementById('senderMessage')?.value.trim();

      if (!name || !email || !subject || !message) {
        showToast('⚠️ Please fill in all fields', 'error');
        return;
      }

      if (!email.includes('@') || !email.includes('.')) {
        showToast('❌ Please enter a valid email address', 'error');
        return;
      }

      const originalText = submitBtn.innerHTML;
      submitBtn.innerHTML = '<i class="fas fa-spinner fa-pulse"></i> Sending...';
      submitBtn.disabled = true;

      setTimeout(() => {
        sendEmailViaMailto(name, email, subject, message);
        showToast('📧 Opening your email app...', 'success');
        contactForm.reset();
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
      }, 500);
    });
  }

  // Mobile Menu Toggle
  const menuToggle = document.getElementById('mobile-menu');
  const navLinks = document.getElementById('navLinks');

  if (menuToggle) {
    menuToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      navLinks.classList.toggle('active');
      const icon = menuToggle.querySelector('i');
      icon.classList.toggle('fa-bars');
      icon.classList.toggle('fa-times');
    });

    document.addEventListener('click', (e) => {
      if (navLinks.classList.contains('active') && 
          !navLinks.contains(e.target) && 
          !menuToggle.contains(e.target)) {
        navLinks.classList.remove('active');
        const icon = menuToggle.querySelector('i');
        icon.classList.add('fa-bars');
        icon.classList.remove('fa-times');
      }
    });
  }

  // Smooth Scroll & Active Link
  const sections = document.querySelectorAll('section');
  const navItems = document.querySelectorAll('.nav-links a');

  window.addEventListener('scroll', () => {
    let current = "";
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (pageYOffset >= sectionTop - 150) {
        current = section.getAttribute('id');
      }
    });

    navItems.forEach(item => {
      item.classList.remove('active');
      if (item.getAttribute('href') === `#${current}`) {
        item.classList.add('active');
      }
    });
  });

  // Navigation Link Smooth Scroll
  navItems.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        if (navLinks.classList.contains('active')) {
          navLinks.classList.remove('active');
          if (menuToggle) {
            const icon = menuToggle.querySelector('i');
            icon.classList.add('fa-bars');
            icon.classList.remove('fa-times');
          }
        }
      }
    });
  });
});