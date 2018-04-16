import React, { Component } from 'react'
import PropTypes from 'prop-types'
import '@/assets/css/hello.css'

class Hello extends Component {
  render() {
    return (
      <div className="hello">
        <h1 className="hello__title">{this.props.children}</h1>
      </div>
    )
  }
}

Hello.propTypes = {
  children: PropTypes.string.isRequired,
}

export default Hello
