import { useState } from 'react'

const Dimension = ({ label, init }) => {
  const [value, setValue] = useState(init)

  return (
    <div>
      <label className="block mb-2 font-bold">{label} {value}px</label>
      <input 
        type="range" 
        min="0" 
        max="500"
        step="1"
        value={value} 
        onChange={e => setValue(e.target.value)} 
        className="block w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 px-4 py-2 accent-emerald-600"
      />  
    </div>
  )
}

export default Dimension