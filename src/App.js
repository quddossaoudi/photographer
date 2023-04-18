import "./App.css";
import React, { useEffect, useState, useCallback } from "react";
import BarLoader from "react-spinners/BarLoader";

function App() {
  const [loading, setLoading] = useState(false);
  const [barWidth, setBarWidth] = useState(150);

  const [newName, setnewName] = useState("");

  const names = ["Hadiya Al", "هدية علي", "하디야 알리", "ہادیہ علی"];

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setTimeout(() => {
        setBarWidth(150);
      }, 7000);
    }, 8000);
    setTimeout(() => {
      setBarWidth(window.innerWidth);
    }, 7400);
  }, []);

  return (
    <div>
      {loading ? (
        <>
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
            color="#000"
            cssOverride={{
              position: "fixed",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              transition: "width 0.5s ease-out",
            }}
            speedMultiplier={1.2}
            width={barWidth}
            loading={loading}
            height={1}
          />
        </>
      ) : (
        <p>hello</p>
      )}
    </div>
  );
}

export default App;
