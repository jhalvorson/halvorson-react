import React, { Component } from 'react'
import { Link } from 'react-router'
import classNames from 'classnames'

export default class BlogCard extends Component {
  render() {
    const { data } = this.props

    // var featuredImage = data._embedded['wp:featuredmedia'][0].media_details.sizes.medium.source_url;

    if (data._links['wp:featuredmedia']) {
        var featuredImage = data._embedded['wp:featuredmedia'][0].media_details.sizes.large.source_url;
    }

    let classes = '';
    if(this.props.index == "0") classes += 'blog-card__featured';
    else if (!this.props.index == "0") classes += 'blog-card';

    return (
      <article className={classes}>
        <Link to={`/blog/${data.slug}/`}>
          <div>
            <header className="blog-card__header">
              <img src={featuredImage} />
            </header>
            <h2 dangerouslySetInnerHTML={{__html:data.title.rendered}} />
          </div>
        </Link>
      </article>
    )
  }
}
