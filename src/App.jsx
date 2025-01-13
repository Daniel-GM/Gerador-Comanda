import './App.css'
import Generate from './components/button/Generate'
import ColorSeletion from './components/input/ColorSeletion'
import CountCommand from './components/input/CountCommand'
import Dimension from './components/input/Dimension'
import EnableMenu from './components/input/EnableMenu'
import InstanceName from './components/input/InstanceName'
import Logo from './components/input/Logo'

function App() {

  return (
    <>
      <>
        {/* v */}
        <Logo />
        <InstanceName label="Nome da Instância" />
        <CountCommand label="Número Inicial" init={1} />
        <CountCommand label="Número Final" init={2} />
        {/* x */}
        <Dimension label="Altura:" init={100} />
        <Dimension label="Largura:" init={250} />
        <ColorSeletion label="Cor da Comanda" />
        <ColorSeletion label="Cor do Texto" />
        <EnableMenu label="Cardápio" />
        <Generate label="Gerar Comanda" />
      </>

      <>
        {/* preview */}
      </>
    </>
  )
}

export default App
