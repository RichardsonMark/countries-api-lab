import Country from "./Country";

const CountriesList = ({countrylist, onCountrySelected}) => {

    const handleChange = event => {
        onCountrySelected(event.target.value)
      }


    return (
        <select defaultValue="" onChange={handleChange}>
          <option value="" disabled>Choose a country</option>
          {countrylist.map(countrylist => {
            return (
              <option key={countrylist.alpha3Code} value={countrylist.alpha3Code}>{countrylist.name}</option>
            )
          })}
        </select>
    )
}

export default CountriesList;