import React, { useState, useEffect } from 'react';
import '../BackToTop.css';


const BackToTop = () => {
    const [isVisible, setIsVisible] = useState(false);
  
    const toggleVisibility = () => {
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
  
    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
      };
    
      useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => {
          window.removeEventListener('scroll', toggleVisibility);
        };
      }, []);
    
      return (
        <div className="back-to-top">
          {isVisible && (
            <div onClick={scrollToTop} className="back-to-top-button">
              <i class="fa-solid fa-arrow-up fa-beat"></i>
            </div>
          )}
        </div>
      );
    };
    
    

export default BackToTop