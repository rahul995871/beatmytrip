

import logo from '../images/logo-n.png'
import is from '../images/logo-n-black.png'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import './Navbar.css';
import { HashLink } from 'react-router-hash-link';


function Navbar() {
  const [sticky, setSticky] = useState('');
  const [mob, setMob] = useState('');

  // on render, set listener
  useEffect(() => {
  
    window.addEventListener("scroll", isSticky);
    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  }, []);

  useEffect(() => {
  
   isMob()
   
  }, [mob]);

  const isMob = () => {
    const mheight = window.innerWidth;
    const mresult=mheight<979 ? "logo-c" : "logo";
    setMob(mresult)
    // console.log(mresult);
  }

  const isSticky = () => {
    /* Method that will fix header after a specific scrollable */
   

    const scrollTop = window.scrollY;
    
    const stickyClass = scrollTop >= 100 ? "is-sticky"  : "rr";
    setSticky(stickyClass);
  
    // console.log(stickyClass);
  };

  const classes = ` ${sticky}`;
  const mobChange=`${mob}`
  // console.log(mobChange)

  
    return (
        <div className={`${classes} rr`}>
            <nav className="c-navbar navbar navbar-expand-lg p-0">
  <div className="container-fluid px-md-5 px-0 w-md-75 w-100">
    <HashLink className="navbar-brand px-2" to="/beatmytrip/#">
      <img src={sticky=="is-sticky" ? is : logo && mob== "logo" ? logo : is}/>
    </HashLink>
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
          <HashLink  to="/beatmytrip/#" className="nav-link active" aria-current="page" href="#">
            Home
          </HashLink>
        </li>
        <li className="nav-item px-2">
          <HashLink to="/about/#" className="nav-link active" aria-current="page" href="#">
            About
          </HashLink>
        </li>
        <li className="nav-item px-2">
          <HashLink className="nav-link active" aria-current="page" smooth={true} to="/beatmytrip/#bt">
            Backpacking Trips
          </HashLink>
        </li>
        <li className="nav-item px-2">
          <HashLink className="nav-link active" aria-current="page" smooth={true} to="/beatmytrip/#wt">
            Weekend Trips
          </HashLink>
        </li>
        <li className="nav-item px-2">
          <HashLink to='/contact/#' className="nav-link active" aria-current="page" href="#">
            Contact
          </HashLink>
        </li>
       
      </ul>
      
    </div>
  </div>
</nav>

        </div>
    );
}

export default Navbar;