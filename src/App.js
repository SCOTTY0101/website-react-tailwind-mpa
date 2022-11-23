//import logo from '../logo.svg';
import logo from './Images/favicon.ico'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

      <h1 className="flex justify-center items-center h-screen w-screen text-3xl font-bold underline">
      Hello world.
    </h1>
    </div>
  );
}

export default App;
