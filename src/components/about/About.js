import React, { Component } from 'react'
import AboutContent from './AboutContent'

export default class About extends Component {
  render() {
    return (
      <div>
      {this.props.loadingPages ?
          <p>Loading...</p>
      :
      <AboutContent {...this.props} />
      }
      </div>
    )
  }
}
