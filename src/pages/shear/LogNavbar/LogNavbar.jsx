
import { Navbar } from 'flowbite-react'
import logo from '../../../assets/logo.svg'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from '../../../AuthProvider/AuthProvider'

function LogNavbar() {
    const {user, logOut} = useContext(AuthContext)

    const handleLogOut = () =>{
        logOut().then(
          localStorage.removeItem('cars-token')
        ).catch()
      }

    return (
        <Navbar
            fluid={true}
            rounded={true}
            className='py-6'
        >
            <Navbar.Brand>
                <img
                    src={logo}
                    className="h-12 sm:h-16"
                    alt="Cars Logo"
                />
            </Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse>
                <Link to="/">
                    Home
                </Link>
                <Link to="/order">
                    Order
                </Link>
                <Link to="/review">
                    Order Review
                </Link>
                <Link to="/inventory">
                    Manage Inventory
                </Link>
                {
                    user ? <Link onClick={handleLogOut}>LogOut</Link> : <Link to="/login">Login</Link>
                }
            </Navbar.Collapse>
        </Navbar>
    )
}

export default LogNavbar
