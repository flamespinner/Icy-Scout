//import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import graph from './components/graph';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className = "App">
        <header className = "App-header">
          <img src={require('./resources/Logocolor.png')} />
          <h1>MPAror Robotics Scouting</h1>
          <Nav />
        </header>
      </div>
      <div id = "chartholder"></div>
      <graph />
    </Router>
  );
}

export default App;
