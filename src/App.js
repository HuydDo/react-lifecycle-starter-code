import React, { Component } from 'react';
import RandomKoala from './components/RandomKoala'
import WidgetSelector from './components/WidgetSelector'
import AnalogClock from './components/AnalogClock'
import DigitalClock from './components/DigitalClock'
import StockTicker from './components/StockTicker'

class App extends Component {
  constructor(){
    super()
    this.state = {
      koala : "",
      analog: false,
    }
  }
  // state = {
  //   analog: false,
  //   koala: ""
  // }

  componentDidMount(){
    fetch('http://localhost:3000/koalas')
    // fetch('./db.json')
    .then(res => {
      console.log(res)
      return res.json()
    })
    .then(data => {
     console.log(data.koalas[0])
      return this.setState({koala: data.koalas[0]})
    })}

   handleWidget = () => {
    this.setState({
      analog: !this.state.analog
    })
  }

  render() {
    return (
      <div id='app'>
        <RandomKoala key={this.state.koala.id} koala={this.state.koala} />       
        <WidgetSelector handle={this.handleWidget} />
        {!this.state.analog  && <DigitalClock />}
        {this.state.analog && <AnalogClock />}
        <StockTicker />
      </div>
    )
  }
  
}

export default App;


