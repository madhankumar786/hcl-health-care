import './App.css';
import Dashboard from './components/Dashboard/Dashboard';
import LoginPage from './components/Login';
import RegisterPage from './components/Register';
import HealthInformation from './components/UpdateCard';

function App() {
  return (
    <div className="appWrapper">
      {/* <LoginPage /> */}
      {/* <RegisterPage/> */}
      <Dashboard/>
      
    </div>
  );
}

export default App;
