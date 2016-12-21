import React, { Component } from 'react'
import logo from '../../images/logo.svg'
import { Link } from 'react-router'
import HomeContent from './HomeContent'
import WorkList from './WorkList'
import classNames from 'classnames'
import Loader from '../global/Loader'

export default class App extends Component {
	render() {
    const { pageID } = this.props;
    // index of the post
    // const i = this.props.pages.findIndex((pages) => pages.id === pageID);
    // const page = this.props.pages[i];// get us the post
    const homeContainer = classNames(
      'container',
      'home-container'
    )
		return (
      <div className="home">
        <div className="row">
          <div className={homeContainer}>
            {this.props.loadingPages ?
              <Loader />
            :
            <section className="home-content">
              <HomeContent {...this.props} />
            </section>
            }
            {this.props.loadingWork ?
              null
            :
            <WorkList work={this.props.work} />
            }
          </div>
        </div>
      </div>
    )
	}
}
