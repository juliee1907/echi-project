import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Artikel from "./artikel.jsx";

function App() {
  const [page, setPage] = useState("home"); // halaman aktif

  return (
    <div className="container">
      {page === "home" && (
        <>
          <div className="logos">
            <a href="https://vite.dev" target="_blank">
              <img src={viteLogo} className="logo vite" alt="Vite logo" />
            </a>
            <a href="https://react.dev" target="_blank">
              <img src={reactLogo} className="logo react" alt="React logo" />
            </a>
          </div>

          <h1 className="title">Hello World</h1>
          <h2 className="subtitle">Julie Elysia</h2>

          {/* Tombol pindah ke artikel */}
          <button className="btn-artikel" onClick={() => setPage("artikel")}>
            📖 Artikel
          </button>
        </>
      )}

      {page === "artikel" && <Artikel goHome={() => setPage("home")} />}
    </div>
  );
}

export default App;
