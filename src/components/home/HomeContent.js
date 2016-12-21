import React, { Component } from 'react'
import SocialButton from '../global/SocialButton'

export default class HomeContent extends Component {
  render() {
    const i = this.props.pages.findIndex((pages) => pages.slug === 'home')
    const page = this.props.pages[i]
    let socialLinks = page.acf.social_media_links
    return <section className="home-main">
      <div className="home-main__content">
        <h1 dangerouslySetInnerHTML={{__html:page.acf.intro_text}} />
        <ul className="home-main__social">
        {
        Object
        .keys(socialLinks)
        .map(socialLink => <li key={socialLink} className="home-main__social-entry"><SocialButton
                        index={socialLink}
                        social={page.acf.social_media_links[socialLink]}
                        /></li>)
          }
        </ul>
      </div>
    </section>
  }
}
