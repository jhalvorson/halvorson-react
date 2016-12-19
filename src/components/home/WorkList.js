import React, { Component } from 'react'
import WorkCard from './WorkCard'

export default class WorkList extends Component {
  render() {
    return <ul>
      {
      Object
      .keys(this.props.work)
      .map(key => <WorkCard
                      key={key}
                      index={key}
                      details={this.props.work[key]}
                      />)
        }
    </ul>
  }
}
