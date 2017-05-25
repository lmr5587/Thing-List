import React, { Component } from 'react';

import './App.css';
import Header from './Header'
import SignIn from './SignIn'
import SignOut from './SignOut'
import ThingList from './ThingList'
import AddThingButton from './AddThingButton'
import base from'./base'

class App extends Component {
  componentWillMount(){
    this.ref = base.syncState(
      'things',
      {
        context: this,
        state:'things'
      }
    )
  }

  state = {
    things: {}
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

  render() {
    const actions = {
      saveThing: this.saveThing,
      removeThing: this.removeThing,
      checkedThing: this.checkedThing,
    }
    return (
      <div className="App">
        <Header />
        <SignIn/>
        <AddThingButton addThing={this.addThing} />
        <ThingList 
          things={this.state.things}
          {...actions}
        />
      </div>
    );
  }
}

export default App;
