import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const IndivisualCountry = () => {
  const {countryName} = useParams()
   const [countryname, setCountryName] = useState([])

  useEffect( ()=> {
    fetch(`https://restcountries.eu/rest/v2/name/${countryName}`)
    .then(res => res.json())
    .then(data => setCountryName(data))
  }, [countryName])
  
  return (
    <div>
      <h2>{countryname.map(x => x.name)}</h2>
      <img src={countryname.map(x => x.flag)} alt=""/>
    </div>
  );
};

export default IndivisualCountry;