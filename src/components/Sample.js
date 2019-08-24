import React from 'react'
import PropTypes from 'prop-types'
import '@/assets/css/sample.css'

const Sample = ({ children }) => (
  <div className="sample">
    <h1 className="sample__title">{children}</h1>
  </div>
)

Sample.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.node]).isRequired,
}

export default Sample
