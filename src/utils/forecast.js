const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.weatherbit.io/v2.0/current?lat=' + latitude + '&lon=' + longitude + '&key=47ff47afe4744b00a97cb943708c44a5&units=M'
    request({url, json: true}, (error, Response) => {
        if(error) {
            callback('Unable to connect to weather services!', undefined)
        } else if(Response.body.error) {
            callback('Unable to find location!', undefined)
        } else {
            callback(undefined, `${Response.body.data[0].weather.description}, it is currently ${Response.body.data[0].temp} degree out. There is a ${Response.body.data[0].precip}% chance of rain.`)
        }
    })
}

module.exports = forecast