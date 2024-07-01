import type { CommandMiddleware } from 'grammy'
import type { BAILEY_CTX } from '@/config'

// 回复消息，文本中加入 markdown
const s_game: CommandMiddleware<BAILEY_CTX> = async function (ctx) {
  await ctx.replyWithGame('bily_tree')
}

export default s_game
