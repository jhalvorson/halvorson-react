import React, { Component } from 'react'
import { Link } from 'react-router'
import classNames from 'classnames'

export default class BlogCard extends Component {
  render() {
    const { details } = this.props

    // var featuredImage = details._embedded['wp:featuredmedia'][0].media_details.sizes.medium.source_url;

    // if (details._links['wp:featuredmedia']) {
    //
    //     var featuredImage = details._embedded['wp:featuredmedia'][0].media_details.sizes.large.source_url;
    //
    //     var articleHeader = {
    //         backgroundImage: 'url(' + featuredImage + ')',
    //         backgroundRepeat: 'no-repeat',
    //     }
    // }

    let classes = '';
    if(this.props.index == "0") classes += 'blog-card__featured';
    else if (!this.props.index == "0") classes += 'blog-card';

    return (
      <article className={classes}>
          <Link to={`/blog/${details.slug}/`}>
          <div>
            <header className="blog-card__header">
            </header>
            <h2 dangerouslySetInnerHTML={{__html:details.slug}} />
          </div>
          </Link>
      </article>
    )
  }
}
