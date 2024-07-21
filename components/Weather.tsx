"use client"

import { GetWeather } from '@/app/action'
import React, { useState } from 'react'

const Weather = () => {
    const [city, setCity] = useState("")
    const [weather, setWeather] = useState({
        temperature: "",
        description: "",
        windSpeed: ""
    })

    const getWeather = async() => {
       const res = await GetWeather(city);
       setWeather(res);
    }
    
  return (
    <div><h1 className='text-2xl font-bold my-6'>Weather</h1>
    <label htmlFor="city" className='text-base font-medium mr-2'>Enter City</label>
    <input type="text" className='border rounded-lg px-3 py-1 mb-2' onChange={(e) => setCity(e.target.value)}/>
    <br />
    <button className='bg-blue-500 py-1 text-white px-2 rounded-lg text-sm mb-5' onClick={getWeather}>Get Weather</button>
        {weather.temperature && <ul>
            <li><span className="text-gray-500 mr-1">Temperature :</span> {weather.temperature}</li>
            <li><span className="text-gray-500 mr-1">Description :</span> {weather.description}</li>
            <li><span className="text-gray-500 mr-1">Wind Speed :</span> {weather.windSpeed}</li>
            </ul>}</div>
  )
}

export default Weather