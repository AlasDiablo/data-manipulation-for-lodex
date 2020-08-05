const fs = require('fs');
const topoJson = require('./fr-departments.json');

let jsonOutput = []

topoJson.objects.FRA_adm2.geometries.forEach(e => {
    try {
        jsonOutput.push({
            'iso': e.properties.HASC_2,
            'region': e.properties.NAME_1,
            'department': e.properties.NAME_2,
        });
    } catch (e) {}
});

fs.writeFile('out/france.json', JSON.stringify(jsonOutput), function (err) {
    if (err) throw err;
    console.log('france.json Saved!');
})