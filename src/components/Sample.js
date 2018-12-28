import React, { Component } from 'react'
import PropTypes from 'prop-types'
import '@/assets/css/sample.css'

class Sample extends Component {
  render() {
    return (
      <div className="sample">
        <h1 className="sample__title">{this.props.children}</h1>
      </div>
    )
  }
}

Sample.propTypes = {
  children: PropTypes.string.isRequired,
}

export default Sample
