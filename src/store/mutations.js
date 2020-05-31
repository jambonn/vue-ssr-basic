import Vue from 'vue'
import { FETCH_LIST_DATA, FETCH_ITEMS, FETCH_USER, SET_ACTIVE_TYPE } from './types'

export default {
  [SET_ACTIVE_TYPE] (state, { type }) {
    state.activeType = type
  },

  [FETCH_LIST_DATA] (state, { type, ids }) {
    state.lists[type] = ids
  },

  [FETCH_ITEMS] (state, { items }) {
    items.forEach(item => {
      if (item) {
        Vue.set(state.items, item.id, item)
      }
    })
  },

  [FETCH_USER] (state, { id, user }) {
    Vue.set(state.users, id, user || false) /* false means user not found */
  }
}
