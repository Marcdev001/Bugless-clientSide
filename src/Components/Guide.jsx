import React from "react";
import { Link } from "react-router-dom";
import "../Guide.css";

const Guide = () => {
  return (
    <div>
    <div class="guide-container">
  <h2>Bugless User Guide</h2>
  
  <ol class="guide-steps">
    <li>
      <h3>Account Setup</h3>
      <p>If you're new to Bugless, sign up for an account. Existing users can simply log in.</p>
    </li>
    
    <li>
      <h3>Access Your Dashboard</h3>
      <p>Once logged in, click the "Get Started" button on the home page to access your personalized dashboard.</p>
    </li>
    
    <li>
      <h3>Initiate Code Analysis</h3>
      <p>From your dashboard, you can begin the code analysis process:</p>
      <ul>
        <li>Select the file you wish to analyze (supported formats include HTML, CSS, JavaScript, TypeScript, and their associated frameworks and libraries).</li>
        <li>Note: Bugless currently supports analysis of one file at a time.</li>
      </ul>
    </li>
    
    <li>
      <h3>Analyze Your Code</h3>
      <p>After selecting your file, click the "Analyze" button to start the analysis process.</p>
    </li>
    
    <li>
      <h3>Review Results</h3>
      <p>Once the analysis is complete, you'll be presented with a detailed report of your code's performance and potential improvements.</p>
    </li>
  </ol>
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

        <div className='copyright'>&copy; 2024 BUGLESS. All Right Reserved.</div>
      </footer>
</div>
  )
};

export default Guide;
