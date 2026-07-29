<template>
  <div class="memories-page">
    <background-tag tag-name="Memories" placement="upper-right" />

    <section class="memories-index" aria-labelledby="memories-title">
      <header class="memories-header">
        <h1 id="memories-title">
          Things worth remembering.
        </h1>
      </header>

      <div class="memories-grid">
        <article
          v-for="memory in memories"
          :key="memory.path"
          class="memory-card"
        >
          <nuxt-link :to="memory.path" class="memory-card__link">
            <div class="memory-card__visual" aria-hidden="true">
              <span>&lt;{{ memory.id }} /&gt;</span>
              <code>{{ memory.codeLine }}</code>
            </div>

            <div class="memory-card__body">
              <h2>{{ memory.title }}</h2>
              <p>{{ memory.description }}</p>
              <span class="memory-card__action">
                Open memory <span aria-hidden="true">↗</span>
              </span>
            </div>
          </nuxt-link>
        </article>
      </div>
    </section>
  </div>
</template>

<script>
import BackgroundTag from '~/components/BackgroundTag.vue'

export default {
  layout: 'base',

  components: {
    BackgroundTag
  },

  async asyncData ({ $content }) {
    const memories = await $content('memories')
      .only(['id', 'title', 'description', 'codeLine', 'path', 'order'])
      .sortBy('order', 'asc')
      .fetch()

    return { memories }
  },

  created () {
    this.$store.commit('setNavigation', {
      prev: '/me',
      next: ''
    })
  },

  head () {
    return {
      title: 'Memories',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Personal memories by Ángel Guerrero told through writing, images, code, video and interactive experiments.'
        }
      ]
    }
  }
}
</script>

<style scoped>
.memories-page {
  box-sizing: border-box;
  position: relative;
  width: 100%;
  height: 100%;
  overflow-y: auto;
  padding: clamp(2.25rem, 6vh, 4.75rem) clamp(1rem, 4vw, 3rem) 3rem;
  user-select: text;
}

.memories-index {
  position: relative;
  z-index: 1;
  width: min(100%, 1100px);
  min-height: 100%;
  margin: 0 auto;
}

.memories-header {
  max-width: 900px;
  padding: 0 0 clamp(1.5rem, 3vh, 2.4rem);
}

.memories-header h1 {
  margin: 0;
  background: var(--gradient);
  background-size: 400%;
  background-clip: text;
  color: transparent;
  font-family: 'Space Grotesk', sans-serif;
  font-size: clamp(2.5rem, 5vw, 4.7rem);
  font-weight: 500;
  letter-spacing: -0.05em;
  line-height: 0.98;
  animation: bgAnimation 35s alternate-reverse infinite;
}

.memories-grid {
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: 1rem;
  border-top: 1px solid rgba(255, 255, 255, 0.11);
  padding: clamp(1.2rem, 2.5vh, 2rem) 0;
}

.memory-card {
  min-height: clamp(320px, 48vh, 440px);
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.13);
  border-radius: 1rem;
  background:
    linear-gradient(135deg, rgba(255, 255, 255, 0.068), rgba(0, 255, 249, 0.015)),
    rgba(0, 8, 20, 0.62);
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.06),
    0 18px 45px rgba(0, 0, 0, 0.18);
  backdrop-filter: blur(15px);
}

.memory-card__link {
  display: flex;
  height: 100%;
  color: inherit;
}

.memory-card__visual {
  position: relative;
  display: flex;
  width: 46%;
  min-width: 250px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background:
    linear-gradient(rgba(0, 8, 20, 0.3), rgba(0, 8, 20, 0.76)),
    repeating-linear-gradient(90deg, transparent 0 42px, rgba(0, 255, 249, 0.065) 43px),
    repeating-linear-gradient(0deg, transparent 0 42px, rgba(0, 255, 249, 0.055) 43px);
}

.memory-card__visual::after {
  content: '';
  position: absolute;
  width: 175px;
  height: 175px;
  border-radius: 50%;
  background: rgba(255, 68, 177, 0.14);
  filter: blur(36px);
}

.memory-card__visual span,
.memory-card__visual code {
  position: relative;
  z-index: 1;
}

.memory-card__visual span {
  color: #3bffbe;
  font-family: 'Space Grotesk', sans-serif;
  font-size: 1.25rem;
  font-style: italic;
}

.memory-card__visual code {
  margin-top: 0.9rem;
  color: #78909b;
  font-family: ui-monospace, SFMono-Regular, Consolas, monospace;
  font-size: 0.66rem;
}

.memory-card__body {
  display: flex;
  min-width: 0;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  padding: clamp(1.3rem, 3vw, 2rem);
}

.memory-card h2 {
  margin: 0;
  color: #f5f8f9;
  font-family: 'Space Grotesk', sans-serif;
  font-size: clamp(1.35rem, 2vw, 2.35rem);
  font-weight: 500;
  letter-spacing: -0.035em;
  line-height: 1.08;
}

.memory-card p {
  margin: 0.85rem 0 0;
  color: #9eb0b9;
  font-family: 'Manrope', sans-serif;
  font-size: 0.82rem;
  line-height: 1.65;
}

.memory-card__action {
  align-self: flex-start;
  margin-top: 1.15rem;
  border-bottom: 1px solid rgba(59, 255, 190, 0.5);
  padding-bottom: 0.18rem;
  color: #3bffbe;
  font-family: 'Manrope', sans-serif;
  font-size: 0.72rem;
  font-weight: 600;
  transition: border-color 180ms ease, color 180ms ease;
}

.memory-card__link:hover .memory-card__action,
.memory-card__link:focus-visible .memory-card__action {
  border-color: #ffe75f;
  color: #ffe75f;
}

.memory-card__link:focus-visible {
  outline: 2px solid #3bffbe;
  outline-offset: -3px;
}

@media screen and (max-width: 980px) {
  .memory-card {
    min-height: 210px;
  }
}

@media screen and (max-width: 767px) {
  .memories-page {
    height: auto;
    min-height: 100%;
    overflow: visible;
    padding: 5rem 0.9rem 2rem;
  }

  .memories-header {
    padding-bottom: 1.35rem;
  }

  .memories-header h1 {
    max-width: 13ch;
    font-size: clamp(2.65rem, 13vw, 4rem);
  }

  .memories-grid {
    gap: 0.8rem;
  }

  .memory-card {
    min-height: 0;
  }

  .memory-card__link {
    flex-direction: column;
  }

  .memory-card__visual {
    width: 100%;
    min-width: 0;
    min-height: 190px;
  }

  .memory-card__body {
    padding: 1.35rem;
  }

  .memory-card h2 {
    font-size: 1.45rem;
  }
}

@media (prefers-reduced-motion: reduce) {
  .memories-header h1 {
    animation: none;
  }
}
</style>
