// Projects Data
const projectsData = [
  {
    id: "shelflife-ai",
    name: "ShelfLife-AI",
    shortDesc: "AI-powered retail inventory & expiry loss prevention",
    fullDesc: "An innovative AI-powered inventory management system that uses OCR technology and predictive analytics to eliminate expiry losses, digitize traditional stock tracking, and maximize profits for small-scale retailers.",
    tech: ["React.js", "Tesseract.js", "ZXing Library", "Node.js", "Firebase", "OCR"],
    features: ["Expiry date prediction using ML models", "Real-time inventory dashboard with analytics", "Automated alerts for near-expiry items", "OCR-based digitization of stock records", "Waste reduction & profit maximization reports"],
    repo: "https://github.com/deshan2004/ShelfLife-AI",
    liveDemo: "https://shelf-life-ai.vercel.app/"
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
    tech: ["HTML5", "CSS3", "JavaScript", "Firebase", "map", "PHP"],
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
  },
  {
    id: "codepulse",
    name: "CodePulse",
    shortDesc: "Automated SQA Dashboard with SonarQube",
    fullDesc: "Automated Software Quality Assurance (SQA) Dashboard built with FastAPI, Next.js, and SonarQube. Automates code scanning, tracks quality/security metrics, and monitors performance endpoints in real-time.",
    tech: ["FastAPI", "Next.js", "Python", "SonarQube", "TypeScript", "PostgreSQL"],
    features: ["Real-time code scanning and security metrics", "Automated tracking of SQA standards", "Performance endpoint monitoring", "Interactive dashboard UI"],
    repo: "https://github.com/deshan2004/CodePulse",
    liveDemo: "https://code-pulse-jzq7.vercel.app/"
  },
  {
    id: "ecommerce-testing",
    name: "E-commerce Search Automation",
    shortDesc: "Automated UI testing with Selenium",
    fullDesc: "Automated UI testing project to verify e-commerce product search features using Selenium WebDriver and Maven build tool. Ensures high software quality by automating core user flows.",
    tech: ["Java", "Selenium", "Maven", "SQA"],
    features: ["Automated product search verification", "Integration with Maven build lifecycle", "Detailed test reporting", "Robust UI interaction handling"],
    repo: "https://github.com/deshan2004/E-commerce-Website-Search-Automation",
    liveDemo: "#"
  },
  {
    id: "chatbot-learnbot",
    name: "LearnBot",
    shortDesc: "Interactive programming learning platform",
    fullDesc: "LearnBot is a desktop-based interactive learning platform designed to help beginners master programming concepts. Built with Python and Tkinter, providing real-world analogies and assessments.",
    tech: ["Python", "Tkinter", "Desktop App"],
    features: ["Structured learning paths for coding", "Built-in assessment system", "Real-world programming analogies", "Interactive desktop UI"],
    repo: "https://github.com/deshan2004/ChatBot",
    liveDemo: "#"
  },
  {
    id: "bankaccount-junit",
    name: "BankAccount JUnit Testing",
    shortDesc: "Unit testing implementation with JUnit 5",
    fullDesc: "Unit testing implementation and comprehensive reporting for a Java BankAccount system using the JUnit 5 framework. Focuses on clean code and robust software quality assurance.",
    tech: ["Java", "JUnit 5", "Unit Testing", "SQA"],
    features: ["Comprehensive test coverage for banking logic", "JUnit 5 assertions and test lifecycles", "Detailed test reports", "Edge case validation"],
    repo: "https://github.com/deshan2004/BankAccount-Unit-Testing-JUnit",
    liveDemo: "#"
  },
  {
    id: "kingswood-connect",
    name: "Kingswood Connect",
    shortDesc: "Community platform for Kingswood",
    fullDesc: "A dedicated community and networking platform built for Kingswood. Features a modern, responsive user interface and seamless integration for users to connect and interact.",
    tech: ["JavaScript", "React.js", "Vercel", "FireBase"],
    features: ["Responsive community networking interface", "Real-time updates", "Optimized performance and SEO", "Modern UI/UX design"],
    repo: "https://github.com/deshan2004/Kingswood-Connect",
    liveDemo: "https://kingswood-connect.vercel.app"
  },
  {
    id: "ultimate-guessing-game",
    name: "Ultimate Guessing Game",
    shortDesc: "Modular Python game application",
    fullDesc: "A modular, menu-driven Python application featuring multiple mini-games including Number Guessing, Wordman-style Word Guessing, and a Code Breaker game. Built with Streamlit for a web-based GUI.",
    tech: ["Python", "Streamlit", "Game Dev", "MongoDB Atlas"],
    features: ["Menu-driven multi-game architecture", "Number and word guessing mechanics", "Code breaker logic", "Interactive web GUI with Streamlit"],
    repo: "https://github.com/deshan2004/Ultimate-Guessing-Game-Python",
    liveDemo: "https://ultimate-guessing-game-python-ufca4jfzddoh3ovzjwg9dm.streamlit.app/"
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

// Download PDF CV Directly
function downloadPDFCV() {
  const link = document.createElement('a');
  link.href = 'CV.pdf'; // ඔයාගේ ඇත්තම CV.pdf එක තියෙන තැන
  link.download = 'Deshan_Siriwardhana_CV.pdf'; // ඩවුන්ලෝඩ් වෙද්දී සේව් වෙන නම
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  showToast('✅ CV downloaded successfully!', 'success');
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
window.showProjectDetail = function (projectId) {
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
      downloadPDFCV(); // දැන් කෙලින්ම PDF එක ඩවුන්ලෝඩ් වෙන function එක වැඩ කරන්නේ
    });
  }

  // EmailJS Initialize
  emailjs.init("Za9-uzgxungOP5w6t");

  // Contact Form Handler with EmailJS
  const contactForm = document.getElementById('contactForm');
  const submitBtn = document.getElementById('submitBtn');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('senderName')?.value.trim();
      const email = document.getElementById('senderEmail')?.value.trim();
      const subject = document.getElementById('senderSubject')?.value.trim();
      const message = document.getElementById('senderMessage')?.value.trim();

      // Validation
      if (!name || !email || !subject || !message) {
        showToast('⚠️ Please fill in all fields', 'error');
        return;
      }

      if (!email.includes('@') || !email.includes('.')) {
        showToast('❌ Please enter a valid email address', 'error');
        return;
      }

      // Button Loading State
      const originalText = submitBtn.innerHTML;
      submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
      submitBtn.disabled = true;

      // Parameters matching your EmailJS Template variables ({{name}}, {{email}}, {{title}}, {{message}})
      const params = {
        name: name,
        email: email,
        title: subject,
        message: message
      };

      const serviceID = "service_f05u4hw";
      const templateID = "template_ecldo8l";

      // Send via EmailJS
      emailjs.send(serviceID, templateID, params)
        .then(() => {
          showToast('✅ Message sent successfully!', 'success');
          contactForm.reset();
          submitBtn.innerHTML = originalText;
          submitBtn.disabled = false;
        })
        .catch((err) => {
          console.error("EmailJS Error:", err);
          showToast('❌ Failed to send message. Please try again.', 'error');
          submitBtn.innerHTML = originalText;
          submitBtn.disabled = false;
        });
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

  // Scroll Reveal Animations using IntersectionObserver
  const revealElements = document.querySelectorAll('.reveal');

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        // observer.unobserve(entry.target); // Optional: stop observing once revealed
      }
    });
  }, {
    root: null,
    threshold: 0.15, // Trigger when 15% of the element is visible
    rootMargin: "0px 0px -50px 0px" // Slightly before it fully comes into viewport
  });

  revealElements.forEach(el => revealObserver.observe(el));
});

