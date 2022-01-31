import React from "react";
import classes from './Navbar.module.css'
import { Link } from "react-router-dom";
// import Apropos from '../../pages/Apropos'
// import Accueil from '../../pages/Accueil'
import Galerie from '../../pages/Galerie'
import MobileNavigation from "./MobileNavigation";
import Navigation from "./Navigation";

const Navbar = () => {

  return (
    <div className={classes.NavBar}>
      <Navigation />
      <MobileNavigation />
    </div>
  )

}

export default Navbar;