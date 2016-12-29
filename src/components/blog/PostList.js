import React, { Component } from 'react'
import BlogCard from './BlogCard'

export default class PostList extends Component {
  render() {
    return (
      <div className="post-list" id="postList">
        Hi
        {
          Object
          .keys(this.props.posts)
          .map(post => {
          return <BlogCard
            key={post}
            index={post}
            details={this.props.posts[post]}
            />
        })}
        {
        // Object
        // .keys(this.props.posts)
        // .map(key => <BlogCard
        //                 key={key}
        //                 index={key}
        //                 details={this.props.posts[key]}
        //                 />)
          }
  		</div>
    )
  }
}
