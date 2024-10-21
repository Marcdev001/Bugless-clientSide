import React from 'react'
import {Link} from 'react-router-dom'
import '../footLinkStyle.css'
import RotatingCube from './RotatingCube';



const Feedback = () => {
const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const formData = new FormData(e.target);

    // Fetch API to submit form data to backend server
    const response = await fetch('http://localhost:5001/submit-form', {
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
  <div className='feedback-container'>
    <RotatingCube />
    <h1>We Value Your Feedback</h1>
      <p>At Bugless, we strive to provide you with the best code analysis tools and services. Your feedback is invaluable to us as it helps us understand your needs better and continually improve our offerings.

      Please use the form below to share your thoughts, suggestions, or any issues you have encountered. Whether it’s about a feature request, a bug report, or general feedback, we are eager to hear from you.
    </p>


    <h1>Contact Information</h1>
    <p>If you wish to receive a response, please provide your email address. Rest assured, your contact information will be kept confidential and used solely for the purpose of addressing your feedback.
    </p>


    <h3>Thank You:</h3>
    <p>Thank you for taking the time to provide us with your insights. Your input is critical in helping us enhance Bugless and deliver an exceptional experience</p>
    <form id="contactForm" onSubmit={handleSubmit}>
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
            <div>
              <a href='' target='_blank' rel='noopener noreferrer' ><i className="fa-brands fa-twitter media-icon"></i></a>
            </div>
            <div>
              <a href='' target='_blank' rel='noopener noreferrer' ><i className="fa-brands fa-facebook media-icon"></i></a>
            </div>

          </div>
        </div>

        <div className='copyright'>&copy; 2024 BUGLESS. All Right Reserved.</div>
      </footer>
    </div>
  )
}

export default Feedback