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

  const styleFont = {
    fontFamily: "Poppins, sans-serif",
    fontWeight: "300",
    textAlign: "center"
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
      {/* Cardápio Digital */}
      {
        cardapio ? (
          <h2
           className="flex flex-col items-center text-white text-3xl"
           style={styleFont}
          >
            Acesse o nosso<br/>
            Cardápio Digital
          </h2>
        ) : null
      }
      {/* QR code */}
      
      {/* logo telecom/sigesis */}
      {/* Número da comanda */}
      {/* Rodapé */}
    </div>
  )
}

export default Preview