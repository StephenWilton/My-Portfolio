import "./App.css";

function App() {
  return (
    <main className="page">
      <nav className="nav">
        <a className="logo" href="#top">
          <span>S</span>
          Stephen
        </a>

        <div className="nav-links">
          <a href="#projects">Projects</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">Backend-focused developer</p>
          <h1>Systems, databases, and logic-heavy applications.</h1>
          <p className="hero-intro">
            Computer Programming student building backend services, game systems,
            and tools where clean data flow matters.
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
          <p>
            <span>$</span> focus --backend
          </p>
          <p>api.routes: clean</p>
          <p>database.schema: normalized</p>
          <p>game.systems: scalable</p>
          <p>
            <span>status:</span> ready_to_build
          </p>
        </aside>
      </section>

      <section className="section" id="projects">
        <p className="eyebrow">Featured Work</p>
        <h2>Projects</h2>

        <div className="project-grid">
          <article className="project-card">
            <p className="project-kicker">Gameplay systems</p>
            <h3>Godot Survival Game</h3>
            <p>
              Wave-based survival game focused on enemy behavior, player
              progression, upgrades, and reusable game logic.
            </p>

            <div className="tech-list">
              <span>Godot</span>
              <span>GDScript</span>
              <span>Game Systems</span>
            </div>

            <a
              className="project-link"
              href="https://github.com/StephenWilton/Project-7"
              target="_blank"
              rel="noreferrer"
            >
              View Repository
            </a>
          </article>

          <article className="project-card">
            <p className="project-kicker">Backend architecture</p>
            <h3>Narrative Event Engine</h3>
            <p>
              A story system concept with branching choices, persistent player
              state, and database-stored event logic.
            </p>

            <div className="tech-list">
              <span>Node.js</span>
              <span>Express</span>
              <span>MongoDB</span>
            </div>

            <a className="project-link" href="#contact">
              Ask Me About It
            </a>
          </article>
        </div>
      </section>

      <section className="section about" id="about">
        <div>
          <p className="eyebrow">About</p>
          <h2>Systems-minded developer.</h2>
        </div>

        <div className="about-copy">
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

      <section className="section contact" id="contact">
        <p className="eyebrow">Contact</p>
        <h2>Let's connect.</h2>

        <div className="contact-list">
          <a href="https://github.com/StephenWilton" target="_blank" rel="noreferrer">
            <span>GitHub</span>
            github.com/StephenWilton
          </a>
          <p>
            <span>Email</span>
            stephenwilton@gmail.com
          </p>
        </div>
      </section>
    </main>
  );
}

export default App;
