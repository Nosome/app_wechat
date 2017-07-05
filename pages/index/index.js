//index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    kindHidden: true,
    selectedKind: '分类',
    indexList:[
      {
        url: '../logs/logs',
        kind: '分类1',
        title: '标题1',
        date: '2017/01/01'
      }, {
        url: '../logs/logs',
        kind: '分类2',
        title: '标题2',
        date: '2017/02/02'
      }, {
        url: '../logs/logs',
        kind: '分类3',
        title: '标题3',
        date: '2017/03/03'
      }
    ]
  },
  triggerSelect: function(){
    var flag = this.data.kindHidden;
    if(flag == true){
      this.setData({
        kindHidden: false
      })
    }else{
      this.setData({
        kindHidden: true
      })
    }
  },
  seleteKindFn: function(e){
    var kindName = e.target.dataset.kind;
    this.setData({
      kindHidden: true,
      selectedKind: kindName
    })
  },
  // 搜索事件
  handleSearch: function(){
    console.log('test');
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})
