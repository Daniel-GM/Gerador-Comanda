import { useState } from 'react'
import QRCode from 'react-qr-code';


const Preview = ({ cardapio, logo }) => {
  const [qrcodeValue, setQrCodeValue] = useState('https://menu.sigedelivery.com.br/consulta/#/?table=menu1&domain=menu');


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
          className='mt-4 bg-white p-3 rounded-lg'
        />
        {/* logo telecom/sigesis */}
        {/* Número da comanda */}
        {
          (!cardapio) ? (
            <h3
              className="text-black text-2xl py-4 px-6 bg-white rounded-lg font-bold"
              style={styleFont}>
              1
            </h3>
          ) : null
        }
      </div>
      {/* Rodapé */}
    </div>
  )
}

export default Preview