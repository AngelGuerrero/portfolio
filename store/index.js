import { vuexfireMutations, firestoreAction } from 'vuexfire'

export const state = () => ({
  author: [],
  isMobile: false,
  nav: {
    prev: '',
    next: ''
  },
  isMenuOpen: false
})

export const mutations = {
  ...vuexfireMutations,

  setMobileState (state, value) {
    state.isMobile = value
  },

  setNavigation (state, { prev, next }) {
    state.nav.prev = prev
    state.nav.next = next
  },

  toggleMenu (state) {
    state.isMenuOpen = !state.isMenuOpen
  },

  closeMenu (state) {
    state.isMenuOpen = false
  }
}

export const actions = {
  getAuthor: firestoreAction(async function ({ bindFirestoreRef }) {
    const ref = this.$fire.firestore.collection('users').doc('angelguerrero')

    await bindFirestoreRef('author', ref, { wait: true })
  })
}
