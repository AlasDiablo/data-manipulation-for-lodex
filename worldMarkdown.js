const fs = require('fs');
const topoJson = require('./world-countries-sans-antarctica.json');

let markdownOutput = '|Pays|ISO (Alpha-2)|ISO (Alpha-3)|\n|---|---|---|\n'

topoJson.objects.countries1.geometries.forEach(e => {
    try {
        markdownOutput+= '|' + e.properties.name + '|' + e.properties['Alpha-2'] + '|' + e.id + '|\n';
    } catch (e) {}
});

fs.writeFile('out/world.md', markdownOutput, function (err) {
    if (err) throw err;
    console.log('world.md Saved!');
})