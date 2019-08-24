import React from 'react'
import ReactDOM from 'react-dom'
import Sample from '@/components/Sample'

it('renders the component', () => {
  const div = document.createElement('div')

  ReactDOM.render(<Sample>FooBar</Sample>, div)
  ReactDOM.unmountComponentAtNode(div)
})
