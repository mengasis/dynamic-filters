import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

const Label = styled.span`
  font-size: 18px;
  font-weight: 100;
`

const FormGroup = ({ label = '', children }) => {
  return (
    <Container>
      <Label>{label}</Label>
      {children}
    </Container>
  )
}

FormGroup.propTypes = {}

export default FormGroup
