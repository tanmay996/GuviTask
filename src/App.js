import 'bootstrap/js/dist/offcanvas';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from './components/Header';
import About from './components/About';
import Resume from './components/Resume';
import Service from './components/Service';
import Skill from './components/Skill';
import Project from './components/Project';
import Contanct from './components/Contanct';
import Footer from './components/Footer';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a delay for data fetching or content loading
    const timeout = setTimeout(() => {
      setLoading(false);
      // Initialize AOS when the content is loaded
      AOS.init({
        // AOS configuration options
        // duration: 800,
        // Other options...
      });
    }, 3000); // Simulated 2-second delay for demonstration

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className='home bg-black' >

      {loading ? (
        // Loader component while content is loading
        <div id="loader">
          <div class="loader-gif"></div>
        </div>
      ) : (
        // Content with AOS animations
        <div>
          <Header />
          <About />
          <Resume />
          <Service />
          <Skill />
          <Project />
          <Contanct />
          <Footer />
        </div>
      )}
    </div>
  );
}

export default App;
