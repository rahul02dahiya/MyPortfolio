import Navbar from './components/Navbar';
import Home from './components/Home';
import Projects from './components/Projects';
import About from './components/About';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
          <Navbar />
          <Home />
          <About />
          <Skills />
          <Projects />
          <Contact />
    </div>
  );
}

export default App;
