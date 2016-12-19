import React, { Component } from 'react'
import FontAwesome from 'react-fontawesome'

export default class SocialButton extends Component {
  render() {
    const { social } = this.props
    return(
        <a href={`${social.social_link}`} target="_blank">
          <FontAwesome
            className='home-icon'
            name={`${social.fontawesome_class}`}
          />
        </a>
    )
  }
}
