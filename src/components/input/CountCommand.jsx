import { useState } from 'react'

const CountCommand = ({ label, init }) => {
  const [count, setCount] = useState(init)

  return (
    <div>
      <label className="block mb-2 font-bold">{label}</label>
      <input
        type="number"
        value={count}
        onChange={(e) => setCount(e.target.value)} 
        className="block w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:outline-none px-4 py-2"
      />
    </div>
  )
}

export default CountCommand