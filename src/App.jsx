import { useState } from "react";
import "./index.css";
 

const skills = [
  "React.js",
  "JavaScript",
  "Node.js",
  "Express.js",
  "MongoDB",
  "REST API",
  "HTML5",
  "CSS3",
  "Tailwind CSS",
  "Salesforce Admin",
  "Salesforce Developer",
  "LWC",
  "Apex",
  "Git & GitHub",
  "Excel Advanced",
  "use of Chatgpt ",
];

const projects = [
  {
    title: "ForkFriends",
    description:
      "A developer networking and collaboration platform where developers can create profiles, connect with others, send requests and communicate.",
    technologies: ["React.js", "Node.js", "MongoDB", "Express.js"],
    github: "https://github.com/mohdathar42/devTinder-web",
  },
//TODO: Add the case management system project back when ready
  // {
  //   title: "Case Management System for Advocate",
  //   description:
  //     "A full-stack case management application for creating, tracking, managing and deleting cases and client enquiries.",
  //   technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT"],
  //   github: "#",
  // },
  {
    title: "Weather Application",
    description:
      "Responsive weather application displaying real-time weather information using an external weather API.",
    technologies: ["React.js", "JavaScript", "REST API", "CSS"],
    github: "https://github.com/mohdathar42/WeatherApp",
  },
  //TODO: Add the Salesforce LWC project back when ready
  // {
  //   title: "Salesforce LWC Applications",
  //   description:
  //     "Salesforce Lightning Web Components implementing CRUD operations, Apex integration, Lightning Message Service and custom UI components.",
  //   technologies: ["Salesforce", "LWC", "Apex", "SOQL", "Lightning"],
  //   github: "#",
  // },
];

