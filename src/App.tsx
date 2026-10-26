import { useAppDispatch, useAppSelector } from './app/hooks';
import { decrement, increment, reset } from './features/counter/counterSlice';
import './styles/app.scss';

function App() {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  return (
    <div className="site-shell">
      <header className="topbar page-container">
        <a className="brand" href="#home" aria-label="React TypeScript Mastery home">
          <span className="brand-mark" aria-hidden="true">
            R
          </span>
          <span>
            React TypeScript <strong>Mastery</strong>
          </span>
        </a>
        <nav className="navigation" aria-label="Main navigation">
          <a href="#curriculum">Curriculum</a>
          <a href="#practice">How it works</a>
        </nav>
        <a className="button button-primary header-cta" href="#curriculum">
          Explore the course <span aria-hidden="true">↗</span>
        </a>
      </header>

      <main>
        <section className="hero page-container" id="home">
          <div className="hero-copy">
            <p className="eyebrow">
              <span className="eyebrow-dot" /> THE PRACTICAL REACT + TYPESCRIPT COURSE
            </p>
            <h1>
              Build React apps with confidence. <span>Ship them with TypeScript.</span>
            </h1>
            <p className="hero-description">
              Go from “it works” to “I know why it works.” Learn modern React and
              TypeScript by building the kind of apps you’ll be proud to put your name on.
            </p>
            <div className="hero-actions">
              <a className="button button-primary button-large" href="#curriculum">
                Start building <span aria-hidden="true">→</span>
              </a>
              <a className="text-link" href="#practice">
                See what you’ll build <span aria-hidden="true">↓</span>
              </a>
            </div>
            <div className="hero-proof">
              <span className="proof-icon" aria-hidden="true">
                ✓
              </span>
              <p>
                <strong>Learn by doing</strong>
                <span>Projects, patterns, and practical skills</span>
              </p>
            </div>
          </div>

          <div className="hero-visual" aria-label="Preview of a typed React project">
            <div className="visual-glow" />
            <div className="code-card">
              <div className="code-card-header">
                <div className="window-dots" aria-hidden="true">
                  <i />
                  <i />
                  <i />
                </div>
                <span>ProfileCard.tsx</span>
                <span className="typescript-badge">TS</span>
              </div>
              <div className="code-content" aria-hidden="true">
                <p>
                  <span className="code-number">1</span>
                  <span className="code-purple">type</span>{' '}
                  <span className="code-blue">Profile</span> = {'{'}
                </p>
                <p>
                  <span className="code-number">2</span> &nbsp; name:{' '}
                  <span className="code-green">string</span>;
                </p>
                <p>
                  <span className="code-number">3</span> &nbsp; role:{' '}
                  <span className="code-green">string</span>;
                </p>
                <p>
                  <span className="code-number">4</span>
                  {'}'}
                </p>
                <p className="code-gap">
                  <span className="code-number">5</span>
                </p>
                <p>
                  <span className="code-number">6</span>
                  <span className="code-purple">function</span>{' '}
                  <span className="code-blue">ProfileCard</span>({'{'} name, role {'}'}:{' '}
                  <span className="code-yellow">Profile</span>) {'{'}
                </p>
                <p>
                  <span className="code-number">7</span> &nbsp;{' '}
                  <span className="code-purple">return</span> (
                </p>
                <p>
                  <span className="code-number">8</span> &nbsp; &nbsp; &lt;
                  <span className="code-red">article</span>&gt;{'{'}name{'}'}&lt;/
                  <span className="code-red">article</span>&gt;
                </p>
                <p>
                  <span className="code-number">9</span> &nbsp; );
                </p>
                <p>
                  <span className="code-number">10</span>
                  {'}'}
                </p>
              </div>
              <div className="code-card-footer">
                <span>
                  <i /> Type check passed
                </span>
                <span>✦ React + TypeScript</span>
              </div>
            </div>
            <div className="floating-note note-type">
              <span className="note-icon">✓</span>
              <span>
                <strong>Type-safe</strong>
                <small>from the start</small>
              </span>
            </div>
            <div className="floating-note note-react">
              <span className="react-orbit" aria-hidden="true">
                ⚛
              </span>
              <span>
                <strong>Build real</strong>
                <small>React projects</small>
              </span>
            </div>
          </div>
        </section>

        <section className="toolbelt page-container" aria-label="Course technologies">
          <p>THE TOOLS YOU’LL MASTER</p>
          <div className="tool-list">
            <span>
              <b className="tool-react">⚛</b> React
            </span>
            <span>
              <b className="tool-ts">TS</b> TypeScript
            </span>
            <span>
              <b className="tool-vite">ϟ</b> Vite
            </span>
            <span>
              <b className="tool-redux">▰</b> Redux Toolkit
            </span>
          </div>
        </section>

        <section className="curriculum-section page-container" id="curriculum">
          <div className="section-heading">
            <p className="eyebrow">YOUR PATH, MADE CLEAR</p>
            <h2>
              From first component
              <br />
              to <span>confident developer.</span>
            </h2>
            <p>
              Build a strong foundation, then put it to work in real projects. Every step
              gives you skills you can use right away.
            </p>
          </div>
          <div className="learning-grid">
            <article className="learning-card">
              <span className="card-number">01</span>
              <div className="learning-icon icon-foundations" aria-hidden="true">
                ⌘
              </div>
              <h3>Get the foundations right</h3>
              <p>
                Understand React’s building blocks and let TypeScript guide you toward
                more reliable code.
              </p>
              <div className="skill-tags">
                <span>Components</span>
                <span>Props & state</span>
                <span>Type basics</span>
              </div>
            </article>
            <article className="learning-card">
              <span className="card-number">02</span>
              <div className="learning-icon icon-projects" aria-hidden="true">
                ◈
              </div>
              <h3>Make ideas real</h3>
              <p>
                Bring concepts together as you create useful interfaces and manage app
                state with confidence.
              </p>
              <div className="skill-tags">
                <span>Hooks</span>
                <span>Forms</span>
                <span>Redux Toolkit</span>
              </div>
            </article>
            <article className="learning-card">
              <span className="card-number">03</span>
              <div className="learning-icon icon-shipping" aria-hidden="true">
                ↗
              </div>
              <h3>Build like a pro</h3>
              <p>
                Practice the patterns that make projects easier to scale, maintain, and
                share with the world.
              </p>
              <div className="skill-tags">
                <span>Reusable patterns</span>
                <span>Vite</span>
                <span>Best practices</span>
              </div>
            </article>
          </div>
        </section>

        <section className="practice-section page-container" id="practice">
          <div className="practice-copy">
            <p className="eyebrow">A LITTLE HANDS-ON PRACTICE</p>
            <h2>
              See your progress.
              <br />
              <span>Feel the difference.</span>
            </h2>
            <p>
              Good learning is active. This tiny Redux Toolkit counter is already wired up
              with typed hooks—try it out and see the state update in real time.
            </p>
            <ul className="practice-list">
              <li>
                <span>✓</span> Real Redux state, not a mockup
              </li>
              <li>
                <span>✓</span> Type-safe actions and selectors
              </li>
              <li>
                <span>✓</span> The same patterns used in larger apps
              </li>
            </ul>
          </div>
          <div className="demo-card" aria-labelledby="redux-demo-title">
            <div className="demo-card-header">
              <span className="demo-live">
                <i /> LIVE DEMO
              </span>
              <span className="demo-file">counterSlice.ts</span>
            </div>
            <div className="counter-panel">
              <p id="redux-demo-title">Your counter</p>
              <output className="counter-value" aria-live="polite">
                {count}
              </output>
              <div className="counter-actions">
                <button
                  className="button button-secondary"
                  onClick={() => dispatch(decrement())}
                  aria-label="Decrease counter"
                >
                  − <span>Decrease</span>
                </button>
                <button
                  className="button button-primary"
                  onClick={() => dispatch(increment())}
                  aria-label="Increase counter"
                >
                  + <span>Increase</span>
                </button>
              </div>
              <button className="reset-button" onClick={() => dispatch(reset())}>
                Reset counter
              </button>
            </div>
            <div className="demo-card-footer">
              <span>Powered by Redux Toolkit</span>
              <span className="typed-status">● &nbsp;Types checked</span>
            </div>
          </div>
        </section>

        <section className="closing-cta page-container">
          <div className="closing-content">
            <p className="eyebrow">YOUR NEXT COMMIT STARTS HERE</p>
            <h2>
              Ready to make React
              <br />
              and TypeScript <span>click?</span>
            </h2>
            <p>Start with the fundamentals. Keep building. See what you can make.</p>
          </div>
          <a className="button button-primary button-large" href="#curriculum">
            Explore the learning path <span aria-hidden="true">→</span>
          </a>
          <div className="cta-decoration" aria-hidden="true">
            &lt;/&gt;
          </div>
        </section>
      </main>

      <footer className="footer page-container">
        <a className="brand footer-brand" href="#home">
          <span className="brand-mark" aria-hidden="true">
            R
          </span>
          <span>
            React TypeScript <strong>Mastery</strong>
          </span>
        </a>
        <span>
          Built for learning by doing. <b>·</b> Type-safe by default.
        </span>
        <a className="back-to-top" href="#home">
          Back to top ↑
        </a>
      </footer>
    </div>
  );
}

export default App;
