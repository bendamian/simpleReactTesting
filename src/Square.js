import React from 'react'

function Square({colourValue}) {
  return (
    <section
    className='square'
    style={{backgroundColor:colourValue}}
    >
      <p>{colourValue ? colourValue : "empty value"}</p>
    </section>
  )
}
Square.defaultProps = {
  colourValue: 'empty colourValue'
}

export default Square
