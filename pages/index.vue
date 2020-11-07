<template>
  <div class="dev w-full h-full bg-pattern bg-cover bg-center flex justify-center items-center">
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
            "Hello, I'm Ángel Guerrero, I'm a software developer, I love build things and share them. I'm available for freelance work, if you have a project I'd like help you, message me. 👌"
        }
      ]
    }
  }
}
</script>
