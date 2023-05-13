
import { Button, Navbar } from "flowbite-react"
import logo from '../../../assets/logo.svg'
import { Link } from "react-router-dom"
import { FaSearch, FaShoppingBag } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../../../AuthProvider/AuthProvider";

function NavBar() {
  const {logOut, user} = useContext(AuthContext)

  const handleLogOut = () =>{
    logOut().then(
      localStorage.removeItem('cars-token')
    ).catch()
  }

  return (
    <Navbar
      fluid={true}
      rounded={true}
      className="py-4 lg:py-8"
    >
      <Navbar.Brand>
        <img
          src={logo}
          className="h-12 sm:h-16"
          alt="cars logo"
        />
      </Navbar.Brand>
      <div className="flex items-center gap-4 md:order-2">
        <Link><FaShoppingBag></FaShoppingBag></Link>
        <Link><FaSearch></FaSearch></Link>
        <button className="bg-transparent btn hover:bg-[#FF3811] border-[#FF3811] hover:text-white text-[#FF3811]">
          Appointment
        </button>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Link
          to="/"
        >
          Home
        </Link>
        <Link to="/about">
          About
        </Link>
        <Link to="/services">
          Services
        </Link>
        <Link to="/blog">
          Blog
        </Link>
        {
          user?.email && <Link to='/bookings'>Bookings</Link>
        }
        {
          user ? <Link onClick={handleLogOut}>LogOut</Link> : <Link to="/login">Login</Link>
        }
      </Navbar.Collapse>
    </Navbar>
  )
}

export default NavBar
