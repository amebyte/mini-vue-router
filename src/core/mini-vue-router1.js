let Vue
class VueRouter {
    constructor (options) {
        this.$options = options
    }
}

VueRouter.install = function (_vue) {
    Vue = _vue
    Vue.component('router-link', {
        render(h) {
            return h('a', {})
        }
    })
    Vue.component('router-view', {
        render(h) {
            return h('div', {})
        }
    })
}

export default VueRouter