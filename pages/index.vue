<template>
  <div class="index__wrapper h-100 d-flex align-items-center dev">
    <!-- Component with postition absolute -->
    <BackgroundTag tag-name="Home" />

    <b-container fluid class="h-100">
      <TextDescription :is-mobile="this.$store.state.isMobile" />
    </b-container>
  </div>
</template>

<script>
export default {
  layout: 'technoLayout',

  created () {
    this.$store.commit('setNavigation', {
      prev: '',
      next: '/me'
    })
  },

  head () {
    return {
      title: 'Home',
      meta: [
        {
          hid: 'title',
          name: 'title',
          content: 'Home'
        },
        {
          hid: 'description',
          name: 'description',
          content:
            '¡Cotiza tu sitio web, aplicación o sistema ahora mismo! Platiquemos tranquilamente para aterrizar esa gran idea y darle vida. 👌'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.index__wrapper {
  grid-column: main-col-begin / main-col-begin;
  grid-row: main-row-content / main-row-content;
}
</style>
