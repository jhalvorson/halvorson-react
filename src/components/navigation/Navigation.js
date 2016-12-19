import React, { Component } from 'react'
import { Link } from 'react-router'

export default class Navigation extends Component {
  render() {
    return <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/blog/">Blog</Link></li>
        <li><Link to="/about/">About</Link></li>
      </ul>
  }
}
