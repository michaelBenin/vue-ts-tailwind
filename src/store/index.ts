// https://next.vuex.vuejs.org/guide/#the-simplest-store
// https://newbedev.com/javascript-mapgetters-typescript-vuex-4-code-example
// https://cheatography.com/fortyseven/cheat-sheets/basic-vuex/pdf/

import { createStore } from 'vuex'
import state from '@/store/state'
import getters from '@/store/getters'
import mutations from '@/store/mutations'
import actions from '@/store/actions'
import modules from '@/store/modules'

export default createStore({
  state,
  getters,
  mutations,
  actions,
  modules,
})
