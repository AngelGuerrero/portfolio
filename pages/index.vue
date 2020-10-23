<template>
  <b-container class="dev h-100 w-100" fluid>
    <!-- Component view has a postition absolute -->
    <BackgroundTag tag-name="Home" />

    <!-- Contians row and cols -->
    <TextDescription :is-mobile="this.$store.state.isMobile" />
  </b-container>
</template>

<script>
export default {
  layout: 'technoLayout'
}
</script>

<style lang="scss"></style>
