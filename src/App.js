import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state = {
      time: new Date().toTimeString().split(" ")[0]
    }
  }

  componentDidMount(){
    this.increment()
  }

  increment = () => {
    setInterval( 
      () =>  this.setState({  count: new Date().toTimeString().split(" ")[0] }), 
      1000
    )
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>{this.state.count}</h1>
        </header>
      </div>
    );
  }
}

export default App;
