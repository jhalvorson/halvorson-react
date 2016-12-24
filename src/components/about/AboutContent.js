import React, { Component } from 'react'
import TimelineEvent from './TimelineEvent'

export default class AboutContent extends Component {
  render() {
    // // index of the page
    const i = this.props.pages.findIndex((pages) => pages.slug === 'about');
    const page = this.props.pages[i];// get us the page
    return (
      <div>
        <div className="container">
          <section className="about-main">
            <div className="about-main__content">
              <h1 className="heading">{page.acf.name}</h1>
              <p dangerouslySetInnerHTML={{__html: page.acf.about_content}} />
            </div>

            <ul className="timeline">
              {
              Object
              .keys(page.acf.timeline)
              .map(event => <li key={event}
                                className="timeline-event">
                                  <TimelineEvent
                                  index={event}
                                  event={page.acf.timeline[event]}/>
                            </li>)
                }
            </ul>
          </section>
          <section className="about-image">
            <img src={page.acf.about_image.url} alt={page.acf.about_image.alt}/>
          </section>
        </div>
      </div>
    )
  }
}
