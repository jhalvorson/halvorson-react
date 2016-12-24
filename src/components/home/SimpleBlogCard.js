import React, { Component } from 'react'
import { Link } from 'react-router'

export default class SimpleBlogCard extends Component {
  render() {
    const { details } = this.props
    return (
     <article className="simple-blog-card">
       <Link to={`/blog/${details.slug}/`}>
       <h4 dangerouslySetInnerHTML={{__html: details.title.rendered}}/>
       <p dangerouslySetInnerHTML={{__html: details.acf.overview}}/>
       </Link>
     </article>
    )
  }
}
