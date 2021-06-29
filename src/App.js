import React from "react";
import Jumbotron from './components/Jumbotron';
import Navbar from './components/Navbar';
import AboutMe from './components/AboutMe';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollUpButton from './components/ScrollUpButton';

function App() {
  return (
    <div>
      <ScrollUpButton />
      <Navbar />
      <Jumbotron />
      <AboutMe />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;