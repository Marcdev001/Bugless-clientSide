import React from "react";
import { Link } from "react-router-dom";
import "../footLinkStyle.css";
import RotatingCube from "./RotatingCube";

const Terms = () => {
  return (
    <div>
      <RotatingCube />
      <div className="terms">
        <h1>Terms and Conditions</h1>
        <p>
          Welcome to Bugless! These terms and conditions outline the rules and
          regulations for the use of our web application. By accessing this web
          application, we assume you accept these terms and conditions. Do not
          continue to use Bugless if you do not agree to all of the terms and
          conditions stated on this page.
          <p>
            The following terminology applies to these Terms and Conditions,
            Privacy Statement and Disclaimer Notice and all Agreements:
            "Client", "You" and "Your" refers to you, the person log on this web
            application and compliant to the Company’s terms and conditions.
            "The Company", "Ourselves", "We", "Our" and "Us", refers to our
            Company. "Party", "Parties", or "Us", refers to both the Client and
            ourselves. All terms refer to the offer, acceptance, and
            consideration of payment necessary to undertake the process of our
            assistance to the Client in the most appropriate manner for the
            express purpose of meeting the Client’s needs in respect of
            provision of the Company’s stated services, in accordance with and
            subject to, prevailing law of Netherlands. Any use of the above
            terminology or other words in the singular, plural, capitalization
            and/or he/she or they, are taken as interchangeable and therefore as
            referring to same.
          </p>
          <h4>Cookies:</h4>
          We employ the use of cookies. By accessing Bugless, you agreed to use
          cookies in agreement with the Bugless's Privacy Policy. Most
          interactive websites use cookies to let us retrieve the user’s details
          for each visit. Cookies are used by our web application to enable the
          functionality of certain areas to make it easier for people visiting
          our website. Some of our affiliate/advertising partners may also use
          cookies.
          <h4>License:</h4>
          Unless otherwise stated, Bugless and/or its licensors own the
          intellectual property rights for all material on Bugless. All
          intellectual property rights are reserved. You may access this from
          Bugless for your own personal use subjected to restrictions set in
          these terms and conditions.
          <h4>You most know:</h4>- Republish material from Bugless - Sell, rent,
          or sub-license material from Bugless - Reproduce, duplicate or copy
          material from Bugless - Redistribute content from Bugless This
          Agreement shall begin on the date hereof. *Hyperlinking to our
          Content:* The following organizations may link to our web application
          without prior written approval: - Government agencies; - Search
          engines; - News organizations; - Online directory distributors may
          link to our web application in the same manner as they hyperlink to
          the web applications of other listed businesses; and - System wide
          Accredited Businesses except soliciting non-profit organizations,
          charity shopping malls, and charity fundraising groups which may not
          hyperlink to our web application. These organizations may link to our
          home page, to publications or to other web application information so
          long as the link: (a) is not in any way deceptive; (b) does not
          falsely imply sponsorship, endorsement or approval of the linking
          party and its products and/or services; and (c) fits within the
          context of the linking party’s site. We may consider and approve other
          link requests from the following types of organizations: -
          commonly-known consumer and/or business information sources; - dot.com
          community sites; - associations or other groups representing
          charities; - online directory distributors; - internet portals; -
          accounting, law and consulting firms; and - educational institutions
          and trade associations. We will approve link requests from these
          organizations if we decide that: (a) the link would not make us look
          unfavorably to ourselves or to our accredited businesses; (b) the
          organization does not have any negative records with us; (c) the
          benefit to us from the visibility of the hyperlink compensates the
          absence of Bugless; and (d) the link is in the context of general
          resource information. These organizations may link to our home page so
          long as the link: (a) is not in any way deceptive; (b) does not
          falsely imply sponsorship, endorsement or approval of the linking
          party and its products or services; and (c) fits within the context of
          the linking party’s site. If you are one of the organizations listed
          in paragraph 2 above and are interested in linking to our web
          application, you must inform us by sending an e-mail to Bugless.
          Please include your name, your organization name, contact information
          as well as the URL of your site, a list of any URLs from which you
          intend to link to our web application, and a list of the URLs on our
          site to which you would like to link. Wait 2-3 weeks for a response.
          Approved organizations may hyperlink to our web application as
          follows: - By use of our corporate name; or - By use of the uniform
          resource locator being linked to; or - By use of any other description
          of our web application being linked to that makes sense within the
          context and format of content on the linking party’s site. No use of
          Bugless's logo or other artwork will be allowed for linking absent a
          trademark license agreement.
          <h4>iFrames:</h4>
          Without prior approval and written permission, you may not create
          frames around our web application that alter in any way the visual
          presentation or appearance of our web application.
          <h4>Content Liability:</h4>
          We shall not be held responsible for any content that appears on your
          web application. You agree to protect and defend us against all claims
          that are rising on your web application. No link(s) should appear on
          any web application that may be interpreted as libelous, obscene or
          criminal, or which infringes, otherwise violates, or advocates the
          infringement or other violation of, any third-party rights.
          <h4>Reservation of Rights:</h4>
          We reserve the right to request that you remove all links or any
          particular link to our web application. You approve to immediately
          remove all links to our web application upon request. We also reserve
          the right to amen these terms and conditions and it’s linking policy
          at any time. By continuously linking to our web application, you agree
          to be bound to and follow these linking terms and conditions.
          <h4>Removal of links from our web application:</h4>
          If you find any link on our web application that is offensive for any
          reason, you are free to contact and inform us any moment. We will
          consider requests to remove links but we are not obligated to or so or
          to respond to you directly.
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

export default Terms;
