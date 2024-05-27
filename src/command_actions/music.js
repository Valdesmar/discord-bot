import { joinVoiceChannel, createAudioPlayer, createAudioResource, AudioPlayerStatus, VoiceConnectionStatus, entersState } from '@discordjs/voice';
import play from 'play-dl';

async function handleSoundPlayer(interaction) {
    const { commandName, options } = interaction;
    const url = options.getString('url');

    const voiceChannel = interaction.member.voice.channel;

    if (!voiceChannel) {
        return interaction.reply('You need to be in a voice channel to play music!');
    }

    if (!play.yt_validate(url)) {
        return interaction.reply('Please provide a valid YouTube URL.');
    }

    try {
        const connection = joinVoiceChannel({
            channelId: voiceChannel.id,
            guildId: interaction.guild.id,
            adapterCreator: interaction.guild.voiceAdapterCreator,
        });

        const player = createAudioPlayer();

        connection.on(VoiceConnectionStatus.Ready, () => {
            console.log('The bot has connected to the channel!');
        });

        connection.on(VoiceConnectionStatus.Disconnected, async () => {
            try {
                await Promise.race([
                    entersState(connection, VoiceConnectionStatus.Signalling, 5_000),
                    entersState(connection, VoiceConnectionStatus.Connecting, 5_000),
                ]);
            } catch (error) {
                connection.destroy(); // Disconnect from voice channel
            }
        });

        player.on(AudioPlayerStatus.Idle, () => {
            connection.destroy();
            interaction.channel.send('Finished playing!');
        });

        const stream = await play.stream(url);
        const resource = createAudioResource(stream.stream, {
            inputType: stream.type
        });

        player.play(resource);
        connection.subscribe(player);

        await interaction.reply(`Playing: ${url}`);
    } catch (error) {
        console.error('Error playing the video:', error);
        interaction.reply('There was an error trying to play the video. Please try again later.');
    }
};

export default handleSoundPlayer;