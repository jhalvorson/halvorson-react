import React, { Component } from 'react'
import PostList from './PostList'
import { Link } from 'react-router'

export default class BlogIndex extends Component {
	render() {
		return <div className="blog">
      <div className="blog-inner">
        {this.props.loadingPosts ?
            <p>Loading...</p>
        : null}
        <PostList {...this.props} />
        <div className="blog-side">
          <div className="blog-side__content">
            <h1>The blog.</h1>
            <p>Jamie Halvorson is a Front-End and WordPress Developer at @cellosignal in Edinburgh. Specialising in React, Javascript and the WP-API.</p>

            <p>You can find him on twitter, codepen and Dribbble. He doesn’t always talk in the third-person.</p>
          </div>
        </div>
      </div>
		</div>
	}
}
