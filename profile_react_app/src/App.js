import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css'
import Profile from './profile.js'
import Hobbies from './hobbies.js'
import Places from './Places.js'
import Visited from './visited.js'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      Profile: [
        {name: "About Frank"}
      ]
    }
  }
  render(){
    return (
      <div>
      <Profile about={this.state.about} />
      <Hobbies hobbies={this.state.hobbies} />
      <Places places={this.state.places} />
      <Visited visited={this.state.visited} />
      </div>
    )
  }

}


export default App;



// <div className="App">
//   <header className="App-header">
//     <img src={logo} className="App-logo" alt="logo" />
//     <h1 className="App-title">Welcome to React</h1>
//   </header>
//   <p className="App-intro">
//     To get started, edit <code>src/App.js</code> and save to reload.
//   </p>
// </div>
