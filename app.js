// app.js
import {
    promisify,
    promisifyAll
} from 'miniprogram-api-promise'
const wxp = wx.p = {}
promisifyAll(wx, wxp)
App({
    // 小程序初始化完成时，执行此函数，全局只触发一次，可以做一些初始化的工作
    onLaunch() {
        // 展示本地存储能力
        const logs = wx.getStorageSync('logs') || []
        logs.unshift(Date.now())
        wx.setStorageSync('logs', logs)

        // 登录
        wx.login({
            success: res => {
                // 发送 res.code 到后台换取 openId, sessionKey, unionId
            }
        })
    },
    // 小程序启动，或从后台进入前台显示时触发
    onShow(options) {},
    // 小程序从前台进入后台时触发
    onHide() {},
    globalData: {
        userInfo: null
    }
})