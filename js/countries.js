const loadCountries = () =>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => displayCountries(data))
}

const displayCountries = countries =>{
    console.log(countries[0]);
    const countriesHtml = countries.map(country => getCountryHtml(country));
    // console.log(countriesHtml);
    const countryContainer = document.getElementById('countries');
    countryContainer.innerHTML = countriesHtml.join(' ');
}

const getCountryHtml = country =>{
    return `
        <div class="country">
            <h2>${country.name.common}</h2>
            <h4>Capital: ${country.capital}</h4>
            <img src="${country.flags.png}">
        </div>
    `
}

loadCountries();