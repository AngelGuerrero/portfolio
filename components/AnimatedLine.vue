<template>
  <div class="line" />
</template>

<script>
export default {
  mounted () {
    this.$anime({
      targets: '.line',
      bottom: ['-100%', '100%'],
      duration: 13000,
      delay: 8000,
      loop: true
    })
  }
}
</script>

<style lang="scss" scoped>
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
