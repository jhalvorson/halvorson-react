import React, { Component } from 'react'
import logo from '../../images/logo.svg'
import { Link } from 'react-router'
import BodyClassName from 'react-body-classname'
import classNames from 'classnames'
import HomeContent from './HomeContent'
import Loader from '../global/Loader'
import SimplePostList from './SimplePostList'


export default class App extends Component {
	render() {
    const homeBody = classNames(
      'home-body',
      'dark'
    )
    const homeContainer = classNames(
      'container',
      'home-container'
    )
		return (
      <BodyClassName className={homeBody}>
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
            {this.props.loadingHome ?
              null
            :
            <SimplePostList {...this.props.homePosts}/>
            }
          </div>
        </div>
      </div>
    </BodyClassName >
    )
	}
}
