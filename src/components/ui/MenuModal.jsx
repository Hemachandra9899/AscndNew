import React from "react";

const MenuModal = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-50 bg-white/50 backdrop-blur-md p-6">
  <div className="flex justify-between items-center mb-6">
    <button onClick={onClose} className="text-lg font-bold">✕ Close</button>
    <h1 className="text-2xl font-[Sarina]">ascnd</h1>
    <button className="bg-black text-white px-4 py-1 rounded-full">BAG:0</button>
  </div>


      <div className="grid grid-cols-3 gap-8 mt-10">
        <div>
          <h2 className="text-xl font-bold">All New In</h2>
          <img src="/new-tank.png" alt="New" className="w-full max-w-xs mt-4" />
        </div>
        <div>
          <h2 className="text-xl font-bold">Mens</h2>
          <ul className="mt-2 space-y-1">
            <li>- Full tshirts</li>
            <li>- tshirts</li>
            <li>- tshirts</li>
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-bold">Womens</h2>
          <ul className="mt-2 space-y-1">
            <li>- Full tshirts</li>
            <li>- tshirts</li>
            <li>- tshirts</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MenuModal;
