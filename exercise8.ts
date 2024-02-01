/* Take his dataset of earth meteorite landings from NASA https://data.nasa.gov/resource/y77d-th95.json . Create an application which loads the dataset as a JSON file. You can load JSON file to node application with var someObject = require('./somefile.json'). Create a function, which prints the names of all meteorites.

{
        "name": "Aachen",
        "id": "1",
        "nametype": "Valid",
        "recclass": "L5",
        "mass": "21",
        "fall": "Fell",
        "year": "1880-01-01T00:00:00.000",
        "reclat": "50.775000",
        "reclong": "6.083330",
        "geolocation": {
            "type": "Point",
            "coordinates": [
                6.08333,
                50.775
            ]
        }
    },
*/

const meteoritesDataset = require('./meteorites.json');
interface Meteorite{
    name: string;
    id: string;
    nametype: string;
    recclass: string;
    mass: string;
    fall: string;
    year: string;
    reclat: string;
    reclong: string;
    geolocation: {
        type: string;
        coordinates: number[];
    }

}
function printName(){
    for (let i = 0; i < meteoritesDataset.length; i++) {
        console.log(meteoritesDataset[i].name);
    }
}
printName();
console.log("------------------");
function printRandomMeteorites(data: Meteorite[]){
    let randomIndex = Math.floor(Math.random() * data.length);
    console.log(`Name: ${data[randomIndex].name} \n Mass: ${data[randomIndex].mass} \n Year: ${data[randomIndex].year.slice(0,4)}`);
}
printRandomMeteorites(meteoritesDataset);
console.log(`Exercise 13`);
function printRandomNumberOfMeteorites(data: Meteorite[], numberOfMeteorites: number){
    for (let i = 1; i < numberOfMeteorites; i++) {
        printRandomMeteorites(data);
    }
}
printRandomNumberOfMeteorites(meteoritesDataset,3);