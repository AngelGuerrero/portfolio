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
    state.isMobile = value
  },

  setNavigation (state, { prev, next }) {
    state.nav.prev = prev
    state.nav.next = next
  }
}

export const actions = {
  getAuthor: firestoreAction(async function ({ bindFirestoreRef }) {
    const ref = this.$fire.firestore.collection('users').doc('angelguerrero')

    await bindFirestoreRef('author', ref, { wait: true })
  })
}
