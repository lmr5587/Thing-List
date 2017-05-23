import React, { Component } from 'react'
import './Buttons.css'

class Buttons extends Component{
 render() {
  return (
      <div>
     <button className="logout">Sign Out</button>
      <button className="add-thing">Add Thing</button>
      </div>
     );
  }
}

export default Buttons