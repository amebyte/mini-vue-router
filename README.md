# vue router的原理
在spa的应用程序中,url发生变化的时候，不能刷新，显示对应的视图

vue-router 使用步骤

核⼼步骤： 

- 步骤⼀：使⽤vue-router插件，router.js 

 ```javascript
import Router from 'vue-router'
Vue.use(Router)
 ```

- 步骤⼆：创建Router实例，router.js 
 ```javascript
export default new Router({...})
 ```

- 步骤三：在根组件上添加该实例，main.js 
 ```javascript
import router from './router'
new Vue({
 router,
}).$mount("#app");
 ```

- 步骤四：添加路由视图，App.vue 
 ```javascript
<router-view></router-view>
 ```
 - 导航
```javascript
<router-link to="/">Home</router-link>
<router-link to="/about">About</router-link>
```
```javascript
this.$router.push('/')
this.$router.push('/about')
```
Vue.use是什么

为什么要在根组件上添加VueRuter实例

我们平时为什么可以在组件里直接使用this.$router

##### spa ⻚⾯不用刷新

hash #/about 

History api /about



##### 根据url显示对应的内容 

router-view 是一个组件

数据响应式：current变量持有url地址，⼀旦变化，动态重新执⾏render 

监听hashchange变化的地址，然后去和配置里的路由器进行匹配，然后拿到对应的Component，然后渲染在router-view容器组件上

VueRouter是一个插件

```javascript
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
```

install被调用的时候，会把Vue的构造函数传进来，主要是为了这个独立的插件将来打包的时候不用把Vue打包进去。

install执行的时候VueRouter还没实例化，所以要进行混入(mixin)