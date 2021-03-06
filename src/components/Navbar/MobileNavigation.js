import NavLinks from "./NavLinks"
import classes from './Navbar.module.css'
import {CgMenu, CgCloseO} from "react-icons/cg"
import { useState } from "react"


const MobileNavigation = () => {

  const [open, setOpen] = useState(false);
  const hamburgerIcon =  <CgMenu className={classes.Hamburger} size='40px' color='black' 
  onClick={() => setOpen(!open)}/>

  const closeIcon =  <CgCloseO className={classes.Hamburger} size='40px' color='black' 
  onClick={() => setOpen(!open)}/>

  const closeMobileMenu = () => setOpen(false);

  return (
    <nav className={classes.MobileNavigation}>
     
     {open ? closeIcon : hamburgerIcon}
     {open && <NavLinks isMobile={true} closeMobileMenu={closeMobileMenu}/>}
    </nav>

  );
}
 
export default MobileNavigation;