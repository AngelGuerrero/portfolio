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

<style scoped>
.background_tag {
  color: white;
  position: fixed;
  top: 20%;
  left: 18%;

  opacity: 0;
}

h2 {
  font-size: 2rem !important;
  font-family: "Courgette", cursive;
}
</style>
