<template>
  <div class="dev container w-full h-full bg-pattern">
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
                  text-gray-600
                  bg-400
                  bg-center
                  md:text-5xl
                  lg:text-6xl
                  "
          >
            Things about me!
          </h3>
        </header>

        <p class="dev text-gray-400 text-xl px-2 md:text-2xl">
          I'm software developer, a full-stack programmer focus on front-end.
        </p>
        <p
          class="dev text-gray-400 font-courgette text-xl px-2 my-3 md:text-2xl"
        >
          I love create web, and desktop applications.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'base',

  created () {
    this.$store.commit('setNavigation', {
      prev: '/',
      next: ''
    })
  }
}
</script>
