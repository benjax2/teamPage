import React from 'react';
import Employees from './employees';

export default function ShowEmployees() {
  return (
    <>
      <main className="grid grid-cols-2 md:grid-cols-3 gap-10 max-w-6xl mx-auto p-4 lg:gap-12">
        <div className="row-span-3 flex items-center justify-center">
          <Employees
            photo="../public/images/photo1.png"
            name="Bill Mahoney"
            role="PRODUCT OWNER"
          />
        </div>
        <div></div>
        <div className="row-span-3 flex items-center justify-center">
          <Employees
            photo="../public/images/photo2.png"
            name="Saba Cabrera"
            role="ART DIRECTOR"
          />
        </div>
        <div className="row-span-3 flex items-center justify-center">
          <Employees
            photo="../public/images/photo3.png"
            name="Shae Le"
            role="TECH LEAD"
          />
        </div>
        <div className="row-span-3 flex items-center justify-center">
          <Employees
            photo="../public/images/photo4.png"
            name="Skylah Lu"
            role="UX DESIGNER"
          />
        </div>
        <div className="row-span-3 flex items-center justify-center">
          <Employees
            photo="../public/images/photo5.png"
            name="Griff Richards"
            role="DEVELOPER"
          />
        </div>
        <div className="row-span-3 flex items-center justify-center">
          <Employees
            photo="../public/images/photo6.png"
            name="Stan John"
            role="DEVELOPER"
          />
        </div>
      </main>
    </>
  );
}
