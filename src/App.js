import React, { Component } from 'react';

import './App.css';
import Header from './Header'
import SignIn from './SignIn'
import SignOut from './SignOut'
import ThingList from './ThingList'
import AddThingButton from './AddThingButton'
import base, { auth } from'./base'

class App extends Component {
    state = {
    things: {},
    uid: null,
  }
  componentWillMount(){
    auth.onAuthStateChanged(
      (user)=> {
        if(user) {
        this.authHandler({ user })
        }
      }
    )
  }
  setupThings(){
    this.ref = base.syncState(
      `${this.state.uid}/things`,
      {
        context: this,
        state:'things'
      }
    )
  }

authHandler = (authData) => {
    this.setState(
      { uid: authData.user.uid },
      this.setupThings()
    )
  }

 thing() {
    return {
      id: `thing-${Date.now()}`,
      name: '',
      checked: false,
      dueOn: '',
    }
  }

  addThing = () => {
    const things = {...this.state.things}
    const thing = this.thing()
    things[thing.id] = thing
    this.setState({ things })
  }
  saveThing = (thing) => {
    const things = {...this.state.things}
    things[thing.id] = thing
    this.setState({ things })
  }

  removeThing = (thing) => {
    const things = {...this.state.things}
    things[thing.id] = null
    this.setState({ things })
  }

  checkedThing=(thing)=>{
    const things = {...this.state.things}
    things[thing.id].checked = !things[thing.id].checked
    this.setState({ things })
  }

signOut= () => {
  auth
  .signOut()
  .then(() => this.setState({ uid: null }))
}
  renderThings()
{
  const actions = {
      saveThing: this.saveThing,
      removeThing: this.removeThing,
      checkedThing: this.checkedThing,
  }
  return(
<div>
  <SignOut signOut={this.signOut} />
        <AddThingButton addThing={this.addThing} />
        <ThingList 
          things={this.state.things}
          {...actions}
        />
  </div>
  )
}  
render() {
    
    return (
      <div className="App">
        <Header />
        { this.state.uid ? this.renderThings() : <SignIn authHandler={this.authHandler} />}
      </div>
    );
  }
}

export default App;
