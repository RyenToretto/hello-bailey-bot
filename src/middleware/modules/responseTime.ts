import type { BAILEY_CTX } from '@/config'
import type { NextFunction } from 'grammy'

/** 统计 bot 的响应时间，并将其记录到 `console`。 */
async function responseTime(
  ctx: BAILEY_CTX,
  next: NextFunction // 这是 `() => Promise<void>` 的一个别名
): Promise<void> {
  // 开始计时
  const before = Date.now() // 毫秒
  console.log(`\n\n开始计时: ${before}`)

  // 调用下游的中间件
  await next() // 请务必使用 `await`！

  // 停止计时
  const after = Date.now() // 毫秒
  // 打印时间差
  console.log(`Response time: ${after - before} ms`)
}

export default responseTime
