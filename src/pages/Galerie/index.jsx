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
import classes from './SoundGallery.module.css'


const Galerie = () => {

  return (

    <section className="sound-gallery">

        <nav className={classes.test}>

          <Link to ="Sounge">Sounge</Link>
          <Link to ="Sundaz">Sundaz</Link>
          <Link to ="TheDuet">The Duet & Fil d'Ercole</Link>

        </nav>

        <Outlet />
     
    </section>

  )
}

export default Galerie;