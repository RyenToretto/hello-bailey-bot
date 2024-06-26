import { I18n } from '@grammyjs/i18n'
import type { BAILEY_CTX } from '@/config'

// 配置国际化
const i18n = new I18n<BAILEY_CTX>({
  defaultLocale: 'en',
  directory: 'locales'
})

export default i18n
