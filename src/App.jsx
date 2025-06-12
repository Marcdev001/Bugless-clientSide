import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Navbar';
import Home from './Components/Home';
import LoginButton from './Components/LoginButton'
import LogoutButton from './Components/LogoutButton'
import Profile from './Components/Profile'
import About from './Components/About';
import Testimonials from './Components/Testimonials'
import KnowledgeBase from './Components/KnowledgeBase';
import Feedback from './Components/Feedback';
import Terms from './Components/Terms';
import Privacy from './Components/Privacy';
import ContactUs from './Components/ContactUs';
import Dashboard from './Components/Dashboard';
import ProjectDetails from './Components/ProjectDetails';
import Guide from './Components/Guide';

function App() {
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, observerOptions);

    // Observe all elements with scroll-reveal class
    document.querySelectorAll('.scroll-reveal, .bugless-features-items > div').forEach((element) => {
      observer.observe(element);
    });

    // Cleanup
    return () => {
      document.querySelectorAll('.scroll-reveal, .bugless-features-items > div').forEach((element) => {
        observer.unobserve(element);
      });
    };
  }, []);

  return (
    <Router>
      <div className="App">
        <Navbar />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login/sign-up" element={<LoginButton />} />
          <Route path="/logout" element={<LogoutButton />} />
          <Route path="/about" element={<About />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/knowledgebase" element={<KnowledgeBase />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/guide" element={<Guide />} />
          <Route path="/project/:id" element={<ProjectDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;