const Telegraf = require('telegraf')
require('dotenv').config();
var = _files
var _ = require('lodash');

const bot = new Telegraf(process.env.BOT_TOKEN)
//console.log(process.env.BOT_TOKEN)

bot.start((ctx) => ctx.reply('Welcome!'))
// bot.help((ctx) => ctx.reply('Send me a sticker'))
bot.on('photo', (ctx) => {
    ctx.reply(ctx.message);
    _files.push(ctx.message.photo[2].file_id)
    ctx.reply(_files)
    ctx.replyWithPhoto(_.sample(_files))

})
// bot.hears('hi', (ctx) => ctx.reply('Hey there'))

//bot.on('text', (ctx) => console.log(ctx))

bot.hears('/menu', (ctx) => ctx.reply('menu!'));

bot.startPolling()