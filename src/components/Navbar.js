

import logo from '../images/logo.png'
import is from '../images/logo-black.png'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import './Navbar.css'


function Navbar() {
  const [sticky, setSticky] = useState("");

  // on render, set listener
  useEffect(() => {
  
    window.addEventListener("scroll", isSticky);
    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  }, []);

  const isSticky = () => {
    /* Method that will fix header after a specific scrollable */
    const scrollTop = window.scrollY;
    const stickyClass = scrollTop >= 100 ? "is-sticky"  : "rr";
    setSticky(stickyClass);
    console.log(stickyClass);
  };

  const classes = ` ${sticky}`;

  
    return (
        <div className={`${classes} rr`}>
            <nav className="c-navbar navbar navbar-expand-lg p-0">
  <div className="container-fluid px-md-5 px-0 w-md-75 w-100">
    <Link className="navbar-brand px-2" to="/beatmytrip">
      <img src={sticky=="is-sticky" ? is : logo}/>
    </Link>
    <button
      className="navbar-toggler mx-2"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
      <ul className="navbar-nav  gap-4">
       
      <li className="nav-item px-2">
          <Link  to="/beatmytrip" className="nav-link active" aria-current="page" href="#">
            Home
          </Link>
        </li>
        <li className="nav-item px-2">
          <Link to="/about" className="nav-link active" aria-current="page" href="#">
            About
          </Link>
        </li>
        <li className="nav-item px-2">
          <a className="nav-link active" aria-current="page" href="#">
            Backpacking Trips
          </a>
        </li>
        <li className="nav-item px-2">
          <a className="nav-link active" aria-current="page" href="#">
            Weekend Trips
          </a>
        </li>
        <li className="nav-item px-2">
          <Link to='/contact' className="nav-link active" aria-current="page" href="#">
            Contact
          </Link>
        </li>
       
      </ul>
      
    </div>
  </div>
</nav>

        </div>
    );
}

export default Navbar;