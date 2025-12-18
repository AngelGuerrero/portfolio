<template>
  <div
    class="dev w-full h-full bg-pattern bg-cover bg-center flex justify-center items-center"
  >
    <!-- Component with postition absolute -->
    <background-tag tag-name="Home" />

    <div class="dev w-full">
      <text-description :is-mobile="this.$store.state.isMobile" />
    </div>
  </div>
</template>

<script>
import BackgroundTag from '~/components/BackgroundTag.vue'
import TextDescription from '~/components/TextDescription.vue'

export default {
  layout: 'base',

  components: {
    BackgroundTag,
    TextDescription
  },

  created () {
    // #region agent log
    fetch('http://127.0.0.1:7243/ingest/34ce4a14-4fb9-4f1c-bc59-a53be485cb74', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ location: 'pages/index.vue:created', message: 'Index page created hook started', data: { storeExists: !!this.$store, storeState: this.$store ? this.$store.state : null }, timestamp: Date.now(), sessionId: 'debug-session', runId: 'run1', hypothesisId: 'B' }) }).catch(() => {})
    // #endregion

    try {
      // #region agent log
      fetch('http://127.0.0.1:7243/ingest/34ce4a14-4fb9-4f1c-bc59-a53be485cb74', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ location: 'pages/index.vue:created', message: 'Before setNavigation commit', data: { storeState: this.$store.state }, timestamp: Date.now(), sessionId: 'debug-session', runId: 'run1', hypothesisId: 'B' }) }).catch(() => {})
      // #endregion

      this.$store.commit('setNavigation', {
        prev: '',
        next: '/me'
      })

      // #region agent log
      fetch('http://127.0.0.1:7243/ingest/34ce4a14-4fb9-4f1c-bc59-a53be485cb74', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ location: 'pages/index.vue:created', message: 'After setNavigation commit', data: { storeState: this.$store.state }, timestamp: Date.now(), sessionId: 'debug-session', runId: 'run1', hypothesisId: 'B' }) }).catch(() => {})
      // #endregion
    } catch (error) {
      // #region agent log
      fetch('http://127.0.0.1:7243/ingest/34ce4a14-4fb9-4f1c-bc59-a53be485cb74', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ location: 'pages/index.vue:created', message: 'Error in created hook', data: { error: error.message, stack: error.stack }, timestamp: Date.now(), sessionId: 'debug-session', runId: 'run1', hypothesisId: 'C' }) }).catch(() => {})
      // #endregion
      throw error
    }
  },

  mounted () {
    // #region agent log
    const elementInfo = this.$el ? {
      tagName: this.$el.tagName,
      className: this.$el.className,
      innerHTML: this.$el.innerHTML ? this.$el.innerHTML.substring(0, 200) : null,
      computedStyle: window.getComputedStyle ? {
        display: window.getComputedStyle(this.$el).display,
        visibility: window.getComputedStyle(this.$el).visibility,
        opacity: window.getComputedStyle(this.$el).opacity,
        width: window.getComputedStyle(this.$el).width,
        height: window.getComputedStyle(this.$el).height
      } : null
    } : null

    fetch('http://127.0.0.1:7243/ingest/34ce4a14-4fb9-4f1c-bc59-a53be485cb74', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ location: 'pages/index.vue:mounted', message: 'Index page mounted', data: { storeState: this.$store.state, componentsExist: !!this.$el, elementInfo }, timestamp: Date.now(), sessionId: 'debug-session', runId: 'run1', hypothesisId: 'D' }) }).catch(() => {})
    // #endregion
  },

  head () {
    return {
      title: 'Home',
      meta: [
        {
          hid: 'title',
          name: 'title',
          content: 'Home'
        }
        // {
        //   hid: 'description',
        //   name: 'description',
        //   content:
        //     "Hello, I'm Ángel Guerrero, I'm a software developer, I love build things and share them. I'm available for freelance work, if you have a project I'd like help you, message me. 👌"
        // }
      ]
    }
  }
}
</script>
