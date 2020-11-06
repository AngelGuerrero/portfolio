<template>
  <div class="dev bg-pattern bg-cover bg-center h-full flex justify-center items-center">
    <!-- Component with postition absolute -->
    <BackgroundTag tag-name="Home" />

    <div class="dev w-full">
      <TextDescription :is-mobile="this.$store.state.isMobile" />
    </div>
  </div>
</template>

<script>
export default {
  layout: 'base',

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

<style lang="scss" scoped></style>
