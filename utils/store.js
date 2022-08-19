import {
    observable,
    action
} from 'mobx-miniprogram'
export const store = observable({
    activeTabIndex: 0,
    updateTabIndex: action(function (index) {
        this.activeTabIndex = index
    })
})