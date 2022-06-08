import NavigationArrow from '../../../components/NavigationArrow/NavigationArrow';

const Sundaz = (props) => {

  return ( 

    <div>

      <NavigationArrow />

        <div className="banner" id="sundaz-banner">
      </div>
      
        <div className="wrapper-youtube">

          <div className="bandcamp">

            {/* <h2 className="title" id="sundaz">SUNDAZ</h2>  */}

            <iframe style={{border: "0", width: "", height: "442px"}} src="https://bandcamp.com/EmbeddedPlayer/track=2591559087/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/" seamless><a href="https://sundaz.bandcamp.com/track/andaz">Andaz by Sundaz</a></iframe>
                      
            <iframe style={{border: "0", width: "", height: "442px"}} src="https://bandcamp.com/EmbeddedPlayer/track=1216185892/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/" seamless><a href="https://sundaz.bandcamp.com/track/pendant-lorage">pendant l&#39;orage by Sundaz</a></iframe>

            <iframe style={{border: "0", width: "", height: "442px"}} src="https://bandcamp.com/EmbeddedPlayer/track=2292343266/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/" seamless><a href="https://sundaz.bandcamp.com/track/prochon">Prochon by Sundaz</a></iframe>

            <iframe style={{border: "0", width: "", height: "442px"}} src="https://bandcamp.com/EmbeddedPlayer/track=463407206/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/" seamless><a href="https://sundaz.bandcamp.com/track/marse">MARSEŸ by SUNDAZ</a></iframe>

          </div>

          <div className="youtube-video mb-5">

            <iframe className="video-format" src="https://www.youtube.com/embed/61IW3JvPx9E" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="true"></iframe>

          </div>

          <div className="youtube-video mb-5">

            <iframe className="video-format" src="https://www.youtube.com/embed/cuC152W_xr8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="true"></iframe>
          
          </div>

          <div className="youtube-video mb-5">

            <iframe className="video-format" src="https://www.youtube.com/embed/aDqTjfSo0VQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="true"></iframe>
          
          </div>

          <div className="youtube-video mb-5">

            <iframe className="video-format" src="https://www.youtube.com/embed/Kw3L6OpOmXY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="true"></iframe>
          
          </div>

          <div className="youtube-video mb-5">

            <iframe className="video-format" src="https://www.youtube.com/embed/E- 6KMs6vxuU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="true"></iframe>
          
          </div>


          

        </div>

    </div>

   );
}
 
export default Sundaz;