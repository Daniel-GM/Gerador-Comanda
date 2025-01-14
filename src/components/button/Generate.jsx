const Generate = () => {
  const handleGenerate = () => {
    alert("Comanda gerada com sucesso!")
  }

  return (
    <div className="mb-4">
      <button 
        onClick={handleGenerate} 
        className="w-full bg-emerald-600 hover:bg-emerald-700 text-white border border-gray-300 py-2 font-bold rounded-lg"
      >
        Gerar Comanda
      </button>
    </div>
  )
}

export default Generate