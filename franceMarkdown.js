const fs = require('fs');
const topoJson = require('./fr-departments.json');

let markdownOutput = '|Région|Département|ISO (Département)|\n|---|---|---|\n'

topoJson.objects.FRA_adm2.geometries.forEach(e => {
    try {
        markdownOutput+= '|' + e.properties.NAME_1 + '|' + e.properties.NAME_2 + '|' + e.properties.HASC_2 + '|\n';
    } catch (e) {}
});

fs.writeFile('out/france.md', markdownOutput, function (err) {
    if (err) throw err;
    console.log('france.md Saved!');
})