import React, { Component } from 'react'

class DigitalClock extends Component {

  state = {
    date: new Date()
  }

  componentDidMount(){
    this.interval = setInterval(() => this.incrementClock(), 1000)
  }

  incrementClock = () => {
    this.setState({date: new Date()})
    // this.setState(prevState => {
    //   return {date: new Date()}
    // })
  }

  componentWillUnmount(){
    clearInterval(this.interval)
  }

  render () {
    return (
      <div className="app-children">
        <h2 id="digital">
          {this.state.date.toLocaleTimeString()}
          {/* 11:00 AM */}
        </h2>
      </div>
    )
  }
  
  
}

export default DigitalClock
