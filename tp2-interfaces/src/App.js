import logo from './logo.svg';
import './App.css';
import Navbar_c from './components/Navbar_c';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Navbar_c />
    </div>
  );
}

export default App;
