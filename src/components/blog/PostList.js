import React, { Component } from 'react'
import BlogCard from './BlogCard'

export default class PostList extends Component {
  render() {
    return (
      <div className="post-list" id="postList">
        {
        Object
        .keys(this.props.posts)
        .map(key => <BlogCard
                        key={key}
                        index={key}
                        details={this.props.posts[key]}
                        />)
          }
  		</div>
    )
  }
}
