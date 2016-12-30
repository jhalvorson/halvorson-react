import React, { Component } from 'react'
import Prism from 'prismjs'
import 'prismjs/components/prism-handlebars.min.js'
import 'prismjs/components/prism-jsx.min.js'
import 'prismjs/components/prism-json.min.js'
import 'prismjs/components/prism-scss.min.js'
import 'prismjs/plugins/toolbar/prism-toolbar.min.js'
import 'prismjs/plugins/show-language/prism-show-language.min.js'

export default class PostContent extends Component {
  componentDidMount() {
    if(document.querySelectorAll('pre[class*="language-"]')) {
      Prism.highlightAll()
    }
    this.equalVideo()
  }

  equalVideo() {
      const iframes = document.getElementsByTagName('iframe');

      for ( let i = 0; i < iframes.length; i++ ) {

      let iframe = iframes[i],

      players = /www.youtube.com|player.vimeo.com/;

      if ( iframe.src.search( players ) > 0 ) {

        let videoRatio        = ( iframe.height / iframe.width ) * 100;

        iframe.style.position = 'absolute';
        iframe.style.top      = '0';
        iframe.style.left     = '0';
        iframe.width          = '100%';
        iframe.height         = '100%';

        let wrap              = document.createElement( 'div' );
        wrap.className        = 'fluid-vids';
        wrap.style.width      = '100%';
        wrap.style.position   = 'relative';
        wrap.style.paddingTop = videoRatio + '%';

        let iframeParent      = iframe.parentNode;
        iframeParent.insertBefore( wrap, iframe );
        wrap.appendChild( iframe );

      }
    }
  }


  render() {
    const { post } = this.props;
    if (post._links['wp:featuredmedia']) {

        var featuredImage = post._embedded['wp:featuredmedia'][0].media_details.sizes.large.source_url;

        var articleHeader = {
            height: '475px',
            backgroundImage: 'url(' + featuredImage + ')',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'centre',
            backgroundSize: 'cover'
        }
    }
    return <article className="single-post--content" key={post.id}>
      <header className="single-post__header">
        <div className="container">
          <h1 dangerouslySetInnerHTML={{__html: post.title.rendered}} />
        </div>
        <div className="featured-image" style={articleHeader}></div>
      </header>
      <div className="post-content">
        <div className="container">
          <div dangerouslySetInnerHTML={{__html: post.content.rendered}} />
        </div>
      </div>
    </article>
  }
}
