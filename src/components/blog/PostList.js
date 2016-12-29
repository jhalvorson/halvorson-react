import React, { Component } from 'react'
import BlogCard from './BlogCard'

/***
@TODO:
  On loadMore button click
  Get the next set of paged posts
  increase pagination by 1
**/

export default class PostList extends Component {

  render() {
    return (
      <div className="post-list" id="postList">

        {
        this.props.posts.map((data, index) => <BlogCard
                        key={`${data.id}-${data.slug}`}
                        data={data}
                        index={index}
                        />)
          }
  		</div>
    )
  }
}
