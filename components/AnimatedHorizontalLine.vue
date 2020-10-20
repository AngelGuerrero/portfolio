<template>
  <div class="horizontal" />
</template>

<script>
export default {
  mounted () {
    this.$anime({
      targets: '.horizontal',
      left: ['-50%', '40%'],
      duration: 9000,
      delay: 5000,
      direction: 'alternate',
      loop: true
    })
  }
}
</script>

<style lang="scss" scoped>
.horizontal {
  opacity: 0.6;
  width: 40%;
  height: 5px;
  background-color: $accent;

  position: absolute;
  z-index: 0;
  left: 0%;
  bottom: 13%;
}
</style>
