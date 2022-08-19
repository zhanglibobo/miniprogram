module.exports = Behavior({
    properties: {},
    data: {
        userName: 'zs'
    },
    methods: {
        getName() {
            this.setData({
                userName: 'ls'
            })
        }
    }
})