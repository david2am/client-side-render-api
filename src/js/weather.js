async function success(position) {
  const { coords: { latitude, longitude } } = position;

  const url = `/.netlify/functions/weatherapi?lat=${latitude}&lon=${longitude}&units=metric`

  try {
    const response = await fetch(url)
    const data = await response.json()
  
    document.querySelector('#city').textContent = data.name
    document.querySelector('#temp').textContent = data.main.temp + ' °C'
    document.querySelector('#main').textContent = data.weather[0].main
    document.querySelector('#desc').textContent = data.weather[0].description

    document.querySelector('#weather').classList.remove('hidden')
  } catch (e) {
    console.error(e.msg)
  }
}

function error(err) {
  console.warn(`ERROR(${err.code}): ${err.message}`);
}

if (navigator.geolocation) navigator.geolocation.getCurrentPosition(success, error);
