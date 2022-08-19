// components/test3/test3.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        count: Number
    },

    /**
     * 组件的初始数据
     */
    data: {

    },

    /**
     * 组件的方法列表
     */
    methods: {
        addCount(e) {
            this.setData({
                count: this.properties.count + e.currentTarget.dataset.num
            })
            this.triggerEvent('sync', {
                val: this.properties.count
            })
        },
        addCount2() {
            this.setData({
                count: this.properties.count + 1
            })
            this.triggerEvent('sync', {
                val: this.properties.count
            })
        }
    }
})