<template>
  <div
    class="w-full h-full p-4 rounded-lg dev my-container bg-pattern bg-custom-main-800">
    <BackgroundTag tag-name="About me" />

    <div class="flex flex-col h-full dev md:flex-row md:items-center">
      <!-- Col -->
      <div
        class="flex flex-col justify-between w-full h-full dev sm:px-8 md:px-0">
        <header class="px-2 mb-5 dev">
          <h3
            class="text-4xl text-center dev text-custom-accent-600 font-saira md:text-5xl lg:text-6xl">
            Hello, world!
          </h3>
        </header>
        <p
          class="invisible px-2 my-3 text-xl text-right dev text-custom-emphasis-300 font-courgette md:visible md:text-2xl">
          I love create web and desktop applications.
        </p>

        <div class="dev text-sm px-2 md:text-2xl h-[400px] overflow-y-auto">
          <nuxt-content :document="page" />
        </div>
        <div class="pt-5 font-sans text-base text-center text-gray-400">
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

  async asyncData({ $content }) {
    const page = await $content('blog/helloWorld').fetch()

    return { page }
  },

  // created () {
  //   this.$store.commit('setNavigation', {
  //     prev: '/',
  //     next: ''
  //   })
  // },

  head() {
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
