<template>
  <footer class="flex items-center justify-between w-full h-full dev">
    <!-- prev -->
    <div class="w-1/4 h-full dev arrow sm:max-w-100px">
      <ArrowBtn v-show="prev" direction="left" :to="prev" />
    </div>

    <!-- Hidden on small devices -->
    <div class="hidden w-1/2 dev sm:flex">
      <ConnectedStatus />
    </div>

    <!-- next -->
    <div class="w-1/4 h-full dev arrow sm:max-w-100px">
      <ArrowBtn v-show="next" direction="right" :to="next" />
    </div>
  </footer>
</template>

<script>
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
  }
}
</script>
