import { useState, useEffect } from 'react'
import MemoizedQRCode from '../components/qrcode/MemoizedQRCode';


// import QRCode from 'react-qr-code';

// const MemoizedQRCode = memo(QRCode);

const Preview = ({ cardapio, instanceName, logo, height, width, maxHeight, maxWidth, number = '', colorCommand, colorText }) => {
  const [qrcodeComanda, setQrcodeComanda] = useState(``);
  const [qrcodeCardapio, setQrcodeCardapio] = useState(``);

  useEffect(() => {
    setQrcodeComanda(`https://${instanceName}.sigedelivery.com.br/consulta/#/?table=${instanceName}${number}&domain=${instanceName}`);
    setQrcodeCardapio(`https://${instanceName}.sigedelivery.com.br/cardapio-digital`);
  }, [instanceName, number]);

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

  return (
    <div
      style={styleBackground}
      className={`mt-4 flex flex-col items-center justify-center ${!cardapio ? "justify-between" : "justify-between"}`}
    >
      <div
        className='flex justify-center items-center flex-col'
        style={{ height: maxHeight, width: maxWidth }}
      >
        {/* Logo cliente */}
        <img
          src={logo}
          alt="Logo do cliente"
          style={styleLogo}
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
      <div className='relative'>
        <MemoizedQRCode 
          value={cardapio ? qrcodeCardapio : qrcodeComanda}
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
          <div className='flex items-center'>
            <img 
              src={colorText == "#ffffff" ? "nuvem-w.png" : "nuvem-b.png"}
              alt="Logo Sigesis" 
              className='mb-5 mr-1'
              style={{ maxWidth: "40px" }} 
            />
            <p
              className="text-xl mb-3"
              style={styleFont}
            >
              www.sigesis.com.br
            </p>
          </div>
        ) : (
          <p
            className="text-xl mt-1 mb-2 flex flex-col items-center"
            style={styleFont}
          >
            Desenvolvido por
            <img
              src={colorText == "#ffffff" ? "logo-sigesis-w.png" : "logo-sigesis-b.png"}
              alt="Logo Sigesis"
              style={{ maxWidth: "180px" }}
            />
          </p>
        )
      }
    </div>
  )
}

export default Preview