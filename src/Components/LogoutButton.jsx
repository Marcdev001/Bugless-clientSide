import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { Link } from "react-router-dom";
import "../AuthButtons.css";
import RotatingCube from './RotatingCube';

const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <div className="auth-container">
      <RotatingCube />
      <h1>Thank you for using Bugless</h1>
      <p>We hope you found our tools helpful</p>
      <button 
        className="auth-button"
        onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}
      >
        Log Out
      </button>


      <footer className="footer">
        <div className="footer-links">
          <div>

            <h4>Bugless solution</h4>
            <div className='knowledgebase'>
              <Link to="/knowledgebase" className="footer-link ">Knowledge Base</Link>
            </div>

            <div className='feedback'>
              <Link to="/feedback" className="footer-link ">Feedback</Link>
            </div>
            
            <div className='terms'>
              <Link to="/terms" className="footer-link ">Terms and Conditions</Link>
            </div>

            <div className='privacy'>
              <Link to="/privacy" className="footer-link ">Privacy Policy</Link>
            </div>

          </div>

          <div>
            <h4>Company</h4>
            <div className='knowledgebase'>
              <Link to="/contact" className="footer-link ">Contact Us</Link>
            </div>

            <div className='feedback'>
              <Link to="/about" className="footer-link ">About Us</Link>
            </div>
            
            <div className='terms'>
              <Link to="/testimonials" className="footer-link ">User Testimonials</Link>
            </div>

          </div>
          
          <div>
            <h4>Media</h4>
            <div><i className="fa-brands fa-twitter media-icon"></i></div>
            <div><i className="fa-brands fa-facebook media-icon"></i></div>

          </div>
        </div>

        <div className='copyright'>&copy; 2024 BUGLESS. All Right Reserved.</div>
      </footer>
    </div>
  );
};

export default LogoutButton;


/* import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
      Log Out
    </button>
  );
};

export default LogoutButton; */