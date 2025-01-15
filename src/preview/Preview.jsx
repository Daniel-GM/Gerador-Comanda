import { useState } from 'react'

const Preview = ({ cardapio, logo }) => {
  const styleBackground = {
    height: "508px",
    width: "288px",
    maxHeight: "508px",
    maxWidth: "288px",
    backgroundColor: "rgb(10, 114, 105)",
    border: "1px solid #fff"
  }

  const styleLogo = {
    maxHeight: "100px",
    maxWidth: "250px"
  }
  
  return (
    <div 
      style={styleBackground}
      className='flex flex-col items-center'
    >
      {/* Logo cliente */}
      <img 
        src={logo} 
        alt="Logo do cliente" 
        style={styleLogo}
        className='mt-2'
      />
      {/* QR code */}
      {/* logo telecom/sigesis */}
      {/* Número da comanda */}
      {/* Rodapé */}
    </div>
  )
}

export default Preview