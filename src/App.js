import './styleSheets/App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About';
import Skills from './components/Skills';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/contact" element={<Contact />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/skills" element={<Skills />} />
          </Routes>
        </Router>
    </div>
  );
}

export default App;
