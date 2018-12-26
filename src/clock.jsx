import React, { Component } from 'react';
import './App.css'

class Clock extends Component {

constructor(props){
  super(props);
  this.state = {
    days:0,
    hours:0,
    minutes:0,
    seconds:0
  }
  console.log('this.props',this.props);
}

// lifecycle hooks
componentWillMount(){
  this.gettimeuntil(this.props.deadline);
}

// lifecycle hooks
componentDidMount(){
  setInterval(() => this.gettimeuntil(this.props.deadline), 1000)
}

leading0(num){
  return num < 10? '0' + num: num;
}

gettimeuntil(deadline) {
  const time = Date.parse(deadline) - Date.parse(new Date());
  const seconds = this.leading0(Math.floor( (time/1000)%60 ));
  const minutes = this.leading0(Math.floor( (time/(1000*60))%60));
  const hours = this.leading0(Math.floor( (time/(1000*60*60))%24 ));
  const days = this.leading0(Math.floor( (time/(1000*60*60*24)) ));

  console.log('time',time)
  console.log('days',days)
  console.log('hours',hours)
  console.log('minutes',minutes)
  console.log('seconds',seconds)

  // don't use this method here without componentWillMount as it will cause infinite loop
  this.setState({ days, hours, minutes, seconds });
}

  render(){
    //this.gettimeuntil(this.props.deadline);

    return (
      <div>
        <div  className="Clock-days">{this.state.days} days</div>
        <div  className="Clock-hours">{this.state.hours}  hours</div>
        <div  className="Clock-minutes">{this.state.minutes}  minutes</div>
        <div  className="Clock-seconds">{this.state.seconds}  seconds</div>
      </div>
    )
  }
}

export default Clock;
