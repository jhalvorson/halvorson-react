import React, { Component } from 'react'
import BlogCard from './BlogCard'

export default class PostList extends Component {
  render() {
    return (
      <div className="post-list" id="postList">
        {
          // Object
          // .keys(this.props.posts)
          // .map((post) => <BlogCard
          //   key={post}
          //   index={post}
          //   details={this.props.posts[post]}
          //   />)
        }
        {
        this.props.posts.map((data, index) => <BlogCard
                        key={data.id}
                        details={data}
                        index={index}
                        />)
          }
  		</div>
    )
  }
}
