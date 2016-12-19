import React, { Component } from 'react'
import { Link } from 'react-router'

export default class BlogCard extends Component {
  render() {
    const { details } = this.props

    if (details._links['wp:featuredmedia']) {

        var featuredImage = details._embedded['wp:featuredmedia'][0].media_details.sizes.medium.source_url;

        var articleHeader = {
            height: '200px',
            width: '100%',
            backgroundImage: 'url(' + featuredImage + ')',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'centre',
            backgroundSize: 'cover'
        }
    }
    return (
      <Link to={`/blog/${details.slug}/`}>
      <article className="blog-card">
        <header style={articleHeader} className="blog-card__header"></header>
        <h2 dangerouslySetInnerHTML={{__html:details.title.rendered}} />
        <p dangerouslySetInnerHTML={{__html: details.acf.post_overview}} />
      </article>
      </Link>
    )
  }
}
