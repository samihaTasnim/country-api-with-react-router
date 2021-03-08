import React from 'react';
import { Link } from 'react-router-dom';

const Countries = (props) => {
  const {name, population} = props.country
  return (
    <div>
      <Link to={`/country/${name}`}><p>{name}</p></Link>
      <p>{population}</p>
    </div>
  );
};

export default Countries;