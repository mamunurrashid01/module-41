import { useState } from 'react';
import './Country.css'
const Country = ({country, handleVisitedCountry, handleVisitedFlags}) => {
    console.log(country);
    const {name, flags, capital, timezones, area, borders, startOfWeek, cca3} = country;

    const [visited, setVisited] =  useState(false);

    const visitHandle = () =>{
        setVisited(!visited);
    }
    // const passVisitedCountry = () => handleVisitedCountry(country)

    return (
        <div className={`country ${visited ? 'visited': 'non-visited'}`}>
            <h3 style={{color: visited ? 'greenyellow' : 'red'}}>Name: {name?.common}</h3>
            <img src={flags.png} alt="" />
            <h3>Capital: {capital}</h3>
            <h3>Capital: {timezones}</h3>
            <p>Area: {area}</p>
            <p>Border: {borders}</p>
            <p>Border: {startOfWeek}</p>
            <p>Code: {cca3}</p>
            <button style={{backgroundColor: visited ? 'skyblue' : 'yellow'}} onClick={visitHandle}>{visited ? 'Visited' : 'Going'} </button>
            {visited ? 'I have visited' : 'I want to visite'}
            <button onClick={() => handleVisitedCountry(country)}>Mark Visited</button> 
            <br />
            <button onClick={() => {handleVisitedFlags(country.flags.png)}}>Add Flags</button>
        </div>
    );
};

export default Country;