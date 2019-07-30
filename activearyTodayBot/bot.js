require('dotenv').config()
import Telegraf from 'telegraf'
const bot = new Telegraf(process.env.TELEGRAM_BOT_TOKEN)

bot.start(ctx => ctx.reply('Welcome'))
bot.help(ctx => ctx.reply("Here's all the help I can give!"))

bot.startPolling()
