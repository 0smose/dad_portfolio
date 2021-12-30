import React from 'react'
import ReactPlayer from 'react-player'

const Galerie = () => {
  return (
    <section>
      <div className="container">
        <h1 className="mt-5">Galerie</h1> 

        {/* <ReactPlayer style={{overflow: "hidden"}} url='https://www.youtube.com/watch?v=61IW3JvPx9E&t=204s&ab_channel=sundazmusic' /> */}
        <div className='row'>
          <div className="col-6">
            <iframe style={{border: "0", width: "350px", height: "442px"}} src="https://bandcamp.com/EmbeddedPlayer/track=2591559087/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/" seamless><a href="https://sundaz.bandcamp.com/track/andaz">Andaz by Sundaz</a></iframe>
          </div>
          <div className="col-6">
            <iframe style={{border: "0", width: "350px", height: "442px"}} src="https://bandcamp.com/EmbeddedPlayer/track=1216185892/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/" seamless><a href="https://sundaz.bandcamp.com/track/pendant-lorage">pendant l&#39;orage by Sundaz</a></iframe>
          </div>
          <div className="col-6">
          <iframe style={{border: "0", width: "350px", height: "442px"}} src="https://bandcamp.com/EmbeddedPlayer/track=2292343266/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/" seamless><a href="https://sundaz.bandcamp.com/track/prochon">Prochon by Sundaz</a></iframe>
          </div>
          <div className="col-6">
          <iframe style={{border: "0", width: "350px", height: "442px"}} src="https://bandcamp.com/EmbeddedPlayer/track=463407206/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/" seamless><a href="https://sundaz.bandcamp.com/track/marse">MARSEŸ by SUNDAZ</a></iframe>
          </div>

        </div>
      </div>

    </section>
  )
}

export default Galerie;