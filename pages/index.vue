<script setup>
useHead({
  title: 'Home | Ángel Guerrero'
})
</script>

<template>
  <div
    class="flex items-center justify-center w-full h-full bg-center bg-cover dev bg-pattern">
    <!-- Component with position absolute -->
    <BackgroundTag tag-name="Home" />

    <div class="w-full dev">
      <TextDescription />
    </div>
  </div>
</template>
