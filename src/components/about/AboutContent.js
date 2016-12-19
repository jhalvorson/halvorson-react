import React, { Component } from 'react'

export default class AboutContent extends Component {
  render() {
    // // index of the page
    const i = this.props.pages.findIndex((pages) => pages.slug === 'about');
    const page = this.props.pages[i];// get us the page
    return (
      <div>
        <h1>{page.title.rendered}</h1>
        <p dangerouslySetInnerHTML={{__html: page.acf.about_us}} />
      </div>
    )
  }
}
