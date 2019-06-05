import React from 'react';
import './App.css';

class App extends React.Component {
  state = {
    counter: 0
  }

  increment = () => this.setState({ 
    counter: this.state.counter + 1
  })

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
