import React, { Component } from 'react'
import Prism from 'prismjs'
import 'prismjs/components/prism-handlebars.min.js'
import 'prismjs/components/prism-jsx.min.js'
import 'prismjs/components/prism-json.min.js'
import 'prismjs/components/prism-scss.min.js'
import 'prismjs/plugins/toolbar/prism-toolbar.min.js'
import 'prismjs/plugins/show-language/prism-show-language.min.js'

export default class PostContent extends Component {
  componentDidMount() {
    Prism.highlightAll();
  }
  render() {
    const { post } = this.props;
    if (post._links['wp:featuredmedia']) {

        var featuredImage = post._embedded['wp:featuredmedia'][0].media_details.sizes.large.source_url;

        var articleHeader = {
            height: '475px',
            backgroundImage: 'url(' + featuredImage + ')',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'centre',
            backgroundSize: 'cover'
        }
    }
    return <article className="single-post--content" key={post.id}>
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
