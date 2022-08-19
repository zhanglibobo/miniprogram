// components/test4/test4.js
const myBehavior = require("../../behaviors/my-behavior")
Component({
    behaviors: [myBehavior],
    /**
     * 组件的属性列表
     */
    properties: {

    },

    /**
     * 组件的初始数据
     */
    data: {
        inputVal: ''
    },

    /**
     * 组件的方法列表
     */
    methods: {
        fakeCallback() {}
    }
})