import React, { Component } from 'react';

class Visited extends Component {
  constructor(props){
    super(props)
    this.state = {
      visited: [
      {title: "Frank's Visited Places",
      content: "This is Frank's content for Visted Places"}
    ]
    }
  }
  render(){
    let visited = this.state.visited.map(function(visited){
      return(
        <div>
        <h1 key={visited.title}>{visited.title}</h1>
        <li key={visited.content}>{visited.content}</li>
        </div>
      )
    })
    return (
      <div>
         {visited}
      </div>
    );
  }
}

export default Visited
