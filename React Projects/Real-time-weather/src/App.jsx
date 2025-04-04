import { useState } from "react";
import useWeather from "./hooks/useWeather";
import WeatherCard from "./components/WeatherCard";

export default function App() {
    const [city, setCity] = useState("Surat");
    const { weather, loading, error } = useWeather(city);

    return (
        <div className="flex flex-col items-center p-10">
            <h1 className="text-2xl font-bold mb-4">🌤 Weather App</h1>
            <input
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder="Enter city name"
                className="border p-2 rounded"
            />
            {loading && <p>Loading...</p>}
            {error && <p className="text-red-500">{error}</p>}
            {weather && <WeatherCard weather={weather} />}
        </div>
    );
}
