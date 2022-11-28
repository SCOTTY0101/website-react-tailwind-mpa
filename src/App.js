//import logo from '../logo.svg';
//import logo from './Images/favicon.ico'
import Home from './pages/home.js'
import Navbar from '../src/components/Nav.js'

function App() {
  return (
    <>
      <header className="App-header">
        
       {/*} <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
  */}
      </header>

    <div>
      <Navbar />
      <Home />
    </div>
    </>
  );
}

export default App;
