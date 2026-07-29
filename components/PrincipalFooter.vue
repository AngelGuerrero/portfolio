<template>
  <footer
    class="dev h-full w-full flex justify-between items-center"
    aria-label="Page navigation"
  >
    <!-- prev -->
    <div class="dev arrow h-full w-1/4 sm:max-w-100px">
      <ArrowBtn v-if="prev" direction="left" :to="prev" />
    </div>

    <!-- Hidden on small devices -->
    <div class="dev w-1/2 hidden sm:flex">
      <ConnectedStatus />
    </div>

    <!-- next -->
    <div class="dev arrow h-full w-1/4 sm:max-w-100px">
      <ArrowBtn v-if="next" direction="right" :to="next" />
    </div>
  </footer>
</template>

<script>
import ArrowBtn from './ArrowBtn.vue'
import ConnectedStatus from './ConnectedStatus.vue'

export default {
  components: {
    ArrowBtn,
    ConnectedStatus
  },

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
