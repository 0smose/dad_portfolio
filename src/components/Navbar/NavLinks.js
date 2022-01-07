import { Link } from "react-router-dom";
import {motion} from "framer-motion/dist/framer-motion"

const NavLinks = (props) => {

  const animateFrom = {opacity: 0, y: -40} 
  const animateTo = {opacity: 1, y: 0} 

  return (  

    <ul>
      <motion.li
      initial={animateFrom}
      animate={animateTo}
      transition={{delay:0.1}}

      onClick={() => props.isMobile && props.closeMobileMenu()}>
        <Link to='/'> Accueil</Link>
      </motion.li>
      <motion.li
      initial={animateFrom}
      animate={animateTo}
      transition={{delay:0.15}}
      onClick={() => props.isMobile && props.closeMobileMenu()}>
        <Link to='/Apropos'>À propos</Link>
      </motion.li>
      <motion.li
      initial={animateFrom}
      animate={animateTo}
      transition={{delay:0.2}}
      onClick={() => props.isMobile && props.closeMobileMenu()}>
        <Link to='/Galerie'>Galerie</Link>
      </motion.li>
  </ul>
  );
}
 
export default NavLinks;