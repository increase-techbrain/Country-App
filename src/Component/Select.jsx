import React from "react";

const Select = ({ region, setRegion }) => {
  const regions = ["Africa", "Americas", "Asia", "Europe", "Oceania"];
  return (
   <div>
     <select className=" w-full md:w-90 p-2 shadow:sm border border-gray-300 rounded shadow focus:ring-2 focus:ring-blue-500  text-white  cursor-pointer"
      value={region}
      onChange={(e) => setRegion(e.target.value)}>

      <option value="" > Filter by Region</option>
       
      {regions.map((reg) => (
        <option key={reg} value={reg} className="text-green-600">
          {reg}
        </option>
      ))}
    </select>
   </div>
  );
};

export default Select;
