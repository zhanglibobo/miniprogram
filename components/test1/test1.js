// components/test1.js
Component({
    options: {
        // 指定所有以_开头的数据字段为纯数据字段
        // pureDataPattern: /^_/
    },
    pageLifetimes: {
        // 组件所在页面被展示时，立即调用_randomColor生成随机颜色值
        show: function () {
            this._randomColor()
        }
    },
    /**
     * 组件的属性列表
     */
    properties: {
        max: {
            type: Number,
            value: 0
        },
        // max: Number
    },

    /**
     * 组件的初始数据
     */
    data: {
        n1: 0,
        n2: 0,
        sum: 0,
        fullcolor: '0,0,0',
        rgb: {
            R: 0,
            G: 0,
            B: 0,
        },
        _b: '', //纯数据字段
        _rgb: {
            r: '',
            g: '',
            b: ''
        }
    },

    /**
     * 组件的方法列表
     */
    methods: {
        add1() {
            this.setData({
                n1: this.data.n1 + 1
            })
        },
        add2() {
            this.setData({
                n2: this.data.n2 + 1
            })
        },
        addRgb(e) {
            const type = e.currentTarget.dataset.name;
            let a = 'rgb.' + type
            this.setData({
                [a]: this.data.rgb[type] + 5
            })
        },
        // 非事件处理函数以_开头
        _randomColor() {
            this.setData({
                _rgb: {
                    r: Math.floor(Math.random() * 256),
                    g: Math.floor(Math.random() * 256),
                    b: Math.floor(Math.random() * 256),
                }
            })
        }
    },
    observers: {
        'n1,n2': function (n1, n2) {
            this.setData({
                sum: n1 + n2
            })
        },
        'rgb.**': function (obj) {
            this.setData({
                fullcolor: obj.R + ',' + obj.G + ',' + obj.B
            })
        }
    }
})