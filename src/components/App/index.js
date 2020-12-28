import React from 'react'

import Test from 'src/components/Test'

import styles from './App.module.css'
console.log('styles::', styles)

const App = () => (
  <main className={styles.app}>
    <p>Webpack React Template</p>
    <Test />
  </main>
)

export default App
