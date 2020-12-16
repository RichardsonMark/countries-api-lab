import { useState, useEffect } from "react";
import CountryList from "../components/CountryList";


const CountriesBox = () => {


    const [countrylist, setCountryList] = useState([""]);

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


 



    return (
        <>
            <h1>Hello, World!</h1>
            <CountryList countrylist={countrylist} />
        </>
    )
}

export default CountriesBox;