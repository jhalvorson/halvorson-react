import React, { Component } from 'react'
import { Link } from 'react-router'

export default class BlogCard extends Component {
  render() {
    const { details } = this.props

    var featuredImage = details._embedded['wp:featuredmedia'][0];
    var articleHeader = {
        height: '150px',
        width: '100%',
        borderRadius: '4px',
        backgroundImage: 'url(' + featuredImage + ')',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'centre',
        backgroundSize: 'cover'
    }
    return (
      <article className="blog-card">
        <header style={articleHeader} className="blog-card__header"></header>
        <h2>{details.title.rendered}</h2>
        <p dangerouslySetInnerHTML={{__html: details.acf.post_overview}} />
        <Link to={`/blog/${details.slug}/`}>Read More</Link>
      </article>
    )
  }
}
