import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Menu from './components/Menu/Menu';
import Home from './components/Home/Home';
import About from './components/AboutUs/AboutUs';
import Contact from './components/Contact/Contact';
import HealthInformation from './components/UpdateCard/index';
import LoginPage from './components/Login';
import RegisterPage from './components/Register';
import AppointmentForm from './components/AppointmentForm';
import DoctorMenu from './components/Doctor/DoctorMenu';
import PatientList from './components/Doctor/PatientList';
import Appointments from './components/Doctor/Appointments';
import Messages from './components/Doctor/Messages';
import Logout from './components/Doctor/Logout';
import Dashboard from './components/Doctor/Dashboard';
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
          <Route path="book-appointment" element={<AppointmentForm />} />
          <Route path="doctor-dashboard" element={<DoctorMenu />}>
            <Route index element={<Dashboard />} />
            <Route path="patients" element={<PatientList />} />
            <Route path="appointments" element={<Appointments />} />
            <Route path="messages" element={<Messages />} />
            <Route path="logout" element={<Logout />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
