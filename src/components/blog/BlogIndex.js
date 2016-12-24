import React, { Component } from 'react'
import PostList from './PostList'
import { Link } from 'react-router'
import Loader from '../global/Loader'
import CSSTransitionGroup from 'react-addons-css-transition-group'
import BodyClassName from 'react-body-classname'

export default class BlogIndex extends Component {

	render() {
		return <BodyClassName className="blog-body">
      <div className="blog">
        <div className="container">

          {this.props.loadingPosts ?
            <Loader />
          :
          <div>
            <PostList {...this.props} />
          </div>
          }
        </div>
  		</div>
    </BodyClassName>
	}
}
