import { useEffect, useRef, useState } from "react";
import VapiModule from "@vapi-ai/web";
import "./App.css";

const Vapi = VapiModule.default;
function App() {
  const vapiRef = useRef(null);

  const [isCalling, setIsCalling] = useState(false);
  const [status, setStatus] = useState("Ready to help");
  const [error, setError] = useState("");

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
      setStatus("Connected to ACET AI Support");
      setError("");
    });

    vapi.on("call-end", () => {
      setIsCalling(false);
      setStatus("Call ended");
    });

    vapi.on("error", (error) => {
      console.error("Vapi error:", error);
      setError("Something went wrong. Please try again.");
      setIsCalling(false);
    });

    return () => {
      vapi.stop();
    };
  }, []);

  const startCall = async () => {
    const assistantId = import.meta.env.VITE_VAPI_ASSISTANT_ID;

    if (!assistantId) {
      setError("Vapi assistant ID is missing.");
      return;
    }

    try {
      setError("");
      setStatus("Connecting...");

      await vapiRef.current.start(assistantId);
    } catch (error) {
      console.error(error);
      setError("Unable to start the voice assistant.");
      setStatus("Connection failed");
    }
  };

  const endCall = () => {
    if (vapiRef.current) {
      vapiRef.current.stop();
    }
  };

  return (
    <div className="app">
      <div className="card">
        <div className="logo">ACET</div>

        <h1>ACET AI Support</h1>

        <p className="subtitle">
          Your AI voice assistant for B.Tech admissions and student support.
        </p>

        <div className={`status ${isCalling ? "active" : ""}`}>
          <span className="dot"></span>
          {status}
        </div>

        {!isCalling ? (
          <button className="talk-button" onClick={startCall}>
            🎙️ Talk to ACET AI
          </button>
        ) : (
          <button className="end-button" onClick={endCall}>
            End Call
          </button>
        )}

        {error && <p className="error">{error}</p>}

        <div className="features">
          <div>🎓 B.Tech Programs</div>
          <div>📚 Admission Support</div>
          <div>🏫 College Information</div>
          <div>📞 Student Enquiries</div>
        </div>

        <p className="footer">
          Aditya College of Engineering and Technology
        </p>
      </div>
    </div>
  );
}

export default App;