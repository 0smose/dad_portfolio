import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
} from 'react-router-dom';

import Footer from './components/Footer/Footer';
import Galerie from './pages/Galerie'
import ErrorPage from './pages/ErrorPage';
import Sundaz from './pages/Galerie/Sundaz';
import Sounge from './pages/Galerie/Sounge';
import TheDuet from './pages/Galerie/TheDuet';
import Bazar from './pages/Galerie/Bazar';
import Solidbody from './pages/Galerie/SolidBody';
import Allywood from './pages/Galerie/Allywood';
import Aftertime from './pages/Galerie/Aftertime';


function App() {
  return (
    <div className="App">
      <Router basename="/">        
          <Routes>
            <Route path="/" element={<Galerie />}/>
            <Route path="/Sundaz" element={<Sundaz />} />
            <Route path="/Sounge" element={<Sounge />} />
            <Route path="/TheDuet" element={<TheDuet />} />
            <Route path="/Solidbody" element={<Solidbody />} />
            <Route path="/Bazar" element={<Bazar />} />
            <Route path="/Allywood" element={<Allywood />} />
            <Route path="/Aftertime" element={<Aftertime />} />
            <Route path="*" element={<ErrorPage />} />      
          </Routes>
      </Router>
    </div>
  );
}

export default App;
