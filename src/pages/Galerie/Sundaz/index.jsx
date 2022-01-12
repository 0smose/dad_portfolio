import {BsArrowLeft} from 'react-icons/bs'
import {useNavigate} from "react-router-dom";

const Sundaz = (props) => {

  let navigation = useNavigate();


  return ( 

    <div>

      <button className="icon" >       
        <BsArrowLeft  onClick={() => navigation('/Galerie')} size="60px" color="rgb(255, 255, 255)"/>
      </button>
      
        <div className="wrapper-youtube">

          <div className="bandcamp">

            <h2 id="sundaz">SUNDAZ</h2> 

            <iframe style={{border: "0", width: "", height: "442px"}} src="https://bandcamp.com/EmbeddedPlayer/track=2591559087/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/" seamless><a href="https://sundaz.bandcamp.com/track/andaz">Andaz by Sundaz</a></iframe>
                      
            <iframe style={{border: "0", width: "", height: "442px"}} src="https://bandcamp.com/EmbeddedPlayer/track=1216185892/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/" seamless><a href="https://sundaz.bandcamp.com/track/pendant-lorage">pendant l&#39;orage by Sundaz</a></iframe>

            <iframe style={{border: "0", width: "", height: "442px"}} src="https://bandcamp.com/EmbeddedPlayer/track=2292343266/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/" seamless><a href="https://sundaz.bandcamp.com/track/prochon">Prochon by Sundaz</a></iframe>

            <iframe style={{border: "0", width: "", height: "442px"}} src="https://bandcamp.com/EmbeddedPlayer/track=463407206/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/" seamless><a href="https://sundaz.bandcamp.com/track/marse">MARSEŸ by SUNDAZ</a></iframe>

          </div>

        </div>

    </div>

   );
}
 
export default Sundaz;