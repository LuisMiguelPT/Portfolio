import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './Components/Header';
import About from './Components/About';
import Contact from './Components/Contact';
import Project from './Components/Proyect';
import Parque from './Components/Projects/Parque';

function App() {
  return (
    <Router>
      <Header />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/project" element={<Project />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects/parque" element={<Parque/>} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
