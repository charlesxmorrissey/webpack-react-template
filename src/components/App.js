import React, { Component } from 'react'
import Hello from './Hello'
import styled, { ThemeProvider } from 'styled-components'
import { theme } from '@/themes/default'

const Wrapper = styled.div`
  align-items: center;
  background: lime;
  display: flex;
  justify-content: center;
  flex-direction: column;

  @media (max-width: 700px) {
    background: ${props => props.theme.primary};
  }
`

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Wrapper>
          <Hello>Hello World</Hello>
        </Wrapper>
      </ThemeProvider>
    )
  }
}

export default App
