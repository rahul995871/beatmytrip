
import './Navbar.css'
import logo from '../images/logo.png'
function Navbar() {
    return (
        <div>
            <nav className="c-navbar navbar navbar-expand-lg bg-transparent">
  <div className="container-fluid px-md-5 px-2 w-md-75 w-100">
    <a className="navbar-brand" href="#">
      <img src={logo}/>
    </a>
    <button
      className="navbar-toggler"
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
          <a className="nav-link active" aria-current="page" href="#">
            Home
          </a>
        </li>
        <li className="nav-item px-2">
          <a className="nav-link active" aria-current="page" href="#">
            About
          </a>
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
          <a className="nav-link active" aria-current="page" href="#">
            Contact
          </a>
        </li>
       
      </ul>
      
    </div>
  </div>
</nav>

        </div>
    );
}

export default Navbar;