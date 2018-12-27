import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 5px 0;
`

const Text = styled.span`
  font-size: 18px;
  color: #fff;
  text-overflow: ellipsis;
  width: 500px;
  white-space: nowrap;
  overflow: hidden;
`
const Button = styled.button`
  border-radius: 3px;
  font-size: 18px;
  overflow: hidden;
`

const ActionButtons = styled.div`
  width: 200px;
  display: grid;
  grid-template-columns: 30px 30px 30px 80px;
  gap: 5px;
  justify-content: center;
`

const Count = styled.span`
  color: #fff;
  font-size: 15px;
  text-align: center;
`

const Counter = ({ id, title, count, onIncrease, onDecrease, onRemove }) => {
  return (
    <Container>
      <Text>{title}</Text>
      <ActionButtons>
        <Button onClick={() => onIncrease(id)}>+</Button>
        <Count>{count}</Count>
        <Button onClick={() => onDecrease(id)}>-</Button>
        <Button onClick={() => onRemove(id)}>Remove</Button>
      </ActionButtons>
    </Container>
  )
}

Counter.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string,
  count: PropTypes.number,
  onIncrease: PropTypes.func,
  onDecrease: PropTypes.func,
  onRemove: PropTypes.func
}

export default Counter
