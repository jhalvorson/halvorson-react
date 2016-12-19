import React, { Component } from 'react'
import BlogCard from './BlogCard'
import { Link } from 'react-router'

export default class BlogIndex extends Component {

	render() {
		return <ul>
      {
        Object
        .keys(this.props.posts)
        .map(post => <li key={post.id}>
          <Link to={`/blog/${post.slug}`} {...this.props}>
            {post.title}
          </Link>
        </li>)
      }
		</ul>
	}
}
