import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import LocationCard from "./LocationCard";
import SearchForm from "./SearchForm";

export default function LocationsList() {
  // TODO: Add useState to track data from useEffect

  const [locations, setLocations] = useState([]);
  const [filteredData, updateData] = useState([])




  const search = charArr => {
    updateData(charArr)

};


useEffect(() => {
  axios.get("https://rickandmortyapi.com/api/location/").then(response => {
    console.log(response.data.results);
    setLocations(response.data.results);
    updateData(response.data.results);
  });
}, []);

return (
  <section className="locations-list">
    <h2>Locations List</h2>
    <Link className="main-buttons" to={"/"}>
      Home
    </Link>
    <SearchForm search={search} locations={locations} />
    {filteredData.map(char => {
      return <LocationCard key={char.id} character={char} />;
    })}
  </section>
);
}
