




const Country = ({name, population}) => {
    return (
        <div className="country-info">
        <p>Name: <button className="more-info">{name}</button></p>
        <p>Population {population}</p>
        </div>
    )
}

export default Country;