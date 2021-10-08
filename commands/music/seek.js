module.export = {
    name: "seek",
    aliases: ["se"],
    category: 'Music',
    utilisation: '{prefix}seek [timecode]',

    execute(client, message, args) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - You're not in a voice channel !`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} - You are not in the same voice channel !`);

        if (!args[0]) return message.channel.send(`${client.emotes.error} - Please write timecode !`);

        client.player.play(message, args.join(" "));
    },
}