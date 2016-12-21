import React, { Component } from 'react'
import PostList from './PostList'
import { Link } from 'react-router'
import Loader from '../global/Loader'
import CSSTransitionGroup from 'react-addons-css-transition-group';

export default class BlogIndex extends Component {
	render() {
		return <div className="blog">
      <div className="blog-inner">
        {this.props.loadingPosts ?
          <Loader />
        :
        <div>
          <CSSTransitionGroup
            component="div"
            className="post-list-container"
            transitionName="posts-main"
            transitionAppear={true}
            transitionAppearTimeout={1000}
            transitionLeaveTimeout={500}
            transitionEnterTimeout={500}
            >
            <PostList {...this.props} />
          </CSSTransitionGroup>
          <CSSTransitionGroup
              component="div"
              className="blog-side-container"
              transitionName="blog"
              transitionAppear={true}
              transitionAppearTimeout={1000}
              transitionLeaveTimeout={500}
              transitionEnterTimeout={500}>
              <div className="blog-side">
                <div className="blog-side__content">
                  <h1>The blog.</h1>
                  <p>Jamie Halvorson is a Front-End and WordPress Developer at <a href="//twitter.com/cellosignal" target="_blank">@cellosignal</a> in Edinburgh. Specialising in React, Javascript and the WP-API.</p>

                  <p>You can find him on Twitter, CodePen and Dribbble. He doesn’t always talk in the third-person.</p>
                </div>
              </div>
            </CSSTransitionGroup>
        </div>
        }
      </div>
		</div>
	}
}
