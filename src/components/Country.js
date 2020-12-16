



const Country = ({country}) => {
    if (!country) {
        return null
      }
    return (
        <div className="country-info">
        <p>Name: {country.name}</p>
        <img src={country.flag} alt={`Flag of ${country.name}`}></img>
        <p>Population {country.population}</p>
        </div>
    )
}

export default Country;