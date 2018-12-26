import styled from 'styled-components'

export default styled.div`
  display: grid;
  gap: 20px;
  width: 100%;
  grid-auto-rows: 100px;
  grid-auto-columns: repeat(2, 1fr);
  justify-items: center;
  align-items: center;
  grid-template-areas:
    'total filters'
    'addCounter filters'
    'results filters'
    'other filters';
`
