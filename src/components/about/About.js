import React, { Component } from 'react'
import AboutContent from './AboutContent'
import Loader from '../global/Loader'
import classNames from 'classnames'
import BodyClassName from 'react-body-classname'

export default class About extends Component {
  render() {

    const aboutBody = classNames(
      'about-body',
      'dark'
    )
    return (
      <BodyClassName className={aboutBody}>
      {this.props.loadingPages ?
          <Loader />
      :
      <AboutContent {...this.props} />
      }
    </BodyClassName>
    )
  }
}

/***
@NOTE: need to add API endpoint

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
*/
