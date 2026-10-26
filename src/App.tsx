import { useAppDispatch, useAppSelector } from './app/hooks';
import { decrement, increment, reset } from './features/counter/counterSlice';
import './styles/app.css';

function App() {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  return (
    <main className="page-shell">
      <nav className="topbar" aria-label="Main navigation">
        <a className="brand" href="/" aria-label="React TypeScript Mastery home">
          <span className="brand-mark">R</span>
          <span>React TypeScript Mastery</span>
        </a>
        <span className="status-pill">Starter project</span>
      </nav>

      <section className="hero">
        <p className="eyebrow">LEARN · BUILD · MASTER</p>
        <h1>Build real skills with React and TypeScript.</h1>
        <p className="hero-copy">
          A clean foundation for lessons, hands-on projects, and interview-ready practice.
          Vite powers the development experience; Redux Toolkit manages shared state.
        </p>
        <div className="tech-list" aria-label="Included technologies">
          <span>React</span>
          <span>TypeScript</span>
          <span>Vite</span>
          <span>Redux Toolkit</span>
        </div>
      </section>

      <section className="demo-card" aria-labelledby="redux-demo-title">
        <div>
          <p className="eyebrow">WORKING EXAMPLE</p>
          <h2 id="redux-demo-title">Redux Toolkit counter</h2>
          <p className="muted">
            This small example confirms that the Redux store, slice, and typed hooks are wired up.
          </p>
        </div>
        <div className="counter-panel">
          <output className="counter-value" aria-live="polite">{count}</output>
          <div className="counter-actions">
            <button className="button button-secondary" onClick={() => dispatch(decrement())}>
              − Decrease
            </button>
            <button className="button button-primary" onClick={() => dispatch(increment())}>
              + Increase
            </button>
          </div>
          <button className="reset-button" onClick={() => dispatch(reset())}>
            Reset counter
          </button>
        </div>
      </section>

      <footer className="footer">
        <span>Built for learning by doing.</span>
        <span>Type-safe by default.</span>
      </footer>
    </main>
  );
}

export default App;