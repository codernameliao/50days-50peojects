// pages/cooking/cooking.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    // 份数
    fenshu:1,
    money:5.5
  },
  //购买份数控制
  buynumber(e){
    const operation=e.currentTarget.dataset.operation;
    if(operation==1||this.data.fenshu>1){
      this.setData({
        fenshu:this.data.fenshu + operation
      });
      this.setData({
        money:5.5*this.data.fenshu
      })
    }
  }
})