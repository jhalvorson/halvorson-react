import React, { Component } from 'react'
import PostList from './PostList'
import Loader from '../global/Loader'
import BodyClassName from 'react-body-classname'

export default class BlogIndex extends Component {

	render() {
    const { postsPaginationTotal, postsPagination } = this.props

		return <BodyClassName className="blog-body">
      <div className="blog">
        <div className="container">

          {this.props.loadingPosts ?
            <Loader />
          :
          <div>
            <PostList {...this.props} />

            {
              this.props.loadingMorePosts ?
              <div className="loading-more-posts">
                <p>Loading...</p>
              </div>
              :
              null
            }
            <button className="button-load-more" disabled={postsPaginationTotal <= postsPagination} key="btn1" onClick={this.props.loadMorePosts}>
              {postsPaginationTotal <= postsPagination ?
                <p>No More Posts</p>
                :
                <p>Load More</p>
              }
            </button>
          </div>
          }

        </div>
  		</div>
    </BodyClassName>
	}
}
