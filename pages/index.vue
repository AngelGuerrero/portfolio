<template>
  <div class="home-page dev w-full h-full">
    <HomeTopology />

    <div class="home-page__content dev w-full h-full flex justify-center items-center">
      <background-tag tag-name="Home" />

      <div class="dev w-full">
        <text-description :is-mobile="$store.state.isMobile" />
      </div>
    </div>
  </div>
</template>

<script>
import BackgroundTag from '~/components/BackgroundTag.vue'
import HomeTopology from '~/components/HomeTopology.vue'
import TextDescription from '~/components/TextDescription.vue'

export default {
  layout: 'base',

  components: {
    BackgroundTag,
    HomeTopology,
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

<style scoped>
.home-page {
  position: relative;
  isolation: isolate;
  overflow: hidden;
}

.home-page__content {
  position: relative;
  z-index: 1;
}
</style>
