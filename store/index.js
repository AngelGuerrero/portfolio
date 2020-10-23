export const state = () => ({
  //
  // State for know if the device is moble or not
  //
  isMobile: false
})

export const mutations = {
  setMobileState (state, value) {
    state.isMobile = value
  }
}
