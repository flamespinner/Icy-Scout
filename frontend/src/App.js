//import logo from './logo.svg';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import Graph from './components/Graph';
import Home from './components/Home';

function App() {
  return (
    <Router>
      <div className = "App">
        <header className = "App-header">
          <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Graph" element={Graph} />
          </Routes>
        </header>
      </div>
      <div id = "chartholder"></div>
    </Router>
  );
}

export default App;
