const { player } = require('discord-player');
const { Client, Intents } = require('discord.js');



module.exports = {
    name: 'seek',
    aliases: [],
    utilisation: '{prefix}seek [time]',
    voiceChannel: true,

    async execute(client, message, args) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return await message.channel.send(`No music currently playing ${message.author}... try again ? ❌`);

        const timeToMS = ms(args.join(' '));

        if (timeToMS >= queue.current.durationMS) return await message.channel.send(`The indicated time is higher than the total time of the current song ${message.author}... try again ? ❌\n*Try for example a valid time like **5s, 10s, 20 seconds, 1m**...*`);

        await queue.seek(timeToMS);

        await message.channel.send(`Time set on the current song **${ms(timeToMS, { long: true })}** ✅`);
    },
};