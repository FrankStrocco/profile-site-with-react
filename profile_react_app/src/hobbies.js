import React, { Component } from 'react';

class Hobbies extends Component {
  constructor(props){
    super(props)
    this.state = {
      hobbies: [
      {title: "Frank's Hobbies",
      content: "This is Frank's content for Hobbies"}
    ]
    }
  }
  render(){
    let hobbies = this.state.hobbies.map(function(hobbies){
      return(
        <div>
        <h1 key={hobbies.title}>{hobbies.title}</h1>
        <li key={hobbies.content}>{hobbies.content}</li>
        </div>
      )
    })
    return (
      <div>
         {hobbies}
      </div>
    );
  }
}

export default Hobbies
