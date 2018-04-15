import React from 'react'
import ReactDOM from 'react-dom'
import Hello from '@/components/Hello'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Hello name="foo" />, div)
  ReactDOM.unmountComponentAtNode(div)
})