const experience = [
  {
    role: "MERN Stack Developer",
    company: "Personal & Academic Projects",
    period: "2024 - Present",
    description:
      "Developing full-stack applications using React.js, Node.js, Express.js, MongoDB, REST APIs and JWT authentication.",
  },
  {
    role: "Salesforce Developer",
    company: "Salesforce Projects",
    period: "2026",
    description:
      "Working with Salesforce configuration, Apex, LWC, Record Triggered Flows, Lightning Message Service and CRUD operations.",
  },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="portfolio">
      <header className="navbar">
        <div className="container nav-wrapper">
          <a href="#home" className="logo" onClick={closeMenu}>
            <span>&lt;</span>Mohd Athar<span>/&gt;</span>
          </a>

          <button
            className="menu-btn"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation"
          >
            ☰
          </button>

          <nav className={`nav-links ${menuOpen ? "active" : ""}`}>
            <a href="#home" onClick={closeMenu}>
              Home
            </a>
            <a href="#about" onClick={closeMenu}>
              About
            </a>
            <a href="#skills" onClick={closeMenu}>
              Skills
            </a>
            <a href="#projects" onClick={closeMenu}>
              Projects
            </a>
            <a href="#experience" onClick={closeMenu}>
              Experience
            </a>
            <a href="#education" onClick={closeMenu}>
              Education
            </a>
            <a href="#contact" onClick={closeMenu}>
              Contact
            </a>
          </nav>
        </div>
      </header>

      <main>
        <section id="home" className="hero section">
          <div className="container hero-grid">
            <div className="hero-content">
              <p className="hero-intro">Hello, I'm</p>
              <h1>Mohd Athar </h1>
              <h2>MERN Stack Developer</h2>

              <p className="hero-description">
                I build modern, scalable and responsive web applications using
                React.js, Node.js, Express.js, MongoDB and modern JavaScript
                technologies.
              </p>

              <div className="hero-buttons">
                <a href="#projects" className="btn primary-btn">
                  View Projects
                </a>
                <a href="#contact" className="btn secondary-btn">
                  Contact Me
                </a>
              </div>

              <div className="social-links">
                <a
                  href="https://github.com/mohdathar42/"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/mohd-athar-5502a5237/"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                </a>
              </div>
            </div>

            <div className="hero-card">
              <div className="code-window">
                <div className="window-header">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <div className="code-content">
                  <p>
                    <span className="purple">const</span> developer = {"{"}
                  </p>
                  <p className="indent">
                    name: <span className="green">"Mohd Athar"</span>,
                  </p>
                  <p className="indent">
                    role:{" "}
                    <span className="green">
                      "MERN Developer,Salesforce Developer,Research Analyst"
                    </span>
                    ,
                  </p>
                  <p className="indent">stack: [</p>
                  <p className="indent2">
                    <span className="green">"React"</span>,
                  </p>
                  <p className="indent2">
                    <span className="green">"Node.js"</span>,
                  </p>
                  <p className="indent2">
                    <span className="green">"MongoDB"</span>
                  </p>
                  <p className="indent2">
                    <span className="green">"Excel"</span>
                  </p>
                  <p className="indent">]</p>
                  <p>{"};"}</p>
                  <p>
                    <span className="purple">developer</span>.
                    <span className="blue">build</span>();
                  </p>
                </div>
              </div>
            </div>
          </div>
          
        </section>

        <section id="about" className="section">
          <div className="container">
            <div className="section-heading">
              <p>01. About Me</p>
              <h2>
                Turning ideas into <span>Practical</span>
              </h2>
            </div>

            <div className="about-grid">
              <div className="about-text">
                <p>
                  I am a MCA student and aspiring software developer passionate
                  about building modern web applications.
                </p>
                <p>
                  My primary focus is full-stack web development using the MERN
                  stack. I enjoy creating clean user interfaces, designing REST
                  APIs and connecting frontend applications with backend
                  services.And Authenticate user using JWT tokens,makes password
                  secure using bcrypt .
                </p>
                <p>
                  I also work with Salesforce technologies including Lightning
                  Web Components, Apex, SOQL and Lightning Message Service.
                </p>
                <p>
                  I am continuously learning new technologies and looking for
                  opportunities where I can contribute, learn and grow as a
                  software developer.
                </p>
              </div>

              <div className="about-stats">
                <div className="stat-card">
                  <strong>MERN</strong>
                  <span>Full Stack</span>
                </div>
                <div className="stat-card">
                  <strong>React</strong>
                  <span>Frontend</span>
                </div>
                <div className="stat-card">
                  <strong>Node</strong>
                  <span>Backend</span>
                </div>
                <div className="stat-card">
                  <strong>Salesforce</strong>
                  <span>LWC & Apex</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="section dark-section">
          <div className="container">
            <div className="section-heading">
              <p>02. Skills</p>
              <h2>
                Technologies I <span>work with.</span>
              </h2>
            </div>

            <div className="skills-grid">
              {skills.map((skill) => (
                <div className="skill-card" key={skill}>
                  <span className="skill-icon">&lt;/&gt;</span>
                  <span>{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="section">
          <div className="container">
            <div className="section-heading">
              <p>03. Projects</p>
              <h2>
                Things I've <span>built.</span>
              </h2>
            </div>

            <div className="projects-grid">
              {projects.map((project, index) => (
                <article className="project-card" key={project.title}>
                  <div className="project-top">
                    <span className="project-number">0{index + 1}</span>
                    <div className="project-links">
                      <a href={project.github} target="_blank" rel="noreferrer">
                        GitHub
                      </a>
                    </div>
                  </div>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="tech-list">
                    {project.technologies.map((technology) => (
                      <span key={technology}>{technology}</span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="experience" className="section dark-section">
          <div className="container">
            <div className="section-heading">
              <p>04. Experience</p>
              <h2>
                My <span>journey.</span>
              </h2>
            </div>

            <div className="timeline">
              {experience.map((item, index) => (
                <div className="timeline-item" key={index}>
                  <div className="timeline-dot"></div>
                  <div className="timeline-content">
                    <span className="timeline-period">{item.period}</span>
                    <h3>{item.role}</h3>
                    <h4>{item.company}</h4>
                    <p>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="education" className="section">
          <div className="container">
            <div className="section-heading">
              <p>05. Education</p>
              <h2>
                Academic <span>background.</span>
              </h2>
            </div>

            <div className="education-card">
              <div className="education-icon">MCA</div>
              <div>
                <span className="education-period">Postgraduate</span>
                <h3>Master of Computer Applications</h3>
                <h4>Jamia Hamdard University South Delhi</h4>
                <p>
                  Focused on software development, web technologies, database
                  systems and application development.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="section contact-section">
          <div className="container contact-container">
            <div className="section-heading center">
              <p>06. Contact</p>
              <h2>
                Let's build something <span>together.</span>
              </h2>
            </div>

            <p className="contact-description">
              I'm currently open to opportunities, internships and interesting
              development projects.
            </p>

            <div className="contact-details">
              <a
                  href="https://www.linkedin.com/in/mohd-athar-5502a5237/"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                </a>
              <span>•</span>
              <a href="https://github.com/" target="_blank" rel="noreferrer">
                GitHub
              </a>
            
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-content">
          <p>© {new Date().getFullYear()} Created By Mohd Athar Using Chatgpt. All rights reserved.</p>
          <p>Built with React.js</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
