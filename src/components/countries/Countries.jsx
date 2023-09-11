import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import './countries.css'

const Countries = () => {
    const [countries, setCountries] = useState([]);

    const [visitedCountries, setVisitedcountry] = useState([]);


    useEffect(() =>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountries(data))
    } ,[])

        const handleVisitedCountry = (country) =>{
            console.log('add the country');
        }

    return (
        <div>
            <h2>Countries:{countries.length}</h2>
            <div>
                <h2>Visited Countries</h2>
                <ul>

                </ul>
            </div>
            <div  className="countries-container">
            {
                countries.map(country =><Country key={country.cca3} 
                    handleVisitedCountry = {handleVisitedCountry}
                    country={country}></Country>)
           }
        </div>
        </div>
       
    );
};

export default Countries;