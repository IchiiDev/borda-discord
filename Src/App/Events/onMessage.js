const { bot } = require("../app");
const CONFIG = require("../../../Private/config");

bot.on("message", message => {
    if (message.author.bot) return;
    if (message.channel.id == CONFIG.VERIFICATION_CHANNEL) {
        
    }
});