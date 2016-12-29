import React, { Component } from 'react'
import BodyClassName from 'react-body-classname'
import classNames from 'classnames'
import HomeContent from './HomeContent'
import Loader from '../global/Loader'
import SimplePostList from './SimplePostList'
import WPAPI from 'wpapi'
var wp = new WPAPI({ endpoint: 'http://halvorson-react:8888/wp-json' })

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
              <HomeContent pages={this.props.pages} />
            </section>
            }
            {this.props.loadingHome ?
              null
            :
            <SimplePostList homePosts={this.props.homePosts}/>
            }
          </div>
        </div>
      </div>
    </BodyClassName >
    )
	}
}
