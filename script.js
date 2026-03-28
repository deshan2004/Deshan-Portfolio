const projectsData = [
  {
    id: "educonnect-lms",
    name: "EduConnect LMS",
    shortDesc: "Multi-panel Learning Management System with Admin, Staff, and User interfaces.",
    fullDesc: "EduConnect is a full-featured LMS built with PHP and MySQL. It provides role-based dashboards: admins manage courses & users, staff upload materials, and students access learning resources.",
    tech: ["PHP", "MySQL", "Tailwind CSS", "JavaScript"],
    features: ["Role-based panels (Admin/Staff/Student)", "Assignment submission", "Course tracking", "Secure Authentication"],
    repo: "https://github.com/deshan2004/educonnect-lms",
    liveDemo: "#"
  },
  {
    id: "neth-sawan",
    name: "Neth-Sawan",
    shortDesc: "AI-driven digital assistant for real-time transcription and image recognition.",
    fullDesc: "Neth-Sawan is an intelligent assistant leveraging AI for navigation and communication. It uses TensorFlow.js for object recognition and real-time speech processing.",
    tech: ["React.js", "TensorFlow.js", "Web Speech API", "AI Integration"],
    features: ["Real-time speech-to-text", "Object recognition via AI", "Accessibility focus", "Camera analysis"],
    repo: "https://github.com/deshan2004/neth-sawan",
    liveDemo: "#"
  },
  {
    id: "employee-management-system",
    name: "Employee Management",
    shortDesc: "Comprehensive system for project tracking and employee records.",
    fullDesc: "A robust portal developed with PHP and MySQL to manage employee registration, project assignments, and work logs.",
    tech: ["PHP", "MySQL", "Bootstrap", "jQuery"],
    features: ["Employee CRUD", "Project assignment", "Work log tracking", "Payroll summaries"],
    repo: "https://github.com/deshan2004/employee-project-management-system",
    liveDemo: "#"
  },
  {
    id: "tailwatch",
    name: "TailWatch",
    shortDesc: "Community-Powered Stray Dog Care & Rabies Prevention Platform.",
    fullDesc: "TailWatch connects local communities to help stray dogs by providing health tracking and vaccination reminders.",
    tech: ["HTML5", "CSS3", "JavaScript", "Firebase"],
    features: ["Stray dog registry", "Vaccination alerts", "Community reporting", "Rescue system"],
    repo: "https://github.com/deshan2004/TailWatch",
    liveDemo: "#"
  },
  {
    id: "cinemate",
    name: "CineMate",
    shortDesc: "Movie discovery & recommendation web app with TMDB API.",
    fullDesc: "CineMate transitioned from a static HTML layout to a dynamic system powered by JavaScript.",
    tech: ["JavaScript", "HTML5", "CSS3", "API Integration"],
    features: ["Trending movies", "Dynamic DOM manipulation", "Watchlist saving", "Search filters"],
    repo: "https://github.com/deshan2004/CineMate",
    liveDemo: "#"
  }
];

function renderProjects() {
  const grid = document.getElementById('projectGrid');
  if (!grid) return;
  grid.innerHTML = '';
  projectsData.forEach(proj => {
    const card = document.createElement('div');
    card.className = 'project-card';
    card.innerHTML = `
      <div style="margin-bottom: 1rem; display: flex; gap: 0.5rem; flex-wrap: wrap;">
        ${proj.tech.slice(0, 3).map(t => `<span style="font-size: 0.7rem; color: #6ab0de; border: 1px solid #2c7da0; padding: 2px 8px; border-radius: 10px;">${t}</span>`).join('')}
      </div>
      <h3>${proj.name}</h3>
      <p>${proj.shortDesc}</p>
      <div class="project-links">
        <a href="project.html?id=${proj.id}"><i class="fas fa-plus-circle"></i> Learn More</a>
        <a href="${proj.repo}" target="_blank"><i class="fab fa-github"></i> Code</a>
      </div>
    `;
    grid.appendChild(card);
  });
}

// Initialization
document.addEventListener('DOMContentLoaded', () => {
  renderProjects();
  // Navbar & Scroll effects code...
});