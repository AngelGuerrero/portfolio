<template>
  <footer class="dev h-full w-full flex justify-between items-center">
    <!-- prev -->
    <div class="dev arrow h-full w-1/2 sm:max-w-100px">
      <ArrowBtn v-show="prev" direction="left" :to="prev" />
    </div>

    <!-- FIX: Default Slot -->
    <!-- Hidden on small devices -->
    <div
      class="dev hidden sm:flex justify-center items-center font-sans font-bold text-custom-blue"
    >
      <p>
        Website under construction 🚧
      </p>
    </div>

    <!-- next -->
    <div class="dev arrow h-full w-1/2 sm:max-w-100px">
      <ArrowBtn v-show="next" direction="right" :to="next" />
    </div>
  </footer>
</template>

<script>
/* eslint-disable no-console */

export default {
  props: {
    prev: {
      type: String,
      default: ''
    },

    next: {
      type: String,
      default: ''
    }
  },

  created () {
    this.getInformation()
  },

  methods: {
    async getInformation () {
      // Obtener información de vuex
      await this.$store.dispatch('bindUsers')

      console.log('this.$store.state.users :>> ', this.$store.state.users)
    }
  }
}
</script>
