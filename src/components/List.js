import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Results = styled.span`
  color: #fff;
  font-size: 20px;
`

const ListElements = styled.ul`
  background: #006b73;
  display: grid;
  grid-auto-flow: columns;
  list-style-type: none;
  margin: 0;
  padding: 0;
  width: 700px;
  border-radius: 4px;
  overflow: scroll;
  max-height: 250px;
  padding: 0px 10px;
`

const List = ({ filterResults, totalResults, children }) => {
  return (
    <Container>
      <Results>{`${filterResults} of ${totalResults} counters`}</Results>
      <ListElements>{children}</ListElements>
    </Container>
  )
}

List.propTypes = {
  children: PropTypes.array,
  filterResults: PropTypes.number,
  totalResults: PropTypes.number
}

export default List
