import React from 'react';
import './App.css';
import axios from 'axios'

const url = 'https://jb-counter-demo-server.herokuapp.com'

class App extends React.Component {
  state = {
    counter: 0
  }

  componentDidMount() {
    axios.get(url)
      .then(response => {
        this.setState({
          counter: response.data.counter
        })
      })
  }

  increment = () => {
    axios.put(url)
      .then(response => {
        this.setState({
          counter: response.data.counter
        })
      }) 
}

  render() {
    return (
      <div className="App">
        <h1>Counter: {this.state.counter}</h1>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}

export default App;
