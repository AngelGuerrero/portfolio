<template>
  <div
    class="dev my-container container w-full h-full bg-pattern bg-custom-main-800"
  >
    <BackgroundTag tag-name="About me" />

    <div
      class="dev
            h-full
            w-full
            max-w-screen-lg
            container
            flex
            flex-col
            md:flex-row
            md:justify-center
            md:items-center"
    >
      <!-- Col -->
      <div
        class="dev
              container
              h-full
              sm:px-8
              md:px-0

              flex
              flex-col
              justify-center
              "
      >
        <header class="dev px-2 mb-5">
          <h3
            class="dev
                  text-4xl
                  text-custom-accent-600
                  font-saira
                  md:text-5xl
                  lg:text-6xl
                  "
          >
            Hello, world!
          </h3>
        </header>
        <p
          class="dev
            text-custom-enfasis-300
            font-courgette
            text-xl
            px-2
            my-3
            md:text-2xl"
        >
          I love create web, and desktop applications.
        </p>

        <p class="dev text-gray-400 font-saira text-xl px-2 md:text-2xl">
          <nuxt-content :document="page" />
        </p>
        <div class="pt-5 text-gray-400 text-base font-sans">
          <p>
            I like spend time with my family and dogs, I'm a hue fan of Vue.js,
            actually this site is made with ❤ and Nuxt.js. If you have an idea
            and need help for programming, contact me if I'm online, or let me a
            message.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'base',

  async asyncData ({ $content }) {
    const page = await $content('blog/helloWorld').fetch()

    return { page }
  },

  created () {
    this.$store.commit('setNavigation', {
      prev: '/',
      next: ''
    })
  },

  head () {
    return {
      title: this.page.title,
      meta: [
        { hid: 'description', name: 'description', content: this.page.excerpt }
      ]
    }
  }
}
</script>

<style scoped>
.my-container {
  background-color: rgba(25, 22, 46, 0.288);
  backdrop-filter: blur(2px);
}
</style>
