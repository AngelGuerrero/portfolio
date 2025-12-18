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
  },

  mounted () {
    // #region agent log
    fetch('http://127.0.0.1:7243/ingest/34ce4a14-4fb9-4f1c-bc59-a53be485cb74', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ location: 'components/BackgroundTag.vue:mounted', message: 'BackgroundTag component mounted', data: { tagName: this.tagName, elementExists: !!this.$el, elementClasses: this.$el ? this.$el.className : null }, timestamp: Date.now(), sessionId: 'debug-session', runId: 'run1', hypothesisId: 'D' }) }).catch(() => {})
    // #endregion
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
  @include appear-background-letters($opacity: 0, $duration: 6s, $delay: 1s);

  @include media-screen-sm {
    left: 5%;
  }

  h2 {
    font-size: 2rem !important;
    font-family: "Courgette", cursive;

    @include media-screen-md {
      font-size: 2.5rem !important;
    }
  }
}
</style>
