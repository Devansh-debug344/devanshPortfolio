const links = {
  github: 'https://github.com/Devansh-debug344',
  linkedin: 'https://www.linkedin.com/in/devansh-chaturvedi-bb9497375',
  bingeSagaRepo: 'https://github.com/Devansh-debug344/BingeSaga',
  email: 'devan9sh@gmail.com',
};

function Arrow() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h13M13 6l6 6-6 6" /></svg>;
}

function Mark() {
  return <div className="mark" aria-hidden="true"><i /><i /><i /></div>;
}

const skills = ['Python', 'FastAPI', 'React', 'PostgreSQL', 'Redis', 'Docker', 'Git', 'JavaScript'];

export default function App() {
  return (
    <div className="min-h-screen overflow-hidden">
      <header className="mx-auto flex max-w-6xl items-center justify-between px-5 py-6 sm:px-8">
        <a href="#top" className="logo" aria-label="Devansh, home">devansh<span>;</span></a>
        <nav className="flex items-center gap-4 text-sm text-[#a7a7b5] sm:gap-6" aria-label="Main navigation">
          <a className="nav-link" href="#project">project</a>
          <a className="nav-link" href="#about">about</a>
          <a className="nav-link" href="#contact">contact</a>
        </nav>
      </header>

      <main id="top" className="mx-auto max-w-6xl px-5 pb-10 sm:px-8">
        <section className="hero-grid pt-10 sm:pt-16" aria-labelledby="intro-title">
          <div className="hero-copy">
            <p className="eyebrow"><span /> computer engineering student · india</p>
            <h1 id="intro-title">Hey, I&apos;m <em>Devansh.</em><br />I build things with code.</h1>
            <p className="intro">I&apos;m a B.Tech Computer Engineering student interested in software development, backend engineering, and the small details that make an app feel good to use.</p>
            <div className="mt-7 flex flex-wrap gap-x-5 gap-y-3 text-sm">
              <a className="under-link" href={links.github} target="_blank" rel="noreferrer">GitHub <Arrow /></a>
              <a className="under-link" href={links.linkedin} target="_blank" rel="noreferrer">LinkedIn <Arrow /></a>
            </div>
          </div>
          <div className="orb-wrap" aria-hidden="true">
            <div className="orbit orbit-one" /><div className="orbit orbit-two" /><div className="glow-orb"><Mark /></div>
            <span className="orb-note note-a">make it work</span><span className="orb-note note-b">then make it nice</span>
          </div>
        </section>

        <section id="project" className="project-section" aria-labelledby="project-title">
          <div className="section-kicker"><span>01</span> featured build</div>
          <article className="binge-card">
            <div className="project-copy">
              <div><p className="project-label">now showing</p><h2 id="project-title">BingeSaga</h2></div>
              <p className="project-description">A movie and TV discovery / tracking platform for keeping up with what&apos;s worth watching.</p>
              <div className="tags">{['FastAPI', 'React', 'PostgreSQL', 'Redis'].map((skill) => <span key={skill}>{skill}</span>)}</div>
              <div className="project-actions">
                <a className="live-button" href="https://www.devansh.online/" target="_blank" rel="noreferrer">Live website <Arrow /></a>
                <a className="source-link" href={links.bingeSagaRepo} target="_blank" rel="noreferrer">Source code <Arrow /></a>
              </div>
            </div>
            <div className="preview-wrap" role="img" aria-label="Stylized interface preview for BingeSaga">
              <div className="preview-glow" />
              <div className="app-preview">
                <div className="app-bar"><b>bs.</b><span>Discover</span><span>Lists</span><span className="app-search">⌕</span></div>
                <div className="app-body"><p>Tonight&apos;s picks</p><div className="poster-row"><div className="poster poster-one"><i>THE<br />LAST<br />HOUR</i></div><div className="poster poster-two"><i>moonlight<br />drift</i></div><div className="poster poster-three"><i>NOIR</i></div></div><small>Find your next favorite story.</small></div>
              </div>
            </div>
          </article>
          <p className="asset-note">Interface preview shown — replace the placeholder links with BingeSaga&apos;s live URL and repository URL.</p>
        </section>

        <section id="about" className="about-section" aria-labelledby="about-title">
          <div className="section-kicker"><span>02</span> a little about me</div>
          <div className="about-content"><div><h2 id="about-title">Building my way through computer engineering.</h2><p>I like the journey from a loose idea to a working product — especially the APIs, data, and problem-solving in the middle.</p></div><div className="skill-list" aria-label="Technologies">{skills.map((skill) => <span key={skill}>{skill}</span>)}</div></div>
        </section>
      </main>

      <footer id="contact" className="mx-auto flex max-w-6xl flex-col gap-5 border-t border-white/10 px-5 py-7 text-sm sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p className="text-[#a7a7b5]">Have something in mind? <a className="under-link bright" href={`mailto:${links.email}`}>{links.email}</a></p>
        <div className="flex gap-5 text-[#a7a7b5]"><a className="nav-link" href={links.github} target="_blank" rel="noreferrer">GitHub</a><a className="nav-link" href={links.linkedin} target="_blank" rel="noreferrer">LinkedIn</a><span>© {new Date().getFullYear()}</span></div>
      </footer>
    </div>
  );
}
