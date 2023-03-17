// index.ts
// 获取应用实例
const app = getApp<IAppOption>()

Page({
  data: {
    qList:[
      {id: 'Q1',
      text:'我要做远方的忠诚的儿子,和物质的短暂情人,和所有以梦为马的诗人一样,我不得不和烈士和小丑走在同,一道路上',
      next:'Q2',
      previous:''
      },
      {id:'Q2',
      text:'草原尽头我两手空空，悲痛时握不住一颗泪滴，姐姐，今夜我在德令哈，这是雨水中一座荒凉的城',
      next:'Q3',
      previous:'Q1'
      },
      {id:'Q3',
      text:'万人都要将火熄灭 我一人独将此火高高举起,此火为大,开花落英于神圣的祖国,和所有以梦为马的诗人一样,我借此火得度一生的茫茫黑夜',
      next:'Q4',
      previous:'Q2'
      },
      {id:'Q4',
      text:'万人都要从我刀口走过,去建筑祖国的语言,我甘愿一切从头开始,和所以以梦为马的诗人一样,我也愿将牢底坐穿',
      next:'Q5',
      previous:'Q3'
      },
      {id:'Q5',
      text:'面对大河我无限惭愧,我年华虚度,空有一身疲倦,和所有以梦为马的诗人一样,岁月易逝,一滴不剩,水滴中有一匹,马儿一命归天',next:'Q6',
      previous:'Q4'
      },
      {id:'Q6',
      text:'千年后如若我再生于祖国的河岸,千年后我再次拥有中国的稻田,和周天子的雪山,天马踢踏,我选择永恒的事业',
      next:'',
      previous:'Q5'
      },
    ],
    currentQ : {
        id:'',
        text:'',
        next:'',
        previous:''
      }
    /*currentId:'',
    currentText:'',
    currentNext:'',
    currentPrevious:''*/
  },
  onLoad:function(){
    this.setData({
      currentQ : this.data.qList[0]
    })
    /*const q = this.data.qList[0]
    var qq = {
      id: q.id,
      text: q.text,
      next: q.next,
      previous: q.previous
    }*/
    /*this.setData({
      currentId : this.data.qList[0].id,
      currentText : this.data.qList[0].text,
      currentNext : this.data.qList[0].next,
      currentPrevious : this.data.qList[0].previous
    })*/
  },
  /*onBack:function(){
    if(this.data.Index == 0){
      wx.showToast({
        title:'已经是第一页了'
      })
    }else{
      this.setData({
        Index : this.data.Index - 1
      })
    }
  },
  onNext:function(){
    if(this.data.Index == this.data.list.length - 1){
      wx.showToast({
        title : '已经是最后一页了'
      })
    }else{
      this.setData({
        Index : this.data.Index + 1
      })
    }
  }*/
})
