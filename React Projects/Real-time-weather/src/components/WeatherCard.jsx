export default function WeatherCard({ weather }) {
    return (
        <div className="border p-4 rounded-lg shadow-md w-80 bg-blue-100">
            <h2 className="text-xl font-bold">{weather.address}</h2>
            <p className="text-gray-700">{weather.description}</p>
            <p className="text-lg font-semibold">🌡️ {weather.days[0].temp}°F</p>
            <p>🌅 Sunrise: {weather.days[0].sunrise}</p>
            <p>🌇 Sunset: {weather.days[0].sunset}</p>
        </div>
    );
}
