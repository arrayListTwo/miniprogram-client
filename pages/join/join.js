// pages/join/join.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },

  //检查用户是否处于登陆态
  userLogin() {
    wx.checkSession({
      success: function() {
        // 处在登录状态
        console.log('处于登录态...');
      },
      fail: function() {
        //不存在登陆态 或者 登录态已失效
        console.log('不处于登录态 或者 登录态已失效...');
        onLogin();
      }
    })
  },

  // 用户登录
  onLogin() {
    wx.login({
      success: res => {
        if (res.code) {
          //发起网络请求
          wx.request({
            url: 'https：//www.superdev.top/miniprogram/login',
            data: {
              code: res.code
            },
            success: res => {
              const self = this
              if (true) {
                //获取到用户凭证 存儲 3rd_session 
                var json = JSON.parse(res.data.Data)
                wx.setStorage({
                  key: "third_Session",
                  data: json.third_Session
                })
                getUserInfo()
              } else {

              }
            },
            fail: err => {
              console.log(err)
            }
          })
        }
      },
      fail: err => {
        console.log(err)
      }
    })
  }
})