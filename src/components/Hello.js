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
  transform: translate3d(10px, 100px, 10px);
  width: 100%;
`

const CounterDisplay = styled.span`
  background: #fff;
  border-radius: 4px;
  padding: 12px;
  text-align: center;
`

const Button = styled.button`
  background-color: ${(props) => (props.primary ? 'green' : 'blue')};
  border-radius: 6px;
  border: 0;
  color: #fff;
  font-size: 14px;
  font-weight: 300;
  margin: 12px 0;
  padding: 12px 24px;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
`

const BorderedButton = Button.extend`
  color: #ccc;
  border: 3px solid red;
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
        <Button primary onClick={this.increment_}>
          Count
        </Button>
        <BorderedButton onClick={this.increment_}>Count</BorderedButton>
      </Wrapper>
    )
  }
}

Hello.propTypes = {
  children: PropTypes.string,
}

export default Hello
