import React, { Component } from 'react'
import Hello from './Hello'
import '@/assets/css/app.css'

class App extends Component {
  render() {
    return (
      <main className="app">
        <Hello name="Hello World" />
      </main>
    )
  }
}

export default App
