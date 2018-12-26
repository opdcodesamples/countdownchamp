// create react component, component is independent and reusable
import React, { Component } from 'react';
import './App.css'
import Clock from './clock.jsx'
import {Form, FormControl, Button} from 'react-bootstrap';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      deadline: 'December 25, 2018',
      newdeadline: '',
      counter: 0
    }
  }

  changedeadline () {
    // We must never update or mutate state directly .
    // this.state.deadline = 'some value';
    // this.state.counter = -1;
    // We must never do as above

    // let's not set the state here, it will be set by onClick function of the button
    //this.setState({deadline: 'Aug 15, 1947'})

    console.log(this.state);
    this.setState({deadline : this.state.newdeadline});
  }

  render() {
    return(
      <div className="App">
        <div className="App-title">Countdown to {this.state.deadline}</div>
        <Clock deadline={this.state.deadline}/>
        <Form inline={true}>
          {/*
          <input placeholeder='new date'
            onChange={ event => console.log('event',event.target.value)}
          />
          */}
          <FormControl className="Deadline-input" placeholeder='new date'
            onChange={ event => this.setState({ newdeadline : event.target.value})}
          />

          <Button onClick={ ()=> this.changedeadline()}>Submit</Button>
          {/*
            ()=> is ES6 anonymous function which prevents   unintentional loops.
          */}
        </Form>


      </div>
    )
  }
}

export default App;
