import React from 'react';

export default function Employees({ photo, name, role }) {
  return (
    <div className="relative">
      <div className="relative">
        <img src={photo} alt={name} className="w-35 sm:w-40" />
        <p className="absolute left-35 sm:left-40 top-0 text-xs font-serif [writing-mode:vertical-lr]">
          {role}
        </p>
      </div>
      <p className="text-sm font-bold">{name}</p>
    </div>
  );
}
