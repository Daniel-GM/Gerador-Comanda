import React from 'react'

const Dimension = ({ label, init }) => {
  const [value, setValue] = React.useState(init)

  return (
    <div>
      <label>{label} {value}px</label>
      <input 
        type="range" 
        min="0" 
        max={init}
        value={value} 
        onChange={e => setValue(e.target.value)} 
      />  
    </div>
  )
}

export default Dimension