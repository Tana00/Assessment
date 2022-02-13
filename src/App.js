import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import List from "../src/pages/List/List";
import Table from "../src/pages/Table/Table";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/list" element={<List />} />
          <Route path="/table" element={<Table />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
