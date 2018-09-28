var Discord = require('discord.io');
var logger = require('winston');
var auth = require('./auth.json');
// Configure logger settings
logger.remove(logger.transports.Console);
logger.add(logger.transports.Console, {
    colorize: true
});
logger.level = 'debug';
var nopeYepFlag = false;
// Initialize Discord Bot
var bot = new Discord.Client({
   token: auth.token,
   autorun: true
});
bot.on('ready', function (evt) {
    logger.info('Connected');
    logger.info('Logged in as: ');
    logger.info(bot.username + ' - (' + bot.id + ')');
});
bot.on('message', function (user, userID, channelID, message, evt) {
    // We looking for questions, fam.
    if (message.slice(-1) == '?') {
        if(nopeYepFlag){
            bot.sendMessage({
                to: channelID,
                message: 'YUP!'
            });
        }
        else{
            bot.sendMessage({
                to: channelID,
                message: 'NOPE!'
            });
        }
        nopeYepFlag = !nopeYepFlag;
     }
});