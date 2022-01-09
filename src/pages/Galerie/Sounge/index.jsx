import {BsArrowLeft} from 'react-icons/bs'
import {useNavigate} from "react-router-dom";


const Sounge = () => {
  
  let navigation = useNavigate();

  return ( 

  <div>
  
    <button className="icon" >       
      <BsArrowLeft  onClick={() => navigation('/Galerie')} size="60px" color="rgb(255, 255, 255)"/>
    </button>

    <div className="wrapper-youtube">

        <h2>Sounge</h2>  
   
        <div className="youtube-video mb-3">

          <iframe width="600" height="337" src="https://www.youtube.com/embed/f9EBTGt-svE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="true"></iframe>

        </div>

        <div className="youtube-video mb-3">

          <iframe width="600" height="337" src="https://www.youtube.com/embed/9K8YkLgZKx0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="true"></iframe>
        
        </div>

        <div className="youtube-video mb-3">

          <iframe width="600" height="337" src="https://www.youtube.com/embed/zv3w4UoE3Us" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="true"></iframe>

        </div>  


        <div className="youtube-video mb-3">

          <iframe width="600" height="337" src="https://www.youtube.com/embed/JeHz9hy4Tcw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="true"></iframe>

        </div> 


        <div className="youtube-video mb-3">

          <iframe width="600" height="337" src="https://www.youtube.com/embed/YyMgNLgel7Q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="true"></iframe>

        </div> 

        <div className="youtube-video mb-3">

          <iframe width="600" height="337" src="https://www.youtube.com/embed/t7U9fmZYcA0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="true"></iframe>

        </div>

      
      </div>

      </div>
   );
}
 
export default Sounge;