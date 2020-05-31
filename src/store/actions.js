import API from '../api'
import { FETCH_LIST_DATA, FETCH_ITEMS, FETCH_USER } from './types'

export default {
  // ensure data for rendering given list type
  fetchListData ({ commit, dispatch, state }, { type }) {
    commit('SET_ACTIVE_TYPE', { type })
    return API.fetchIdsByType(type)
      .then(ids => commit(FETCH_LIST_DATA, { type, ids }))
      .then(() => dispatch('ENSURE_ACTIVE_ITEMS'))
  },

  // ensure all active items are fetched
  ensureActiveItems ({ dispatch, getters }) {
    return dispatch(FETCH_ITEMS, {
      ids: getters.activeIds
    })
  },

  fetchItems ({ commit, state }, { ids }) {
    // on the client, the store itself serves as a cache.
    // only fetch items that we do not already have, or has expired (3 minutes)
    const now = Date.now()
    ids = ids.filter(id => {
      const item = state.items[id]
      if (!item) {
        return true
      }
      if (now - item.__lastUpdated > 1000 * 60 * 3) {
        return true
      }
      return false
    })
    if (ids.length) {
      return API.fetchItems(ids).then(items => commit(FETCH_ITEMS, { items }))
    } else {
      return Promise.resolve()
    }
  },

  FETCH_USER ({ commit, state }, { id }) {
    return state.users[id]
      ? Promise.resolve(state.users[id])
      : API.fetchUser(id).then(user => commit(FETCH_USER, { id, user }))
  }
}
