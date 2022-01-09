import {BsArrowLeft} from 'react-icons/bs'
import {useNavigate} from "react-router-dom";


const TheDuet = () => {

  let navigation = useNavigate();

  return ( 

    <div>

      <button className="icon" >       
        <BsArrowLeft  onClick={() => navigation('/Galerie')} size="60px" color="rgb(255, 255, 255)"/>
      </button>

      <div className="wrapper-youtube">

        <h2>The Duet</h2>

        <div className="youtube-video mb-3">

          <iframe width="600" height="337" src="https://www.youtube.com/embed/kleScOm0t0A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="true" ></iframe>
          
        </div>

        <div className="youtube-video mb-3">

          <iframe width="600" height="337" src="https://www.youtube.com/embed/kzzV-FW8l5k" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="true"></iframe>
          
        </div>
        
        <div className="youtube-video mb-3">

          <iframe width="600" height="337" src="https://www.youtube.com/embed/Z4IpMJXplmQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="true"></iframe>

        </div>
      
      </div>
      
    </div>  

  );
}
 
export default TheDuet;