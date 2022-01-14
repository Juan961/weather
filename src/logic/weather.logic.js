const axios = require('axios')

const getWheater = async (city) => {
  const API_KEY = process.env.VUE_APP_API_KEY
  let result = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
  return result
}

module.exports = { getWheater }