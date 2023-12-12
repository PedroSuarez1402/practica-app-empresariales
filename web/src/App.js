import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ListaUsuarios from "./components/Usuarios/ListaUsuarios";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/usuarios" element={<ListaUsuarios />} />
      </Routes>
    </Router>
  );
}

export default App;
