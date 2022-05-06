import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import React from "react";
import ListWords from "./components/ListWords";
import Translate from "./components/Translate";
// import VocabList from "./components/VocabList";
import "./App.css";

export function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <nav>
          <ul>
            <li>
              <Link to="/">My vocabluary</Link>
            </li>
            <li>
              <Link to="vocab/translate">Translate and add to vocab</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route index element={<ListWords />} />
          <Route path="vocab/translate" element={<Translate />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
