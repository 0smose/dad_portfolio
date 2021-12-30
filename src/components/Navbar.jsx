import React from "react";
import { Link } from "react-router-dom";
import Apropos from '../pages/Apropos'
import Accueil from '../pages/Accueil'
import Galerie from '../pages/Galerie'

const Navbar = () => {

  return (
    <div className=''>
      <nav className="navbar ">
        <ul className='my-navbar'>
          <li>
            <Link to='/'> Accueil</Link>
          </li>
          <li>
            <Link to='/Apropos'>À propos</Link>
          </li>
          <li>
            <Link to='/Galerie'>Galerie</Link>
          </li>
        </ul>
      </nav>
    </div>
  )

}

export default Navbar;