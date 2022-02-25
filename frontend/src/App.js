//import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import graphCard from './components/graph';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className = "App">
        <header className = "App-header">
          <img src={require('./resources/Logocolor.png')} />
          <h1>Icy Scout</h1>
          <Nav />
          <graphCard />
        </header>
      </div>
      <div id = "chartholder"></div>
      <graph />
    </Router>
  );
}

export default App;
