import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__container">
        <a className="footer__github">
          <img
            src="https://icon-library.com/images/github-icon-white/github-icon-white-6.jpg"
            alt="github"
          />
        </a>
        <a className="footer__linkedin">
          <img
            src="https://pnggrid.com/wp-content/uploads/2021/05/linkedin-logo-white-1024x1024.png"
            alt="linkedin"
          />
        </a>
        <a className="footer__stack">
          <img
            src="https://assets.website-files.com/5f70f40ba7f1b4ba47c2fe15/5feba697fdc9582da7ae132c_stack%20overflow.png"
            alt="stackoverflow"
          />
        </a>
      </div>
    </div>
  );
};

export default Footer;
