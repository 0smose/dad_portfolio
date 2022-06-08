import React from 'react'
import ReactPlayer from 'react-player'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import YouTube from 'react-youtube'
import { Link, Switch, Route, Outlet} from 'react-router-dom'
import Sounge from './Sounge/index'
import Sundaz from './Sundaz/index'
import TheDuet from './TheDuet/index'
import Neo from './Neo/index'
import Footer from '../../components/Footer/Footer';
import classes from './SoundGallery.module.css'
import sundae_img from '../../assets/logo/sundaz.png'
import { useState, useEffect } from 'react'

const Galerie = () => {

  const [style, setStyle] = useState({display: 'none'});
 
  return (



    <section>
      
        <div className={classes.wrapper}>

            <div className={classes.sounge}>

              <Link to ="Sounge">Sounge</Link>

            </div>  

            <div className={classes.sundaz}>

            <Link to ="Sundaz">Sundaz</Link>

            </div>  

            <div className={classes.theDuet}>

              <Link to ="TheDuet">The Duet</Link>

            </div>


            <div className={classes.Solidbody}>

              <Link to ="Solidbody">Solidbody</Link>

            </div>  

            <div className={classes.Bazar}>

              <Link to ="Bazar">Bazar</Link>

            </div>

            <div className={classes.Allywood}>

              <Link to ="Allywood">Allywood</Link>

            </div>

            <div className={classes.Aftertime}>

              <Link to ="Aftertime">Aftertime</Link>

            </div>

            <div className={classes.Neo}>

              <Link to ="Neo">Neo</Link>

            </div>

        </div>

        <Outlet />
     
        <Footer/>
    </section>
    

  )
}

export default Galerie;