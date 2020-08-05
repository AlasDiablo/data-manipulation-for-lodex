const fs = require('fs');
const topoJson = require('./fr-departments.json');

let csvOutput = '"Région","Département","ISO (Département)"\n'

topoJson.objects.FRA_adm2.geometries.forEach(e => {
    try {
        csvOutput+='"' + e.properties.NAME_1 + '","' + e.properties.NAME_2 + '","' + e.properties.HASC_2 + '"\n';
    } catch (e) {}
});

fs.writeFile('out/france.csv', csvOutput, function (err) {
    if (err) throw err;
    console.log('france.csv Saved!');
})