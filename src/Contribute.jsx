import { useState } from 'react';
import { ArrowDownRight, ArrowRight, Code2, Palette, Megaphone, Handshake, TrendingUp, Music2, Lightbulb, Mail, Github } from 'lucide-react';
import './Contribute.css';

const contributionAreas = [
  {
    icon: Code2,
    title: 'Product & engineering',
    text: 'Help improve the app, build features, refine performance, or make the experience more reliable.',
    tags: ['Frontend / mobile', 'Backend', 'Quality assurance'],
  },
  {
    icon: Palette,
    title: 'Design & experience',
    text: 'Shape a distinctive music discovery experience through thoughtful interface design and user research.',
    tags: ['UI / UX', 'Brand design', 'User research'],
  },
  {
    icon: Megaphone,
    title: 'Growth & community',
    text: 'Help more music lovers discover Auralys, create content, and build an engaged community around music.',
    tags: ['Content', 'Social media', 'Community'],
  },
  {
    icon: Handshake,
    title: 'Strategy & partnerships',
    text: 'Bring ideas, expertise, industry knowledge, or partnerships that can help Auralys grow sustainably.',
    tags: ['Strategy', 'Partnerships', 'Operations'],
  },
];

const initialForm = {
  name: '',
  email: '',
  interest: 'Contributing my skills',
  area: '',
  message: '',
};

