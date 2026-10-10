
import { useEffect, useRef, useState } from "react";
import VapiModule from "@vapi-ai/web";
import "./App.css";

const Vapi = VapiModule.default;

function App() {
  const vapiRef = useRef(null);
  const [isCalling, setIsCalling] = useState(false);
  const [status, setStatus] = useState("AI Assistant Online");
  const [error, setError] = useState("");
  const [topic, setTopic] = useState("");

  useEffect(() => {
    const publicKey = import.meta.env.VITE_VAPI_PUBLIC_KEY;

    if (!publicKey) {
      setError("Vapi public key is missing.");
      return;
    }

    const vapi = new Vapi(publicKey);
    vapiRef.current = vapi;

    vapi.on("call-start", () => {
      setIsCalling(true);
      setStatus("Connected — you can speak now");
      setError("");
    });

    vapi.on("call-end", () => {
      setIsCalling(false);
      setStatus("AI Assistant Online");
    });

    vapi.on("error", (err) => {
      console.error("Vapi error:", err);
      setError("The call encountered an issue. Please try again.");
      setIsCalling(false);
      setStatus("Connection issue");
    });

    return () => {
      vapi.stop();
      vapiRef.current = null;
    };
  }, []);

  async function startCall(selectedTopic = "") {
    const assistantId = import.meta.env.VITE_VAPI_ASSISTANT_ID;
    if (!vapiRef.current || !assistantId) {
      setError("Vapi configuration is missing.");
      return;
    }

    try {
      setError("");
      setTopic(selectedTopic);
      setStatus("Connecting...");
      await vapiRef.current.start(assistantId);
    } catch (err) {
      console.error("Unable to start Vapi call:", err);
      setError("Unable to start the call. Please try again.");
      setStatus("Connection failed");
    }
  }

  function endCall() {
    vapiRef.current?.stop();
  }

  return (
    <div className="app">
      <header className="navbar">
        <div className="brand">
          <div className="brand-logo">ACET</div>
          <div>
            <h2>ACET AI Support</h2>
            <span>Aditya College of Engineering &amp; Technology</span>
          </div>
        </div>

        <div className={`status ${isCalling ? "connected" : ""}`}>
          <span className="status-dot"></span>
          {status}
        </div>
      </header>

      <main className="hero">
        <section className="hero-content">
          <div className="badge">
            🎓 B.Tech Student &amp; Admission Support
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

          {!isCalling ? (
            <button className="talk-button" onClick={() => startCall()}>
              <span className="mic-icon">🎙️</span>
              Start Conversation
            </button>
          ) : (
            <button className="talk-button end-button" onClick={endCall}>
              End Conversation
            </button>
          )}

          {error && <p className="error">{error}</p>}

          <p className="privacy-note">
            🔒 Avoid sharing passwords or sensitive personal information.
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

          <div className={`wave-container ${isCalling ? "wave-active" : ""}`}>
            <div className="wave">
              {Array.from({ length: 28 }).map((_, index) => (
                <span
                  key={index}
                  style={{ height: `${20 + ((index * 17) % 55)}px` }}
                />
              ))}
            </div>
          </div>

          <p className="listening-text">
            {isCalling
              ? "You're connected — speak naturally"
              : "Press the button to start talking"}
          </p>

          <div className="quick-options">
            {["B.Tech Programs", "Admissions", "Hostel", "Transport"].map(
              (item) => (
                <button
                  key={item}
                  onClick={() => startCall(item)}
                  disabled={isCalling}
                >
                  {item}
                </button>
              )
            )}
          </div>

          {topic && isCalling && (
            <p className="topic-note">
              Suggested topic: {topic}. Ask the assistant about it when connected.
            </p>
          )}
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
