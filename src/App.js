import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
} from 'react-router-dom';



import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer';
import Apropos from './pages/Apropos'
import Accueil from './pages/Accueil'
import Galerie from './pages/Galerie'
import ErrorPage from './pages/ErrorPage';
import Sundaz from './pages/Galerie/Sundaz';
import Sounge from './pages/Galerie/Sounge';
import TheDuet from './pages/Galerie/TheDuet';
import Bazar from './pages/Galerie/Bazar';
import Solidbody from './pages/Galerie/SolidBody';


function App() {
  return (
    <div className="App">
      <Router basename="/dad_portfolio">        
          <Routes>
            <Route path="/" element={<Galerie />}/>
            <Route path="/Sundaz" element={<Sundaz />} />
            <Route path="/Sounge" element={<Sounge />} />
            <Route path="/TheDuet" element={<TheDuet />} />
            <Route path="/Solidbody" element={<Solidbody />} />
            <Route path="/Bazar" element={<Bazar />} />
            <Route path="*" element={<ErrorPage />} />      
          </Routes>
        <Footer/>

      
      </Router>
    </div>
  );
}

export default App;
