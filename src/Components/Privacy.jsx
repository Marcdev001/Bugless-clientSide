import React from "react";
import {Link} from 'react-router-dom'
import "../footLinkStyle.css";
import RotatingCube from './RotatingCube';

const Privacy = () => {
  return (
    <div>
      <RotatingCube />
      <div className="privacy">
        <h1>Privacy Policy</h1>
        <p>
          <h4>Introduction:</h4> At Bugless, we are committed to protecting your
          privacy and ensuring the security of your personal information. This
          Privacy Policy outlines how we collect, use, and protect your data
          when you use Bugless.
          <h4>Information Collection:</h4> We collect certain information when
          you use Bugless, including personal information provided by you and
          data automatically collected by our systems.
          <h4>Use of Information:</h4> We use your information to provide and
          improve Bugless, customize your experience, communicate with you, and
          ensure the security of our platform.
          <h4>Data Security:</h4> We take appropriate measures to protect your
          information from unauthorized access, disclosure, alteration, or
          destruction.
          <h4>Third-Party Services:</h4> We may use third-party services that
          have their own privacy policies. Please review their policies before
          using their services.
          <h4>Changes to Policy:</h4> We may update this Privacy Policy from
          time to time. Any changes will be reflected on this page, and we
          encourage you to review this policy periodically.
        </p>
      </div>


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

        <div className='copyright'>&copy; 2025 BUGLESS. All Right Reserved.</div>
      </footer>
    </div>
  );
};

export default Privacy;
