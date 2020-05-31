export default {
  fetchIdsByType (payload) {
    return []
  },
  fetchItems (ids) {
    return []
  },
  fetchUser (id) {
    return {}
  },
  watchList (type, cb) {
    let first = true
    const ref = {}
    const handler = snapshot => {
      if (first) {
        first = false
      } else {
        cb(snapshot.val())
      }
    }
    ref.on('value', handler)
    return () => {
      ref.off('value', handler)
    }
  }
}
