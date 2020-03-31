import React, { Component } from 'react'

class StockTicker extends Component {

  constructor(){
    super()
    this.state = ({
      num: 0,
      color: "green"
    })
  }
  
  
  componentDidMount(){
    this.interval = setInterval(() => this.randomNum(), 1000)
  }

  randomNum = () => {
   let random = Math.floor(Math.random()*90) +10 
    this.setState({
      num: random,
      color: (this.state.num > random) ? "red" : "green"
   })}
  
  componentWillUnmount(){
    clearInterval(this.interval)
  }


  render () {
    return (
      <div className="app-children">
        <div id="ticker">
          <h2>Flatiron</h2>
          <div style= {{color: this.state.color }}>
            {this.state.num}
          </div>
        </div>
      </div>
    )
  }
}

export default StockTicker
