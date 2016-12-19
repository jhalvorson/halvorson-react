import React, { Component } from 'react'

export default class PostContent extends Component {
  render() {
    const { post } = this.props;
    return <article className="single-post">
      <div className="container">
        <h1 dangerouslySetInnerHTML={{__html: post.title.rendered}} />
        <div dangerouslySetInnerHTML={{__html: post.content.rendered}} />
      </div>
    </article>
  }
}
