import React, { useState } from 'react'

const SelectTextColor = ({ label, init, onChange }) => {
  const [selectedColor, setSelectedColor] = useState(init || '#ffffff')

  const handleColorChange = (event) => {
    setSelectedColor(event.target.value)
    onChange(event.target.value)
  }

  return (
    <div className="mb-4">
      <label className="block mb-2 font-bold">{label}</label>
      <div className="flex gap-4">
        {/* Botão Branco */}
        <label
          htmlFor="white"
          className={`w-7 h-7 rounded-full border-2 ${
            selectedColor === '#ffffff' ? 'border-emerald-600' : 'border-gray-700'
          } cursor-pointer bg-white`}
        ></label>
        <input
          id="white"
          type="radio"
          value="#ffffff"
          name="textColor"
          className="hidden"
          checked={selectedColor === '#ffffff'}
          onChange={handleColorChange}
        />

        {/* Botão Preto */}
        <label
          htmlFor="black"
          className={`w-7 h-7 rounded-full border-2 ${
            selectedColor === '#000000' ? 'border-emerald-600' : 'border-gray-700'
          } cursor-pointer bg-black`}
        ></label>
        <input
          id="black"
          type="radio"
          value="#000000"
          name="textColor"
          className="hidden"
          checked={selectedColor === '#000000'}
          onChange={handleColorChange}
        />
      </div>
    </div>
  )
}

export default SelectTextColor
