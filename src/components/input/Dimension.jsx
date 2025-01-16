import { useState, memo } from 'react'

const Dimension = ({ label, init, max, onChange }) => {
  const [value, setValue] = useState(init)

  const handleChange = (e) => {
    onChange(e.target.value)
    setValue(e.target.value)
  }

  return (
    <div>
      <label className="block mb-2 font-bold">{label} {value}px</label>
      <input 
        type="range" 
        min="1" 
        max={max}
        step="1"
        value={value} 
        onChange={e => handleChange(e)} 
        className="block w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 py-2 accent-emerald-600"
      />  
    </div>
  )
}

export default memo(Dimension)