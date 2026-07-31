<template>
  <div
    class="background_tag"
    aria-hidden="true"
    :class="{
      'background_tag--lower': placement === 'lower',
      'background_tag--upper-right': placement === 'upper-right',
      'background_tag--article': placement === 'article',
      'background_tag--me': placement === 'me'
    }"
  >
    <h2>&lt; {{ tagName }} /&gt;</h2>
  </div>
</template>

<script>
export default {
  props: {
    tagName: {
      type: String,
      default: ''
    },
    placement: {
      type: String,
      default: 'home'
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
  animation-name: appearBackgroundLetters;
  animation-duration: 6s;
  animation-delay: 1s;
  animation-fill-mode: forwards;
}

@media screen and (min-width: 640px) {
  .background_tag {
    left: 5%;
  }
}

.background_tag h2 {
  font-size: 2rem !important;
  font-family: "Courgette", cursive;
}

.background_tag--lower {
  top: auto;
  bottom: 18%;
}

.background_tag--upper-right {
  top: 8%;
  right: 8%;
  left: auto;
}

.background_tag--article {
  position: absolute;
  z-index: 0;
  top: 0.85rem;
  right: clamp(1.5rem, 5vw, 4rem);
  left: auto;
  pointer-events: none;
}

.background_tag--me {
  position: absolute;
  z-index: 0;
  top: 2.5rem;
  right: clamp(1rem, 5vw, 5rem);
  left: auto;
  animation-name: appearMeSignature;
  animation-duration: 2s;
  animation-delay: 0.2s;
  pointer-events: none;
}

.background_tag--me h2 {
  font-size: clamp(3rem, 7vw, 6.5rem) !important;
}

@keyframes appearMeSignature {
  from {
    opacity: 0;
  }

  to {
    opacity: 0.075;
  }
}

@media screen and (min-width: 768px) {
  .background_tag h2 {
    font-size: 2.5rem !important;
  }
}

@media screen and (max-width: 767px) {
  .background_tag--article {
    top: 0.8rem;
    right: 1rem;
  }

  .background_tag--article h2 {
    font-size: 1.8rem !important;
  }
}
</style>
