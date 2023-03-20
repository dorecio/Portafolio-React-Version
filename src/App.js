import React from 'react';
//import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from './components/Header';
//import Project from './components/Project';
import Footer from './src/components/Footer';
//import About from "./pages/About";
//import Work from "./pages/Work";
//import Contact from "./pages/Contact";
import { Fragment } from "react";

function App() {
  return (
    < Fragment>
      <Header />
      <Footer />
    </ Fragment>
  );
}

export default App;
