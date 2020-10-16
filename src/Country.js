import React from "react";

const Country = (props) => {
  return (
    <div>
      <img src={props.country.flag} alt="flag" className="cards"></img>
      <p>{props.country.name}</p>
      <p>Population: {props.country.population}</p>
      <p>Region: {props.country.region}</p>
      <p>Capital: {props.country.capital}</p>
    </div>
  );
};

export default Country;
