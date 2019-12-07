const Telegraf = require('telegraf')
require('dotenv').config();

const bot = new Telegraf(process.env.BOT_TOKEN)
//console.log(process.env.BOT_TOKEN)

bot.start((ctx) => ctx.reply('Welcome!'))
// bot.help((ctx) => ctx.reply('Send me a sticker'))
bot.on('photo', (ctx) => ctx.reply(ctx.message))
// bot.hears('hi', (ctx) => ctx.reply('Hey there'))

//bot.on('text', (ctx) => console.log(ctx))

bot.hears('/menu', (ctx) => ctx.reply('menu!'));

bot.startPolling()