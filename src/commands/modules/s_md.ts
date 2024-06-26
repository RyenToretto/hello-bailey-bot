import type { CommandMiddleware } from 'grammy'
import type { BAILEY_CTX } from '@/config'

// 回复消息，文本中加入 markdown
const s_md: CommandMiddleware<BAILEY_CTX> = async function (ctx) {
  await ctx.reply('贝利回复: [百度](https://www.baidu.com)', { parse_mode: 'MarkdownV2' })
}

export default s_md
