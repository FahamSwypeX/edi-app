import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from "./containers/HomePage/Loadable";
import Dashboard from "./containers/Dashboard/Loadable";
import FeaturePage from "./containers/FeaturePage/Loadable";
import NotFoundPage from "./containers/NotFoundPage/Loadable";
import Header from "./components/Header";

import "./App.css";

function App() {
  const [selectedTag, setSelectedTags] = useState([]);
  const [selectedLanguage, setSelectedLanguage] = useState("");

  return (
    <div className="App">
      <Header />
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                setSelectedTag={setSelectedTags}
                selectedTag={selectedTag}
                setSelectedLanguage={setSelectedLanguage}
                selectedLanguage={selectedLanguage}
              />
            }
          />
          <Route
            path="/home"
            element={
              <HomePage
                setSelectedTag={setSelectedTags}
                selectedTag={selectedTag}
                setSelectedLanguage={setSelectedLanguage}
                selectedLanguage={selectedLanguage}
              />
            }
          />
          <Route
            path="/translations"
            element={
              <Dashboard
                setSelectedTag={setSelectedTags}
                selectedTag={selectedTag}
                setSelectedLanguage={setSelectedLanguage}
                selectedLanguage={selectedLanguage}
              />
            }
          />
          <Route path="/about" element={<FeaturePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
