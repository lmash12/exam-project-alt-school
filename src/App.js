import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { ErrorBoundary } from "react-error-boundary";
import ErrorPage from "./components/ErrorPage";
import Layout from "./components/Layout";
import Home from "./components/Home";
import SingleRepo from "./components/SingleRepo";
import About from "./components/About";
import FetchMyPage from "./components/FetchMyPage";
import Contact from "./components/Contact";
import ErrorFallBack from "./components/ErrorFallBack";




function App() {
  return (
    <div className="app">
      <ErrorBoundary FallbackComponent={<ErrorFallBack/>}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="repositories" element={<FetchMyPage />} />
            <Route path="repositories/:singlerepo" element={<SingleRepo />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<ErrorPage />} />
          </Route>
        </Routes>
      </ErrorBoundary>
    </div>
  );
}

export default App;
