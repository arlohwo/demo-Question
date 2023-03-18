// index.ts
// 获取应用实例
const app = getApp<IAppOption>()

Page({
  data: {
    qList: [
      {
        id: 'Q1',
        type: 'intro',
        content: {
          text: '第一个Q的text',
          hint: '',
        },
        next: 'Q2',
        previous: ''
      },

      {
        id: 'Q2',
        type: 'input',
        content: {
          text: '第二个Q的text',
          hint: '请输入内容'
        },
        next: 'Q3',
        previous: 'Q1'
      },

      {
        id: 'Q3',
        type: 'intro',
        content: {
          text: '第三个Q的text',
          hint: '',
        },
        next: 'Q4',
        previous: 'Q2'
      },

      {
        id: 'Q4',
        type: 'input',
        content: {
          text: '第四个Q的text',
          hint: '请输入内容'
        },
        next: 'Q5',
        previous: 'Q3'
      },

      {
        id: 'Q5',
        type: 'intro',
        content: {
          text: '第五个Q的text',
          hint: ''
        },
        next: 'Q6',
        previous: 'Q4'
      },

      {
        id: 'Q6',
        type: 'input',
        content: {
          text: '第六个Q的text',
          hint: '请输入内容'
        },
        next: '',
        previous: 'Q5'
      },

    ],
    currentQ: {
      id: '',
      type: '',
      content: {
        text: '',
        hint: ''
      },
      next: '',
      previous: ''
    }
  },
  onLoad: function () {
    this.setData({
      currentQ: this.data.qList[0]
    })
  },
  getQByID: function (id: string) {
    return this.data.qList.find(Q => Q.id == id)
  },
  onBack: function () {
    if (this.data.currentQ.previous == '') {
      wx.showToast({
        title: '前面没有了'
      })
    } else {
      var previousQ = this.getQByID(this.data.currentQ.previous)
      this.setData({
        currentQ: previousQ
      })
    }
  },
  onNext: function () {
    if (this.data.currentQ.next == '') {
      wx.showToast({
        title: '后面没有了！'
      })
    } else {
      var nextQ = this.getQByID(this.data.currentQ.next)
      this.setData({
        currentQ: nextQ
      })
    }
  }
})
