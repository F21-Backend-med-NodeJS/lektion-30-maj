const { Client, Intents, MessageActionRow, MessageSelectMenu } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}`);
});

client.on('messageCreate', (message) => {
    console.log(message);

    if (message.content.toLowerCase() === 'insult me') {
        //message.reply() // Boten svarar i kanalen
        const row = new MessageActionRow().addComponents(new MessageSelectMenu().setCustomId('insult')
        .setPlaceholder('Välj').addOptions([
            {
                label: 'Insult me!',
                description: '',
                value: 'insult-me'
            }
        ]));
        const header = 'Hej! Välj ett alternativ!';
        message.author.send({ content: header, components:[row] }); // Skickar ett direktmeddelande
    }
});

client.on('interactionCreate', (interaction) => {
    if (!interaction.isSelectMenu()) return; // Om jag inte klickar på min dropdown

    if (interaction.customId === 'insult') {
        interaction.reply('I have done thy mother!');
    }
});

client.login('OTgwNzQ3NDUyOTI5OTM3NDI5.GZtml-._p8IIWm7yTtj24oTHYput9zfksE2rGVkddcesI');