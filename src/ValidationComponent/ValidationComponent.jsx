import React from 'react'

const ValidationComponent = props => {
  let text = 'Text long enough..'
  if(props.length === 0) {
    text = null
  } else if(props.length < 5) {
    text = 'Text too short'
  } 
  return (
    <div>
      <p>{text}</p>
    </div>
  )
}

export default ValidationComponent