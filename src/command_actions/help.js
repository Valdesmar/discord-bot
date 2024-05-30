async function help(interaction) {
    const { commandName } = interaction;

    if (commandName === 'help') {
        const helpMessage = `
        **Available Commands:**
        \`/play <YouTube URL>\`: Plays the audio from the provided YouTube URL in the voice channel.
        \`/weather <city>\`: Provides the current weather information for the specified city.
        `;
        await interaction.reply(helpMessage);
    }
}

export default help;