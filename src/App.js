import "./App.css";
import { useState, CSSProperties } from "react";
import BarLoader from "react-spinners/BarLoader";

function App() {
  return (
    <div className="App">
      <p
        style={{
          position: "fixed",
          top: "45%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: "9999",
        }}
      >
        Hadiya Ali
      </p>
      <BarLoader
        color="#36d7b7"
        cssOverride={{
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: "9999",
        }}
        speedMultiplier={1}
        width={150}
      />
    </div>
  );
}

export default App;
