
import NavBar from '../pages/shear/NavBar/NavBar'
import { Outlet } from 'react-router-dom'
import Footers from '../pages/shear/Footer/Footer'

function Main() {
  return (
    <div className='container'>
      <NavBar></NavBar>
      <Outlet></Outlet>
      <Footers></Footers>
    </div>
  )
}

export default Main
