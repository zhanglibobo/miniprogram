// components/test2/test2.js
Component({
    options: {
        multipleSlots: true //组件定义时 启用多slot支持
    },
    /**
     * 组件的属性列表
     */
    properties: {},

    /**
     * 组件的初始数据
     */
    data: {
        count: 0
    },

    /**
     * 组件的方法列表
     */
    methods: {
        syncCont(e) {
            this.setData({
                count: e.detail.val
            })
        },
        getChild() {
            // const child = this.selectComponent('.cusA');
            const child = this.selectComponent('#cA');
            child.setData({
                count: child.properties.count + 2
            })
            child.addCount2()
        }
    }
})