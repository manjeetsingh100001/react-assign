import './App.css';
import { Navbar } from './components/Navbar';
import { LoginStatus } from './components/LoginStatus';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <LoginStatus></LoginStatus>
    </div>
  );
}

export default App;
