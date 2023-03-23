//获取应用实例
var app = getApp();
var lie = [
  "🎂早饭🎂:\n小米粥200g 包子100g\n\n🍚午饭🍚:\n馅饼100g 草鱼300g 鹌鹑蛋100g\n\n🐟晚饭🐟:\n 炒饭100g 苹果100g",
  "🎂早饭🎂:\n煎蛋100g 鸡胸肉200g\n\n🍚午饭🍚:\n花卷100g 羊肉200g 西柚200g\n\n🐟晚饭🐟:\n豆芽100g 油饼80g",
  "🎂早饭🎂:\n黄油包100g 牛奶100g\n\n🍚午饭🍚:\n鸡肉卷100g 紫薯100g 橙子100g\n\n🐟晚饭🐟:\n白米粥100g 麻辣烫200g",
  "🎂早饭🎂:\n油条200g 豆浆200g\n\n🍚午饭🍚:\n米饭200g 鱿鱼100g 大白菜200g\n\n🐟晚饭🐟:\n玉米100g 茄子100g 葡萄200g",
  "🎂早饭🎂:\n蛋包饭200g \n\n🍚午饭🍚:\n花甲粉100g、苹果100*2g、海苔100g\n\n🐟晚饭🐟:\n白菜100*3g、豆角100*5g、鹌鹑蛋100g",
  "🎂早饭🎂:\n煎蛋100g、白米粥100g*2\n\n🍚午饭🍚:\n牛肉100g*2、咖喱饭100g、香蕉100g\n\n🐟晚饭🐟:\n米粉100g、脱脂酸奶100g",
  "🎂早饭🎂:\n牛奶100g*2、花卷100g\n\n🍚午饭🍚:\n包子100g、菠菜100g*5、海苔100g\n\n🐟晚饭🐟:\n紫薯100g、玉米100g*2、西柚100g*3",
  "🎂早饭🎂:\n黄油包100g 牛奶100g\n\n🍚午饭🍚:\n鸡肉卷100g 紫薯100g 橙子100g\n\n🐟晚饭🐟:\n白米粥100g 麻辣烫200g"];

Page({
  data: {
    modalHidden:true,//是否隐藏对话框
    isshow:'',
    liebiao:''
  },

  //事件处理函数
  bindViewTap: function() {
    this.setData({
      modalHidden:!this.data.modalHidden
    })
    
  },
  //确定按钮点击事件
  modalBindaconfirm:function(){
    //随机产生一个[1,6)的数
    var random = Math.floor(Math.random() * 7 + 1);
    this.setData({
      modalHidden:!this.data.modalHidden,
      isshow:true,
      liebiao:'为你推荐:\n'+'套餐'+random+'\n\n'+lie[random],
    })
    console.log(random)
  },
  //取消按钮点击事件
  modalBindcancel:function(){
    this.setData({
      modalHidden:!this.data.modalHidden,
      isshow:false,
      liebiao:''
    })
  },
  // 3、重定向
  totishi: function(param){
  wx.redirectTo({       
      url: '/pages/index/tishi/tishi',
      })
  }

})