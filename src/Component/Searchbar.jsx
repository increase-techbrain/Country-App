import React from "react";
import {Search} from 'lucide-react'



const Searchbar = ({searchTerm, setSearchTerm}) => {
  return (
    <div className="w-full relative md:w-96 ">
      <Search size={20}  className=" absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"/>
      <input 
      type="text"
       value={searchTerm} 
       placeholder="Search for country............."
       onChange={(e)=> setSearchTerm(e.target.value)}
        className="w-full pl-10 pr-4 py-3 border border-gray-400 rounded focus:ring-2 focus:ring-indigo-500 shadow placeholder:text-gray-600" />
      
      </div>
  )
}

export default Searchbar
