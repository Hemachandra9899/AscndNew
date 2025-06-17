import React from "react";
import {ShoppingBagModal} from "../../components/ui/ShoppingBagModal";

import { Button } from "../../components/ui/button";

import  { useState } from "react";
import MenuModal from "../../components/ui/MenuModal"; // Ensure this path is correct
export const NavBar=()=>{
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const closeMenu = () => setIsMenuOpen(false);
    const [isModalOpen, setModalOpen] = useState(false);

    return (
        <div>
<header className="fixed top-0 left-0 w-full h-20 z-50 backdrop-blur-m px-6 flex justify-between items-center">
  <img
    src="/vector.svg"
    alt="menu"
    className="w-8 h-8 cursor-pointer"
    onClick={toggleMenu}
  />

  <div className="text-black text-4xl font-[Sarina]">ascnd</div>

  <div className="flex items-center gap-4">
  <button
    className="text-sm bg-black text-white px-4 py-2 rounded-full"
    onClick={() => setModalOpen(true)}
  >
    BAG
  </button>
  </div>
  {/* Show the modal if open */}
{isMenuOpen && <MenuModal onClose={closeMenu} />}
{isModalOpen && <ShoppingBagModal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />}

</header>
</div>

    );
};
