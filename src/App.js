import React, { useEffect, useState } from "react";
import "./App.css";
import countriesAll from "./countriesAll.json";
import Header from "./Header";
import CountryList from "./CountryList";
import SearchBox from "./SearchBox";

function App() {
  const [fetchedData, setFetchedData] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.eu/rest/v2/all")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);

        setFetchedData(data);
      });
  }, []);

  const handleSearch = (event) => {
    let searchString = event.target.value;
    console.log(searchString);
    setFetchedData(
      fetchedData.filter(({ name, capital }) => {
        return (
          name.toLowerCase().includes(searchString) ||
          capital.toLowerCase().includes(searchString)
        );
      })
    );
  };

  return (
    <div>
      handleSearch={handleSearch}
      <Header />
      <SearchBox />
      <CountryList countries={countriesAll} />
    </div>
  );
}

export default App;
