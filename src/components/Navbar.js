import React from 'react'
import "../styleSheets/navbar.css"
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {

  // Check current page location
  let location = useLocation();
  React.useEffect(() => {
    console.log(location.pathname)
  }, [location]);

  return (
    <>
       Navbar
    </>
  )
}

export default Navbar