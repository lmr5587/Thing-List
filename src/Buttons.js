import React, { Component } from 'react'
import './Buttons.css'

class Buttons extends Component{
 render() {
  return (
      <div>
      <button className="logout">Sign Out</button>
      <div>
      <input className="type" type= "text" placeholder="Enter a thing."/>
      </div>
      <button className="add-thing">Add Thing</button>
      </div>
     );
  }
}

export default Buttons