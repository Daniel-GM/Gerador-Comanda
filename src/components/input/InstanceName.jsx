import {useState} from 'react'

const InstanceName = ({ label }) => {
  const [instanceName, setInstanceName] = useState('')

  return (
    <>
      <label>{label}</label>
      <input type="text" value={instanceName} onChange={(e) => setInstanceName(e.target.value)} />
    </>
  )
}

export default InstanceName