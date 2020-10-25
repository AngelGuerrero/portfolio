<template>
  <b-container class="dev h-100 w-100" fluid>
    <!-- Component view has a postition absolute -->
    <BackgroundTag tag-name="Home" />

    <!-- Contians row and cols -->
    <TextDescription :is-mobile="this.$store.state.isMobile" />
  </b-container>
</template>

<script>
export default {
  layout: 'technoLayout',

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
          content: '¡Cotiza tu sitio web, aplicación o sistema ahora mismo! Platiquemos tranquilamente para aterrizar esa gran idea y darle vida. 👌'
        }
      ]
    }
  }
}
</script>

<style lang="scss"></style>
