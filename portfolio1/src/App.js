import React from 'react';
import Navbar from './componets/Navbar/Navbar';
import Intro from './componets/Intro/Intro';
import About from './componets/About/About';
import Resume from './componets/Resume/Resume';
import Projects from './componets/Projects/Projects';
import Footer from './componets/Footer/Footer';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <About />
      <Projects />
      <Resume />
      <Footer />
    </div>
  );
}

export default App;
