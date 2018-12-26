import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Container = styled.div`
  background: #fff;
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 8px 20px 0px rgba(0, 0, 0, 0.15);
  border-radius: 3px;
`

const Input = styled.input`
  width: ${({ width }) => (width ? width + 'px' : '100%')};
  font-size: 14px;
  padding: 10px;
  border: 2px solid transparent;
  border-radius: 3px 0px 0px 3px;
`

const Button = styled.button`
  width: 100px;
  height: 42px;
  font-size: 14px;
  white-space: nowrap;
  color: #fff;
  border: 0;
  cursor: pointer;
  background: ${({ background }) => background};
  transition: all 0.2s ease-out, color 0.2s ease-out;
`
const InputForm = ({ textButton = '', colorButton, onSubmit, ...restProps }) => {
  return (
    <Container>
      <Input hasButton={textButton !== ''} {...restProps} />
      {textButton !== '' && (
        <Button onClick={onSubmit} background={colorButton}>
          {textButton}
        </Button>
      )}
    </Container>
  )
}

InputForm.propTypes = {
  textButton: PropTypes.string,
  colorButton: PropTypes.string,
  onSubmit: PropTypes.func
}

export default InputForm
