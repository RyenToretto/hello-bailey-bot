import type { Context } from 'grammy'
import type { I18nFlavor } from '@grammyjs/i18n'

interface BaileyInfo {
  config: {
    botDeveloper?: string
    isDeveloper: boolean
  }
}

export type BAILEY_CTX = Context & I18nFlavor & BaileyInfo
