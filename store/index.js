import { vuexfireMutations, firestoreAction } from 'vuexfire'

export const state = () => ({
  author: [],

  //
  // State for know if the device is moble or not
  //
  isMobile: false,

  //
  // Set the navigation of current page
  //
  nav: {
    prev: '',
    next: ''
  }
})

export const mutations = {
  ...vuexfireMutations,

  setMobileState (state, value) {
    // #region agent log
    if (typeof fetch !== 'undefined') {
      fetch('http://127.0.0.1:7243/ingest/34ce4a14-4fb9-4f1c-bc59-a53be485cb74', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ location: 'store/index.js:setMobileState', message: 'setMobileState mutation called', data: { value, stateBefore: JSON.parse(JSON.stringify(state)) }, timestamp: Date.now(), sessionId: 'debug-session', runId: 'run1', hypothesisId: 'B' }) }).catch(() => {})
    }
    // #endregion
    state.isMobile = value
    // #region agent log
    if (typeof fetch !== 'undefined') {
      fetch('http://127.0.0.1:7243/ingest/34ce4a14-4fb9-4f1c-bc59-a53be485cb74', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ location: 'store/index.js:setMobileState', message: 'setMobileState mutation completed', data: { value, stateAfter: JSON.parse(JSON.stringify(state)) }, timestamp: Date.now(), sessionId: 'debug-session', runId: 'run1', hypothesisId: 'B' }) }).catch(() => {})
    }
    // #endregion
  },

  setNavigation (state, { prev, next }) {
    // #region agent log
    if (typeof fetch !== 'undefined') {
      fetch('http://127.0.0.1:7243/ingest/34ce4a14-4fb9-4f1c-bc59-a53be485cb74', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ location: 'store/index.js:setNavigation', message: 'setNavigation mutation called', data: { prev, next, stateBefore: JSON.parse(JSON.stringify(state)) }, timestamp: Date.now(), sessionId: 'debug-session', runId: 'run1', hypothesisId: 'B' }) }).catch(() => {})
    }
    // #endregion
    state.nav.prev = prev
    state.nav.next = next
    // #region agent log
    if (typeof fetch !== 'undefined') {
      fetch('http://127.0.0.1:7243/ingest/34ce4a14-4fb9-4f1c-bc59-a53be485cb74', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ location: 'store/index.js:setNavigation', message: 'setNavigation mutation completed', data: { prev, next, stateAfter: JSON.parse(JSON.stringify(state)) }, timestamp: Date.now(), sessionId: 'debug-session', runId: 'run1', hypothesisId: 'B' }) }).catch(() => {})
    }
    // #endregion
  }
}

export const actions = {
  getAuthor: firestoreAction(async function ({ bindFirestoreRef }) {
    const ref = this.$fire.firestore.collection('users').doc('angelguerrero')

    await bindFirestoreRef('author', ref, { wait: true })
  })
}
