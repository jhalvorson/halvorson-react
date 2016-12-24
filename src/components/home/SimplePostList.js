import React, { Component } from 'react'
import SimpleBlogCard from './SimpleBlogCard'

export default class SimplePostList extends Component {
  render() {
    return (
      <div className="simple-post-list">
        <h3 className="heading heading-typewriter">Writing</h3>
          <section className="simple-post-list__main">
            {
              Object
              .keys(this.props)
              .map(key => <SimpleBlogCard
                            key={key}
                            index={key}
                            details={this.props[key]}
                            />)
            }
          </section>
      </div>
    )
  }
}
