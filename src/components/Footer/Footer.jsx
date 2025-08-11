import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">Medium</div>

        <ul className="footer-links">
          <li><a href="">About</a></li>
          <li><a href="https://yourwebsite.com/about-us">Blog</a></li>
          <li><a href="https://medium.com/contact">Contact</a></li>
          <li><a href="https://medium.com/policy/privacy-policy">Privacy</a></li>
          <li><a href="https://medium.com/policy/terms-of-service">Terms</a></li>
        </ul>

        <p className="footer-copy">&copy; {new Date().getFullYear()} Medium. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
