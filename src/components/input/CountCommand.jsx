import { useState, memo } from 'react'

const CountCommand = ({ label, init, onChange }) => {
  const [count, setCount] = useState(init)

  const handleChange = (value) => {
    setCount(value)
    onChange(value)
  }

  return (
    <div>
      <label className="block mb-2 font-bold">{label}</label>
      <input
        type="number"
        value={count}
        onChange={(e) => handleChange(e.target.value)}
        className="block w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:outline-none px-4 py-2"
      />
    </div>
  )
}

export default memo(CountCommand)