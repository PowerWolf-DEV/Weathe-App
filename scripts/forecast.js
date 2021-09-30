const API = 'jfCY6lciuHwZk64FLlpZifIvGP66xzV4'

// get weather info
const getWeather = async (id) => {
  const base = 'https://dataservice.accuweather.com/currentconditions/v1/'
  const query = `${id}?apikey=${API}`

  const response = await fetch(base + query, {mode: 'cors'})
  const data = await response.json()

  return data[0]

}

// get city ingo
const getCity = async (city) => {

  const base = 'https://dataservice.accuweather.com/locations/v1/cities/search'
  const query = `?apikey=${API}&q=${city}`

  const response = await fetch(base + query, {mode: 'cors'})
  const data = await response.json()
  
  return data[0]

}

