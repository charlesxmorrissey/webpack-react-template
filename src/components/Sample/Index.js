import React from 'react'
import PropTypes from 'prop-types'

import styles from './Sample.css'

const Sample = ({ children }) => <div className={styles.sample}>{children}</div>

Sample.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.node]).isRequired,
}

export default Sample
