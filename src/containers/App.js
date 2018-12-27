import React from 'react'
import styled from 'styled-components'

import Header from './Header'
import Counters from './Counters'

const Container = styled.div`
  display: grid;
  grid-template: 1fr 300px/ 1fr;
  justify-items: center;
  align-items: center;
  background: #4200ad;
  font-size: calc(10px + 2vmin);
  height: 100vh;
`

const App = () => {
  return (
    <Container>
      <Header />
      <Counters />
    </Container>
  )
}

export default App
