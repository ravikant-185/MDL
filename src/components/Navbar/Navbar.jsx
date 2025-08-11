import { useState } from 'react';
import './Navbar.css';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="navbar">
      <div className="navbar-logo">Medium</div>

      <div className="hamburger" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <ul className={`navbar-links ${menuOpen ? 'active' : ''}`}>
        <li><a href="https://medium.com/about" target="_blank" rel="noopener noreferrer">Our Story</a></li>
        <li><a href="https://medium.com/membership" target="_blank" rel="noopener noreferrer">Membership</a></li>
        <li><a href="https://medium.com/new-story" target="_blank" rel="noopener noreferrer">Write</a></li>
      </ul>

      <div className={`navbar-actions ${menuOpen ? 'active' : ''}`}>
        <a href="https://medium.com/m/signin" target="_blank" rel="noopener noreferrer">
          <button className="sign-in-btn">Sign In</button>
        </a>
        <a href="https://medium.com/" target="_blank" rel="noopener noreferrer">
          <button className="get-started-btn">Get Started</button>
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
