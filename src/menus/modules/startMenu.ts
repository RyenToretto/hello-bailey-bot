import { Menu } from '@grammyjs/menu'
// 配置菜单
const startMenu = new Menu('my-menu')
  .text('选项 1', (ctx) => ctx.reply('你点了选项1'))
  .row()
  .text('选项 2', (ctx) => ctx.reply('你点了选项2'))

export default startMenu
