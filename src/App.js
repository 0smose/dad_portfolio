import logo from './logo.svg';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
} from 'react-router-dom';
import Navbar from './components/Navbar';
import Apropos from './pages/Apropos';
import Accueil from './pages/Accueil';
import Galerie from './pages/Galerie';



function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <main>
          <Routes>
            <Route path="/" element={<Accueil />}/>
            <Route path="Apropos" element={<Apropos/>}/>
            <Route path="Galerie" element={<Galerie/>}/>
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
