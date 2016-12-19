import React, { Component } from 'react'
import { BrowserRouter, Match, Miss } from 'react-router'
import api from 'wordpress-rest-api-oauth-1'
const SITE_URL = 'http://halvorson:8888/'

import App from './home/App'
import BlogIndex from './blog/BlogIndex'
import BlogSingle from './blog/BlogSingle'
import NotFound from './error/NotFound'
//styles
import css from '../css/index.css'

export default class Routes extends Component {
  constructor() {
		super()
		this.state = {
			posts: []
		}
		window.api = new api({
			url: SITE_URL
		})
	}
  componentWillMount() {
		this.loadPosts()
	}
  loadPosts() {
		let args = {
			_embed: true,
			per_page: 100
		}

		window.api.get('/wp/v2/posts', args)
			.then(posts => {
				this.setState({ posts })
			})
	}
  render() {
    return (
      <BrowserRouter>
        <main>
          <Match exactly pattern="/" component={App} />
          <Match pattern="/blog" render={(props) => <BlogIndex {...props} posts={this.state.posts} />} />
          <Match pattern="/blog/:slug" component={BlogSingle} />
          <Miss component={NotFound} />
        </main>
      </BrowserRouter>
    )
  }
}
