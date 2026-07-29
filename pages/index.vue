<template>
  <div class="dev w-full h-full bg-pattern bg-cover bg-center flex justify-center items-center">
    <background-tag tag-name="Home" />

    <div class="dev w-full">
      <text-description :is-mobile="$store.state.isMobile" />
    </div>
  </div>
</template>

<script>
import BackgroundTag from '~/components/BackgroundTag.vue'
import TextDescription from '~/components/TextDescription.vue'

export default {
  layout: 'base',

  components: {
    BackgroundTag,
    TextDescription
  },

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
          hid: 'description',
          name: 'description',
          content: 'Ángel Guerrero builds expressive, reliable software and digital experiences.'
        }
      ]
    }
  }
}
</script>
