import React from 'react'
import PropTypes from 'prop-types'
import '@/assets/css/sample.css'

const Sample = ({ children }) => <div className="sample">{children}</div>

Sample.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.node]).isRequired,
}

export default Sample
