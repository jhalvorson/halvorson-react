import React, { Component } from 'react'
import logo from '../../images/logo.svg'
import { Link } from 'react-router'
// import '../../css/App.css';

export default class App extends Component {
	render() {
		return (
      <div>
      <h1>Home</h1>
      <Link to="/blog/">Blog</Link>
      </div>
    )
	}
}
