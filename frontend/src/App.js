//import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import graphCard from './components/graphcard';
import graph from './components/3dchart';

function App() {
  return (
    <Router>
      <div className = "App">
        <header className = "App-header">
          <img src={require('./resources/Logocolor.png')} />
          <h1>Icy Scout</h1>
          <Nav />
          <graph />
        </header>
      </div>
      <div id = "chartholder"></div>
    </Router>
  );
}

export default App;
