<template>
  <footer class="dev h-full w-full flex justify-between items-center">
    <!-- prev -->
    <div class="dev arrow">
      <ArrowBtn v-show="prev" direction="left" :to="prev" />
    </div>

    <!-- FIX: Default Slot -->
    <!-- Hidden on small devices -->
    <div class="dev hidden sm:flex justify-center items-center font-sans font-bold text-custom-blue">
      <p>
        Website under construction 🚧
      </p>
    </div>

    <!-- next -->
    <div class="dev arrow">
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

<style lang="scss" scoped>
.arrow {
  width: 150px;
  @apply h-full
}
</style>
