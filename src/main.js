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
