const fs = require('fs');
const topoJson = require('./world-countries-sans-antarctica.json');

let jsonOutput = []

topoJson.objects.countries1.geometries.forEach(e => {
    try {
        jsonOutput.push({
            'pays': e.properties.name,
            'alpha-2': e.properties['Alpha-2'],
            'alpha-3': e.id,
        });
    } catch (e) {}
});

fs.writeFile('out/world.json', JSON.stringify(jsonOutput), function (err) {
    if (err) throw err;
    console.log('world.json Saved!');
})