import React, { Component } from 'react'

export default class TimelineEvent extends Component {
  render() {
    const { event } = this.props
    return (
      <div>
        <date className="date">{event.Year}</date>
        <p>{event.timeline_text}</p>
      </div>
    )
  }
}
