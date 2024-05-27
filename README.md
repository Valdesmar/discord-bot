# Discord Bot Project

This project is a Discord bot that can play music from YouTube and provide weather information for a given city. It uses `discord.js` for interacting with the Discord API, `play-dl` for handling YouTube streams, and the OpenWeather API for fetching weather data.

## Features

- Responds to a simple text message ("Hello").
- Plays music from a YouTube URL in a voice channel.
- Provides weather information for a given city.

## Prerequisites

- Node.js and npm installed.
- A Discord account and a server where you can add the bot.
- OpenWeather API key.

## Installation

1. Clone the repository:
   ```sh
   git clone <repository-url>
   cd <repository-directory>
    ```
2. Install the dependencies:

    ```sh
    npm install
    ```
   
3. Create a .env file in the root directory and add your Discord bot token and OpenWeather API key:
    ```env
    BOT_DISCORD_TOKEN=your-discord-bot-token
    WEATHER_API=your-openweather-api-key
    ```
## Usage
1. Register the slash commands:
    ```sh
    node src/register_commands.js
    ```
2. Start the bot:
    ```sh
    node index.js
    ```
## File Structure
- `index.js`: Main file to initialize and run the bot.
- `src/register_commands.js`: Script to register slash commands.
- `src/command_actions/music.js`: Handles the /play command to play music from YouTube.
- `src/command_actions/weather.js`: Handles the /weather command to provide weather information.
## Command Details
`/play <YouTube URL>`
- Plays the audio from the provided YouTube URL in the voice channel.
- Usage example: `/play https://www.youtube.com/watch?v=dQw4w9WgXcQ`

`/weather <city>`
- Provides the current weather information for the specified city.
- Usage example: `/weather Niteroi`

## Contributing
Feel free to fork this repository and submit pull requests. If you find any issues, please open an issue on GitHub.
<br>Sinta-se livre para utilizar deste projeto e alterar o que deseja.