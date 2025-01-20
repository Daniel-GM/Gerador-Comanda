import { useState } from 'react'
import { toPng } from 'html-to-image';
import axios from 'axios';
import JSZip from 'jszip';

// import Generate from './components/button/Generate'
import ColorSeletion from './components/input/ColorSeletion'
import CountCommand from './components/input/CountCommand'
import Dimension from './components/input/Dimension'
import EnableMenu from './components/input/EnableMenu'
import InstanceName from './components/input/InstanceName'
import Logo from './components/input/Logo'
import Preview from './preview/Preview'

function App() {
  const [logo, setLogo] = useState('menu-white.png')
  const [height, setHeight] = useState(60)
  const [width, setWidth] = useState(187)
  const [maxHeight] = useState(124)
  const [maxWidth] = useState(250)

  const [instanceName, setInstanceName] = useState('menu')
  const [isInstanceValid, setIsInstanceValid] = useState(null)

  const [minNumber, setMinNumber] = useState(1)
  const [maxNumber, setMaxNumber] = useState(2)

  const [colorCommand, setColorCommand] = useState('#0A7269')
  const [colorText, setColorText] = useState('#ffffff')

  const [enableMenu, setEnableMenu] = useState(false)

  const [isLoading, setIsLoading] = useState(false)

  const checkInstance = async () => {
    setIsLoading(true)
    const url = `https://www.${instanceName}.sigedelivery.com.br`
    const proxyUrl = `https://little-poetry-ddcf.danielgomesmoura.workers.dev/?url=${encodeURIComponent(url)}`

    try {
      const response = await axios.get(proxyUrl)
      if (response.status === 200) {
        setIsInstanceValid(true)
        handleDownloadAsZip()
      }
    } catch (error) {
      setIsInstanceValid(false)
    }
    setIsLoading(false)
  }

  const handleDownloadAsZip = async () => {
    const zip = new JSZip();
    const previews = document.querySelectorAll('[data-preview-id]');

    for (const preview of previews) {
      try {
        const dataUrl = await toPng(preview)
        const base64Data = dataUrl.split(',')[1]
        const id = preview.dataset.previewId
        const newName = id.replace('preview-', '')

        let fileName = id.includes('cardapio') ? 'cardapio.png' : `comanda-${Number(newName) + Number(minNumber)}.png`
        zip.file(fileName, base64Data, { base64: true })
      } catch (error) {
        console.error(`Erro ao gerar imagem para ${preview.dataset.previewId}:`, error)
      }
    }

    zip.generateAsync({ type: 'blob' }).then((content) => {
      const link = document.createElement('a')
      link.href = URL.createObjectURL(content)
      link.download = `${instanceName}-comandas.zip`
      link.click()
    })
  }

  return (
    <div className="min-h-screen bg-gray-900">
      {isLoading ? 
      <>
        <div className="fixed top-0 left-0 z-50 w-full h-full bg-slate-500/50 flex justify-center items-center">
          <div className="bg-emerald-600 p-4 rounded-lg shadow-lg">
            <p className="text-center font-bold">Verificando instância...</p>
          </div>
        </div>
      </>
      : null}
      <div className="container mx-auto p-6 ">
        <div className="grid grid-cols-1 custom-lg:grid-cols-2 gap-8">
          <div className="space-y-4 bg-gray-800/50 p-6 border-gray-700 border-2 rounded-lg shadow-sm">
            <h2 className="text-2xl font-bold text-white">Configurações</h2>
            <Logo
              label={"Logo do Cliente"}
              onChange={(image) => setLogo(image)}
            />
            <InstanceName
              label="Nome da Instância"
              name={instanceName}
              onChange={(value) => setInstanceName(value)}
            />
            {isInstanceValid !== null && (
              <p
                className={`text-center font-bold ${
                  isInstanceValid ? 'text-green-500' : 'text-red-500'
                }`}
              >
                {isInstanceValid
                  ? 'Instância encontrada!'
                  : 'Instância não encontrada.'}
              </p>
            )}
            <div className="grid grid-cols-2 gap-4">
              <CountCommand
                label="Número Inicial"
                init={minNumber}
                onChange={(value) => setMinNumber(value)}
              />
              <CountCommand
                label="Número Final"
                init={maxNumber}
                onChange={(value) => setMaxNumber(value)}
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Dimension
                label="Altura:"
                init={60}
                max={maxHeight}
                onChange={(value) => setHeight(value)}
              />
              <Dimension
                label="Largura:"
                init={187}
                max={maxWidth}
                onChange={(value) => setWidth(value)}
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <ColorSeletion
                label="Cor da Comanda"
                init={"#0A7269"}
                onChange={(value) => setColorCommand(value)}
              />
              <ColorSeletion
                label="Cor do Texto"
                init={"#ffffff"}
                onChange={(value) => setColorText(value)}
              />
            </div>
            <EnableMenu
              label="Cardápio"
              init={false}
              onChange={(value) => setEnableMenu(value)}
            />
            <button
              onClick={checkInstance}
              className="w-full bg-emerald-600 hover:bg-emerald-700 text-white border border-gray-300 py-2 font-bold rounded-lg"
            >
              Baixar Comandas
            </button>
          </div>

          <div className="p-6 rounded-lg shadow-sm mx-auto grid grid-cols-1  md:grid-cols-2 gap-4">
            <Preview
              cardapio={false}
              instanceName={instanceName}
              logo={logo}
              height={height}
              width={width}
              maxHeight={maxHeight}
              maxWidth={maxWidth}
              number={minNumber}
              colorCommand={colorCommand}
              colorText={colorText}
            />
            <Preview
              cardapio={true}
              instanceName={instanceName}
              logo={logo}
              height={height}
              width={width}
              maxHeight={maxHeight}
              maxWidth={maxWidth}
              colorCommand={colorCommand}
              colorText={colorText}
            />
          </div>
        </div>
        <div className="grid grid-cols-1 gap-8 mt-8">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 xl:grid-cols-4 gap-4 p-6 bg-gray-800/50 border-gray-700 border-2 rounded-lg shadow-sm place-items-center">
            {enableMenu && (
              <div
                id="preview-cardapio"
                data-preview-id="preview-cardapio"  
              >
                <Preview
                  cardapio={true}
                  instanceName={instanceName}
                  logo={logo}
                  height={height}
                  width={width}
                  maxHeight={maxHeight}
                  maxWidth={maxWidth}
                  colorCommand={colorCommand}
                  colorText={colorText}
                />
              </div>
            )}
            {Array.from(
              { length: maxNumber - minNumber + 1 },
              (_, index) => (
                <div
                  key={index}
                  id={`preview-${index}`}
                  data-preview-id={`preview-${index}`}
                >
                  <Preview
                    key={index}
                    cardapio={false}
                    instanceName={instanceName}
                    logo={logo}
                    height={height}
                    width={width}
                    maxHeight={maxHeight}
                    maxWidth={maxWidth}
                    number={Number(minNumber) + index}
                    colorCommand={colorCommand}
                    colorText={colorText}
                  />
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default App

