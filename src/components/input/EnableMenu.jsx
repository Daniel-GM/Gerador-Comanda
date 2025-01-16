import { useState } from "react";

const EnableMenu = ({ label, init }) => {
  const [checked, setChecked] = useState(init);

  const handleToggle = () => {
    const newChecked = !checked;
    setChecked(newChecked);
  };

  return (
    <div className="mb-4">
      <label className="block mb-2 font-bold">{label}</label>
      
      <div
        className="relative inline-block w-12 h-6 cursor-pointer"
        onClick={handleToggle}
      >
        <div
          className={`absolute top-0 left-0 w-full h-full rounded-full transition-colors ${
            checked ? "bg-green-500" : "bg-gray-400/50"
          }`}
        ></div>

        <div
          className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full shadow transition-transform ${
            checked ? "translate-x-6" : "translate-x-0"
          }`}
        ></div>
      </div>

      <input
        type="checkbox"
        checked={checked}
        onChange={() => {}}
        className="hidden"
      />
    </div>
  );
};

export default EnableMenu;
