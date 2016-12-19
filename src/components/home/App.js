import React, { Component } from 'react'
import logo from '../../images/logo.svg'
import { Link } from 'react-router'
import HomeContent from './HomeContent'
import WorkList from './WorkList'

export default class App extends Component {
	render() {
    const { pageID } = this.props;
    // index of the post
    // const i = this.props.pages.findIndex((pages) => pages.id === pageID);
    // const page = this.props.pages[i];// get us the post
		return (
      <div className="home">
        <div className="container">
          {this.props.loadingPages ?
            <p>Loading...</p>
          :
          <HomeContent {...this.props} />
          }
          {this.props.loadingWork ?
            null
          :
          <WorkList work={this.props.work} />
          }
        </div>
      </div>
    )
	}
}
