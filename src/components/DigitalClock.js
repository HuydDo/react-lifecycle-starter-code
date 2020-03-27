import React, { Component } from 'react'

class DigitalClock extends Component {

  state = {
    interval: 0
  }

  render () {
    return (
      <div className="app-children">
        <h2 id="digital">
          11:00 AM
        </h2>
      </div>
    )
  }
  
  componentDidMount(){
    this.interval = setInterval(this.setState({state: this.state}),1000)
  }

  componentWillUnmount(){
    clearInterval(this.interval)
  }
}

export default DigitalClock
