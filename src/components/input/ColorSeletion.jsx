import { useState } from 'react'

const ColorSeletion = ({ label, init, onChange }) => {
  const [color, setColor] = useState(init)

  const handleChange = (value) => {
    setColor(value)
    onChange(value)
  }

  return (
    <div className="mb-4">
      <label className="block mb-2 font-bold">{label}</label>
      <input
        type="color"
        value={color}
        onChange={e => handleChange(e.target.value)}
        className="h-8 w-24 cursor-pointer rounded-md border-2 border-gray-200 bg-transparent dark:border-gray-800"
      />
    </div>
  )
}

export default ColorSeletion