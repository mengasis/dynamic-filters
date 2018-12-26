import styled from 'styled-components'

export default styled.button`
  width: ${({ width }) => width || '100px'};
  height: 42px;
  font-size: 14px;
  border-radius: 4px;
  white-space: nowrap;
  color: #fff;
  border: 0;
  cursor: pointer;
  background: ${({ background }) => background || '#000'};
  transition: all 0.2s ease-out, color 0.2s ease-out;
`
