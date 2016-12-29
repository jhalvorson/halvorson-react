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

            {postsPaginationTotal > postsPagination ?
            <button key="btn1" onClick={this.props.loadMorePosts}>Load More</button>
              :
              <button key="btn2" disabled>No more</button>
            }
          </div>
          }

        </div>
  		</div>
    </BodyClassName>
	}
}
