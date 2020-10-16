import React from "react";
import Country from "./Country";
const CountryList = (props) => {
  return (
    <div>
      {props.countries.map((c) => {
        console.log(c);
        return <Country country={c} />;
      })}
    </div>
  );
};

export default CountryList;
