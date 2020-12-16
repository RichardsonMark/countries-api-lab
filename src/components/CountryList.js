import Country from "./Country";

const CountriesList = ({countrylist}) => {
        if (!countrylist) return null;
    const countryNodes = countrylist.map((entry) => {
        let name = entry.name;
        let population = entry.population;
        let countryid = countrylist.indexOf(entry);
        let flag = entry.flag


    return (
        <Country name={name} population={population} flag={flag} key={countryid} />
    )

    })




    return (
        <>
        <h1>This is a list of countries</h1>
        <div className="country-container">{countryNodes} </div>
        </>
    )
}

export default CountriesList;