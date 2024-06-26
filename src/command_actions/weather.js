async function handleWeatherCommand(interaction) {
    const { commandName, options } = interaction;
    const city = options.getString('city');
    if (!city) {
        return interaction.reply('Please provide a city name.');
    }
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.WEATHER_API}&units=metric`);
        const data = await response.json();
        // console.log(`Fetching for city: ${city}`);
        // console.log(`API Response: ${JSON.stringify(data)}`);
        if (data.cod == 200) {
            const weatherInfo = `
            **Weather in ${data.name}, ${data.sys.country}:**
            🌡️ **Temperature:** ${data.main.temp}°C
            ☁️ **Weather:** ${data.weather[0].description}
            💧 **Humidity:** ${data.main.humidity}%
            💨 **Wind Speed:** ${data.wind.speed} m/s
            `;
            interaction.reply(weatherInfo);
        } else if (data.cod === '404') {
            interaction.reply(`City "${city}" not found. Please check the city name and try again.`);
        } else {
            interaction.reply(`Could not fetch weather data for "${city}". Error: ${data.message}`);
        }
    } catch (error) {
        console.error('Error fetching weather data:', error);
        interaction.reply('There was an error fetching the weather data. Please try again later.');
    }
};

export default handleWeatherCommand;