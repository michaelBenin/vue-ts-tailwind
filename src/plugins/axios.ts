// https://v3.vuejs.org/guide/plugins.html#writing-a-plugin
import Vue from 'vue'
import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://myapi.com',
})

const instanceUserApi = axios.create({
  baseURL: 'https://userapi.com',
})

Vue.prototype.$http = instance
Vue.prototype.$httpUserApi = instanceUserApi

instanceUserApi.defaults.headers.common['Authorization'] =
  'Token' + localStorage.getItem('authToken')

// // plugins/i18n.js
// export default {
//     install: (app, options) => {
//         app.config.globalProperties.$http = (key) => {
//             return key.split('.')
//                 .reduce((o, i) => { if (o) return o[i] }, options)
//         }
//
//         app.provide('i18n', options)
//
//         app.directive('my-directive', {
//             mounted (el, binding, vnode, oldVnode) {
//                 // some logic ...
//             }
//             ...
//         })
//
//         app.mixin({
//             created() {
//                 // some logic ...
//             }
//             ...
//         })
//     }
// }
