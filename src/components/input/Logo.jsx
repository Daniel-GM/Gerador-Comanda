import {useState} from 'react'

const Logo = () => {
  const style = {
    width: '249.56px',
    height: '100px'
  }

  const [logo, setLogo] = useState(null)
  
  const handleLogo = (e) => {
    setLogo(e.target.files[0])
  }

  return (
    <div>
      <label htmlFor="logo">Logo</label>
      <input type="file" id="logo" onChange={handleLogo} />
      {logo && <img src={URL.createObjectURL(logo)} style={style} alt="logo" />}
    </div>
  )
}

export default Logo