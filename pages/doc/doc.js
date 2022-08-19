// pages/doc/doc.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        colorList: [],
        username: 'zs'
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        this.getColors();
    },
    goComponentself() {
        // 只能跳转到tabbar页面
        wx.switchTab({
            url: '/pages/componentself/componentself'
        })
    },
    goInfo() {
        // 只能跳转到navigate页面
        wx.navigateTo({
            url: '/pages/info/info'
        })
    },
    goBack() {
        wx.navigateBack({
            delta: 1,
        })
    },
    getColors() {
        wx.showLoading({
            title: '数据加载中....',
        })
        wx.request({
            url: 'https://www.escook.cn/api/color',
            methods: 'get',
            success: ({
                data
            }) => {
                this.setData({
                    colorList: [...this.data.colorList, ...data.data]
                })
            },
            complete: () => {
                wx.hideLoading()
            }
        })
    },
    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow() {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh() {
        console.log('下拉刷新')
        // 当数据重置成功之后，调用此函数，关闭下拉刷新的效果
        wx.stopPullDownRefresh()
    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage() {

    }
})