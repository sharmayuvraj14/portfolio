import React, { useState } from 'react';
import './Navbar.css';
import logo from '../../assets/lgo.webp';
import { Link } from 'react-scroll';
import contactImg from '../../assets/contact.png';
import ContactPopup from '../Contactpopup/Contactpop';

const Navbar = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handlePopupOpen = () => setShowPopup(true);
  const handlePopupClose = () => setShowPopup(false);

  return (
    <div>
      <nav className='navbar'>
        <img
          src={logo}
          alt='logo'
          className='logo'
          onClick={() => window.location.reload()}
          style={{ cursor: 'pointer' }}
        />
        <div className='desktopMenu'>
          <Link className='dekstopMenuListItem' to="Intro" smooth={true} duration={500}>Home</Link>
          <Link className='dekstopMenuListItem' to="About" smooth={true} duration={500}>About</Link>
          <Link className='dekstopMenuListItem' to="Resume" smooth={true} duration={500}>Resume</Link>
          <Link className='dekstopMenuListItem' to="Projects" smooth={true} duration={500}>Projects</Link>
        </div>
        <button className='dekstopMenuBtn' onClick={handlePopupOpen}>
          <img src={contactImg} alt='contact' className='dekstopMenuImg' />
          Contact Me
        </button>
      </nav>

      {showPopup && <ContactPopup onClose={handlePopupClose} />}
    </div>
  );
};

export default Navbar;
