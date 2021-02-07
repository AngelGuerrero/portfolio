<template>
  <div ref="wrapper" class="wrapper__lines">
    <div v-if="!isMobile" class="w-full h-full">
      <div class="line" />
      <div class="line" />
      <div class="line" />
      <div class="line" />
      <div class="line" />
      <div class="line" />
      <div class="line" />
      <div class="line" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    //
    // It doesn't play animations on mobile devices
    //
    isMobile: {
      type: Boolean,
      default: true
    }
  },

  data: () => ({
    max: 100,
    min: 5
  }),

  mounted () {
    if (this.isMobile) { return }

    this.initLineAnimation()
  },

  methods: {
    initLineAnimation (elements) {
      const lines = this.$el.getElementsByClassName('line')

      // Random position lines
      for (let index = 0; index < lines.length; index++) {
        const left = Math.random() * (this.max - this.min) + this.min
        lines[index].style.left = `${left}%`
      }

      this.$anime({
        targets: '.line',
        bottom: ['-100%', '100%'],
        duration: 11000,
        delay (el, i, l) {
          return i * 1500
        },
        endDelay (el, i, l) {
          return (l - i) * 30
        },
        loop: true
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.wrapper__lines {
  width: 100%;
  height: 100%;
  background-color: $principal;
  position: fixed;
  z-index: -1;
  top: 0;
  left: 0;
}

.line {
  opacity: 0.2;
  width: 3px;
  height: 60%;
  background-color: $secondaryAccent;

  position: absolute;
  z-index: 0;
  left: 6%;
}
</style>
