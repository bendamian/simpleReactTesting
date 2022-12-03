import React from 'react'

function Input({colourValue , setColorValue}) {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <label>Add Colour Name</label>
      <input
      autoFocus
      type={'text'}
      placeholder="add colour name"
      required
      value={colourValue}
      onChange={(e) =>setColorValue(e.target.value)}
      />
    </form>
  )
}

export default Input
