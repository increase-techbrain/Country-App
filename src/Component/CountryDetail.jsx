import React from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

const CountryDetail = () => {
  const { name } = useParams();
  const [country, setCountry] = useState(null);

  useEffect(() => {
    axios
      .get(
        `https://restcountries.com/v3.1/name/${name}?fullText=true&fields=name,flags,region,capital,population,subregion,language,currencies`,
      )
      .then((res) => setCountry(res.data[0]))
      .catch((err) => console.error(err));
  }, [name]);

  if (!country) {
    return (
      <div className="flex justify-center my-10 items-center min-h-screen">
        <span className="w-16 h-16 border-4 border-gray-200 border-t-blue-600 rounded-full animate-spin"></span>
      </div>
    );
  }

  return (
    <div className=" max-w-xl md:max-w-6xl mx-auto p-6 ">
      <Link
        to="/"
        className="inline-block py-2 px-4 rounded bg-gray-800 text-white mb-2"
      >
        ⬅️ Back
      </Link>

      <div className="flex flex-col md:flex-row gap-12 items-center">
        <img
          src={country.flags.svg}
          alt=""
          className="w-full md:w-1/2 rounded-lg shadow-lg"
        />

        <div>
          <h1 className="text-4xl font-bold mb-4">{country.name.common}</h1>
          <div className="space-y-2">
            <p>
              <strong>Official Name:</strong> {country.name.official}
            </p>
            <p>
              <strong>Population:</strong> {country.population.toLocaleString()}
            </p>
            <p>
              <strong>Region:</strong> {country.region}
            </p>
            <p>
              <strong>Subregion:</strong> {country.subregion}
            </p>
            <p>
              <strong>Capital:</strong> {country.capital?.join(",")}
            </p>
            <p>
              <strong>Languages:</strong>{" "}
              {country.languages
                ? Object.values(country.languages).join(",")
                : "No data available"}
            </p>
            <p>
              <strong>Currencies:</strong>{" "}
              {country.currencies
                ? Object.values(country.currencies)
                    .map((cur) => cur.name)
                    .join(",")
                : "No data Available"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryDetail;
