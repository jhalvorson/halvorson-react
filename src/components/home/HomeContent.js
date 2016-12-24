import React, { Component } from 'react'
import { Link } from 'react-router'

export default class HomeContent extends Component {
  render() {
    const i = this.props.pages.findIndex((pages) => pages.slug === 'home')
    const page = this.props.pages[i]
    return <section className="home-main">
      <div className="home-main__content">
        <h1 dangerouslySetInnerHTML={{__html:page.acf.intro_text}} />
        <p>Did you come here from halvorson.digital? I said <Link to="blog/hello-signal/">Hello to Signal</Link> this year.</p>
      </div>
    </section>
  }
}
