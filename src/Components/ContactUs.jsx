import React from 'react';
import { Link } from 'react-router-dom'
import '../ContactUs.css'
import RotatingCube from './RotatingCube';

const ContactUs = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData(e.target);

      // Fetch API to submit form data to backend server
      const response = await fetch('http://localhost:5000/submit-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(Object.fromEntries(formData)),
      });

      if (response.ok) {
        alert('Form submitted successfully');
        // Handle success, e.g., show a success message
      } else {
        alert('Form submission failed');
        // Handle failure, e.g., show an error message
      }
    } catch (error) {
      console.error('Error during form submission:', error);
    }
  };
  return (
    <div className='contact-container'>
      <RotatingCube />
      <h1>Contact Us</h1>
        <p>Thank you for your interest in Bugless! We value your feedback and inquiries. Please feel free to reach out to us with any questions, suggestions, or collaboration opportunities. Our dedicated team is committed to providing exceptional support and assistance to our users. We endeavor to respond to all inquiries promptly and strive to ensure your Bugless experience exceeds expectations.

        We look forward to hearing from you and partnering together to enhance code quality and reliability with Bugless.
      </p>
      

      <form id="contactForm" onSubmit={handleSubmit}>
        <div>
          <label className='label' htmlFor="name"></label>
          <input type="text" id="name" name="name" placeholder='name' required />
        </div>
        <div>
          <label htmlFor="email"></label>
          <input type="email" id="email" name="email" placeholder='email' required />
        </div>

        <div className='message'>
          <label className='message' htmlFor="message"></label>
          <br></br>
          <textarea id="message" name="message" rows="4" placeholder="Type your message" required></textarea>
        </div>

        <button className='button' type="submit">Send</button>
      </form>



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

export default ContactUs;
