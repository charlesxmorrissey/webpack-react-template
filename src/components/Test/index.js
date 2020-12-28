import React from 'react'

import styles from './Test.module.css'
console.log('styles::', styles)

const Test = () => {
  return <p className={styles.testContainer}>Test</p>
}

export default Test
