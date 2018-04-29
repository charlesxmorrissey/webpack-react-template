import React, { Component } from 'react'
import Hello from './Hello'
import styled from 'styled-components'

const Wrapper = styled.div`
  align-items: center;
  background: var(--mainColor);
  display: flex;
  justify-content: center;
  flex-direction: column;

  @media (max-width: 700px) {
    background: orange;
  }
`

class App extends Component {
  render() {
    return (
      <Wrapper>
        <Hello>Hello World</Hello>
      </Wrapper>
    )
  }
}

export default App
