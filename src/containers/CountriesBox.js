import { useState, useEffect } from "react";
import CountryList from "../components/CountryList";
import Country from "../components/Country";


const CountriesBox = () => {


    const [countrylist, setCountryList] = useState([]);
    const [selectedCountryAlpha3Code, setSelectedCountryAlpha3Code] = useState('')


    const getCountryList = () => {
        console.log("getting country list info...")
        fetch(`https://restcountries.eu/rest/v2/all`)
            .then((res) => {
                return res.json()
            })
            .then((data) => {
                setCountryList(data);
            })
    };

    useEffect(() => {
        getCountryList();
    }, []);



    
    const handleCountrySelected = alpha3Code => {
        setSelectedCountryAlpha3Code(alpha3Code)
      }

    const totalWorldPop = countrylist.reduce((accumulator, values) => {
        return accumulator + values.population
     }, 0)

     const selectedCountry = countrylist.find(country => country.alpha3Code === selectedCountryAlpha3Code)


    return (
        <>
            <h1>Hello, World!</h1>
            <h4>Total World Population: {totalWorldPop}</h4>
            <CountryList countrylist={countrylist} onCountrySelected={handleCountrySelected} />
            <Country country={selectedCountry}  />            
        </>
    )
}

export default CountriesBox;