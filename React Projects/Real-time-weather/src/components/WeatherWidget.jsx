import React from "react";
import useWeather from "../hooks/useWeather";
import LoadingSpinner from "./LoadingSpinner";

export default function WeatherWidget({ city }) {
    const { weather, loading } = useWeather(city);

    if (loading) {
        return <LoadingSpinner />;
    }

    return (
        <div>
            <h2>Weather in {city}</h2>
            {weather ? (
                <>
                    <p>
                        <strong>Temperature:</strong> {weather.currentConditions.temp}°F
                    </p>
                    <p>
                        <strong>Conditions:</strong> {weather.currentConditions.cunditions}°F
                    </p>
                </>
            ) : (
                <p>Weather data not availabel.</p>
            )}
        </div>
    );
}
