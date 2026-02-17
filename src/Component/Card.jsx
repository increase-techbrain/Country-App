import React from "react";
import { Link, useLocation } from "react-router-dom";

const Card = ({ country }) => {

  const location = useLocation();
  const handleClick = () =>{
    sessionStorage.setItem("homeScroll", String(window.scrollY || 0));
    sessionStorage.setItem("homePath", location.pathname)
  }
  return (
    <div className="w-87 bg-slate-900 border  shadow-xl hover:shadow-2xl ">
      <figure>
        <img
          src={country.flags?.svg}
          alt={country.name?.common}
          className="h-44 w-full mt-1 object-contain"
        />
      </figure>

      <div className=" p-2 text-white">
        <h2 className="mt-4 text-lg leading-relaxed font-bold text-white text-center">
          {country.name?.common} </h2>
       
        <p>Population: {country.population.toLocaleString()}</p>
        <p>Region: {country.region}</p>
        <p>Capital: {country.capital?.[0]}</p>
        <div className="justify-end flex">
          <Link to={`/country/${country.name.common}`}>
            <button className="py-1 px-2 bg-purple-500 rounded mb-2 text-white hover:bg-purple-700 cursor-pointer transition"
            onClick={handleClick}>
              Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
