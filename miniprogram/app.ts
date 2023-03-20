// app.ts
App({
  globalData: {
    qList: [
      {
        id: 'Q1',
        type: 'intro',
        content: {
          text: '耽误您一点时间帮我们完成问卷吧！',
          hint: '',
          choices:[]
        },
        next: 'Q2',
        previous: ''
      },

      {
        id: 'Q2',
        type: 'input',
        content: {
          text: '请问您的姓名是什么？',
          hint: ' 请输入',
          choices:[]
        },
        next: 'Q3',
        previous: 'Q1'
      },

      {
        id: 'Q3',
        type: 'intro',
        content: {
          text: '已经完成一半的题目了，加油！',
          hint: '',
          choices:[]
        },
        next: 'Q4',
        previous: 'Q2'
      },

      {
        id: 'Q4',
        type: 'input',
        content: {
          text: '您的居住地在哪里？',
          hint: ' 请输入',
          choices:[]
        },
        next: 'Q5',
        previous: 'Q3'
      },

      {
        id: 'Q5',
        type: 'single_choice',
        content: {
          text: '冠军一号到家的距离大概有多远？（单选）',
          hint: '',
          choices:['1km - 3km','4km - 6km','7km - 9km','10km - 15km','15km以上']
        },
        next: 'Q6',
        previous: 'Q4'
      },

      {
        id: 'Q6',
        type: 'multiple_choice',
        content: {
          text: '请问您选择要去某个球馆的原因有哪些？(多选)',
          hint: ' 请输入',
          choices:['价格合适','在室内','在室外','出行时间不长','出行距离较近','大家都去那里','其他（请在下方写出您觉得回去某个球馆的原因）']
        },
        next: '',
        previous: 'Q5'
      },

    ],
  },
  getFirstQ:function(){
    //console.log(this.globalData.qList[0])
    return this.globalData.qList[0]
  },
  getQByID: function (id: string) {
    //console.log(id)
    return this.globalData.qList.find(Q => Q.id == id)
  },
})