import { defineUserConfig } from 'vuepress'
import type { DefaultThemeOptions } from 'vuepress'

export default defineUserConfig<DefaultThemeOptions>({
  // 站点配置
  lang: 'en-US',
  title: 'INet',
  description: 'INet',
  // 主题和它的配置
  theme: '@vuepress/theme-default',
  themeConfig: {
    logo: '/img/logo.svg',
    editLink: false,
    lastUpdated: false,
    contributors: false
  },
})
