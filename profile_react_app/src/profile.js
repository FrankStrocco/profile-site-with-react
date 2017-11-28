import React, { Component } from 'react';
import photo from './frank.jpg'

class Profile extends Component {
  constructor(props){
    super(props)
    this.state = {
      about: [
      {title: "About Frank",
      content: "This is Frank's content for Profile",
      photo: 'https://i.pinimg.com/736x/70/32/bb/7032bbee082daf62708332df63af9c5b--two-hearts-sweet-hearts.jpg'}
    ]
    }
  }
  render(){
    let about = this.state.about.map(function(about){
      return(
        <div>
          <h1 key={about.title}>{about.title}</h1>
          <img src={about.photo} />
        </div>
      )
    })
    return (
      <p>
       {about}
     </p>
    );
  }
}

export default Profile




//
// constructor(props){
//   super(props)
//   this.state = {
//     section: [
//         {title: 'Hobbies'},
//         {content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque fermentum quam est, non luctus metus bibendum non. In hac habitasse platea dictumst. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Morbi semper dolor rutrum erat ullamcorper, varius accumsan mauris posuere. Ut gravida, lectus vel tempus condimentum, sem lectus fringilla ante, a suscipit erat leo ac felis. Quisque et dictum nisl, in sagittis mauris. Aliquam erat volutpat. Nulla at ullamcorper ante. Donec at turpis bibendum, posuere magna non, elementum dolor.'},
//         {title: 'Places Lived'},
//         {content:'Morbi semper dolor rutrum erat ullamcorper, varius accumsan mauris posuere. Ut gravida, lectus vel tempus condimentum, sem lectus fringilla ante, a suscipit erat leo ac felis. Quisque et dictum nisl, in sagittis mauris. Aliquam erat volutpat. Nulla at ullamcorper ante. Donec at turpis bibendum, posuere magna non, elementum dolor.'},
//         {title: 'Places Visited'},
//         {content: 'Aliquam erat volutpat. Nulla at ullamcorper ante. Donec at turpis bibendum, posuere magna non, elementum dolor.'}
//     ]
//   }
// }
// render() {
//   let profile = this.state.content.map(function(profile){
//     return(
//       <li key={profile.name}>{profile.name}</li>
//     )
//   })
//   return (
//     <ul>
//       {profile}
//     </ul>
//   );
// }
// }
