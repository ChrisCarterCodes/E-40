var Discord = require('discord.io');
var logger = require('winston');
var auth = require('./auth.json');
var choices = require('./choices')
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

var defaultAction = function(){
    if(nopeYepFlag)
        ret = 'yup!'
    else
        ret = 'nope!'
    
    nopeYepFlag = !nopeYepFlag;
    return ret;
}

var determineChoice = function(message){
    // We looking for questions, fam.
    if (message.slice(-1) == '?') {
        message = message.substr(0, message.length - 1).toLowerCase()
        if(choices.affirmative.includes(message))
            return "yup!"
        else if(choices.negativeGhostRider.includes(message))
            return "nope!"
        else
            return defaultAction()
    }
}

var messageHandler = function (user, userID, channelID, message, evt) {
    var reply = determineChoice(message)
    
    bot.sendMessage({
        to: channelID,
        message: reply
    });
}

exports.handler = messageHandler
exports.determine = determineChoice
bot.on('message', messageHandler);