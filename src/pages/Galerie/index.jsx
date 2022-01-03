import React from 'react'
import ReactPlayer from 'react-player'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import YouTube from 'react-youtube';


const Galerie = () => {

  return (

    <section className="sound-gallery">

      <h1 className="mt-5 mb-5">Galerie</h1> 
      

      {/* bandcamp section */}

      <div className="centered col-12 sm-3 mb-3">

        <iframe style={{border: "0", width: "", height: "442px"}} src="https://bandcamp.com/EmbeddedPlayer/track=2591559087/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/" seamless><a href="https://sundaz.bandcamp.com/track/andaz">Andaz by Sundaz</a></iframe>
                
        <iframe style={{border: "0", width: "", height: "442px"}} src="https://bandcamp.com/EmbeddedPlayer/track=1216185892/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/" seamless><a href="https://sundaz.bandcamp.com/track/pendant-lorage">pendant l&#39;orage by Sundaz</a></iframe>

        <iframe style={{border: "0", width: "", height: "442px"}} src="https://bandcamp.com/EmbeddedPlayer/track=2292343266/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/" seamless><a href="https://sundaz.bandcamp.com/track/prochon">Prochon by Sundaz</a></iframe>

        <iframe style={{border: "0", width: "", height: "442px"}} src="https://bandcamp.com/EmbeddedPlayer/track=463407206/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/" seamless><a href="https://sundaz.bandcamp.com/track/marse">MARSEŸ by SUNDAZ</a></iframe>
            
      </div>

      {/* end of bandcamp section */}

      {/* youtube section */}


      <div className="wrapper-youtube">

        <div className="youtube-video mb-3">

        <iframe width="600" height="337" src="https://www.youtube.com/embed/kleScOm0t0A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="true" ></iframe>
        </div>
        <div className="youtube-video mb-3">
        <iframe width="600" height="337" src="https://www.youtube.com/embed/kzzV-FW8l5k" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="true"></iframe>
        </div>
      </div>



      {/* end of youtube section */}

    </section>

  )
}

export default Galerie;