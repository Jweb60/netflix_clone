import React from "react";

interface MobileMenuProps {
  visible: boolean;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ visible }) => {
  
  if (!visible) {
    return null;
  }
  
  return (
    <div className="bg-black w-56 absolute top-8 left-0 flex-col border-2 border-gray-800 flex">
      <div className="flex flex-col gap-4 ">

        <div className="px-3 m-3 text-center text-white hover:underline">
          Accueil
        </div>
        <div className="px-3 text-center text-white hover:underline">
          Séries
        </div>
        <div className="px-3 text-center text-white hover:underline">
          Films
        </div>
        <div className="px-3 text-center text-white hover:underline">
          Nouveautés lesplus regardées
        </div>
        <div className="px-3 text-center text-white hover:underline">
          Ma liste
        </div>
        <div className="px-3 mb-3 text-center text-white hover:underline">
          Explorer par langue
        </div>
      </div>
    </div>
  );
}

  export default MobileMenu;