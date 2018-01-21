import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {name: 'Logan', age: 35},
      {name: 'Tiffany', age: 35},
      {name: 'Amrynn', age: 6},
      {name: 'Eisley', age: 6}
    ]
  }

switchNameHandler = (newName) => {
  // console.log('Was clicked.');
  // DON'T DO THIS: this.state.persons[0].name = 'LogJam';
  this.setState({persons: [
    {name: newName, age: 36},
    {name: 'Tiffany', age: 36},
    {name: 'Amrynn', age: 7},
    {name: 'Eisley', age: 7}
  ]});
};

  render() {
    return (
      <div className="App">
        <h1>First React App</h1>
        <p>This is working!</p>
        <button onClick={() => this.switchNameHandler('Log')}>Switch Name</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}/>
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, 'Logannnnn')}>
            Hobbies: Drinking wine
        </Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}/>
        <Person
          name={this.state.persons[3].name}
          age={this.state.persons[3].age}/>
      </div>
    );
  }
}

export default App;
