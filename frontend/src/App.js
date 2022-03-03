//import logo from './logo.svg';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import Graph from './components/Graph';
import Home from './components/Home';
import React from 'react';
import axios from 'axios';


class App extends React.Component {

  state = {
    title: '',
    body: '',
    posts: []
  };

  componentDidMount = () => {
    this.getTeamData();
  };


  getTeamData = () => {
    axios.get('/api')
      .then((response) => {
        const data = response.data;
        this.setState({ posts: data });
        console.log('Data has been received!!');
      })
      .catch(() => {
        console.log('Data has not been recieved!!');
      });
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  displayTeamData = (posts) => {

    if (!posts.length) return null;


    return posts.map((post, index) => (
      <div key={index} className="blog-post__display">
        <h3>{post.title}</h3>
        <p>{post.body}</p>
      </div>
    ));
  };

  render() {

    console.log('State: ', this.state);

    //JSX
    return(
      <div className="app">
        <Router>
      <div className = "App">
        <header className = "App-header">
          <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Graph" element={<Graph />} />
          </Routes>
        </header>
      </div>
      <div id = "chartholder"></div>
    </Router>
        <div className="blog-">
          {this.displayTeamData(this.state.posts)}
        </div>
      </div>
    );
  }
}

export default App;
