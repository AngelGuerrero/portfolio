<template>
  <div class="background_tag">
    <h2>&lt; {{ tagName }} /&gt;</h2>
  </div>
</template>

<script>
export default {
  props: {
    tagName: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.background_tag {
  color: white;
  position: fixed;
  top: 20%;
  left: 18%;

  opacity: 0;
  @include appear-background-letters($opacity: 0, $duration: 6s, $delay: 5s);

  @include media-screen-sm {
    left: 5%;
  }

  h2 {
    font-size: 2rem !important;
    font-family: "Courgette", cursive;

    @include media-screen-md {
      font-size: 3rem !important;
    }
  }
}
</style>
