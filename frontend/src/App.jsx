import "./App.css";

function App() {
  return (
    <div className="app">
      <header className="navbar">
        <div className="brand">
          <div className="brand-logo">ACET</div>
          <div>
            <h2>ACET AI Support</h2>
            <span>Aditya College of Engineering & Technology</span>
          </div>
        </div>

        <div className="status">
          <span className="status-dot"></span>
          AI Assistant Online
        </div>
      </header>

      <main className="hero">
        <section className="hero-content">
          <div className="badge">
            🎓 B.Tech Student & Admission Support
          </div>

          <h1>
            Your ACET support,
            <br />
            <span>just a conversation away.</span>
          </h1>

          <p className="description">
            Ask about B.Tech programs, admissions, eligibility, hostel,
            transport, or general college information. Talk naturally with
            our AI support assistant.
          </p>

          <button className="talk-button">
            <span className="mic-icon">🎙️</span>
            Start Conversation
          </button>

          <p className="privacy-note">
            🔒 Your information is handled responsibly.
          </p>
        </section>

        <section className="assistant-card">
          <div className="card-header">
            <div>
              <span className="small-label">ACET AI</span>
              <h3>How can I help you?</h3>
            </div>

            <div className="ai-icon">✦</div>
          </div>

          <div className="wave-container">
            <div className="wave">
              {Array.from({ length: 28 }).map((_, index) => (
                <span
                  key={index}
                  style={{
                    height: `${20 + ((index * 17) % 55)}px`,
                  }}
                ></span>
              ))}
            </div>
          </div>

          <p className="listening-text">
            Press the button to start talking
          </p>

          <div className="quick-options">
            <button>B.Tech Programs</button>
            <button>Admissions</button>
            <button>Hostel</button>
            <button>Transport</button>
          </div>
        </section>
      </main>

      <section className="info-section">
        <div className="info-card">
          <div className="info-icon">📚</div>
          <h3>B.Tech Programs</h3>
          <p>Explore the programs currently listed by ACET.</p>
        </div>

        <div className="info-card">
          <div className="info-icon">🎓</div>
          <h3>Admission Support</h3>
          <p>Get help with general admission enquiries.</p>
        </div>

        <div className="info-card">
          <div className="info-icon">🏫</div>
          <h3>Student Support</h3>
          <p>Ask about hostel, transport and college information.</p>
        </div>
      </section>

      <footer>
        <p>ACET AI Voice Support Agent</p>
        <span>Built as a PW Medharthi Capstone Project</span>
      </footer>
    </div>
  );
}

export default App;