// Botpress Chatbot Code
window.botpressWebChat.onEvent(function (event) {
  if (event.type === 'LIFECYCLE.LOADED') {
    window.botpressWebChat.sendEvent({ type: 'hide' });
  }
}, ['LIFECYCLE.LOADED']);

window.openChatbot = function () {
  if (window.botpressWebChat && typeof window.botpressWebChat.sendEvent === 'function') {
    window.botpressWebChat.sendEvent({ type: 'show' });
    return;
  }

  const toastElem = document.getElementById('toast');
  const showMsg = (msg, isError = false) => {
    if (toastElem) {
      toastElem.textContent = msg;
      toastElem.classList.add('show');
      toastElem.style.borderLeftColor = isError ? '#ef4444' : '#ffb347';
      setTimeout(() => toastElem.classList.remove('show'), 2800);
    } else {
      alert(msg);
    }
  };

  showMsg("🤖 Chat is initializing, please wait...");
  let attempts = 0;
  const interval = setInterval(() => {
    if (window.botpressWebChat && typeof window.botpressWebChat.sendEvent === 'function') {
      window.botpressWebChat.sendEvent({ type: 'show' });
      clearInterval(interval);
    } else if (attempts >= 12) {
      clearInterval(interval);
      showMsg("❌ Chat assistant temporarily unavailable.", true);
    }
    attempts++;
  }, 500);
};

if (window.botpressWebChat) {
  window.botpressWebChat.onEvent(function (event) {
    if (event.type === 'LIFECYCLE.LOADED') window.botpressWebChat.sendEvent({ type: 'hide' });
  }, ['LIFECYCLE.LOADED']);
} else {
  const waitForBP = setInterval(() => {
    if (window.botpressWebChat?.onEvent) {
      window.botpressWebChat.onEvent(function (event) {
        if (event.type === 'LIFECYCLE.LOADED') window.botpressWebChat.sendEvent({ type: 'hide' });
      }, ['LIFECYCLE.LOADED']);
      clearInterval(waitForBP);
    }
  }, 300);
  setTimeout(() => clearInterval(waitForBP), 8000);
}
