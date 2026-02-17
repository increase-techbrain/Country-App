import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Searchbar from "./Searchbar";
import Select from "./Select";
import axios from "axios";
import Card from "./Card";

const Home = () => {
  const [countries, setCountries] = useState([]);
  const [searchTerm, setSearchTerm] = useState(
    localStorage.getItem("searchTerm") || "",
  );
  const [region, setRegion] = useState(localStorage.getItem("region") || "");

  useEffect(() => {
    axios
      .get(
        "https://restcountries.com/v3.1/all?fields=name,flags,region,capital,population,cca3",
      )
      .then((res) => setCountries(res.data))
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    const saved = sessionStorage.getItem("homeScroll");
    if (saved !== null) {
      window.scrollTo(0, parseInt(saved, 10) || 0);
      const timeout = setTimeout(() => {
        window.scrollTo({ top: scrollY, behavior: "smooth" });
        sessionStorage.removeItem("homeScroll");
        sessionStorage.removeItem("homePath");
      }, 50);
      return () => clearTimeout(timeout);
    }
  }, [countries.length]);

  useEffect(() => {
    localStorage.setItem("region", region);
    localStorage.setItem("searchTerm", searchTerm);
  }, [searchTerm, region]);

  const filteredCountries = countries.filter((country) => {
    return (
      country.name.common.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (region ? country.region === region : true)
    );
  });

  return (
    <div className="w-full">
      <Navbar />
      <div className="w-full  bg-slate-800    ">
        <div className="flex flex-col md:flex-row justify-between gap-4 mb-6 p-10">
          <Searchbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          <Select region={region} setRegion={setRegion} />
        </div>
        <div className=" flex flex-wrap justify-center gap-6">
          {filteredCountries.map((country) => (
            <Card key={country.cca3} country={country} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
