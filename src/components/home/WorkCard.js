import React, { Component } from 'react'

export default class WorkCard extends Component {
  render() {
    const { details } = this.props
    if (details._links['wp:featuredmedia']) {

        var featuredImage = details._embedded['wp:featuredmedia'][0].media_details.sizes.medium_large.source_url;

        var articleHeader = {
            height: '350px',
            width: '100%',
            backgroundImage: 'url(' + featuredImage + ')',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'centre',
            backgroundSize: 'cover'
        }
    }

    return (
      <li>
      <a href={details.acf.project_link} target="_blank">
        <div className="work-card" style={articleHeader}>
          <div className="work-card__content">
            <h2 className="work-card__title">{details.title.rendered} <span>{details.acf.agency ? `- ${details.acf.agency_name}` : null}</span></h2>
          </div>
        </div>
      </a>
      </li>
    )
  }
}
