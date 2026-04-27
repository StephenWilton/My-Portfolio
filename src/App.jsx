import "./App.css";

function App() {
  return (
    <main className="page">
      <section className="hero">
        <p className="tagline">Backend-focused developer</p>

        <h1>Hi, I'm Stephen.</h1>

        <p className="intro">
          I build systems, databases, and logic-heavy applications.
        </p>

        <div className="links">
          <a href="https://github.com/Pudgey34" target="_blank">
            GitHub
          </a>
          <a href="#projects">View Projects</a>
        </div>
      </section>

      <section id="projects" className="section">
        <h2>Projects</h2>

        <div className="card">
          <h3>Brotato-Style Godot Game</h3>
          <p>
            A wave-based survival game focused on enemy behavior, player
            progression, upgrades, and game systems.
          </p>
        </div>
      </section>
    </main>
  );
}

export default App;