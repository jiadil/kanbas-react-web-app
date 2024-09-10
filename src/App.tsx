import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Labs from "./Labs";
import { HashRouter, Route, Routes, Navigate } from "react-router-dom";

function App() {
  return (
    <HashRouter> {/* sets up the base mechanism to navigate between multiple screens */}
      <div>
        <h1>Welcome to Web Dev!!</h1>
        <Routes> {/* display an element only if the URL matches the pattern in the path attribute. */}
          <Route path="/" element={<Navigate to="Labs" />} /> {/* default to Labs */}
          <Route path="/Labs/*" element={<Labs />} /> {/* only http://localhost:3000/#/Labs display Labs */}
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;