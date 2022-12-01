import React from 'react'

function Input({colourValue , setColorValue}) {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <label>Add Colour Name</label>
      <input/>
    </form>
  )
}

export default Input
