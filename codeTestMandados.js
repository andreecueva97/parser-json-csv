// llamado a la dependencia de creacion de csv
const csvwriter = require('csv-writer');
  
var createCsvWriter = csvwriter.createObjectCsvWriter
  
// parseo de las columnas dentro del modelo
const csvWriter = createCsvWriter({
  // indica el nombre del csv que tendra el archivo creado de salida
  path: 'testMandados_data.csv',
  header: [
  
    // indica el titulo que tendras las columnas del CSV
    {id: '_id', title: '_id'},
    {id: 'id', title: 'id'},
    {id: 'tipo', title: 'tipo'},
    
    {id: '[user/id]', title: 'user/id'},
    {id: 'user.user.name', title: 'user/name'},
    {id: 'edad', title: 'user/edad'},
    {id: 'telefono', title: 'user/telefono'},
    {id: 'user.user.educacion', title: 'user/educacion'},
    {id: 'estadoCivil', title: 'user/estadoCivil'},
    {id: 'genero', title: 'user/genero'},
    {id: '_id', title: 'user/_id'},
    {id: '__v', title: '__v'},

    {id: 'posiciones.0', title: 'posiciones/0'},
    {id: 'posiciones', title: 'posiciones/1'},
    {id: 'posiciones', title: 'posiciones/2'},
    {id: 'posiciones', title: 'posiciones/3'},
    {id: 'posiciones', title: 'posiciones/4'},
    {id: 'posiciones', title: 'posiciones/5'},
    {id: 'posiciones', title: 'posiciones/6'},
    {id: 'posiciones', title: 'posiciones/7'},
    {id: 'posiciones', title: 'posiciones/8'},
    {id: 'posiciones', title: 'posiciones/9'},

    {id: 'posicionesTiempo', title: 'posicionesTiempo/0'},
    {id: 'posicionesTiempo', title: 'posicionesTiempo/1'},
    {id: 'posicionesTiempo', title: 'posicionesTiempo/2'},
    {id: 'posicionesTiempo', title: 'posicionesTiempo/3'},
    {id: 'posicionesTiempo', title: 'posicionesTiempo/4'},
    {id: 'posicionesTiempo', title: 'posicionesTiempo/5'},
    {id: 'posicionesTiempo', title: 'posicionesTiempo/6'},
    {id: 'posicionesTiempo', title: 'posicionesTiempo/7'},
    {id: 'posicionesTiempo', title: 'posicionesTiempo/8'},
    {id: 'posicionesTiempo', title: 'posicionesTiempo/9'},

    {id: 'posicionesNumericas', title: 'posicionesNumericas/0'},
    {id: 'posicionesNumericas', title: 'posicionesNumericas/1'},
    {id: 'posicionesNumericas', title: 'posicionesNumericas/2'},
    {id: 'posicionesNumericas', title: 'posicionesNumericas/3'},
    {id: 'posicionesNumericas', title: 'posicionesNumericas/4'},
    {id: 'posicionesNumericas', title: 'posicionesNumericas/5'},
    {id: 'posicionesNumericas', title: 'posicionesNumericas/6'},
    {id: 'posicionesNumericas', title: 'posicionesNumericas/7'},
    {id: 'posicionesNumericas', title: 'posicionesNumericas/8'},
    {id: 'posicionesNumericas', title: 'posicionesNumericas/9'},
    
  ]
});
  
// valores que tendra cada columna aca podria deberia haber un FETCH llamando al servidor donde esta la BD
const results = [
    {"_id":"62239fc4b3db1ecc349e87b1","id":1,"tipo":28,"user":{"id":2,"name":"victoria","edad":"26","telefono":"12434332422423432","educacion":"secundaria","estadoCivil":"casada","genero":"femenino","_id":"62239fc4b3db1ecc349e87b2"},"posiciones":[],"posicionesTiempo":[],"posicionesNumericas":[],"__v":0},{"_id":"6223a41ebe76167acb8950b5","id":4,"tipo":28,"user":{"id":2,"name":"victoria","edad":"26","telefono":"12434332422423432","educacion":"secundaria","estadoCivil":"casada","genero":"femenino","_id":"6223a41ebe76167acb8950b6"},"posiciones":[],"posicionesTiempo":[],"posicionesNumericas":[],"__v":0},{"_id":"6223f2713bb48478be2966c6","id":5,"tipo":28,"user":{"id":2,"name":"victoria","edad":"26","telefono":"12434332422423432","educacion":"secundaria","estadoCivil":"casada","genero":"femenino","_id":"6223f2713bb48478be2966c7"},"posiciones":[],"posicionesTiempo":[],"posicionesNumericas":[],"__v":0},{"_id":"6223f3a03bb48478be2966e4","id":2,"tipo":28,"user":{"id":2,"name":"victoria","edad":"26","telefono":"12434332422423432","educacion":"secundaria","estadoCivil":"casada","genero":"femenino","_id":"6223f3a03bb48478be2966e5"},"posiciones":[],"posicionesTiempo":[],"posicionesNumericas":[],"__v":0},{"_id":"6223f3d73bb48478be2966e9","id":3,"tipo":28,"user":{"id":2,"name":"victoria","edad":"26","telefono":"12434332422423432","educacion":"secundaria","estadoCivil":"casada","genero":"femenino","_id":"6223f3d73bb48478be2966ea"},"posiciones":["casa","panaderia","oficina"],"posicionesTiempo":[1,2,3],"posicionesNumericas":[1,2,3,4],"__v":0}];
// Llamo al metodo de escribir csv y le paso los datos si esta todo bien me crea el archivo sino deberia hacer un CATCH por las dudas.
csvWriter
  .writeRecords(results)
  .then(()=> console.log('Data uploaded into csv,successfully'));
