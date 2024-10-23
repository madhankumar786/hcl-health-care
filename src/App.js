import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Menu from './components/Menu/Menu';
import Home from './components/Home/Home';
import About from './components/AboutUs/AboutUs';
import Contact from './components/Contact/Contact';
import HealthInformation from './components/UpdateCard/index';

function App() {
  return (
    <div className="appWrapper">
     <Router>
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="health-information" element={<HealthInformation/>} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
