const fs = require('fs');
const countries = require('./countries.json')
const topoJson = require('./world-countries-sans-antarctica.json')

let newCountries = {};

console.log('start countries checking');

countries.array.forEach(country => {
    console.log('Checking for: ' + country.country + "/" + country.name);
    topoJson.objects.countries1.geometries.forEach(topo => {
        if (country.country === topo.properties['Alpha-2']) {
            console.log(country.country + "/" + country.name + " is Valid!");
            newCountries[topo.id] = {
                latitude: country.latitude,
                longitude: country.longitude,
            };
            console.log(country.country + "/" + country.name + " was added!")
        }
    });
});

console.log('countries checking finished');

fs.writeFile('out/countriesCoordinate.json', JSON.stringify(newCountries), function (err) {
    if (err) throw err;
    console.log('countriesCoordinate.json Saved!');
})
