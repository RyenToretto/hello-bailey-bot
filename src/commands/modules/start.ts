import type { CommandMiddleware } from 'grammy'
import type { BAILEY_CTX } from '@/config'

import { startMenu } from '@/menus'

const start: CommandMiddleware<BAILEY_CTX> = async function (ctx) {
  await ctx.reply(`Hello${ctx.config.isDeveloper ? '主人' : '游客'}, ${ctx.t('hello')}~`, {
    reply_markup: startMenu
  })
  await ctx.api.setMyCommands([
    { command: 'start', description: 'Start the bot' },
    { command: 's_game', description: 'Start game: bailey_tree.' }
  ])
}

export default start
