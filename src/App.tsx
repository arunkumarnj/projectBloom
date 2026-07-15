import { useEffect, useState } from 'react';
import Navbar from './sections/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Objectives from './sections/Objectives';
import Events from './sections/Events';
import Gallery from './sections/Gallery';
import Environment from './sections/Environment';
import Contact from './sections/Contact';
import Footer from './sections/Footer';
import './App.css';

function App() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar scrollY={scrollY} />
      <Hero />
      <About />
      <Objectives />
      <Events />
      <Gallery />
      <Environment />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
