import { useEffect, useState } from "react";
import {
  FiArrowUpRight,
  FiArrowRight,
  FiGithub,
  FiSun,
  FiMoon,
  FiMenu,
  FiX,
  FiDownload,
  FiMapPin,
} from "react-icons/fi";
import portrait from "./assets/Images/Studio Portrait with CEH Badge.png";
import { projects, experience, skillGroups } from "./data/profile";
import { External, SectionHeading } from "./components/Shared";
import GitHubProjects from "./components/GitHubProjects";
import AIWorkflow from "./components/AIWorkflow";
import LinkedInPosts from "./components/LinkedInPosts";
import Contact from "./components/Contact";
import "./App.css";

const copyrightYear = new Date().getFullYear();

function ProjectArt({ project }) {
  return (
    <div className={`project-art ${project.style}`} aria-hidden="true">
      <div className="mock-window">
        <div className="mock-top">
          <span />
          <span />
          <span />
          <small>
            {project.category === "Business apps"
              ? "workspace / overview"
              : "interface / explore"}
          </small>
        </div>
        <div className="mock-body">
          <div className="mock-sidebar">
            <b>m.</b>
            <i />
            <i />
            <i />
          </div>
          <div className="mock-content">
            <span className="mock-label">
              {project.style === "fuel"
                ? "DIESEL OPERATIONS"
                : project.style === "vehicle"
                  ? "FLEET OVERVIEW"
                  : "DESIGNED FOR THE EVERYDAY"}
            </span>
            <strong>
              {project.style === "fuel"
                ? "Every litre. In view."
                : project.style === "vehicle"
                  ? "Keep things moving."
                  : project.style === "store"
                    ? "A different kind of everyday."
                    : project.style === "fitness"
                      ? "Find your balance."
                      : "Your next possibility."}
            </strong>
            <div className="mock-stats">
              <i />
              <i />
              <i />
            </div>
            <div className="mock-chart">
              {[30, 55, 40, 75, 58, 95, 70, 87, 100].map((h) => (
                <span key={h} style={{ height: `${h}%` }} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <span className="art-caption">
        Interface illustration · project link below
      </span>
    </div>
  );
}
export default function App() {
  const [theme, setTheme] = useState(() => {
      try {
        return localStorage.getItem("hamza-theme") || "dark";
      } catch {
        return "dark";
      }
    }),
    [menu, setMenu] = useState(false),
    [category, setCategory] = useState("All work");
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    try {
      localStorage.setItem("hamza-theme", theme);
    } catch {
      /* storage may be blocked */
    }
  }, [theme]);
  useEffect(() => {
    function close(e) {
      if (e.key === "Escape") setMenu(false);
    }
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, []);
  useEffect(() => {
    const path = window.location.pathname.toLowerCase();
    const legacy = {
      "/about": "experience",
      "/skills": "skills",
      "/projects": "work",
      "/contact": "contact",
    };
    if (legacy[path]) document.getElementById(legacy[path])?.scrollIntoView();
  }, []);
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <header className="header">
        <div className="container nav">
          <a href="#" className="brand" aria-label="Muhammad Hamza home">
            mh<span>.</span>
            <small>
              MUHAMMAD
              <br />
              HAMZA
            </small>
          </a>
          <nav
            id="primary-nav"
            className={menu ? "open" : ""}
            aria-label="Main navigation"
          >
            {[
              ["work", "Work"],
              ["ai", "AI workflow"],
              ["experience", "Experience"],
              ["writing", "Writing"],
            ].map(([id, label]) => (
              <a key={id} href={`#${id}`} onClick={() => setMenu(false)}>
                {label}
              </a>
            ))}
          </nav>
          <div className="nav-actions">
            <button
              className="icon-button"
              onClick={() => setTheme((v) => (v === "dark" ? "light" : "dark"))}
              aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            >
              {theme === "dark" ? <FiSun /> : <FiMoon />}
            </button>
            <a href="#contact" className="nav-contact">
              Let’s talk <FiArrowUpRight />
            </a>
            <button
              className="icon-button mobile-toggle"
              aria-label={menu ? "Close menu" : "Open menu"}
              aria-expanded={menu}
              aria-controls="primary-nav"
              onClick={() => setMenu((v) => !v)}
            >
              {menu ? <FiX /> : <FiMenu />}
            </button>
          </div>
        </div>
      </header>
      <main className="container" id="main">
        <section className="hero">
          <div className="hero-copy">
            <div className="availability">
              <span className="status-dot" /> Front-end developer · AI-assisted
              builder
            </div>
            <h1>
              Human ideas.
              <br />
              Thoughtful <span className="serif-word">interfaces.</span>
              <br />
              <span className="muted-heading">Smarter execution.</span>
            </h1>
            <p>
              I’m Muhammad Hamza. I build responsive web applications with
              React, a practical eye for design, and AI as a development
              partner.
            </p>
            <div className="hero-buttons">
              <a className="button primary" href="#work">
                Explore my work <FiArrowUpRight />
              </a>
              <a
                className="button secondary"
                href="/Muhammad-Hamza-CV.pdf"
                download
              >
                Download CV <FiDownload />
              </a>
            </div>
            <a className="hero-contact text-link" href="#contact">
              Have a project? Let’s talk <FiArrowRight />
            </a>
            <div className="hero-bottom">
              <span>
                <FiMapPin /> Kohat, Pakistan
              </span>
              <span className="tiny-line" />
              <span>Building across borders</span>
            </div>
          </div>
          <div className="hero-visual">
            <div className="photo-frame">
              <img
                src={portrait}
                alt="Muhammad Hamza, front-end web developer"
                fetchPriority="high"
              />
              <div className="photo-shade" />
              <div className="photo-caption">
                <span>THE DEVELOPER BEHIND THE CODE</span>
                <strong>
                  Muhammad Hamza <FiArrowUpRight />
                </strong>
              </div>
            </div>
            <div className="floating-code">
              <div>
                <span className="status-dot" /> developer.config
              </div>
              <code>
                <span>const</span> approach = {"{"}
                <br />
                &nbsp; craft: <em>"human-led"</em>,<br />
                &nbsp; workflow: <em>"AI-assisted"</em>,<br />
                &nbsp; focus: <em>"real-world impact"</em>
                <br />
                {"};"}
              </code>
            </div>
            <span className="visual-cross" aria-hidden="true">
              +
            </span>
          </div>
        </section>
        <div className="credentials">
          <div>
            <strong>
              2+<span> years</span>
            </strong>
            <small>Practical development experience</small>
          </div>
          <div>
            <strong>
              React <span>& Next.js</span>
            </strong>
            <small>Interfaces that work across screens</small>
          </div>
          <div>
            <strong>
              Pakistan <span>↔ Qatar</span>
            </strong>
            <small>Remote client collaboration</small>
          </div>
          <div>
            <strong>
              Human <span>+ AI</span>
            </strong>
            <small>Thoughtful tools. Reviewed output.</small>
          </div>
        </div>
        <section className="section" id="work">
          <SectionHeading
            label="01 / Selected work"
            title="Built for real use."
          >
            <p>
              Business applications and interface explorations.
              <br />A few things I’ve helped bring to the browser.
            </p>
          </SectionHeading>
          <div
            className="filter-tabs"
            role="group"
            aria-label="Filter selected projects"
          >
            {["All work", "Business apps", "Web experiences"].map((c) => (
              <button
                className={category === c ? "active" : ""}
                key={c}
                aria-pressed={category === c}
                onClick={() => setCategory(c)}
              >
                {c}
              </button>
            ))}
          </div>
          <div className="project-grid">
            {projects
              .filter((p) => category === "All work" || p.category === category)
              .map((project) => (
                <article className="project-card" key={project.name}>
                  <External
                    href={project.url}
                    aria-label={`Visit ${project.name}`}
                  >
                    <ProjectArt project={project} />
                  </External>
                  <div className="project-info">
                    <span className="project-type">{project.type}</span>
                    <h3>
                      <External href={project.url}>
                        {project.name}
                        <FiArrowUpRight />
                      </External>
                    </h3>
                    <p>{project.description}</p>
                    <div className="tags">
                      {project.stack.map((t) => (
                        <span key={t}>{t}</span>
                      ))}
                    </div>
                    <div className="project-links">
                      <External href={project.url}>
                        Visit project <FiArrowUpRight />
                      </External>
                      {project.code && (
                        <External href={project.code}>
                          <FiGithub /> Source code
                        </External>
                      )}
                    </div>
                  </div>
                </article>
              ))}
          </div>
          <GitHubProjects />
        </section>
        <AIWorkflow />
        <section className="section" id="experience">
          <SectionHeading
            label="03 / My journey"
            title="Experience with purpose."
          >
            <a className="text-link" href="/Muhammad-Hamza-CV.pdf" download>
              Full résumé <FiDownload />
            </a>
          </SectionHeading>
          <div className="experience-layout">
            <div className="about-note">
              <span className="eyebrow">A little about me</span>
              <h3>
                From a brief
                <br />
                to the browser.
              </h3>
              <p>
                I’m a Software Engineering graduate from Kohat University of
                Science & Technology, with practical experience building
                dashboards, admin panels, dynamic forms, and API-driven
                applications.
              </p>
              <p>
                I enjoy turning complex requirements into clear, maintainable
                interfaces and working with teams across borders.
              </p>
              <div className="education">
                <span>BS Software Engineering</span>
                <strong>KUST · 2020–2024</strong>
                <small>CGPA 3.35 / 4.00</small>
                <span>FSc Pre-Engineering</span>
                <strong>Cadet College Swat · 2017–2019</strong>
                <small>867 / 1100</small>
              </div>
            </div>
            <div className="timeline">
              {experience.map((item) => (
                <article key={item.company}>
                  <div className="timeline-dot" />
                  <div className="job-top">
                    <span>{item.date}</span>
                    <small>{item.mode}</small>
                  </div>
                  <h3>{item.role}</h3>
                  <h4>{item.company}</h4>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
        <section className="section skills-section" id="skills">
          <SectionHeading
            label="04 / My toolkit"
            title="The right tools. Applied well."
          />
          <div className="skills-grid">
            {skillGroups.map((group, i) => (
              <article key={group.title}>
                <span className="skill-number">0{i + 1}</span>
                <h3>{group.title}</h3>
                <div className="tags">
                  {group.items.map((s) => (
                    <span key={s}>{s}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>
        <LinkedInPosts />
        <Contact />
      </main>
      <footer className="container footer">
        <a href="#" className="brand">
          mh<span>.</span>
        </a>
        <p>© {copyrightYear} Muhammad Hamza. Built with intention.</p>
        <a className="text-link" href="#main">
          Back to top ↑
        </a>
      </footer>
    </>
  );
}
