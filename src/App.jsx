import './App.css';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Header from '../components/header/Header';
import Home from '../components/home/Home';
import About from '../components/about/About';
import Skills from '../components/skills/Skills';
import Experience from '../components/experience/Experience';
import Qualification from '../components/qualification/Qualification';
import Work from '../components/work/Work';
import Testimonials from '../components/testimonials/Testimonials';
import Contact from '../components/contact/Contact';
import Footer from '../components/footer/Footer';
import ScrollUp from '../components/scrollup/ScrollUp';

function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState("default");
  const [velocity, setVelocity] = useState(0);
  const [prevPosition, setPrevPosition] = useState({ x: 0, y: 0 });
  const [cursorColor, setCursorColor] = useState('rgba(255, 0, 0, 0.9)');

  // Color cycling effect
  useEffect(() => {
    const colorInterval = setInterval(() => {
      // Generate random RGB values
      const r = Math.floor(Math.random() * 256);
      const g = Math.floor(Math.random() * 256);
      const b = Math.floor(Math.random() * 256);
      
      // Set new color with opacity
      setCursorColor(`rgba(${r}, ${g}, ${b}, 0.9)`);
    }, 1000);
    
    return () => clearInterval(colorInterval);
  }, []);

  // Track mouse movement
  useEffect(() => {
    const mouseMove = (e) => {
      // Calculate velocity for dynamics
      const dx = e.clientX - prevPosition.x;
      const dy = e.clientY - prevPosition.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      setVelocity(Math.min(distance, 20));
      
      setPrevPosition({ x: e.clientX, y: e.clientY });
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };

    window.addEventListener("mousemove", mouseMove);
    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, [prevPosition]);

  // Handle cursor states
  useEffect(() => {
    const handleMouseDown = () => setCursorVariant("click");
    const handleMouseUp = () => setCursorVariant("default");
    
    const handleLinkHoverStart = () => setCursorVariant("hover");
    const handleLinkHoverEnd = () => setCursorVariant("default");
    
    const interactiveElements = document.querySelectorAll('a, button, input, textarea, select, [role="button"]');
    
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleLinkHoverStart);
      el.addEventListener('mouseleave', handleLinkHoverEnd);
    });
    
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    
    document.body.style.cursor = 'none';
    
    return () => {
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleLinkHoverStart);
        el.removeEventListener('mouseleave', handleLinkHoverEnd);
      });
      
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      
      document.body.style.cursor = 'auto';
    };
  }, []);

  // Much faster cursor transitions for immediate response
  const trackerTransition = {
    type: "tween",
    duration: 0.01,
    ease: "linear"
  };
  
  // Slightly trailing outer circle for visual effect
  const followerTransition = {
    type: "tween",
    duration: 0.1,
    ease: "linear"
  };

  return (
    <>
      {/* Main cursor dot - precise tracker */}
      <motion.div
        animate={{
          x: mousePosition.x,
          y: mousePosition.y,
          transition: trackerTransition
        }}
        style={{
          position: 'fixed',
          zIndex: 10000,
          pointerEvents: 'none',
          transform: 'translate(-50%, -50%)'
        }}
      >
        <motion.div
          variants={{
            default: { 
              width: '15px', 
              height: '15px',
              backgroundColor: cursorColor,
              borderRadius: '50%',
              boxShadow: `0 0 6px ${cursorColor}`,
              transition: { duration: 0.5 }
            },
            hover: { 
              width: '20px', 
              height: '20px',
              backgroundColor: cursorColor,
              borderRadius: '50%',
              boxShadow: `0 0 8px ${cursorColor}`,
              transition: { duration: 0.5 }
            },
            click: { 
              width: '12px', 
              height: '12px',
              backgroundColor: cursorColor,
              borderRadius: '50%',
              boxShadow: `0 0 10px ${cursorColor}`,
              transition: { duration: 0.5 }
            }
          }}
          animate={cursorVariant}
          style={{
            transition: 'all 0.5s ease-out, background-color 1s ease'
          }}
        />
      </motion.div>
      
      {/* Elegant border frame */}
      <motion.div
        animate={{
          x: mousePosition.x,
          y: mousePosition.y,
          transition: followerTransition
        }}
        style={{
          position: 'fixed',
          zIndex: 9999,
          pointerEvents: 'none',
          transform: 'translate(-50%, -50%)'
        }}
      >
        <motion.div
          variants={{
            default: { 
              width: '30px', 
              height: '30px',
              opacity: 0.5 + velocity * 0.025,
              border: `1px solid ${cursorColor}`,
              borderRadius: '50%',
              transition: { duration: 0.5 }
            },
            hover: { 
              width: '40px', 
              height: '40px',
              opacity: 0.7,
              border: `2px solid ${cursorColor}`,
              borderRadius: '50%',
              boxShadow: `0 0 6px ${cursorColor}`,
              transition: { duration: 0.5 }
            },
            click: { 
              width: '25px', 
              height: '25px',
              opacity: 0.8,
              border: `2px solid ${cursorColor}`,
              borderRadius: '50%',
              boxShadow: `0 0 8px ${cursorColor}`,
              transition: { duration: 0.5 }
            }
          }}
          animate={cursorVariant}
          style={{
            transition: 'all 0.5s ease, border-color 1s ease'
          }}
        />
      </motion.div>
      
      {/* Gold accent corner elements */}
      {(cursorVariant === "hover" || cursorVariant === "click") && (
        <>
          {/* Top-left corner */}
          <motion.div
            initial={{ opacity: 0, x: mousePosition.x - 30, y: mousePosition.y - 30 }}
            animate={{ 
              opacity: 1,
              x: mousePosition.x - 38,
              y: mousePosition.y - 38,
              transition: { ...followerTransition, delay: 0.05 }
            }}
            exit={{ opacity: 0 }}
            style={{
              position: 'fixed',
              width: '15px',
              height: '2px',
              background: `linear-gradient(90deg, rgba(0, 0, 0, 0), ${cursorColor})`,
              transform: 'rotate(0deg)',
              pointerEvents: 'none',
              zIndex: 9998,
              transition: 'background 1s ease'
            }}
          />
          <motion.div
            initial={{ opacity: 0, x: mousePosition.x - 30, y: mousePosition.y - 30 }}
            animate={{ 
              opacity: 1,
              x: mousePosition.x - 38,
              y: mousePosition.y - 38,
              transition: { ...followerTransition, delay: 0.05 }
            }}
            exit={{ opacity: 0 }}
            style={{
              position: 'fixed',
              width: '2px',
              height: '15px',
              background: `linear-gradient(180deg, rgba(0, 0, 0, 0), ${cursorColor})`,
              transform: 'rotate(0deg)',
              pointerEvents: 'none',
              zIndex: 9998,
              transition: 'background 1s ease'
            }}
          />
          
          {/* Bottom-right corner */}
          <motion.div
            initial={{ opacity: 0, x: mousePosition.x + 30, y: mousePosition.y + 30 }}
            animate={{ 
              opacity: 1,
              x: mousePosition.x + 38,
              y: mousePosition.y + 38,
              transition: { ...followerTransition, delay: 0.05 }
            }}
            exit={{ opacity: 0 }}
            style={{
              position: 'fixed',
              width: '15px',
              height: '2px',
              background: `linear-gradient(-90deg, rgba(0, 0, 0, 0), ${cursorColor})`,
              transform: 'rotate(0deg)',
              pointerEvents: 'none',
              zIndex: 9998,
              transition: 'background 1s ease'
            }}
          />
          <motion.div
            initial={{ opacity: 0, x: mousePosition.x + 30, y: mousePosition.y + 30 }}
            animate={{ 
              opacity: 1,
              x: mousePosition.x + 38,
              y: mousePosition.y + 38,
              transition: { ...followerTransition, delay: 0.05 }
            }}
            exit={{ opacity: 0 }}
            style={{
              position: 'fixed',
              width: '2px',
              height: '15px',
              background: `linear-gradient(0deg, rgba(0, 0, 0, 0), ${cursorColor})`,
              transform: 'rotate(0deg)',
              pointerEvents: 'none',
              zIndex: 9998,
              transition: 'background 1s ease'
            }}
          />
        </>
      )}
      
      {/* Interaction pulse effect */}
      {cursorVariant === "click" && (
        <motion.div
          initial={{ opacity: 0.6, scale: 0.8 }}
          animate={{ 
            opacity: 0,
            scale: 1.5,
            transition: { duration: 0.7, ease: "easeOut" }
          }}
          style={{
            position: 'fixed',
            top: mousePosition.y,
            left: mousePosition.x,
            width: '40px',
            height: '40px',
            border: `2px solid ${cursorColor}`,
            borderRadius: '50%',
            transform: 'translate(-50%, -50%)',
            pointerEvents: 'none',
            zIndex: 9997,
            transition: 'border-color 1s ease'
          }}
        />
      )}
      
      <Header />
      <main className='main'>
        <Home />
        <Work />
        <Skills />
        <Experience />
        <Qualification />
        <About />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <ScrollUp />
    </>
  );
}

export default App;