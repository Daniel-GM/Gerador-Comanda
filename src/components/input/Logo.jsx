import { useState } from 'react';

const Logo = ({ label }) => {
  const [logo, setLogo] = useState(null);

  const handleLogo = (e) => {
    setLogo(e.target.files[0]);
  };

  return (
    <div className="mb-4">
      <label className="block mb-2 font-bold">{label}</label>
      <input 
        type="file" 
        id="logo" 
        onChange={handleLogo}
        className="hidden"
      />
      <label
       htmlFor="logo" 
       className="block text-center w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer hover:bg-gray-200 focus:outline-none px-4 py-2"
      >
        {logo ? "Arquivo escolhido: " + logo.name : "Selecione um Arquivo" }
      </label>
      {logo && (
        <img 
          src={URL.createObjectURL(logo)} 
          alt="logo"
          className="mt-4 object-cover"
        />
      )}
    </div>
  );
};

export default Logo;