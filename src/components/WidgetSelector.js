import React, { Component } from 'react'

class WidgetSelector extends Component {
 

  handleClick = () => {
    this.props.handle()
  }

  render () {
    return (
      <div className="app-children">
       <button onClick={this.handleClick}>click</button>
      </div>
    )
  }
  
}

export default WidgetSelector
