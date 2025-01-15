import { useState } from 'react';

const Logo = ({ label, onChange  }) => {
  const [logo, setLogo] = useState(null);
  const [nameLogo, setNameLogo] = useState(null);

  const handleLogo = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    
    setNameLogo(file.name);
    const reader = new FileReader();
    reader.onload = () => {
      setLogo(reader.result);
      onChange(reader.result);
    };    
    reader.readAsDataURL(file);
  };

  return (
    <div className="mb-4">
      <label className="block mb-2 font-bold">{label}</label>
      <input 
        type="file" 
        id="logo" 
        onChange={handleLogo}
        accept='image/*'
        className="hidden"
      />
      <label
       htmlFor="logo" 
       className="block text-center w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer hover:bg-gray-200 focus:outline-none px-4 py-2"
      >
        {logo ? "Arquivo escolhido: " + nameLogo : "Selecione um Arquivo" }
      </label>
      {logo && (
        <img 
          src={logo} 
          alt="logo"
          className="mt-4 object-cover"
        />
      )}
    </div>
  );
};

export default Logo;