import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
`

const Wrapper = styled.section`
  align-items: center;
  display: flex;
  flex-direction: column;
  width: 100%;
`

const CounterDisplay = styled.span`
  background: #fff;
  border-radius: 4px;
  padding: 12px;
  text-align: center;
`

const Button = styled.button`
  background-color: blue;
  border-radius: 6px;
  border: 0;
  color: #fff;
  font-size: 14px;
  font-weight: 300;
  margin: 24px 0;
  padding: 12px 24px;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
`

class Hello extends Component {
  constructor(props) {
    super(props)

    this.state = {
      counter: 0,
    }

    this.increment_ = this.increment_.bind(this)
  }

  increment_() {
    this.setState({
      counter: (this.state.counter += 1),
    })
  }

  render() {
    return (
      <Wrapper>
        <Title>{this.props.children}</Title>
        <CounterDisplay>{this.state.counter}</CounterDisplay>
        <Button onClick={this.increment_}>Count</Button>
      </Wrapper>
    )
  }
}

Hello.propTypes = {
  children: PropTypes.string,
}

export default Hello
