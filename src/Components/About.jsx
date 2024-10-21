import React from 'react'
import {Link} from 'react-router-dom'
import '../footLinkStyle.css'
import RotatingCube from './RotatingCube';

const About = () => {
  return (
    <div className='about'>
      <RotatingCube />
      <h1>About BUGLESS</h1>

      <p>Our Company, Bugless, was founded in 2024 with the goal of revolutionizing the way developers approach code analysis. Since then, we have grown to become a trusted leader in the industry. Our team is dedicated to providing top-notch code analysis solutions to developers worldwide.</p>

      <h4>Introducing Bugless: Revolutionizing Code Analysis</h4>
      <p>At Bugless, we believe in empowering developers to build exceptional software with confidence. Our platform offers a comprehensive suite of tools and services designed to streamline code analysis, improve code quality, and eliminate bugs and vulnerabilities.</p>

      <h4>Unmatched Accuracy and Precision</h4>
      <p>With Bugless, you can trust that your code is thoroughly analyzed for bugs, security vulnerabilities, and code smells with unmatched accuracy and precision. Our advanced algorithms and intelligent scanning techniques ensure that no issue goes unnoticed, allowing you to address potential problems proactively.</p>

      <h4>Comprehensive Code Insights</h4>
      <p>Gain valuable insights into your codebase with Bugless's comprehensive analysis reports. From detailed bug reports to actionable suggestions for code improvements, our platform provides the information you need to optimize your code and enhance overall software quality.</p>

      <h4>Continuous Monitoring and Feedback</h4>
      <p>Keep your codebase in check with Bugless's continuous monitoring and feedback capabilities. Receive instant alerts and notifications about newly discovered issues, monitor code quality trends over time, and ensure that your software remains bug-free and secure with minimal effort.</p>

      <h4>Scalable and Reliable Performance</h4>
      <p>Built on robust infrastructure and scalable architecture, Bugless delivers reliable performance even for the largest codebases. Whether you're a solo developer or part of a large enterprise team, Bugless scales effortlessly to meet your code analysis needs, ensuring consistent performance and reliability.</p>

      <h4>Enhanced Security and Compliance</h4>
      <p>Protect your applications from security threats and ensure compliance with industry standards and regulations with Bugless's advanced security features. Detect and remediate security vulnerabilities early in the development lifecycle, minimizing risks and safeguarding sensitive data.</p>

      <h4>Exceptional Support and Expertise</h4>
      <p>At Bugless, we're committed to providing exceptional support and expertise to our users. Our dedicated team of experts is here to assist you every step of the way, offering personalized guidance, troubleshooting assistance, and best practices to help you get the most out of Bugless.</p>

      <h1 className='about-join'>Join the Bugless Community Today</h1>
      <p>Experience the power of Bugless and revolutionize your code analysis process. Join thousands of developers worldwide who trust Bugless to deliver high-quality software faster and more efficiently. Start your bug-free journey with Bugless today!</p>



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
}

export default About