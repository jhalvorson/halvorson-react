import React, { Component } from 'react'

export default class HomeContent extends Component {
  render() {
    const i = this.props.pages.findIndex((pages) => pages.slug === 'home');
    const page = this.props.pages[i];// get us the page
    return <div>
      <h1 dangerouslySetInnerHTML={{__html:page.title.rendered}} />
    </div>
  }
}