export default function Contribute() {
  const [form, setForm] = useState(initialForm);

  const update = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const submit = (event) => {
    event.preventDefault();
    const subject = encodeURIComponent(`Auralys — ${form.interest}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nI am interested in: ${form.interest}\nArea: ${form.area || 'Not specified'}\n\nMessage:\n${form.message}`
    );
    window.location.href = `mailto:contact@auralys.app?subject=${subject}&body=${body}`;
  };

  return (
    <div className="contribute-page">
      <div className="contribute-glow contribute-glow-one" aria-hidden="true" />
      <div className="contribute-glow contribute-glow-two" aria-hidden="true" />

      <header className="contribute-nav">
        <a className="contribute-brand" href="/" aria-label="Auralys home">
          <img src="/auralys-logo.svg" alt="" />
          <span>Auralys</span>
        </a>
        <nav aria-label="Main navigation">
          <a href="#contribute">Contribute</a>
          <a href="#invest">Invest</a>
          <a className="nav-contact" href="#contact">Get in touch <ArrowRight size={15} /></a>
        </nav>
      </header>

      <main>
        <section className="contribute-hero">
          <div className="eyebrow"><span className="eyebrow-dot" /> AN OPEN INVITATION</div>
          <h1>Good things happen<br />when <span>music brings us together.</span></h1>
          <p className="hero-copy">
            Auralys is being built for people who love discovering, rating, organising,
            and sharing the music that matters to them. We’re looking for people who
            want to help shape what comes next.
          </p>
          <div className="hero-actions">
            <a className="button button-light" href="#contribute">Contribute to Auralys <ArrowRight size={17} /></a>
            <a className="button button-ghost" href="#invest">Explore investment <ArrowDownRight size={17} /></a>
          </div>
          <div className="hero-note"><Music2 size={16} /> Independent spirit. Shared passion. A better way to experience music.</div>
          <div className="hero-orbit orbit-one" aria-hidden="true" />
          <div className="hero-orbit orbit-two" aria-hidden="true" />
          <div className="hero-disc" aria-hidden="true"><div className="disc-label"><span>A</span></div></div>
        </section>

        <section className="intro-strip">
          <div><span className="strip-kicker">THE IDEA</span><p>Build a more personal, social, and thoughtful home for music discovery.</p></div>
          <div><span className="strip-kicker">THE APPROACH</span><p>Bring together different skills, perspectives, and a genuine love of music.</p></div>
          <div><span className="strip-kicker">THE INVITATION</span><p>Help us make the next chapter possible — as a contributor or potential investor.</p></div>
        </section>

        <section className="section-block" id="contribute">
          <div className="section-heading">
            <div>
              <span className="section-kicker">01 / CONTRIBUTE</span>
              <h2>Bring what you do best.</h2>
            </div>
            <p>You don’t need to fit a predefined role. If you have a skill, an idea, or a perspective that could help Auralys, we’d like to hear from you.</p>
          </div>
          <div className="contribution-grid">
            {contributionAreas.map(({ icon: Icon, title, text, tags }, index) => (
              <article className="contribution-card" key={title}>
                <div className="card-topline"><span>0{index + 1}</span><Icon size={21} strokeWidth={1.7} /></div>
                <h3>{title}</h3>
                <p>{text}</p>
                <div className="tag-list">{tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
              </article>
            ))}
          </div>
          <div className="soft-callout">
            <div className="callout-icon"><Lightbulb size={22} /></div>
            <div><h3>Have a different idea?</h3><p>That’s welcome, too. Tell us what you’d like to bring to the project and what you hope to learn or build with us.</p></div>
            <a href="#contact" aria-label="Tell us your idea"><ArrowRight size={20} /></a>
          </div>
        </section>

        <section className="invest-section" id="invest">
          <div className="invest-copy">
            <span className="section-kicker">02 / INVEST</span>
            <h2>Help shape the future of Auralys.</h2>
            <p className="invest-lead">We’re open to conversations with people who see the potential in Auralys and may be interested in supporting its next stage of development.</p>
            <p>That could mean strategic guidance, introductions, commercial partnerships, or a potential financial investment. We’re interested in thoughtful, long-term relationships — not just capital.</p>
            <a className="button button-light" href="#contact">Start a conversation <ArrowRight size={17} /></a>
            <p className="small-note">Any investment would be discussed individually and remain subject to appropriate legal, financial, and corporate arrangements.</p>
          </div>
          <div className="invest-panel">
            <div className="invest-panel-icon"><TrendingUp size={22} /></div>
            <span className="panel-label">A CONVERSATION, NOT A PROMISE</span>
            <h3>Aligned with the journey.</h3>
            <p>We’d welcome a discussion about your experience, your perspective, and the kind of support you could bring to Auralys.</p>
            <div className="panel-divider" />
            <div className="panel-point"><span>01</span><div><strong>Get to know the project</strong><small>Our vision, product, and current priorities.</small></div></div>
            <div className="panel-point"><span>02</span><div><strong>Explore possible alignment</strong><small>Expertise, partnerships, or funding opportunities.</small></div></div>
            <div className="panel-point"><span>03</span><div><strong>Discuss next steps</strong><small>Only where there is a clear mutual fit.</small></div></div>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="contact-heading">
            <span className="section-kicker">03 / LET’S TALK</span>
            <h2>Every great collaboration<br /><span>starts with a conversation.</span></h2>
            <p>Tell us a little about yourself and how you’d like to get involved. We’ll take it from there.</p>
            <a className="email-link" href="mailto:contact@auralys.app"><Mail size={17} /> contact@auralys.app</a>
            <a className="github-link" href="https://github.com/auralysapp/auralys" target="_blank" rel="noreferrer"><Github size={16} /> Explore the project on GitHub <ArrowRight size={15} /></a>
          </div>
          <form className="contact-form" onSubmit={submit}>
            <label>Your name<input name="name" value={form.name} onChange={update} placeholder="Name" required /></label>
            <label>Email address<input name="email" type="email" value={form.email} onChange={update} placeholder="you@example.com" required /></label>
            <label>I’m interested in
              <select name="interest" value={form.interest} onChange={update}>
                <option>Contributing my skills</option>
                <option>Exploring an investment</option>
                <option>Strategic advice or mentorship</option>
                <option>Partnership opportunities</option>
                <option>Something else</option>
              </select>
            </label>
            <label>Area of interest<input name="area" value={form.area} onChange={update} placeholder="e.g. development, design, investment…" /></label>
            <label>Your message<textarea name="message" value={form.message} onChange={update} placeholder="Tell us a little about your idea or how you’d like to get involved…" rows={4} required /></label>
            <button className="button button-light form-submit" type="submit">Continue by email <ArrowRight size={17} /></button>
            <p className="form-privacy">Your email app will open with your message prepared. Nothing is sent automatically from this page.</p>
          </form>
        </section>
      </main>

      <footer className="contribute-footer">
        <a className="contribute-brand" href="/"><img src="/auralys-logo.svg" alt="" /><span>Auralys</span></a>
        <span>Made for the love of music.</span>
        <a href="mailto:contact@auralys.app">Contact <ArrowRight size={14} /></a>
      </footer>
    </div>
  );
}
