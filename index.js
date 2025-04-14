require('dotenv').config();
const { Client, GatewayIntentBits, Events } = require('discord.js');
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ]
});

client.once(Events.ClientReady, () => {
    console.log(`Connecté en tant que ${client.user.tag}!`);
    console.log(`Surveillance du canal ID: ${process.env.CHANNEL_SCREENSHOT_ID}`);        
});

client.on(Events.MessageCreate, async (message) => {
    if (message.channelId === process.env.CHANNEL_SCREENSHOT_ID) {
        if (message.attachments.size === 0 && message.embeds.length === 0 && !message.member.roles.cache.some(role => role.name === 'Modérateur')) {
            try {
                await message.delete();                
                console.log('Message texte supprimé dans le thread');
            }catch (error) {
                console.error('Erreur suppression:', error);
            }
        }
    } 
})


client.login(process.env.CLIENT_TOKEN);