import logo from './logo.svg';
import './App.css';
import Navigation from './components/Navigation';

function App() {
  return (
    <div className="App">
        <Navigation titulo="Primera navegacion"/>
        <Navigation titulo="Segunda navegacion"/>
      <img src={logo} className="App-logo" alt="logo" />
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p> Edit <code>src/App.js</code> and save to reload. </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer" >
          Aprenda React </a>
      </header> */}
    </div>
  );
}

export default App;
