// custom-tab-bar/index.js
import {
    storeBindingsBehavior
} from 'mobx-miniprogram-bindings'
import {
    store
} from '../utils/store'
Component({
    behaviors: [storeBindingsBehavior],
    storeBindings: {
        store,
        fields: {
            active: 'activeTabIndex'
        },
        actions: {
            updateTabIndex: 'updateTabIndex'
        }
    },
    options: {
        styleIsolation: 'shared'
    },
    /**
     * 组件的属性列表
     */
    properties: {

    },

    /**
     * 组件的初始数据
     */
    data: {
        list: [{
                "pagePath": "/pages/home/home",
                "text": "首页",
                "iconPath": "/icon/_home.png",
                "selectedIconPath": "/icon/home.png"
            },
            {
                "pagePath": "/pages/componentself/componentself",
                "text": "信息",
                "iconPath": "/icon/_search.png",
                "selectedIconPath": "/icon/search.png"
            },
            {
                "pagePath": "/pages/contact/contact",
                "text": "联系我们",
                "iconPath": "/icon/_img.png",
                "selectedIconPath": "/icon/img.png",
                "info": 3
            }
        ],
        // active: 0
    },

    /**
     * 组件的方法列表
     */
    methods: {
        onChange(e) {
            console.log(this.active);
            // this.setData({
            //     active: e.detail
            // })
            this.updateTabIndex(e.detail)
            wx.switchTab({
                url: this.data.list[e.detail].pagePath,
            })
        }
    }
})