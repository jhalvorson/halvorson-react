import React, { Component } from 'react'

export default class BlogCard extends Component {
  render() {
    return (
      <div>
        {this.props.title.rendered}
      </div>
    )
  }
}
