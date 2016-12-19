import React, { Component } from 'react'
import PostList from './PostList'
import { Link } from 'react-router'

export default class BlogIndex extends Component {
	render() {
		return <div>
      {this.props.loadingPosts ?
          <p>Loading...</p>
      : null}
      <PostList {...this.props} />
		</div>
	}
}
