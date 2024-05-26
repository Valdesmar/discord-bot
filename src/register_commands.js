require('dotenv').config();
const { REST, Routes } = require('discord.js');

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
