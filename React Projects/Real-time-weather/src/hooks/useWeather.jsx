import { useEffect, useState } from "react";
import fetchWeather from "../utils/fetchWeather";

export default function useWeather(city) {
    const [weather, setWeather] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function getWeather() {
            setLoading(true);
            const data = await fetchWeather(city);
            if (data) {
                setWeather(data);
                setError(null);
            } else {
                setError("Failed to fetch weather data");
            }
            setLoading(false);
        }
        getWeather();
    }, [city]);

    return { weather, loading, error };
}
