import React from 'react'
import ReactDOM from 'react-dom'
import App from '@/components/App'
import systemUi from 'system-ui'
import { injectGlobal } from 'styled-components'

ReactDOM.render(<App />, document.getElementById('root'))

// Global style
injectGlobal`
  body {
    background-color: ghostwhite;
    font-family: ${systemUi}, sans-serif;
    padding: 0;
    margin: 0;

    @media (max-width: 700px) {
      background: red;
    }
  }
`
