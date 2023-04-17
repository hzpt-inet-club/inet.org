class Team {
  githubName: string
  name: string
  jobTitle: string
  introduce: string

  constructor(githubName: string, name: string, jobTitle: string, introduce: string) {
    this.githubName = githubName
    this.name = name
    this.jobTitle = jobTitle
    this.introduce = introduce
  }
}

export const teams: Map<string, Team[]> = new Map([
  [
    '现在的',
    [
      {
        githubName: 'guanzitao',
        name: 'guanzitao',
        jobTitle: '社长',
        introduce: '未知'
      },
      {
        githubName: 'XingzaiUnrivaled',
        jobTitle: '学习部',
        name: 'XingzaiUnrivaled',
        introduce: '未知'
      },
      // {
      //   githubName:'dai147444612',
      //   name:'dai147444612',
      //   jobTitle:'副社长',
      //   introduce:'未知'
      // },
      // {
      //   githubName:'011011100',
      //   name:'011011100',
      //   jobTitle:'维修部',
      //   introduce:'这里是我的个人介绍！好耶！'
      // },
      {
        githubName: 'Tiriod',
        name: 'Tiriod',
        jobTitle: '不知',
        introduce: '未知'
      }
      // {
      //   githubName:'wxcdico',
      //   name:'wxcdico',
      //   jobTitle:'财务部',
      //   introduce:'未知'
      // },
      // {
      //   githubName:'namelesslight',
      //   name:'namelesslight',
      //   jobTitle:'不知',
      //   introduce:'未知'
      // },
      // {
      //   githubName:'XingZaiInvincible',
      //   name:'XingZaiInvincible',
      //   jobTitle:'不知',
      //   introduce:'未知'
      // },
    ]
  ],
  [
    '2020年',
    [
      {
        githubName: 'Cxl-Xc',
        name: 'Cxl-Xc',
        jobTitle: '社长',
        introduce: '舔狗陈小离'
      },
      {
        githubName: 'xinqiyi1024',
        jobTitle: '学习部',
        name: 'xinqiyi1024',
        introduce: '未知'
      },
      {
        githubName: 'dai147444612',
        name: 'dai147444612',
        jobTitle: '副社长',
        introduce: '未知'
      },
      {
        githubName: '011011100',
        name: '011011100',
        jobTitle: '维修部',
        introduce: '这里是我的个人介绍！好耶！'
      },
      {
        githubName: '13336778832',
        name: '13336778832',
        jobTitle: '不知',
        introduce: '未知'
      },
      {
        githubName: 'wxcdico',
        name: 'wxcdico',
        jobTitle: '财务部',
        introduce: '未知'
      },
      {
        githubName: 'namelesslight',
        name: 'namelesslight',
        jobTitle: '不知',
        introduce: '未知'
      },
      {
        githubName: 'Zhengke0509',
        name: 'Zhengke0509',
        jobTitle: '不知',
        introduce: '未知'
      }
    ]
  ],
  [
    '2019年',
    [
      {
        githubName: 'woshixiaotugo',
        name: 'woshixiaotugo',
        jobTitle: '社长',
        introduce: '未知'
      },
      {
        githubName: 'sakurazro',
        name: 'sakurazro',
        jobTitle: '副社长',
        introduce: '未知'
      },
      {
        githubName: 'xiaoxunyao',
        name: 'Elone Hoo',
        jobTitle: '副社长',
        introduce: '您好，我是Elone Hoo。是一个狂热的开源爱好者。是Akatsuki社区的核心团队成员。'
      },
      {
        githubName: 'wuaqing',
        name: 'wuaqing',
        jobTitle: '财务',
        introduce: '未知'
      },
      {
        githubName: 'qiuqiuya-get',
        name: 'qiuqiuya-get',
        jobTitle: '学习部',
        introduce: '未知'
      },
      {
        githubName: 'missyou-zxt',
        name: 'missyou-zxt',
        jobTitle: '维修部',
        introduce: '未知'
      },
      {
        githubName: 'FanHoozy',
        name: 'FanHoozy',
        jobTitle: '学习部',
        introduce: '未知'
      }
    ]
  ]
])
