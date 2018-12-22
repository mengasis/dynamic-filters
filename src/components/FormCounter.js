import React from 'react'
import PropTypes from 'prop-types'

const FormCounter = ({ value, onSubmit, onChange }) => {
  return (
    <div>
      <input value={value} onChange={onChange} />
      <button onClick={onSubmit}>Crear Contador</button>
    </div>
  )
}

FormCounter.propTypes = {
  value: PropTypes.string,
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired
}

export default FormCounter
