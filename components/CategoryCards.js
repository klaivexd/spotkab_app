import React from 'react';
import Image from 'next/image';

const CategoryCards = ({ img, category }) => {
  return (
    <div className="flex items-center m-5 mt-5 space-x-4 cursor-pointer hover:bg-slate-100 hover:scale-105 transition
    transform duration-200 ease-out">
      {/* Left */}
      <div className="relative h-16 w-16 border-2 rounded-lg bg-slate-300">
        <Image
          src={img}
          alt={category}
          layout="fill"
        />
      </div>

      {/* Right */}
      <div>
        <h2 className="text-slate-950 font-bold">{category}</h2>
      </div>
    </div>
  );
};

export default CategoryCards;