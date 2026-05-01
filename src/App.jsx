import { useEffect, useState } from "react";
import "./App.css";
import gameFinal from "../gamephotos/final.png";
import gameGeneric from "../gamephotos/generic.png";
import gameShop from "../gamephotos/shop.png";
import plannerCalendar from "../plannerphotos/calendar.png";
import plannerMain from "../plannerphotos/main.png";

const projects = [
  {
    slug: "godot-survival-game",
    kicker: "Gameplay systems",
    title: "Godot Survival Game",
    summary:
      "Wave-based survival game focused on enemy behavior, player progression, upgrades, and reusable game logic.",
    repository: "https://github.com/StephenWilton/Project-7",
    tech: ["Godot", "GDScript", "Game Systems"],
    details: [
      "This project focuses on building a complete gameplay loop with waves of enemies, player movement, weapons, upgrades, and progression.",
      "I used the project to practice organizing game logic into reusable systems instead of placing every behavior in one large script.",
    ],
    images: [
      {
        src: gameGeneric,
        alt: "Godot survival game main gameplay screen",
      },
      {
        src: gameShop,
        alt: "Godot survival game shop and upgrade screen",
      },
      {
        src: gameFinal,
        alt: "Godot survival game hectic final wave.",
      },
    ],
  },
  {
    slug: "my-planner",
    kicker: "Full-stack planner",
    title: "My Planner",
    summary:
      "Full-stack task planning app with user accounts, calendar-based tasks, recurring tasks, completion tracking, and MySQL persistence.",
    repository: "https://github.com/StephenWilton/My-Planner",
    tech: ["React", "Node.js", "MySQL", "Vite"],
    details: [
      "My Planner is a learning-focused full-stack app built to practice connecting a React frontend to a Node backend and a MySQL database.",
      "Registered users can save tasks to the database, while guest users can try the app without creating an account. Recurring tasks track completion by date so one completed day does not mark every future occurrence complete.",
    ],
    images: [
      {
        src: plannerMain,
        alt: "My Planner dashboard with task list and summary",
      },
      {
        src: plannerCalendar,
        alt: "My Planner calendar view with task status colors",
      },
    ],
  },
];

function getProjectSlugFromHash() {
  const projectPrefix = "#project/";

  if (window.location.hash.startsWith(projectPrefix)) {
    return window.location.hash.replace(projectPrefix, "");
  }

  return "";
}

function handleNavClick(e) {
  const targetId = e.currentTarget.getAttribute("href").replace("#", "");

  requestAnimationFrame(() => {
    document.getElementById(targetId)?.scrollIntoView();
  });
}

function SiteNav() {
  return (
    <nav className="nav">
      <div className="nav-inner">
        <a className="logo" href="#top">
          <span>S</span>
          Stephen
        </a>

        <div className="nav-links">
          <a href="#projects" onClick={handleNavClick}>Projects</a>
          <a href="#about" onClick={handleNavClick}>About</a>
          <a href="#resume" onClick={handleNavClick}>Resume</a>
          <a href="#contact" onClick={handleNavClick}>Contact</a>
        </div>
      </div>
    </nav>
  );
}

function ProjectCard({ project }) {
  return (
    <a className="project-card" href={`#project/${project.slug}`}>
      <p className="project-kicker">{project.kicker}</p>
      <h3>{project.title}</h3>
      <p>{project.summary}</p>

      <div className="tech-list">
        {project.tech.map((tech) => (
          <span key={tech}>{tech}</span>
        ))}
      </div>

      <span className="project-link">View Project Details</span>
    </a>
  );
}

