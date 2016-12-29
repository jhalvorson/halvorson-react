import React, { Component } from 'react'
import { BrowserRouter, Match, Miss } from 'react-router'
import classNames from 'classnames'
import WPAPI from 'wpapi'
var wp = new WPAPI({ endpoint: 'http://halvorson-react:8888/wp-json' });
import _ from 'lodash'


import App from './home/App'
import BlogIndex from './blog/BlogIndex'
import BlogSingle from './blog/BlogSingle'
import NotFound from './error/NotFound'
import About from './about/About'
import Navigation from './navigation/Navigation'
import Footer from './footer/Footer'
//styles
import css from '../css/index.css'
import styles from '../css/App.css'

export default class Routes extends Component {
  constructor() {
		super()

		this.state = {
			posts: [],
      homePosts: [],
      pages: [],
      loadingPosts: true,
      loadingHome: true,
      loadingPages: true,
      postsPagination: 1,
      postsPaginationTotal: {}
		}

    this.loadPosts = this.loadPosts.bind(this)
    this.loadMorePosts = this.loadMorePosts.bind(this)
    this.loadPages = this.loadPages.bind(this)
    this.homePosts = this.homePosts.bind(this)
	}

  componentWillMount() {
      this.loadPosts()
      this.loadPages()
      this.homePosts()
  }

  homePosts() {
    wp.posts().page(1).perPage(3).then((homePosts) => {
      this.setState({
        loadingHome: false,
        homePosts
      })
    }).catch((err) => {
      console.log(err)
    })
  }

  loadPosts( pageNum = this.state.postsPagination, perPage = 4) {

    wp.posts().page(pageNum).perPage(perPage).embed().then((posts) => {
      this.setState({
        loadingPosts: false,
        posts,
        postsPaginationTotal: parseInt(posts._paging.totalPages)
      })
      // console.log(posts)
      // console.log(`total pages: ${posts._paging.totalPages}`)
    }).catch((err) => {
      console.log(err)
    })

	}

  loadMorePosts() {
    wp.posts().page(this.state.postsPagination + 1).perPage(4).embed().then((posts) => {
      console.log(posts)
      // const postsArray = {...this.state.posts}
      this.setState({
        loadingPosts: false,
        postsPagination: this.state.postsPagination + 1,
        posts: this.state.posts.concat(posts) //@NOTE: must be a better way..
      })
    })
  }


  loadPages() {
    wp.pages().then((pages) => {
      console.log(pages)
      this.setState({
        loadingPages: false,
        pages
      })
    }).catch(function( err ) {
      console.log('Nope')
    })
  }


  render() {
    const pageClasses = classNames(
      'page'
    )

    return (
      <BrowserRouter>
        <main className={pageClasses}>
          <Navigation />
          <Match  exactly pattern="/"
                  render={(props) =>
                      <App {...props}
                        pages={this.state.pages}
                        homePosts={this.state.homePosts}
                        loadingPages={this.state.loadingPages}
                        loadingHome={this.state.loadingHome}
                        />
                  } />
          <Match  exactly pattern="/blog/"
            render={(props) => <BlogIndex {...props}
                                posts={this.state.posts}
                                loadMorePosts={this.loadMorePosts}
                                loadingPosts={this.state.loadingPosts}
                                postsPagination={this.state.postsPagination}
                                postsPaginationTotal={this.state.postsPaginationTotal}
                                />} />
          <Match  pattern="/blog/:slug/"
                  render={(props) => <BlogSingle {...props}
                                      posts={this.state.posts}
                                      loadingPosts={this.state.loadingPosts}/>} />
          <Match pattern="/blog/posts/:pageNum" component={BlogIndex}/>
          <Match  pattern="/about/" location={{ pathname: '/about/' }}
                  render={(props) => <About {...props}
                                      pages={this.state.pages}
                                      loadingPages={this.state.loadingPages}/>} />
          <Miss component={NotFound} />
          <Footer pattern="/blog/"/>
        </main>
      </BrowserRouter>
    )
  }
}
