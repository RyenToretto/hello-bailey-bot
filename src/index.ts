import { Bot, GrammyError, HttpError } from 'grammy'
import { run } from '@grammyjs/runner'
import { config } from 'dotenv'

import { BAILEY_CTX } from '@/config'
import { i18n } from '@/plugins'
import { responseTime } from '@/middleware'
import { startMenu } from '@/menus'
import { start, s_md, s_game } from '@/commands'

// 加载环境变量
config({ path: ['.env.local', '.env'] })

// 创建机器人
const tk = process.env.TELEGRAM_BOT_TOKEN as string
const bot = new Bot<BAILEY_CTX>(tk)

// 配置国际化
bot.use(i18n.middleware())

// 配置菜单
bot.use(startMenu)

// 自定义函数中间件 (还有另一种类似上面的「对象中间件」)
bot.use(responseTime)

// 配置全局变量, 每次接收到消息, 中间件callback都会被执行
bot.use(async (ctx, next) => {
  const meID = process.env.TELEGRAM_ME
  ctx.config = {
    botDeveloper: meID,
    isDeveloper: !!(ctx.from?.id && `${ctx.from?.id}` === `${meID}`)
  }
  await next()
})

// 配置命令
bot.command('start', start)

// 回复消息，文本中加入 markdown
bot.command('s_md', s_md)
bot.command('s_game', s_game)
bot.on('callback_query:game_short_name', async (ctx) => {
  await ctx.answerCallbackQuery({
    url: 'https://telegram.org/blog/mini-app-bar-paid-media-and-more'
  })
})

// 当收到任何消息时被调用
bot.on('message', async (ctx) => {
  // ctx.reply 是 bot.api.sendMessage 的一个别名
  const text = ctx.msg.text
  await ctx.reply(`收到了一条其他消息~「${text}」`)
})
// bot.on("edited_message"); // 处理经过编辑的消息

/**** 过滤器 ****/
// bot.on("message:text"); // 只有文本消息才会被调用
// bot.on("message:photo"); // 只有图片消息才会被调用
// bot.on("message:media"); // 照片和视频消息

/**** 错误处理器 ****/
bot.catch((err) => {
  const ctx = err.ctx
  console.error(`catch到一个错误 ${ctx.update.update_id}:`)
  const e = err.error
  if (e instanceof GrammyError) {
    console.error('错误描述:', e.description)
  } else if (e instanceof HttpError) {
    console.error('网络异常:', e)
  } else {
    console.error('未知异常:', e)
  }
})

// 启动机器人
run(bot)
