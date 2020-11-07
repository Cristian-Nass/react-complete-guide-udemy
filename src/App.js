import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends Component {
   state = { person: [
      { name : 'Max', age : 28},
      { name : 'Cros', age : 38},
      { name : 'Ronak', age : 35}
   ]}

   switchNameHandler = (newNAme) => {
      this.setState({
        person: [
          { name : newNAme, age : 28},
          { name : 'Cris', age : 39},
          { name : 'Ronak', age : 35}
       ]
      })
   }


   nameChangeHandler = (event) => {
    this.setState({
      person: [
        { name : 'max', age : 28},
        { name : event.target.value, age : 39},
        { name : 'Ronak', age : 35}
     ]
    })
 }

  render() {

    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '6px',
      cursor: 'pointer'
    };
    return (
      <div className="App">
        <h3>Hello thisa is my first react project</h3>
        <h4>Cristian</h4>
        <button style={style} onClick={this.switchNameHandler.bind(this, 'Maximmilian')}>Switch Name</button>
        <Person 
          name={this.state.person[0].name}  
          age={this.state.person[0].age} />
        <Person 
          name={this.state.person[1].name}  
          click={this.switchNameHandler.bind(this, 'MAX!!')}age={this.state.person[1].age}
          changed = {this.nameChangeHandler} />
        <Person 
          name={this.state.person[2].name}  
          age={this.state.person[2].age}> I'm playing heros of the storm </Person>
      </div>
    );
  }
}

export default App;
