let Vue
class VueRouter {
  constructor(options) {
    this.$options = options
    const hashUrl = window.location.hash.slice(1)
    Vue.util.defineReactive(this, 'currPath', hashUrl || '/')
    window.addEventListener('hashchange', () => {
      this.currPath = window.location.hash.slice(1)
    })
  }
}

VueRouter.install = function(_vue) {
  Vue = _vue
  Vue.mixin({
    beforeCreate() {
      // 如果是根实例，根实例的$options里才有router实例
      if (this.$options.router) {
        Vue.prototype.$router = this.$options.router
      }
    },
  })
  Vue.component('router-link', {
    props: {
      to: {
        type: String,
        require: true,
      },
    },
    render(h) {
      return h('a', { attrs: { href: '#' + this.to } }, this.$slots.default)
    },
  })
  Vue.component('router-view', {
    render(h) {
      const route = this.$router.$options.routes.find(
        (route) => route.path === this.$router.currPath
      )
      const Component = route ? route.component : null
      return h(Component)
    },
  })
}

export default VueRouter
