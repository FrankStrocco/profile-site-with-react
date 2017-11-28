import React, { Component } from 'react';

class Places extends Component {
  constructor(props){
    super(props)
    this.state = {
      places: [
      {title: "Frank's Places",
      content: "This is Frank's content for Places"}
    ]
    }
  }
  render(){
    let places = this.state.places.map(function(places){
      return(
        <div>
        <h1 key={places.title}>{places.title}</h1>
        <li key={places.content}>{places.content}</li>
        </div>
      )
    })
    return (
      <div>
         {places}
      </div>
    );
  }
}

export default Places
