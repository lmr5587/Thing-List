import React, { Component } from 'react'
import ContentEditable from 'react-contenteditable'

import './Thing.css'
import Actions from './Actions'

class Thing extends Component {
  ComponentDidMount(){
    if(!this.nameInput.htmlEl.textContent){
    this.nameInput.htmlEl.focus()
    }
  }
   handleChange = (ev) => {
    const { thing, saveThing}=this.props
    const field = ev.currentTarget.getAttribute('name')
    thing[field] = ev.target.value
    saveThing(thing)
  }

  blurOnEnter = (ev) => {
    if (ev.key === 'Enter') {
      ev.preventDefault()
      ev.target.blur()
    }
  }
  render(){
     const { thing, removeThing, checkedThing }=this.props
  
    return (
      <li className="Thing">
        <input 
          type="checkbox" 
          onClick={() => checkedThing(thing)}
          defaultChecked={thing.checked}
        />
        <div className="details">
          <ContentEditable
            className="name"
            name='name'
            html={thing.name}
            onChange={this.handleChange}
            onKeyPress={this.blurOnEnter}
            ref={input => this.nameInput = input}
          />
          <input 
          className= 'date' 
          type="date"
          name='dueOn'
          defaultValue={thing.dueOn}
          onChange={this.handleChange}
          />
          <Actions thing={thing} removeThing={removeThing} />
        </div>
        
      </li>
    )
  }
}

export default Thing