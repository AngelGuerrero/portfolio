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
              my-image
              w-full"
      >
        <MyPhoto />
      </div>

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
                  font-cy-bold
                  text-transparent
                  bg-hero-texture
                  bg-clip-text
                  bg-400
                  bg-center
                  title-background--animation
                  md:text-5xl
                  lg:text-6xl
                  "
          >
            Things about me!
          </h3>
        </header>

        <p class="dev text-custom-blue font-saira text-xl px-2 md:text-2xl">
          I’m software developer,
          a full-stack programmer focus on front-end,
          I love create web and desktop applications,
          I like fix and improve apps and systems.
        </p>
        <!-- <p class="dev bg-gray-400 font-saira text-xl px-2 md:text-2xl">
          In my free time I like to do things like this, or that or maybe this one.
        </p> -->
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
      next: '/lab'
    })
  }
}
</script>

<style lang="scss" scoped>
.my-image {
  transition: all 1s;
  transform: scale(0.8);
  opacity: 0.5;
  &:hover {
    transform: scale(0.9);
    opacity: 1;
  }
}
</style>
