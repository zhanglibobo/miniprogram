// pages/shopList/shopList.js
Page({
    /**
     * 页面的初始数据
     */
    data: {
        query: {},
        shopList: [],
        page: 1,
        pageSize: 10,
        total: 0,
        loading: false
    },
    getShopList(cb) {
        wx.showLoading({
            title: '加载中...'
        })
        if (this.data.pageSize * this.data.page >= this.data.total && this.data.total !== 0) {
            return wx.showToast({
                title: '数据加载完毕',
            })
        }
        this.setData({
            loading: true
        })
        wx.request({
            url: `https://www.escook.cn/categories/${this.data.query.id}/shops`,
            method: 'GET',
            data: {
                _page: this.data.page,
                _limit: this.data.pageSize
            },
            success: (res) => {
                this.setData({
                    shopList: [...this.data.shopList, ...res.data],
                    total: res.header['X-Total-Count'] - 0,
                })
            },
            complete: () => {
                this.setData({
                    loading: false
                })
                wx.hideLoading()
                cb && cb()
            }
        })
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        this.setData({
            query: options
        });
        this.getShopList()
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady() {
        wx.setNavigationBarTitle({
            title: '详情',
        })
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
        //  重置数据
        this.setData({
            page: 1,
            shopList: [],
            total: 0
        })
        this.getShopList(() => {
            wx.stopPullDownRefresh()
        })
    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom() {
        if (this.data.loading) return;
        this.setData({
            page: this.data.page + 1
        })
        this.getShopList()
    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage() {

    }
})