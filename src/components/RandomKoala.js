import React, { Component } from 'react'

class RandomKoala extends Component {

  render () {
    return (
      <div className="app-children">
        <img src={this.props.koala.image_url} alt="Koala"/>
      </div>
    )
  }

}

export default RandomKoala