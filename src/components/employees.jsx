import React from 'react';

export default function Employees({ photo, name, role }) {
  return (
    <div className="relative">
      <div className="relative">
        <img src={photo} alt={name} className="w-35 sm:w-40 md:w-45 lg:w-60" />
        <p className="absolute left-35 md:left-45 lg:text-[1rem] lg:left-60 md:text-[0.6rem] top-0 text-xs font-serif [writing-mode:vertical-lr]">
          {role}
        </p>
      </div>
      <p className="text-sm md:text-lg lg:text-2xl font-bold">{name}</p>
    </div>
  );
}
