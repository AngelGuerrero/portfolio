<template>
  <div class="dev my-container h-100 w-100">
    <!-- Component view has a postition absolute -->
    <BackgroundTag tag-name="About me" />

    <b-row class="h-100 d-flex align-items-center">
      <b-col :col="false" sm="12" md="6" class="my-image">
        <PersonalImage />
      </b-col>
      <b-col :col="false" sm="12" md="6">
        <header class="text-left">
          <h3 class="main__title m-0 p-0">
            Hi!
          </h3>
        </header>
        <p class="text pr-4 text-3xl">
          I’m software developer, a full-stack programmer focus on front-end, I have made web and desktop applications, I have maintained, fixed and improved apps and systems.
        </p>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  layout: 'technoLayout',

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
    transform: scale(1);
    opacity: 1;
  }
}
</style>
