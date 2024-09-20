import React from "react";
import logo from "./logo.svg";
import { HashRouter, Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import Labs from "./Labs";
import Kanbas from "./Kanbas";

function App() {
  return (
    <HashRouter> {/* sets up the base mechanism to navigate between multiple screens */}
      <div>
        <Routes> {/* display an element only if the URL matches the pattern in the path attribute. */}
          <Route path="/" element={<Navigate to="Kanbas" />} /> {/* default to Kanbas */}
          <Route path="/Labs/*" element={<Labs />} /> {/* only http://localhost:3000/#/Labs display Labs */}
          <Route path="/Kanbas/*" element={<Kanbas />} />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;