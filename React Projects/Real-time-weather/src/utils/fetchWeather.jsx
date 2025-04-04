export default async function fetchWeather(city) {
    const API_KEY = import.meta.env.VITE_WEATHER_API_KEY; 
    const BASE_URL = import.meta.env.VITE_WEATHER_BASE_URL; 

    if (!API_KEY || !BASE_URL) {
        console.error("API key or Base URL is missing!");
        return null;
    }

    try {
        const response = await fetch(`${BASE_URL}${city}?unitGroup=us&key=${API_KEY}&contentType=json`);

        if (!response.ok) throw new Error("Failed to fetch weather data");

        return await response.json();
    } catch (error) {
        console.error("Error fetching weather:", error);
        return null;
    }
}
