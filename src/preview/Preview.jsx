import { useState } from 'react'
import QRCode from 'react-qr-code';


const Preview = ({ cardapio, logo, height, width, maxHeight, maxWidth, number, colorCommand, colorText }) => {
  const [qrcodeValue, setQrCodeValue] = useState('https://menu.sigedelivery.com.br/consulta/#/?table=menu1&domain=menu');

  const styleBackground = {
    height: "508px",
    width: "288px",
    maxHeight: "508px",
    maxWidth: "288px",
    backgroundColor: colorCommand,
    border: "1px solid #fff"
  }

  const styleLogo = {
    height: height + "px",
    width: width + "px",
  }

  const styleFont = {
    fontFamily: "Poppins, sans-serif",
    fontWeight: "300",
    color: colorText,
    textAlign: "center"
  }

  const styleNumber = {
    fontFamily: "Roboto, sans-serif",
    textAlign: "center"
  }

  const styleSigesis = {
    maxWidth: "180px"
  }

  return (
    <div
      style={styleBackground}
      className={`flex flex-col items-center ${!cardapio ? "justify-between" : "justify-between"}`}
    >
      <div 
        className='flex justify-center items-center flex-col'
        style={{height: maxHeight, width: maxWidth}}
      >
        {/* Logo cliente */}
        <img
          src={logo}
          alt="Logo do cliente"
          style={styleLogo}
          className='mt-2'
        />
      </div>
      {/* Cardápio Digital */}
      {
        cardapio ? (
          <h2
            className="flex flex-col items-center text-xl"
            style={styleFont}
          >
            Acesse o nosso<br />
            Cardápio Digital
          </h2>
        ) : null
      }
      {/* QR code */}
      <div>
        <QRCode
          value={qrcodeValue}
          size={230}
          className={`mt-2 bg-white p-3 ${cardapio ? "rounded-lg" : "rounded-t-lg"}`}
        />
        {/* logo sigesis */}
        {/* Número da comanda */}
        {
          (!cardapio) ? (
            <h3
              className="text-black text-2xl py-1 px-6 bg-white rounded-b-lg font-bold"
              style={styleNumber}
            >
              {number}
            </h3>
          ) : null
        }
      </div>

      {/* Rodapé */}
      {
        (!cardapio) ? (
          <p
            className="text-2xl mb-2"
            style={styleFont}
          >
            www.sigesis.com.br
          </p>
        ) : (
          <p
            className="text-xl mt-1 mb-2 flex flex-col items-center"
            style={styleFont}
          >
            Desenvolvido por
            <img
              src="logo-sigesis-branca.png"
              alt="Logo Sigesis"
              style={styleSigesis}
            />
          </p>
        )
      }
    </div>
  )
}

export default Preview