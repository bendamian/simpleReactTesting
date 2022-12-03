import React from 'react'

function Square({colourValue,hexValue,isDarkText}) {
  return (
    <section
    className='square'
    style={{backgroundColor:colourValue,
      color: isDarkText ? '#000' : '#FFF'
    
    
    }}
    >
      <p>{colourValue ? colourValue : "empty value"}</p>
      <p>{hexValue ? hexValue :null}</p>
    </section>
  )
}
Square.defaultProps = {
  colourValue: 'empty colourValue'
}

export default Square
