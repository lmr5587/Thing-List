import React, { Component } from 'react'
import './Buttons.css'

class Buttons extends Component{
addThing(ev){
    ev.preventDefault()
    console.log(this)
}

 render() {
  return (
      <div>
      <button className="logout">Sign Out</button>
      <form onSubmit = {this.addThing}>
      <input className="type" type= "text" placeholder="Enter a thing."/>
      </form>
      </div>
     );
  }
}

export default Buttons