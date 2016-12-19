import React, { Component } from 'react'

export default class WorkCard extends Component {
  render() {
    const { details } = this.props
    return (
      <li>{details.title.rendered}</li>
    )
  }
}
