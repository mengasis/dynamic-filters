import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  grid-area: total;
`

const Text = styled.span`
  font-weigth: 100;
  font-size: 30px;
`

const Title = styled(Text)`
  font-size: 14px;
`

const TotalCounter = ({ counter = 0 }) => {
  return (
    <Container>
      <Text>{counter}</Text>
      <Title>Current total count</Title>
    </Container>
  )
}

TotalCounter.propTypes = {
  counter: PropTypes.number
}

export default TotalCounter
