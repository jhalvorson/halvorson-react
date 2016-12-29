import React, { Component } from 'react'

export default class PostContent extends Component {
  render() {
    const { post } = this.props;
    if (post._links['wp:featuredmedia']) {

        var featuredImage = post._embedded['wp:featuredmedia'][0].media_details.sizes.large.source_url;

        var articleHeader = {
            height: '475px',
            width: '75%',
            backgroundImage: 'url(' + featuredImage + ')',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'centre',
            backgroundSize: 'cover'
        }
    }
    return <article className="single-post">
      <header className="single-post__header">
        <div className="container">
          <h1 dangerouslySetInnerHTML={{__html: post.title.rendered}} />
        </div>
        <div className="featured-image" style={articleHeader}></div>
      </header>
      <div className="post-content">
        <div className="container">
          <div dangerouslySetInnerHTML={{__html: post.content.rendered}} />
        </div>
      </div>
    </article>
  }
}
