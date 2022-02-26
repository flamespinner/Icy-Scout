//import logo from './logo.svg';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
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
        </header>
      </div>
      <div id = "chartholder"></div>
    </Router>
  );
}

const Home = () => {
  <div>
    <h1>Home Page</h1>
  </div>
};

export default App;
