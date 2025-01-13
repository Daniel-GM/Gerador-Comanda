import React from 'react'

const CountCommand = ({ label, init }) => {
  const [count, setCount] = React.useState(init)

  return (
    <>
      <label>{label}</label>
      <input
        type="number"
        value={count}
        onChange={(e) => setCount(e.target.value)}  
      />
    </>
  )
}

export default CountCommand