module.exports = (client, message, queue) => {
    message.channel.send(`${client.emotes.error} - Music stopped as there is no more member in the voice channel !`);
    client.user.setActivity('SHTAB Exoneri Hamar', {type: 'PLAYING'});
};