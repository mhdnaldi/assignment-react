import React from 'react'

const CharComponent = props => {
  let style = {
    display: 'inline-block',
    padding: '16px',
    margin: '16px',
    border: '1px solid #ccc',
    fontWeight: 'bold',
    cursor: 'pointer'
  }
  return(
    <div style={style} onClick={props.delete}>
      <p>{props.char}</p>
    </div>
  )
}
export default CharComponent