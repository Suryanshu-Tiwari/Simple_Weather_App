import React, { useState } from 'react';
import axios from 'axios';

function App() {
    const [city, setCity] = useState('');
    const [weather, setWeather] = useState(null);

    const getWeather = async () => {
        try {
            const res = await axios.get(`${import.meta.env.VITE_API_URL}/weather?city=${city}`);
            setWeather(res.data);
        } catch (err) {
            alert("City not found");
            setWeather(null);
        }
    };

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>Weather App</h1>
            <input 
                value={city} 
                onChange={(e) => setCity(e.target.value)} 
                placeholder="Enter city name"
            />
            <button onClick={getWeather}>Get Weather</button>

            {weather && (
                <div style={{ marginTop: '20px' }}>
                    <h2>{weather.name}</h2>
                    <p>{weather.weather[0].description}</p>
                    <p>Temperature: {weather.main.temp}°C</p>
                    <p>Humidity: {weather.main.humidity}%</p>
                </div>
            )}
        </div>
    );
}

export default App;

