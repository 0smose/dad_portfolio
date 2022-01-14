import {BsArrowLeft} from 'react-icons/bs'
import {useNavigate} from "react-router-dom";
import classes from './NavigationArrow.module.css'

const NavigationArrow = () => {

  let navigation = useNavigate();

  return ( 
        
      <button className="icon" >   
      
        <BsArrowLeft  onClick={() => navigation('/')} className={classes.arrowIcon} color="rgb(255, 255, 255)"/>
      
      </button>

  

    );
    
    
  }
  
  export default NavigationArrow;
  