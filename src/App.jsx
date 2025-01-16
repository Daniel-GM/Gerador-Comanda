import { useState } from 'react'

import './App.css'
import Generate from './components/button/Generate'
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

  const [instanceName, setInstanceName] = useState('')

  const [minNumber, setMinNumber] = useState(1)
  const [maxNumber, setMaxNumber] = useState(2)

  const [colorCommand, setColorCommand] = useState('#0A7269') 
  const [colorText, setColorText] = useState('#ffffff') 
  
  return (
    <div className="min-h-screen bg-gray-900">
      <div className="container mx-auto p-6 ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
          <div className="space-y-4 bg-gray-800/50 p-6 border-gray-700 border-2 rounded-lg shadow-sm">
            <h2 className="text-2xl font-bold text-white">Configurações</h2>
            <Logo 
              label={"Logo do Cliente"} 
              onChange={(image) => setLogo(image)}
            />
            <InstanceName 
              label="Nome da Instância" 
              onChange={(value) => setInstanceName(value)}  
            />
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
            <EnableMenu label="Cardápio" init={false} />
            <Generate label="Gerar Comanda" />
          </div>

          <div className="p-6 rounded-lg shadow-sm mx-auto grid grid-cols-2 gap-4">
            <Preview 
              cardapio={false} 
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
      </div>
      <div>
        {/* Gerar o cardapio uma vez */}
        {/* Gerar as comandas N vezes baseado no (numero final - numero inicial) e começando do numero inicial ate o numero final */}
      </div>
    </div>
  )
}

export default App

