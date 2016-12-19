import React, { Component } from 'react'
import { Link } from 'react-router'

export default class Navigation extends Component {
  render() {
    return <nav className="primary-navigation">
      <div className="container">
        <ul className="primary-navigation__links">
          <li className="primary-navigation__links-single"><Link to="/">Home</Link></li>
          <li className="primary-navigation__links-single"><Link to="/blog/">Blog</Link></li>
          <li className="primary-navigation__links-single"><Link to="/about/">About</Link></li>
        </ul>
      </div>
    </nav>
  }
}
