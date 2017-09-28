// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import {sync} from 'vuex-router-sync'
import Vue from 'vue'
import Vuetify from 'vuetify'
import Vuex from 'vuex'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import VeeValidate, {Validator} from 'vee-validate'
import br from 'vee-validate/dist/locale/pt_BR'

import './stylus/main.styl'
import App from './App'
import routes from './router'
import VuexStore from './vuex/store'

Validator.addLocale(br)

Vue.use(Vuetify)
Vue.use(Vuex)
Vue.use(VueResource)
Vue.use(VueRouter)
Vue.use(VeeValidate, {
  locale: 'pt_BR'
})

Vue.config.productionTip = false

Vue.http.options.root = process.env.SERVER
Vue.http.interceptors.push((request, next) => {
  request.headers.set('Authorization', 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6Ijc3YjNiZjdjM2ZlMmNhYWVkM2ZkMTc0NWU0ODU4MTAwMDRkMWYzM2IyYjEwMzMyZmNhZTk2Y2Y4YzYxZDRjMmQ4MTRlNDhhOTViMTdhYTc2In0.eyJhdWQiOiIyIiwianRpIjoiNzdiM2JmN2MzZmUyY2FhZWQzZmQxNzQ1ZTQ4NTgxMDAwNGQxZjMzYjJiMTAzMzJmY2FlOTZjZjhjNjFkNGMyZDgxNGU0OGE5NWIxN2FhNzYiLCJpYXQiOjE1MDY2MTQ3ODksIm5iZiI6MTUwNjYxNDc4OSwiZXhwIjoxNTM4MTUwNzg5LCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.FTbu81mJrmfT7BDqFXj3z_hMPGmalL1ntKl1osBLu4RC_iEO59kCXqMOKOqgFLParW1tEEa4oG48yWW4ZqY50I_A4nwiZy4J_Itx1T6hdgOruzVeoeGXsuVwJCX3G3qHyWb4ssy8bYGoru0VHYw7pPIIvQElXxY8I0nYtrjn2HLpEvUFMI2DmkVc-NeAFr5zeUqwgD9X8KKU51LnOgi5LHtJxJQXEUX-pSne9PN0boWJqExFywLjviQoOdzvXmitqVjAXcYMXY_w887t0NUrXf8bq5j-zd5eZ79UQDFFHxx1hpKwpJtavSlmfqZzoiEhjzzJ9YBa5Kt-jnDViJw_CvxNDRkMgGUZca7ta9p0kQRwrRzs6J8yoCXm--KbdGlpoFBiZAmIGWwq4nJ0q05QkQAwXCeDroWevTGq48-UaZcc9Jts2ZBy1c9wujQvAvWeFofjhQXdnUOtGw8K9NKVMnAQzA1Of-HSq86xQQw3TavPCxTpA3BqSozceR2zglg3IZ2_S7PzJ8_usvDn9OLiWMljgTZFpTygW4y1FUjknnFwBAmwkvC5upuKjq5kfHajYm4uz0Gbbv7dcopoBlh9mCfVTgbhz9nxEzNca8s9QMzkpcz_o3apLwspnFts4QuRsh_MLdc3PrZkh6O1xnKgPzK0u6BLUTcZdyHkp5DtHsM')
  next()
})

const store = new Vuex.Store(VuexStore)
const router = new VueRouter({routes})
sync(store, router)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
