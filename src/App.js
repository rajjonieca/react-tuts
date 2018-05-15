import React, { Component } from 'react';
import logo from './logo.svg';
import Jar from './Components/jar';
import Joyce from './Components/Joyce';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      message:"Hello from the first State!"
    }
    this.updateState = this.updateState.bind(this);
  }
  updateState(){
    this.setState({
      message: "Hello from the Second State!"
    });
  }
  shitClick(event){
    alert("Welcome ");
  }

  render() {
    return (
      <div className="App">

        <Joyce joyce="Welcome"/>
        <h1>{this.state.message}</h1>
        <form action="">
          <table>
            <tr>Name
              <td><input type="text" id="name"/></td>
            </tr>
            <tr>Address
            <td><input type="text"/></td>
            </tr>
            <tr>Age
            <td><input type="text"/></td>
            </tr>
            <tr>School
            <td><input type="text"/></td>
            </tr>
            <tr>Password
            <td><input type="password"/></td>
            </tr>
            <tr>Confirm Password
            <td><input type="password"/></td></tr>
            <tr><td>
              <button onClick={this.shitClick} type="submit">Submit</button>  
            </td></tr>

          </table>
        </form>
        <button type="submit" onClick={this.updateState}>Click Me</button>
      </div>
    );
  }
}

export default App;
