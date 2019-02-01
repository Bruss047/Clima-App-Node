//const axios=require('axios');

const lugar=require('./lugar/lugar');

const clima=require('./clima/clima');

const argv=require('yargs').options({
	direccion:{
		alias:'d',
		desc: 'direccion de la ciudad para obtener el clima',
		demand: true
	}
	}).argv;


let getInfo = async(direccion) => {

    try {

        let coors = await lugar.getLugarLatLng(direccion);
        let temp = await clima.getClima(coors.lat, coors.lng);

        return `El clima en ${ coors.direccion } es de ${ temp }`;

    } catch (e) {
        return `No se pudo determinar el clima en ${ direccion }`;
    }

}
// console.log(argv.direccion);

// let encodeUrl=encodeURI(argv.direccion);//Para escapar caracteres del pais a determinar.

// axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeUrl}+Amphitheatre+Parkway,+Mountain+View,+CA&key=AIzaSyA5mjCwx1TRLuBAjwQw84WE6h5ErSe7Uj8`)
// .then(resp=>{
// 	let location=resp.data.results[0];
// 	let coors=location.geometry.location;

//     console.log('direccion: ', location.formatted_address);
//     console.log('Latitud: ', coors.lat);
//     console.log('Longitud: ', coors.lng);
// 	//console.log(JSON.stringify(resp.data,undefined, 2));
// 	//console.log(resp.status);
// })
// .catch(e=> console.log('Error!',e));

getInfo(argv.direccion)
    .then(mensaje => console.log(mensaje))
    .catch(e => console.log(e));
