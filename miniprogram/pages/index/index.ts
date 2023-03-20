// index.ts
// 获取应用实例
const app = getApp()

Page({
  data: {
    currentQ: {
      id: '',
      type: '',
      content: {
        text: '',
        hint: '',
        choices:[]
      },
      next: '',
      previous: ''
    }
  },
  onLoad: function () {
    //console.log(e)
    this.setData({
      currentQ : app.getFirstQ()  
    })
  },
  onBack: function () {
    this.setData({
      currentQ : app.getQByID(this.data.currentQ.previous)
    })
  },
  onNext: function () {
    this.setData({
      currentQ : app.getQByID(this.data.currentQ.next)
    })
  }
})
