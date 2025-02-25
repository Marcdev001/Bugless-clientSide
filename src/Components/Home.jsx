import React, { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
import "../Home.css";
import AuthenticatedContent from "./AuthenticatedContent";
import Marquee from "react-fast-marquee";

const TextFader = ({ texts, duration }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, duration);
    return () => clearInterval(interval);
  }, [texts.length, duration]);

  return (
    <div className="text-container">
      {texts.map((text, i) => (
        <div key={i} className={`text ${index === i ? "visible" : "hidden"}`}>
          {text}
        </div>
      ))}
    </div>
  );
};

const Home = () => {
  const { isAuthenticated } = useAuth0();

  const texts = [
    "OPTIMIZE YOUR CODE FOR MAXIMUM PERFORMANCE.",
    "IDENTIFICATION OF ERRORS.",
    "EMPOWERMENT FOR DEVELOPERS.",
    "HEALTHY CODE LEADS TO A BETTER USER EXPERIENCE.",
    "GUIDED RESOLUTION PROCESS.",
    "RELIABLE FUNCTIONALITY.",
  ];

  const duration = 6000; // Change the duration as needed (in milliseconds)

  return (
    <div className="section-1">
      <TextFader texts={texts} duration={duration} />

      {/* addressing users about the web app */}
      <p>
      Bugless is a sophisticated web application designed to streamline code
analysis for innovation, offering a comprehensive suite of features
to enhance your development process. With Bugless, developers have
access to advanced code quality assessment and detailed
performance metrics analysis. Our platform empowers developers to
pinpoint and resolve issues swiftly, ensuring codebase stability and
optimal performance.
        <p>
          Elevate your development process with Bugless, an indispensable
          companion for modern software development.
        </p>
      </p>

      {/* free trial and about */}
      <div className="trial-about">
        <div className="trial-about-each">
          <Link className="Link-color" to="/about">
            About BUGLESS
          </Link>
        </div>
      </div>

      {/* authenticate for extra feature */}
      <div>
        <h4 className="authenticateUser">
          Please <Link to="/login/sign-up">sign up</Link> or{" "}
          <Link to="/login/sign-up">log in</Link> to access features
        </h4>
        {/* Render a message or prompt for unauthenticated users */}

        <div
          className={`authenticated-content-container ${
            isAuthenticated ? "visible" : ""
          }`}
        >
          <AuthenticatedContent /> {/* Render AuthenticatedContent */}
        </div>
      </div>

      {/*  building trust */}

      <div className="container">
        <div className="content">
          <h1>Trustworthy Code Quality Analysis for Your Development Needs</h1>
          <p>
            Welcome to our code analysis platform, a trustworthy and
            comprehensive tool for all your code quality needs! Our platform
            offers a wide range of features, from thorough code review to
            in-depth reporting, to help you improve your code and develop a
            deeper understanding of its quality. But what makes us stand out is
            our commitment to excellence and trustworthiness. We take great
            pride in providing accurate, reliable, and unbiased results, so you
            can rest assured that our analysis will help you identify and
            address any issues in your code.
          </p>
        </div>
      </div>

      {/* bugless features */}

      <div className="bugless-features">
        <h1>Bugless Features</h1>

        <h5>The tool you need for an advanced and code quality projects.</h5>

        <div className="bugless-features-items">
          <div>
            <p>
              <i className="fas fa-chart-line bug-features-icon"></i>
            </p>
            <h3>Code Quality Metrics:</h3>
            <p>
              Bugless provides comprehensive code quality metrics, including
              code complexity, duplication, and coding standards compliance.
            </p>
          </div>

          <div>
            <p>
              <i className="fa-solid fa-code bug-features-icon"></i>
            </p>
            <h3>Languages, frameworks and libraries:</h3>
            <p>
              Our platform support many languages, frameworks and libraries to
              analyze the code quality of all languages in your project, making
              sure it's free from bugs, errors and so on for the betterment of
              your projects.
            </p>
          </div>

          <div>
            <p>
              <i className="fa-solid fa-bugs bug-features-icon"></i>
            </p>
            <h3>Code Smells Detection:</h3>
            <p>
              Detection of code smells, which are indicators of potential
              problems or areas for improvement in the codebase.
            </p>
          </div>

          <div>
            <p>
              <i className="fas fa-comments bug-features-icon"></i>
            </p>
            <h3>Automatic Code Reviews:</h3>
            <p>
              Bugless automates code reviews by continuously analyzing code
              changes and providing feedback to developers in real-time.
            </p>
          </div>

          <div>
            <p>
              <i class="fa-solid fa-bug-slash bug-features-icon"></i>
            </p>
            <h3>Identification of Errors:</h3>
            <p>
              Identification of errors in the codebase, such as Missed or
              mismatched brackets/ parenteses, Logical errors, TypeError,
              unintended variable modification, infinite loops, and so on.
            </p>
          </div>

          <div>
            <p>
              <i className="fa-solid fa-bolt bug-features-icon"></i>
            </p>
            <h3>Fast analysis</h3>
            <p>
              Fast and quality analysis with clean code metrics in minutes
              without delay.
            </p>
          </div>
        </div>

        {/* some of our supported lang,frameworks,libraries */}
        <div className="supported-langs">
          <h1>Some of Our Supported Languages, Frameworks and Libraries</h1>
        </div>

        <div>
          <Marquee>
            <div>
              <i class="fab fa-html5 supported-langs-icon"></i>
            </div>
            <div>
              <i class="fa-brands fa-css3-alt supported-langs-icon"></i>
            </div>
            <div>
              <i class="fa-brands fa-js supported-langs-icon"></i>
            </div>
            <div>
              <i class="fa-brands fa-react supported-langs-icon"></i>
            </div>
            <div>
              <i class="fa-brands fa-vuejs supported-langs-icon"></i>
            </div>
            <div>
              <i class="fa-brands fa-angular supported-langs-icon"></i>
            </div>
            <div>
              <i class="fab fa-node-js supported-langs-icon"></i>
            </div>
            <div>
              <i class="fa-solid fa-code supported-langs-icon"></i>
            </div>
          </Marquee>
        </div>
      </div>

      {/* error-identification */}
      <div className="error-identification">
        <h1>Precise Error Identification</h1>
        <p>
          <p>
            At Bugless, we prioritize the accuracy and efficiency of error
            detection in your code. In today's fast-paced development
            environment, where complex applications are the norm, ensuring the
            quality and reliability of your code is paramount.
          </p>

          <p>
            Undetected errors can pose significant challenges to businesses and
            developers alike. These issues can lead to unexpected behavior, poor
            user experience, or even critical system failures. That's why we've
            developed advanced algorithms to identify and highlight potential
            errors in your code swiftly and accurately.
          </p>

          <p>
            Our platform employs sophisticated static analysis techniques and
            pattern recognition to scrutinize your code thoroughly. We can
            detect a wide range of issues, from simple syntax errors to complex
            logical flaws, helping you maintain high code quality standards.
          </p>

          <p>
            By choosing Bugless, you're not just investing in a powerful code
            analysis tool—you're investing in the reliability and robustness of
            your software. You can code with confidence, knowing that our tool
            will help you catch and fix errors early in the development process,
            saving you time and resources in the long run.
          </p>
        </p>
      </div>

      {/* guideline for users */}
      <div className="guideline">
        <h1>Need Help to Get Started?</h1>

        <p>
          We want to make it as easy as possible for you to start improving your
          code. If you're new to our platform or just need a bit of guidance,
          we're here to help. Whether you have questions about our features,
          need assistance setting up your account, or just want to learn more
          about how our platform works, our dedicated support team is ready to
          answer all your queries and guide you through the process.
          <p>
            <Link to="/guide">
              <i className="fa-solid fa-angles-right fa-beat guideline-icon"></i>
            </Link>
          </p>
        </p>
      </div>

      <div className="twitting">
        <div>
          <i className="fa-brands fa-twitter fa-beat bug-features-icon"></i>
        </div>
        <p>
        At Bugless, we provide reliable code analysis tools for developers of all levels. Our platform offers accurate feedback, helping you identify and fix bugs efficiently. With cutting-edge algorithms, we ensure high-level accuracy in code analysis. Our user-friendly interface integrates seamlessly into your workflow, allowing you to focus on creating exceptional software. From detailed code reviews to proactive bug detection, Bugless elevates your coding practices. Join thousands of developers who trust us for their code analysis needs. Experience cleaner, more efficient code with Bugless by your side.
        </p>
      </div>

      <footer className="footer">
        <div className="footer-links">
          <div>
            <h4>Bugless solution</h4>
            <div className="knowledgebase">
              <Link to="/knowledgebase" className="footer-link ">
                Knowledge Base
              </Link>
            </div>

            <div className="feedback">
              <Link to="/feedback" className="footer-link ">
                Feedback
              </Link>
            </div>

            <div className="terms">
              <Link to="/terms" className="footer-link ">
                Terms and Conditions
              </Link>
            </div>

            <div className="privacy">
              <Link to="/privacy" className="footer-link ">
                Privacy Policy
              </Link>
            </div>
          </div>

          <div>
            <h4>Company</h4>
            <div className="knowledgebase">
              <Link to="/contact" className="footer-link ">
                Contact Us
              </Link>
            </div>

            <div className="feedback">
              <Link to="/about" className="footer-link ">
                About Us
              </Link>
            </div>

            <div className="terms">
              <Link to="/testimonials" className="footer-link ">
                User Testimonials
              </Link>
            </div>
          </div>

          <div>
            <h4>Media</h4>
            <div>
              <i className="fa-brands fa-twitter media-icon"></i>
            </div>
            <div>
              <i className="fa-brands fa-facebook media-icon"></i>
            </div>
          </div>
        </div>

        <div className="copyright">
          &copy; 2025 BUGLESS. All Right Reserved.
        </div>
      </footer>
    </div>
  );
};

export default Home;
