import React from 'react'
import { Link,useLocation } from 'react-router-dom'

const Navbar = () => {

    // Check current page location
    let location = useLocation();
    React.useEffect(() => {
        console.log(location.pathname)
    }, [location]);

  return (
    <><nav class="navbar bg-dark navbar-expand-lg" data-bs-theme="dark">
    <div className="container-fluid">
      <Link className="navbar-brand" to="/">RkBits</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className={`nav-link ${location.pathname === "/" ? "active" : ""} `} aria-current="page" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className={`nav-link ${location.pathname === "/about" ? "active" : ""} `} to="/about">About me</Link>
          </li>
          <li className="nav-item">
            <Link className={`nav-link ${location.pathname === "/skills" ? "active" : ""} `} to="/skills">Skills</Link>
          </li>
          <li className="nav-item">
            <Link className={`nav-link ${location.pathname === "/contact" ? "active" : ""} `} to="contact" aria-disabled="true">Contact me</Link>
          </li>
        </ul>
      </div>
    </div>
  </nav></>
  )
}

export default Navbar