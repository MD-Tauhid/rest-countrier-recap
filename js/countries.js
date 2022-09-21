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

const getCountryHtml = ({name, flags, capital, area, region}) =>{
    return `
        <div class="country">
            <h2>${name.common}</h2>
            <h4>Capital: ${capital}</h4>
            <P>Area: ${area}</p>
            <P>Continent: ${region}</p>
            <img src="${flags.png}">
        </div>
    `
}

// option:1/Original 
// const getCountryHtml = country =>{
//     return `
//         <div class="country">
//             <h2>${country.name.common}</h2>
//             <h4>Capital: ${country.capital}</h4>
//             <img src="${country.flags.png}">
//         </div>
//     `
// }

// option:2
// const getCountryHtml = country =>{
//     const {name, flags, capital} = country;
//     return `
//         <div class="country">
//             <h2>${name.common}</h2>
//             <h4>Capital: ${capital}</h4>
//             <img src="${flags.png}">
//         </div>
//     `
// }


loadCountries();