import axios from 'axios';

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?units=metric&APPID=ca2ad824250da04814f343e3dfcd8ea6';

module.exports = {
    getTemp: function(location) {
        var encoded_location = encodeURIComponent(location);
        var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encoded_location}`;
        return axios.get(requestUrl).then(
            // success
            function(res) {
                if (res.data.cod && res.data.message) {
                    throw new Error(res.data.message);
                } else {
                    return res.data.main.temp;
                }
            },
            // error
            function(res) {
                throw new Error(res.data.message);
            }
        );
    }
}