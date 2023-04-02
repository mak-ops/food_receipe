import React, { useEffect, useRef, useState } from 'react';
import { FaRegTimesCircle, FaBars } from "react-icons/fa";
import { useNavigate, Link } from 'react-router-dom';

function Navbar() {
  // State variable to control the "sticky" property of the navbar
  const [sticky, setSticky] = useState(true);

  // Event listener for the scroll event to toggle the "sticky" property of the navbar
  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 200)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener("scroll", handleScroll);
  })

  // Hook for programmatic navigation to different pages
  const navigate = useNavigate();

  // Function to navigate to the home page
  const toHome = (e) => {
    e.preventDefault();
    navigate('/');
  }

  // Ref to the navigation bar element
  const navRef = useRef();

  // Function to toggle the responsive class of the navigation bar element
  const showNavbar = () => {
    navRef.current.classList.toggle("responsive");
  };

  // JSX template for the navigation bar
  return (
    <div className='navbar_fixed'>
      <div className="container1">
        <h onClick={toHome}>Mak-Ops <span>Recipes</span></h>
        <nav className="Nav0" ref={navRef} >
          <ul className="links">
            <Link to="/" className="home"><li>Home</li></Link>
            <Link to="/About" className="about"><li>About Us</li></Link>
            <Link to="/Contactus" className="contactus"><li>Contact Us</li></Link>
            <Link to="/Login" className="signin"><li>Login</li></Link>
            <Link to="/Signup" className="signin"><li>New User ?</li></Link>
          </ul>
          <button className="nav-btn nav-close-btn" onClick={showNavbar}>
            <FaRegTimesCircle />
          </button>
        </nav>
        <button className="nav-btn" onClick={showNavbar}>
          <FaBars />
        </button>
      </div>
    </div>
  )
}

export default Navbar