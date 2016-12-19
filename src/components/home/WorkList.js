import React, { Component } from 'react'
import WorkCard from './WorkCard'

export default class WorkList extends Component {
  render() {
    return <section className="home-work">
      <ul className="work-card__list">
        {
        Object
        .keys(this.props.work)
        .map(key => <li key={key}>
                    <WorkCard
                        index={key}
                        details={this.props.work[key]}
                        /></li>)
          }
      </ul>
    </section>
  }
}
