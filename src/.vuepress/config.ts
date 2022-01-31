import { defineUserConfig } from 'vuepress'
import type { DefaultThemeOptions } from 'vuepress'

export default defineUserConfig<DefaultThemeOptions>({
  base: '/inet.org/',
  // 站点配置
  lang: 'en-US',
  title: 'INet',
  description: 'INet',
  // 主题和它的配置
  theme: '@vuepress/theme-default',
  themeConfig: {
    navbar:[
      {
        text:'介绍',
        link:'/introduce/'
      },
      {
        text:'团队',
        link:'/team/'
      },
      {
        text:'荣誉',
        link:'/honor/'
      },
      {
        text:'环境',
        link:'/surroundings/'
      },
      {
        text:'新闻',
        link:'/news/'
      },
      {
        text:'活动',
        link:'/activity/'
      },
      {
        text: '功能',
        children: [
          {
            text:'签到',
            link:'/features/sign/'
          },
          {
            text:'其他',
            link:'/features/other/'
          }
        ],
      },
      {
        text: '收藏',
        link: '/collect/'
      },
      {
        text: '博客',
        link: '/blog/'
      }
    ],
    sidebar: {
      "/team/":[
        {
          text:'现在的',
          link:'/team/README.md'
        },
        {
          text:'2019年',
          link:'/team/2019Team.md'
        },
        {
          text:'2018年',
          link:'/team/2018Team.md'
        },
      ],
      "/blog/":[
        {
          text:'Serializable',
          link:'/blog/Serializable.md'
        },
        {
          text:'EasyPOI',
          link:'/blog/EasyPOI.md'
        },
        {
          text:'EasyPOI',//TypeScript-course.md
          link:'/blog/EasyPOI.md'
        },
        {
          text:'TypeScript',
          link:'/blog/TypeScript-course.md'
        },
      ]
    },
    logo: '/img/logo.svg',
    editLink: false,
    lastUpdated: false,
    contributors: false,
  },

  plugins: [
    [
      '@vuepress/plugin-docsearch',
      {
        apiKey: '3a539aab83105f01761a137c61004d85',
        indexName: 'vuepress',
        searchParameters: {
          facetFilters: ['tags:v2'],
        },
        locales: {
          '/': {
            placeholder: '搜索网站',
            translations: {
              button: {
                buttonText: '搜索网站',
                buttonAriaLabel: '搜索网站',
              },
              modal: {
                searchBox: {
                  resetButtonTitle: '清除查询条件',
                  resetButtonAriaLabel: '清除查询条件',
                  cancelButtonText: '取消',
                  cancelButtonAriaLabel: '取消',
                },
                startScreen: {
                  recentSearchesTitle: '搜索历史',
                  noRecentSearchesText: '没有搜索历史',
                  saveRecentSearchButtonTitle: '保存至搜索历史',
                  removeRecentSearchButtonTitle: '从搜索历史中移除',
                  favoriteSearchesTitle: '收藏',
                  removeFavoriteSearchButtonTitle: '从收藏中移除',
                },
                errorScreen: {
                  titleText: '无法获取结果',
                  helpText: '你可能需要检查你的网络连接',
                },
                footer: {
                  selectText: '选择',
                  navigateText: '切换',
                  closeText: '关闭',
                  searchByText: '搜索提供者',
                },
                noResultsScreen: {
                  noResultsText: '无法找到相关结果',
                  suggestedQueryText: '你可以尝试查询',
                  openIssueText: '你认为该查询应该有结果？',
                  openIssueLinkText: '点击反馈',
                },
              },
            },
          },
        },
      },
    ],
  ]

})