function ProjectDetailPage({ project }) {
  return (
    <section className="project-detail">
      <a className="back-link" href="#projects">
        Back to projects
      </a>

      <div className="project-detail-header">
        <p className="eyebrow">{project.kicker}</p>
        <h1>{project.title}</h1>
        <p className="detail-intro">{project.summary}</p>

        <div className="buttons">
          <a
            className="button primary"
            href={project.repository}
            target="_blank"
            rel="noreferrer"
          >
            View Repository
          </a>
        </div>
      </div>

      <div className="detail-grid">
        <section className="detail-panel">
          <h2>About</h2>
          {project.details.map((detail) => (
            <p key={detail}>{detail}</p>
          ))}
        </section>

        <section className="detail-panel">
          <h2>Tech Stack</h2>
          <div className="tech-list">
            {project.tech.map((tech) => (
              <span key={tech}>{tech}</span>
            ))}
          </div>
        </section>
      </div>

      <section className="project-gallery">
        <h2>Screenshots</h2>
        <div className="gallery-grid">
          {project.images.map((image) => (
            <figure key={image.src}>
              <img src={image.src} alt={image.alt} />
              <figcaption>{image.alt}</figcaption>
            </figure>
          ))}
        </div>
      </section>
    </section>
  );
}

function HomePage() {
  return (
    <>
      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">Computer Programmer Analyst Graduate</p>
          <h1>Backend Developer.</h1>
          <p className="hero-intro">
            I build backend services, databases, and game systems with clean,
            practical logic.
          </p>

          <div className="buttons">
            <a className="button primary" href="#projects">
              View Projects
            </a>
            <a
              className="button secondary"
              href="https://github.com/StephenWilton"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </div>
        </div>

        <aside className="hero-panel">
          <h2>Focus Areas</h2>
          <ul>
            <li>Backend APIs and server logic</li>
            <li>Database design and data flow</li>
            <li>Game systems and progression</li>
          </ul>
        </aside>
      </section>

      <section className="section" id="projects">
        <p className="eyebrow">Featured Work</p>
        <h2>Projects</h2>

        <div className="project-grid">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>

      <section className="section about" id="about">
        <div>
          <p className="eyebrow">About</p>
          <h2>Systems-minded developer.</h2>
        </div>

        <div className="about-copy">
          <p>
            I'm a Computer Programmer Analyst graduate from Canadore College,
            currently seeking employment in software development.
          </p>
          <p>
            I enjoy backend work because I like figuring out how data, rules,
            and application logic fit together.
          </p>
          <p>
            I'm especially interested in databases, APIs, and game-like systems
            with meaningful choices and progression.
          </p>
        </div>
      </section>

      <section className="section resume" id="resume">
        <div>
          <p className="eyebrow">Resume</p>
          <h2>Download my resume.</h2>
        </div>

        <div className="resume-card">
          <p>
            A PDF version of my resume is available for employers and hiring
            teams.
          </p>

          <a className="button primary" href="/StephenResume.pdf" download>
            Download Resume
          </a>
        </div>
      </section>

      <section className="section contact" id="contact">
        <p className="eyebrow">Contact</p>
        <h2>Let's connect.</h2>

        <div className="contact-list">
          <a
            href="https://github.com/StephenWilton"
            target="_blank"
            rel="noreferrer"
          >
            <span>GitHub</span>
            github.com/StephenWilton
          </a>
          <a
            href="https://www.linkedin.com/in/stephen-j-wilton/"
            target="_blank"
            rel="noreferrer"
          >
            <span>LinkedIn</span>
            linkedin.com/in/stephen-j-wilton
          </a>
          <p>
            <span>Email</span>
            stephenwilton@gmail.com
          </p>
        </div>
      </section>
    </>
  );
}

function App() {
  const [activeProjectSlug, setActiveProjectSlug] = useState(
    getProjectSlugFromHash
  );
  const activeProject = projects.find(
    (project) => project.slug === activeProjectSlug
  );

  useEffect(() => {
    function handleHashChange() {
      const nextProjectSlug = getProjectSlugFromHash();

      setActiveProjectSlug(nextProjectSlug);

      if (nextProjectSlug) {
        window.scrollTo(0, 0);
        return;
      }

      const targetId = window.location.hash.replace("#", "");

      if (targetId) {
        requestAnimationFrame(() => {
          document.getElementById(targetId)?.scrollIntoView();
        });
      }
    }

    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  return (
    <main className="page">
      <SiteNav />
      {activeProject ? <ProjectDetailPage project={activeProject} /> : <HomePage />}
    </main>
  );
}

export default App;
