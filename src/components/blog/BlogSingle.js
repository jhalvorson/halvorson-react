import React, { Component } from 'react'
import PostContent from './PostContent'
import Loader from '../global/Loader'

export default class BlogSingle extends Component {
  render() {
    const { slug } = this.props.params;
    // index of the post
    const i = this.props.posts.findIndex((posts) => posts.slug === slug);
    const post = this.props.posts[i];// get us the post
    return (
      <div>
        {this.props.loadingPosts ?
            <Loader />
        :
        <PostContent i={i} post={post} {...this.props}/>
        }
      </div>
    )
  }
}
