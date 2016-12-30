import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="container">
          <div className="column one">
            <p><a target="_blank" href="//twitter.com/jamiehalvorson">@JamieHalvorson</a> - Front End Developer at<br /> <a target="_blank" href="//twitter.com/cellosignal">@CelloSignal</a> &amp; Head of Product at FabFit</p>
          </div>
          <div className="column two">
            <ul className="footer-social">
              <li>
                <a href="//github.com/jhalvorson" target="_blank"><i className="fa fa-github"></i></a>
                <a href="//codepen.com/jamiehalvorson" target="_blank"><i className="fa fa-codepen"></i></a>
                <a href="//dribbble.com/jamiehalvorson" target="_blank"><i className="fa fa-dribbble"></i></a>
                <a href="//twitter.com/jamiehalvorson" target="_blank"><i className="fa fa-twitter"></i></a>
                <a href="//instagram.com/jamiehalvorson" target="_blank"><i className="fa fa-instagram"></i></a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    )
  }
}
