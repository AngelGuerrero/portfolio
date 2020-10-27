export const state = () => ({
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
  setMobileState (state, value) {
    state.isMobile = value
  },

  setNavigation (state, { prev, next }) {
    state.nav.prev = prev
    state.nav.next = next
  }
}
