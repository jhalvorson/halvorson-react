import React, { Component } from 'react'

export default class PostContent extends Component {
  render() {
    const { post } = this.props;
    return <div>

        {console.log(this.props.post)}
        {post.title.rendered}
        <div dangerouslySetInnerHTML={{__html: post.excerpt.rendered}} />

    </div>
  }
}
