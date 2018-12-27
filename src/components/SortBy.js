import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Button from './Button'
import { orderTypes } from '../utils/sortCounters'

const OptionButton = styled(Button).attrs({ background: '#a00000' })`
  margin: 3px;
`

const Container = styled.div`
  display: grid;
  gap: 10px;
  justify-items: center;
  grid-template-columns: repeat(2, 1fr);
`

const DefaultButton = styled(OptionButton)`
  grid-column: 1/3;
`

const Section = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Label = styled.span`
  font-size: 14px;
  color: #fff;
`

const SortBy = ({ onOrderChange }) => {
  return (
    <Container>
      <DefaultButton onClick={() => onOrderChange(orderTypes.DEFAULT)}>
        Default
      </DefaultButton>
      <Section>
        <Label>By Count</Label>
        <Section>
          <OptionButton onClick={() => onOrderChange(orderTypes.COUNT_ASC)}>
            Asc
          </OptionButton>
          <OptionButton onClick={() => onOrderChange(orderTypes.COUNT_DESC)}>
            Desc
          </OptionButton>
        </Section>
      </Section>
      <Section>
        <Label>By Title</Label>
        <Section>
          <OptionButton onClick={() => onOrderChange(orderTypes.TITLE_ASC)}>
            Asc
          </OptionButton>
          <OptionButton onClick={() => onOrderChange(orderTypes.TITLE_DESC)}>
            Desc
          </OptionButton>
        </Section>
      </Section>
    </Container>
  )
}

SortBy.propTypes = {
  onOrderChange: PropTypes.func
}

export default SortBy
