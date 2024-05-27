import { REST, Routes } from "discord.js";
import { config } from "dotenv";

config();

const commands = [
    {
        name: 'weather',
        description: 'Get weather information for a city',
        options: [
            {
                name: 'city',
                type: 3, // STRING type
                description: 'The city name to get weather information for',
                required: true,
            },
        ],
    },
    {
        name: 'play',
        description: 'Play a YouTube video in a voice channel',
        options: [
            {
                name: 'url',
                type: 3,
                description: 'The url to play the desired sound',
                required: true,
            },
        ],
    },
];

const rest = new REST({ version: '10' }).setToken(process.env.BOT_DISCORD_TOKEN);

(async () => {
    try {
        console.log('Registering slash commands...')

        await rest.put(
            Routes.applicationGuildCommands(
                process.env.BOT_ID,
                process.env.HEAVEN_GUILD_ID
            ),
            { 
                body: commands 
            }
        );
    } catch (err) {
        console.log('There was an error:', err);
    }
})();
