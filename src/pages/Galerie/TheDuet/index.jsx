import { Nav } from 'react-bootstrap';
import NavigationArrow from '../../../components/NavigationArrow/NavigationArrow';

const TheDuet = () => {

  return ( 

    <div>

      <NavigationArrow />

      <div className="wrapper-youtube">

        <h2 className="title" id="theDuet">The Duet</h2>

        <div className="youtube-video mb-5">

          <iframe width="600" height="337" src="https://www.youtube.com/embed/kleScOm0t0A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="true" ></iframe>
          
        </div>

        <div className="youtube-video mb-5">

          <iframe width="600" height="337" src="https://www.youtube.com/embed/kzzV-FW8l5k" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="true"></iframe>
          
        </div>
        
        <div className="youtube-video mb-5">

          <iframe width="600" height="337" src="https://www.youtube.com/embed/Z4IpMJXplmQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="true"></iframe>

        </div>
      
      </div>
      
    </div>  

  );
}
 
export default TheDuet;