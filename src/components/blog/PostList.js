import React, { Component } from 'react'
import { Link } from 'react-router'
import BlogCard from './BlogCard'

export default class PostList extends Component {
  render() {
    return (
      <ul>
        {
        Object
        .keys(this.props.posts)
        .map(key => <BlogCard
                        key={key}
                        index={key}
                        details={this.props.posts[key]}
                        />)
          }
          {console.log(this.props.posts)}
  		</ul>
    )
  }
}
