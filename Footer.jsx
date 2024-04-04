// Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} Your Name</p>
        <div className="social-links">
          <a href="https://linkedin.com/in/yourname" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href=" https://github.com/asbinbastola/projects/projects?query=is%3Aopen"target="_blank" rel="noopener noreferrer">GitHub</a>
          {/* Add other social media links as needed */}
        </div>  
      </div>
    </footer>
  );
};

export default Footer;
