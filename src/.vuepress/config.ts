import { defineUserConfig } from 'vuepress'
import type { DefaultThemeOptions } from 'vuepress'
import { path } from '@vuepress/utils'

export default defineUserConfig<DefaultThemeOptions>({
  base: '/inet.org/',
  // 站点配置
  lang: 'zh-CN',
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
        text: '友链',
        children: [
          {
            text:'签到',
            link:'/features/sign/'
          },
          {
            text:'vue-jumper',
            link:'https://jumper.elonehoo.xyz'
          },
          {
            text:'英语语法笔记',
            link:'https://hzpt-inet-club.github.io/english-note/'
          },
          {
            text:'2048',
            link:'https://2048.elonehoo.xyz'
          },
          {
            text:'扫雷',
            link:'https://minisweeper.elonehoo.xyz'
          },
          {
            text:'随机可爱头像',
            link:'https://vue-avatar.elonehoo.xyz'
          },
          {
            text:'简单捏人',
            link:'https://avatar.elonehoo.xyz'
          },
          {
            text:'3D冰墩墩',
            link:'https://dwen.elonehoo.xyz'
          },
          {
            text:'23点',
            link:'https://mathler.elonehoo.xyz'
          },
          {
            text:'3D赛车游戏',
            link:'https://car.elonehoo.xyz'
          },
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
          text:'博客介绍',
          link:'/blog/introduce/introduce.md'
        },
        {
          text:'TypeScript',
          link:'/blog/detail/TypeScript-course.md'
        },
        {
          text:'Serializable',
          link:'/blog/detail/Serializable.md'
        },
        {
          text:'EasyPOI',
          link:'/blog/detail/EasyPOI.md'
        },
        {
          text:'Nginx',
          link:'/blog/detail/Nginx.md'
        },
        {
          text:'Docker',
          link:'/blog/detail/Docker.md'
        },
        {
          text:'Vue.js+Vite.js+TypeScript',
          link:'/blog/detail/VVT.md'
        },
        {
          text:'基于Java的设计模式',
          collapsible: true,
          children:[
            {
              text:'目录',
              link:'/blog/detail/design-patterns/README.md'
            },
            {
              text:'工厂模式',
              link:'/blog/detail/design-patterns/01.md'
            },
            {
              text:'抽象工厂模式',
              link:'/blog/detail/design-patterns/02.md'
            },
            {
              text:'建造者模式',
              link:'/blog/detail/design-patterns/03.md'
            },
            {
              text:'原型模式',
              link:'/blog/detail/design-patterns/04.md'
            },
            {
              text:'单例模式',
              link:'/blog/detail/design-patterns/05.md'
            },
            {
              text:'适配器模式',
              link:'/blog/detail/design-patterns/06.md'
            },
            {
              text:'桥接模式',
              link:'/blog/detail/design-patterns/07.md'
            },
            {
              text:'组合模式',
              link:'/blog/detail/design-patterns/08.md'
            },
            {
              text:'装饰器模式',
              link:'/blog/detail/design-patterns/09.md'
            },
            {
              text:'外观模式',
              link:'/blog/detail/design-patterns/10.md'
            },
            {
              text:'享元模式',
              link:'/blog/detail/design-patterns/11.md'
            },
            {
              text:'代理模式',
              link:'/blog/detail/design-patterns/12.md'
            },
            {
              text:'责任链模式',
              link:'/blog/detail/design-patterns/13.md'
            },
            {
              text:'命令模式',
              link:'/blog/detail/design-patterns/14.md'
            },
            {
              text:'迭代器模式',
              link:'/blog/detail/design-patterns/15.md'
            },
            {
              text:'中介者模式',
              link:'/blog/detail/design-patterns/16.md'
            },
            {
              text:'备忘录模式',
              link:'/blog/detail/design-patterns/17.md'
            },
            {
              text:'观察者模式',
              link:'/blog/detail/design-patterns/18.md'
            },
            {
              text:'状态模式',
              link:'/blog/detail/design-patterns/19.md'
            },
            {
              text:'策略模式',
              link:'/blog/detail/design-patterns/20.md'
            },
            {
              text:'模板模式',
              link:'/blog/detail/design-patterns/21.md'
            },
            {
              text:'访问者模式',
              link:'/blog/detail/design-patterns/22.md'
            }
          ]
        }
      ],
      "/activity/":[
        {
          text:'E修哥',
          link:'/activity/'
        },
        {
          text:'小先生讲堂',
          link:''
        }
      ]
    },
    logo: '/img/logo.svg',
    editLink: false,
    lastUpdated: false,
    contributors: false,
  },

  plugins: [
    [
      '@vuepress/register-components',
      {
        components: {
          businessCard: path.resolve(__dirname, './components/businessCard/BusinessCard.vue'),
          contributors: path.resolve(__dirname, './components/contributors/Contributors.vue'),
        },
      },
    ],
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
