<template>
  <div
    class="dev
          my-container
          w-full
          h-full
          bg-pattern
          bg-custom-main-800
          rounded-lg p-4"
  >
    <BackgroundTag tag-name="About me" />

    <div
      class="dev
            h-full
            flex
            flex-col
            md:flex-row
            md:items-center
            "
    >
      <!-- Col -->
      <div
        class="dev w-full h-full sm:px-8 md:px-0 flex flex-col justify-between"
      >
        <header class="dev px-2 mb-5">
          <h3
            class="dev
                  text-4xl
                  text-custom-accent-600
                  font-saira
                  text-center
                  md:text-5xl
                  lg:text-6xl"
          >
            Hello, world!
          </h3>
        </header>
        <p
          class="dev
              text-custom-enfasis-300
              font-courgette
              text-right
              text-xl
              px-2
              my-3
              invisible
              md:visible
              md:text-2xl
              "
        >
          I love create web and desktop applications.
        </p>

        <div class="dev text-sm px-2 md:text-2xl h-[400px] overflow-y-auto">
          <nuxt-content :document="page" />
        </div>
        <div class="pt-5 text-gray-400 text-base font-sans text-center">
          <p class="font-courgette">
            If you have an idea and need help for programming, contact me and
            let me a message.
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
