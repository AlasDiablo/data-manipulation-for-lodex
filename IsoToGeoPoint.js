const fs = require('fs');
const countries = require('./countries.json')
const topoJson = require('./world-countries-sans-antarctica.json')

let newCountriesJson = {"values": []};

console.log('start countries checking');

countries.array.forEach(country => {
    console.log('Checking for: ' + country.country + "/" + country.name);
    topoJson.objects.countries1.geometries.forEach(topo => {
        if (country.country === topo.properties['Alpha-2']) {
            console.log(country.country + "/" + country.name + " is Valid!");
            newCountriesJson.values.push({
                iata: topo.id,
                name: country.name,
                latitude: country.latitude,
                longitude: country.longitude,
            });

            console.log(country.country + "/" + country.name + " was added!")
        }
    });
});

console.log('countries checking finished');

fs.writeFile('out/countriesCoordinate.json', JSON.stringify(newCountriesJson), function (err) {
    if (err) throw err;
    console.log('countriesCoordinate.json Saved!');
})
