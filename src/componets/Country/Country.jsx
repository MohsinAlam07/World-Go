import React, { useState } from 'react';
import './Country.css';

const Country = ({country}) => {
    // const {}=country;
    // console.log(country.country)
    const [visited,setVisited]=useState(false);
    const handleVisited=()=>{
        if(visited){
            setVisited(false)
        }
        else{
            setVisited(true)
        }
    }
    return (
        <div className={`country `}>
            <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
            <h3>Name : {country.name.common} </h3>
            <span>{country.name.official}</span>
            <p>Population: {country.population.population}</p>
            <p>Area : {country.area.area} <br></br>{country.area.area>300000?'Large Country':'Small Country'}</p>
            <button className={`${visited&&'country-visited'}`} onClick={handleVisited}>{visited?'Visited':'Not Visited'}</button>
        </div>
    );
};

export default Country;