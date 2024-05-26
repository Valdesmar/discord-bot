const WEATHER_API_KEY = 'aab4b3fc83f257426e7ddc0ccfa6da18';

const city = 'Niteroi';

const testarAPI = async () => {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${WEATHER_API_KEY}&units=metric`);

    console.log(await response.json());
};

testarAPI();
