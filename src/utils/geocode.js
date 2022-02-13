const request = require('request')

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) +'.json?access_token=pk.eyJ1IjoiZGFya3BpZWNlMDA3IiwiYSI6ImNrejloOHl2NDAxazMyd2xybDh2d2Vkb2IifQ.djCpY2CtsEHTRSZ-gxwozw&limit=1'
    request({url, json: true}, (error, Response) => {
        if(error) { 
            callback('Unable to connect to location services', undefined)
        } else if(Response.body.features.length === 0) { 
            callback('Unable to locate the entered location, try another search!', undefined)
        } else {
            callback(undefined, {
                latitude: Response.body.features[0].center[1],
                longitude: Response.body.features[0].center[0],
                location: Response.body.features[0].place_name
            })
        }
    })
}

module.exports = geocode