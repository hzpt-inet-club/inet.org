<div align="center">
  <img with="100px" height="100px" src="https://hzpt-inet-club.github.io/inet.org/img/logo.svg">
</div>

<h1 align="center">INet</h1>

## 背景

由 [晓寻遥](https://github.com/xiaoxunyao) 提出建立官网的想法，便开始着手准备进行官网的建造，创建了一个「inet.org」的仓库用于放置官网的内容，在官网的设计过程中，由于「晓寻遥」是一个「vue.js」的“脑残粉”，所以一直推荐「[VuePress](https://v2.vuepress.vuejs.org/)」和「[VitePress](https://vitepress.vuejs.org/)」,考虑再三还是使用了「vuepress」。

## 介绍

### 文档介绍

将所有的内容全部放置于 `src` 下，进行分文件夹存放。

```markdown
- src <!-->根文件<-->
  - .vuepress <!-->配置文件夹<-->
    - img <!-->图片<-->
      - logo.svg <!-->logo<-->
    - config.ts <!-->配置文件<-->
  - activity <!-->活动<-->
  - blog <!-->博客<-->
  - collect <!-->收藏<-->
  - honor <!-->荣誉<-->
  - introduce <!-->介绍<-->
  - news <!-->新闻<-->
  - surroundings <!-->环境<-->
  - team <!-->团队<-->
  - README.md <!-->首页<-->
```

### 部署介绍

部署在「[GitHub Page](https://pages.github.com/)」上使用「[GitHub Actions](https://github.com/features/actions)」进行全自动部署，会创建一个新的分支 `gh-pages`，只需要进行文档的编写，然后上传到「GitHub」上会进行全自动部署，无需担心任何的部署问题。

## 安装

1. 下载到本地

```bash
git clone git@github.com:hzpt-inet-club/inet.org.git
```

2. 进入根目录后

```bash
yarn install
```

3. 运行

```bash
yarn docs:dev
```

## 维护者

> 排名不分先后！

[@011011100](https://github.com/011011100)

[@13336778832](https://github.com/13336778832)

[@Annnnnnovice](https://github.com/Annnnnnovice)

[@Cxl-Xc](https://github.com/Cxl-Xc)

[@dai147444612](https://github.com/dai147444612)

[@FanHoozy](https://github.com/FanHoozy)

[@hzpt-inet](https://github.com/hzpt-inet)

[@ketechian](https://github.com/ketechian)

[@ltniy](https://github.com/ltniy)

[@namelesslight](https://github.com/namelesslight)

[@qiuqiuya-get](https://github.com/qiuqiuya-get)

[@sakurazro](https://github.com/sakurazro)

[@wuaqing](https://github.com/wuaqing)

[@wxcdico](https://github.com/wxcdico)

[@xiaoxunyao](https://github.com/xiaoxunyao)

[@xinqiyi1024](https://github.com/xinqiyi1024)

[@Zhengke0509](https://github.com/Zhengke0509)

## 如何贡献

在 [INet](https://github.com/hzpt-inet-club) 社区中拥有一个 [home](https://github.com/hzpt-inet-club/home) 项目，详细的说明了如何进行贡献项目，简单来说`提出一个issue`和`提出一个pull Request` 都是可以的。

## 贡献

感谢以下参与项目的人：

[![contributors](/contributors/inet.org-contributors.svg)](https://github.com/hzpt-inet-club/inet.org/graphs/contributors)

## 使用许可

[MIT](https://github.com/hzpt-inet-club/inet.org/blob/master/LICENSE) © hzpt-inet-club
