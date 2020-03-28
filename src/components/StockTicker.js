import React, { Component } from 'react'
let color = {}
const divStyle1 = {
  color: 'green'
}
const divStyle2 = {
  color: 'red'
}
class StockTicker extends Component {

  constructor(){
    super()
    this.state = ({
      num: 0,
      prevNum: 0
    })
  }
  // state = {
  //   num: 0
  // }
  
  componentDidMount(){
    this.interval = setInterval(() => this.randomNum(), 1000)
  }

  randomNum = () => {

    this.setState({
      prevNum: this.state.num,
      num: Math.floor(Math.random()*90) +10 })
   
  }
  
  componentWillUnmount(){
    clearInterval(this.interval)
  }

  componentDidUpdate(prevState){
  
  // (this.state.prevNum > this.state.num) ? console.log('pre number: ' + this.state.prevNum) : 
  // console.log('current number: ' + this.state.num) 

   (this.state.prevNum > this.state.num) ? color = divStyle2 : color = divStyle1
    
  }

  render () {
    return (
      <div className="app-children">
        <div id="ticker">
          <h2>Flatiron</h2>
          <div style= {color}>
            {this.state.num}
          </div>
        </div>
      </div>
    )
  }
}

export default StockTicker
