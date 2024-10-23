import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Menu from './components/Menu/Menu';
import Home from './components/Home/Home';
import About from './components/AboutUs/AboutUs';
import Contact from './components/Contact/Contact';
import HealthInformation from './components/UpdateCard/index';
import LoginPage from './components/Login';
import RegisterPage from './components/Register';
function App() {
  return (
    <div className="appWrapper">
      <Router>
        <Menu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="health-information" element={<HealthInformation />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
