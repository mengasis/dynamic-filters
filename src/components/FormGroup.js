import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 500px;
  border: 1px solid #607d8b;
  border-radius: 6px;
  background: #222125;
  padding: 10px;
`

const Label = styled.span`
  font-size: 18px;
  font-weight: 100;
  color: #fff;
`

const FormGroup = ({ label = '', children }) => {
  return (
    <Container>
      <Label>{label}</Label>
      {children}
    </Container>
  )
}

FormGroup.propTypes = {
  label: PropTypes.string,
  children: PropTypes.node.isRequired
}

export default FormGroup
