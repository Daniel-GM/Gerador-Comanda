import { useState, memo } from 'react'

const InstanceName = ({ label, onChange }) => {
  const [instanceName, setInstanceName] = useState('')

  const handleChange = (value) => {
    setInstanceName(value)
    onChange(value)
  }

  return (
    <div className="mb-4">
      <label className="block mb-2 font-bold">{label}</label>
      <input 
        type="text" 
        value={instanceName} 
        onChange={(e) => handleChange(e.target.value)} 
        className='w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:outline-none px-4 py-2'
      />
    </div>
  )
}

export default memo(InstanceName)