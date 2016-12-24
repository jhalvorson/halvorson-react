import React, { Component } from 'react'
import CSSTransitionGroup from 'react-addons-css-transition-group'

export default class Loader extends Component {
  render() {
    return (
      <CSSTransitionGroup
        component="div"
        className="loader-container"
        transitionName="loader"
        transitionLeaveTimeout={500}
        transitionEnterTimeout={500}
        >
      <div className="loader">
        <h2>Hold onto your butts...</h2>
      </div>
      </CSSTransitionGroup>
    )
  }
}
