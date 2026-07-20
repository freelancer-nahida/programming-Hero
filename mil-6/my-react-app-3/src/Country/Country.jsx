import React, {  useState } from 'react';
import './country.css';

const Country = ({country , handleVisitedCountries, handleVisitedFlag}) => {

    console.log(handleVisitedCountries);
    
    // console.log(country.population.population);
    const [visited , setVisited] = useState(false);

    const handleVisited = () =>{
        // basic system
    //    if(visited){
    //     setVisited(false);
    //    }
    //     else{
    //         setVisited(true)
    //     }
    // second system
    // setVisited(Visited ? false : true)
    // third system
    setVisited(!visited)
 handleVisitedCountries(country)
    }

    
    return (
    // <div className={`country border-lg  text-center ${visited ? 'country-visited' : 'country-not-visited'}`} >
    <div className={`country ${visited && 'country-visited'}`} >
          <img src={country?.flags?.flags?.png} ></img>
            <h3>Name: {country.name.common}</h3>
            <p>Population: {country.population.population} </p>
            <p>Area: {country.area.area} {country.area.area >300000 ? "Big countries" : "Small Countries"}</p>
            <button onClick={handleVisited}>{visited ? 'visited' : 'Not Visited'}</button>

            <button onClick={() => {handleVisitedFlag(country?.flags?.flags?.png)}}>Add Visited Flag</button>

        </div>
    );
};

export default Country;

/**
 * 1.inline css(style object)
 * 
 * 
 */