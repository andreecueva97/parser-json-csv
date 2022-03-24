////////////////////////////////////////////////////////////////////////////podria servir para el lado del frontend
// //import React, { Component } from ‘react’;
// const exportFromJSON = require('export-from-json');
// let blob = fetch(url).then(r => r.blob());
// const data = [{ foo: 'foo' }, { bar: 'bar'}];
// const fileName = 'download';
// const exportType = 'xls';
// // class App extends Component {
// // ExportToExcel = () => {
// exportFromJSON({ data, fileName, exportType });

///
const jsonexport = require('jsonexport');
const fs = require('fs');

const jsonXlsx = require('icg-json-to-xlsx');
const jsonXlsxWriteFile = require('icg-json-to-xlsx').writeFile; 
const pd = require('pandas');
const Panda = require('pandas/lib/pandas');
const pandas = require('pandas');
//import {CSVLink, CSVDownload} from 'react-csv';
//const reactcsv = require('react-csv');
//const CSVLinkk = reactcsv.CSVLink;

const contacts = [{
    name: 'Bob',
    lastname: 'Smith'
},{
    name: 'James',
    lastname: 'David'
},{
    name: 'Robert',
    lastname: 'Miller'
},{
    name: 'David',
    lastname: 'Martin'
}];

jsonexport(contacts, function(err, csv){
    if (err) return console.error(err);
   // console.log(csv);
});

//const jsonexport = require('jsonexport');

const contactss = [{
   name: 'Bob',
   lastname: 'Smith',
   family: {
       name: 'Peter',
       type: 'Father'
   }
},{
   name: 'James',
   lastname: 'David',
   family:{
       name: 'Julie',
       type: 'Mother'
   }
},{
   name: 'Robert',
   lastname: 'Miller',
   family: null,
   location: [1231,3214,4214]
},{
   name: 'David',
   lastname: 'Martin',
   nickname: 'dmartin'
}];
const results = [
    {"_id":"62239fc4b3db1ecc349e87b1","id":1,"tipo":28,"user":{"id":2,"name":"victoria","edad":"26","telefono":"12434332422423432","educacion":"secundaria","estadoCivil":"casada","genero":"femenino","_id":"62239fc4b3db1ecc349e87b2"},"posiciones":[],"posicionesTiempo":[],"posicionesNumericas":[],"__v":0},{"_id":"6223a41ebe76167acb8950b5","id":4,"tipo":28,"user":{"id":2,"name":"victoria","edad":"26","telefono":"12434332422423432","educacion":"secundaria","estadoCivil":"casada","genero":"femenino","_id":"6223a41ebe76167acb8950b6"},"posiciones":[],"posicionesTiempo":[],"posicionesNumericas":[],"__v":0},{"_id":"6223f2713bb48478be2966c6","id":5,"tipo":28,"user":{"id":2,"name":"victoria","edad":"26","telefono":"12434332422423432","educacion":"secundaria","estadoCivil":"casada","genero":"femenino","_id":"6223f2713bb48478be2966c7"},"posiciones":[],"posicionesTiempo":[],"posicionesNumericas":[],"__v":0},{"_id":"6223f3a03bb48478be2966e4","id":2,"tipo":28,"user":{"id":2,"name":"victoria","edad":"26","telefono":"12434332422423432","educacion":"secundaria","estadoCivil":"casada","genero":"femenino","_id":"6223f3a03bb48478be2966e5"},"posiciones":[],"posicionesTiempo":[],"posicionesNumericas":[],"__v":0},{"_id":"6223f3d73bb48478be2966e9","id":3,"tipo":28,"user":{"id":2,"name":"victoria","edad":"26","telefono":"12434332422423432","educacion":"secundaria","estadoCivil":"casada","genero":"femenino","_id":"6223f3d73bb48478be2966ea"},"posiciones":["casa","panaderia","oficina"],"posicionesTiempo":[1,2,3],"posicionesNumericas":[1,2,3,4],"__v":0}];

let csvData= null;
jsonexport(results,{headers: ['_id','id','tipo','user.id','user.name','user.edad','user.telefono','user.educacion','user.estadoCivil','user.genero','user._id','__v','posiciones0','posiciones1','posiciones2','posiciones3','posiciones4','posiciones5','posiciones6','posiciones7','posiciones8','posiciones9','posicionesTiempo 0','posicionesTiempo 1','posicionesTiempo 2','posicionesTiempo 3','posicionesTiempo 4','posicionesTiempo 5','posicionesTiempo 6','posicionesTiempo 7','posicionesTiempo 8','posicionesTiempo 9','posicionesNumericas 0','posicionesNumericas 1','posicionesNumericas 2','posicionesNumericas 3','posicionesNumericas 4','posicionesNumericas 5','posicionesNumericas 6','posicionesNumericas 7','posicionesNumericas 8','posicionesNumericas 9']}, function(err, csv){
    if (err) return console.error(err);
    console.log(csv);
    csvData= csv;
    return csvData
});

// console.log(csvData);
// const reader = fs.createReadStream(contactss);
// const writer = fs.createWriteStream('outt.csv');

// reader.pipe(jsonexport()).pipe(writer);


//fs.writeFileSync('C:\Users\pcpc\Documents\parser-json-csv\code2.js\hey.csv', csvData);



fs.writeFileSync("test2.csv", csvData);

// jsonXlsxWriteFile("foo3.xlsx", JSON.stringify(contactss));

// const path = require('path');
// const convertCsvToXlsx = require('@aternus/csv-to-xlsx');

// let source = path.join(__dirname, 'foo2.csv');
// let destination = path.join(__dirname, 'converted_foo.xlsx');
// convertCsvToXlsx(source, destination);
// try {
//   convertCsvToXlsx(source, destination);
// } catch (e) {
//   console.error(e.toString());
// }
//  console.log((contacts));