import { useState, useRef } from 'react'
import axios from 'axios'

import './App.css'
import WeatherInformations from './components/WeatherInformations/WeatherInformations'
import NextDays from './components/NextDays/NextDays'

function App() {
  const [weather, setWeather] = useState()
  const [weather5Days, setWeather5Days] = useState()
  const inputRef = useRef()


  async function searchCity(){
    console.log(inputRef.current.value)
    const city = inputRef.current.value
    const key = "8277ee79580d9d444b60e3761d005b15"
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`

    const apiInfo = await axios.get(url)
    setWeather(apiInfo.data)

    const urlForecast = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${key}&lang=pt_br&units=metric`
    
    const apiInfo5Days = await axios.get(urlForecast)
    setWeather5Days(apiInfo5Days.data)

    console.log(apiInfo5Days)
  }


  return (
  <div className='content'>
    <h1>previsão do tempo</h1>
    <input ref={inputRef} type="text" placeholder='Digite o nome da cidade' />
    <button onClick={searchCity}>Buscar</button>

    {weather && <WeatherInformations weather={weather} />}
    {weather5Days && <NextDays weather5Days={weather5Days}/>}
  </div>
  )
}

export default App
