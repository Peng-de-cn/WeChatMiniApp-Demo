// pages/test/test.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    text: "12345",
    array:["1", "2", "3"]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    wx.request({
      url: 'https://xuwang.de/actorrating/actors',
      success: function (res) {
        console.log(res.data)
        that.setData({
          array: res.data
        })
      }
    })
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
  
  },

  click: function() {
    console.log("clicked")

    this.setData({
      text: "789"
    })

  },

  itemClick: function(e){
    console.log("item clicked: ", e.currentTarget.dataset.birthday, e.currentTarget.dataset.id)
    wx.navigateTo({
      url: '../test1/test1?birthday=' + e.currentTarget.dataset.birthday + '&id=' + e.currentTarget.dataset.id
    })
  } 
})