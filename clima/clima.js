const axios = require('axios');


const getClima = async(lat, lng) => {

    let resp = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lng }&units=metric&appid=a369c4de20541fdb74ae65ec86394697`)

    return resp.data.main.temp;
}


module.exports = {
    getClima
}