import { config } from 'dotenv';
import { Client, GatewayIntentBits } from 'discord.js';

import handleSoundPlayer from './src/command_actions/music.js';
import handleWeatherCommand from './src/command_actions/weather.js';
import help from './src/command_actions/help.js';

config();

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildVoiceStates,
    ],
});

client.on('ready', (evt) => {
    console.log(`The bot '${evt.user.username}' is online`);
});

client.on('messageCreate', (msg) => {
    if (msg.author.bot ) {
        return;
    }

    if (msg.content.toLowerCase() === 'leo') {
        msg.reply('Oi eu sou o Leo!');        
    }
    
});

client.on('interactionCreate', async (interaction) => {
    if (!interaction.isChatInputCommand()) {
        return;
    }

    if (interaction.commandName === 'help') {
        help(interaction);
    }

    if (interaction.commandName === 'weather') {
        handleWeatherCommand(interaction);
    }

    if (interaction.commandName === 'play') {
        handleSoundPlayer(interaction);
    }
});

client.login(process.env.BOT_DISCORD_TOKEN);