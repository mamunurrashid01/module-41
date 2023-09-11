import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import './countries.css'

const Countries = () => {
    const [countries, setCountries] = useState([]);
    const [visitedCountries, setVisitedcountry] = useState([]);
    const [visitedFlags, setVisitedFlags] = useState([]);


    useEffect(() =>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountries(data))
    } ,[])

        const handleVisitedCountry = (country) =>{
            const newVisitedCountry = [...visitedCountries, country];
            setVisitedcountry(newVisitedCountry);
        }
        const handleVisitedFlags = (flag) =>{
            const newFlags = [...visitedFlags, flag]
            setVisitedFlags(newFlags);

        }

    return (
        <div>
            <h2>Countries:{countries.length}</h2>
            <div>
                <h2>Visited Countries:{visitedCountries.length}</h2>
                <ul>
                    {
                        visitedCountries.map(country =><li key={country.cca3}>{country.name.common}</li>)
                    }
                </ul>
            </div>
            <div className="flag-container">
                {
                    visitedFlags.map((flag, idx) => <img key={idx} src={flag}></img>)
                }
            </div>

            <div  className="countries-container">
            {
                countries.map(country =><Country key={country.cca3} 
                    handleVisitedCountry = {handleVisitedCountry}
                    handleVisitedFlags = {handleVisitedFlags}
                    country={country}></Country>)
           }
        </div>
        </div>
       
    );
};

export default Countries;