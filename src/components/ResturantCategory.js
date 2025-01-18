import React, { useState } from 'react';
import ItemList from './ItemList';
import NestedItemList from './NestedItemList';

const RestaurantCategory = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border border-gray-300 rounded-md shadow-md mb-4">
      {/* Header */}
      <div 
        className="p-4 cursor-pointer bg-gray-100 hover:bg-gray-200 rounded-t-md flex justify-between items-center"
        onClick={handleToggle}
      >
        <h2 className="text-lg font-semibold">{data.title}</h2>
        <svg 
          className={`w-5 h-5 transform ${isOpen ? 'rotate-180' : 'rotate-0'} transition-transform duration-300`} 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        >
          <path d="M19 9l-7 7-7-7" />
        </svg>
      </div>
      {/* Body */}
      <div 
        className={`overflow-auto transition-max-height duration-300 ease-in-out ${isOpen ? 'max-h-screen' : 'max-h-0'}`}
      >
        <div className="p-4">
          {data["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
            ? <ItemList items={data.itemCards} />
            : <NestedItemList items={data.categories.map(obj => obj.itemCards).flat()} />}
        </div>
      </div>
    </div>
  );
};

export default RestaurantCategory;
