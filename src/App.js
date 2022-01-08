import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
} from 'react-router-dom';



import Navbar from './components/Navbar/Navbar'
import Apropos from './pages/Apropos'
import Accueil from './pages/Accueil'
import Galerie from './pages/Galerie'
import Sundaz from './pages/Galerie/Sundaz';
import Sounge from './pages/Galerie/Sounge';
import TheDuet from './pages/Galerie/TheDuet';


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <main>
          <Routes>
            <Route path="/" element={<Accueil />}/>
            <Route path="Apropos" element={<Apropos/>}/>
            <Route path="Galerie" element={<Galerie/>}>
              <Route path="Sundaz" element={<Sundaz />} />
              <Route path="Sounge" element={<Sounge />} />
              <Route path="TheDuet" element={<TheDuet />} />
            </Route>
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
