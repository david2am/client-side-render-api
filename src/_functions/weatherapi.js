const axios = require('axios')

exports.handler = async function (e, ctx, cb) {
  const { lat, lon } = e.queryStringParameters
  const { WEATHER_API_KEY } = process.env
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`

  try {
    const response = await axios.get(url)
    cb(null, {
        statusCode: 200,
        body: JSON.stringify(response.data)
      }
    )
  } catch (e) {
    console.error(e.msg)
  }
}