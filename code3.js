const jsonToCSV = require('json-to-csv');

// valores que tendra cada columna aca podria deberia haber un FETCH llamando al servidor donde esta la BD
const results = [
    {"_id":"62239fc4b3db1ecc349e87b1","id":1,"tipo":28,"user":{"id":2,"name":"victoria","edad":"26","telefono":"12434332422423432","educacion":"secundaria","estadoCivil":"casada","genero":"femenino","_id":"62239fc4b3db1ecc349e87b2"},"posiciones":[],"posicionesTiempo":[],"posicionesNumericas":[],"__v":0},{"_id":"6223a41ebe76167acb8950b5","id":4,"tipo":28,"user":{"id":2,"name":"victoria","edad":"26","telefono":"12434332422423432","educacion":"secundaria","estadoCivil":"casada","genero":"femenino","_id":"6223a41ebe76167acb8950b6"},"posiciones":[],"posicionesTiempo":[],"posicionesNumericas":[],"__v":0},{"_id":"6223f2713bb48478be2966c6","id":5,"tipo":28,"user":{"id":2,"name":"victoria","edad":"26","telefono":"12434332422423432","educacion":"secundaria","estadoCivil":"casada","genero":"femenino","_id":"6223f2713bb48478be2966c7"},"posiciones":[],"posicionesTiempo":[],"posicionesNumericas":[],"__v":0},{"_id":"6223f3a03bb48478be2966e4","id":2,"tipo":28,"user":{"id":2,"name":"victoria","edad":"26","telefono":"12434332422423432","educacion":"secundaria","estadoCivil":"casada","genero":"femenino","_id":"6223f3a03bb48478be2966e5"},"posiciones":[],"posicionesTiempo":[],"posicionesNumericas":[],"__v":0},{"_id":"6223f3d73bb48478be2966e9","id":3,"tipo":28,"user":{"id":2,"name":"victoria","edad":"26","telefono":"12434332422423432","educacion":"secundaria","estadoCivil":"casada","genero":"femenino","_id":"6223f3d73bb48478be2966ea"},"posiciones":["casa","panaderia","oficina"],"posicionesTiempo":[1,2,3],"posicionesNumericas":[1,2,3,4],"__v":0}];
// 

const o = [
    {a: 1, b: 2, c: 3},
    {a: 4, b: 5, c: 6}
];
const fileName = 'something.csv';

jsonToCSV(results, fileName)
.then(() => {
  // success
})
.catch(error => {
  // handle error
})