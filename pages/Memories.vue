<template>
  <div ref="scene" class="memories-page">
    <background-tag tag-name="Memories" placement="upper-right" />

    <section class="memories-index" aria-labelledby="memories-title">
      <header class="memories-header" data-memory-reveal>
        <p class="memories-kicker">
          Field notes · code, work &amp; life
        </p>
        <div class="memories-header__layout">
          <h1 id="memories-title">
            Things worth remembering.
          </h1>
          <p class="memories-intro">
            Notes about building software, working with people and remembering
            what keeps the craft meaningful.
          </p>
        </div>
      </header>

      <div v-if="featuredMemory" class="memories-featured" data-memory-reveal>
        <p class="memories-section-label">
          Latest memory
        </p>

        <article class="memory-featured">
          <nuxt-link :to="featuredMemory.path" class="memory-featured__link">
            <div class="memory-cover" aria-hidden="true">
              <span class="memory-cover__number">
                {{ formatIndex(featuredMemory.order) }}
              </span>
              <span class="memory-cover__line" />
              <span class="memory-cover__category">
                {{ featuredMemory.category }}
              </span>
            </div>

            <div class="memory-featured__body">
              <div class="memory-meta">
                <span>{{ featuredMemory.category }}</span>
                <time
                  v-if="featuredMemory.publishedAt"
                  :datetime="featuredMemory.publishedAt"
                >
                  {{ formatDate(featuredMemory) }}
                </time>
                <span v-if="featuredMemory.readingTime">
                  {{ featuredMemory.readingTime }}
                </span>
                <span v-if="featuredMemory.language" class="memory-meta__language">
                  {{ featuredMemory.language }}
                </span>
              </div>

              <h2>{{ featuredMemory.title }}</h2>
              <p>{{ featuredMemory.description }}</p>

              <span class="memory-action">
                Read memory <span aria-hidden="true">↗</span>
              </span>
            </div>
          </nuxt-link>
        </article>
      </div>

      <section
        v-if="archiveMemories.length"
        class="memories-archive"
        aria-labelledby="memories-archive-title"
        data-memory-reveal
      >
        <header class="memories-archive__header">
          <h2 id="memories-archive-title">
            Archive
          </h2>
          <p>
            {{ archiveMemories.length }} earlier
            {{ archiveMemories.length === 1 ? 'note' : 'notes' }}
          </p>
        </header>

        <div class="memories-grid">
          <article
            v-for="memory in archiveMemories"
            :key="memory.path"
            class="memory-card"
          >
            <nuxt-link :to="memory.path" class="memory-card__link">
              <div class="memory-card__topline" aria-hidden="true">
                <span>{{ formatIndex(memory.order) }}</span>
                <span />
              </div>

              <div class="memory-meta">
                <span>{{ memory.category }}</span>
                <time v-if="memory.publishedAt" :datetime="memory.publishedAt">
                  {{ formatDate(memory) }}
                </time>
                <span v-if="memory.readingTime">{{ memory.readingTime }}</span>
              </div>

              <h3>{{ memory.title }}</h3>
              <p>{{ memory.description }}</p>

              <span class="memory-action">
                Read memory <span aria-hidden="true">↗</span>
              </span>
            </nuxt-link>
          </article>
        </div>
      </section>
    </section>
  </div>
</template>

<script>
import {
  animate,
  createScope,
  stagger
} from 'animejs'
import BackgroundTag from '~/components/BackgroundTag.vue'

export default {
  layout: 'base',

  components: {
    BackgroundTag
  },

  async asyncData ({ $content }) {
    const memories = await $content('memories')
      .only([
        'id',
        'title',
        'description',
        'category',
        'publishedAt',
        'readingTime',
        'language',
        'path',
        'order'
      ])
      .sortBy('order', 'desc')
      .fetch()

    return { memories }
  },

  data: () => ({
    animeScope: null
  }),

  computed: {
    featuredMemory () {
      return this.memories[0] || null
    },

    archiveMemories () {
      return this.memories.slice(1)
    }
  },

  created () {
    this.$store.commit('setNavigation', {
      prev: '/me',
      next: ''
    })
  },

  mounted () {
    const reduceMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches

    if (reduceMotion) {
      return
    }

    this.animeScope = createScope({
      root: this.$refs.scene
    }).add(() => {
      animate('[data-memory-reveal]', {
        opacity: [0, 1],
        translateY: [24, 0],
        delay: stagger(120),
        duration: 760,
        ease: 'out(3)'
      })
    })
  },

  beforeDestroy () {
    if (this.animeScope) {
      this.animeScope.revert()
      this.animeScope = null
    }
  },

  methods: {
    formatDate (memory) {
      if (!memory.publishedAt) {
        return ''
      }

      const locale = memory.language === 'es' ? 'es-MX' : 'en-US'
      const date = new Date(`${memory.publishedAt}T12:00:00`)

      return new Intl.DateTimeFormat(locale, {
        day: 'numeric',
        month: 'short',
        year: 'numeric'
      }).format(date)
    },

    formatIndex (order) {
      return String(order || 0).padStart(2, '0')
    }
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
  padding: clamp(2.75rem, 7vh, 5.5rem) clamp(1rem, 5vw, 4.5rem) 5rem;
  scrollbar-color: rgba(59, 255, 190, 0.45) transparent;
  scrollbar-width: thin;
  user-select: text;
}

.memories-index {
  position: relative;
  z-index: 1;
  width: min(100%, 1120px);
  margin: 0 auto;
}

.memories-header {
  padding-bottom: clamp(2.25rem, 5vh, 4.25rem);
}

.memories-kicker,
.memories-section-label {
  margin: 0 0 1rem;
  color: #3bffbe;
  font-family: 'Manrope', sans-serif;
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.memories-header__layout {
  display: grid;
  grid-template-columns: minmax(0, 1.45fr) minmax(250px, 0.55fr);
  align-items: end;
  gap: clamp(2rem, 6vw, 6rem);
}

.memories-header h1 {
  max-width: 12ch;
  margin: 0;
  background: var(--gradient);
  background-size: 400%;
  background-clip: text;
  color: transparent;
  font-family: 'Space Grotesk', sans-serif;
  font-size: clamp(3rem, 5.8vw, 4.8rem);
  font-weight: 500;
  letter-spacing: -0.055em;
  line-height: 0.98;
  animation: bgAnimation 35s alternate-reverse infinite;
}

.memories-intro {
  max-width: 34ch;
  margin: 0 0 0.3rem;
  color: #b9c8ce;
  font-family: 'Manrope', sans-serif;
  font-size: 1rem;
  line-height: 1.75;
}

.memory-featured {
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 1rem;
  background: rgba(0, 10, 24, 0.72);
  box-shadow: 0 24px 70px rgba(0, 0, 0, 0.22);
  transition: border-color 220ms ease, transform 220ms ease;
}

.memory-featured:hover {
  border-color: rgba(59, 255, 190, 0.42);
  transform: translateY(-3px);
}

.memory-featured__link {
  display: grid;
  min-height: 330px;
  grid-template-columns: minmax(245px, 0.72fr) minmax(0, 1.28fr);
  overflow: hidden;
  border-radius: inherit;
  color: inherit;
}

.memory-featured__link:focus-visible,
.memory-card__link:focus-visible {
  outline: 3px solid #3bffbe;
  outline-offset: 4px;
}

.memory-cover {
  position: relative;
  display: flex;
  min-height: 100%;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
  padding: clamp(1.5rem, 3vw, 2.5rem);
  background:
    linear-gradient(145deg, rgba(59, 255, 190, 0.11), rgba(255, 143, 208, 0.07)),
    repeating-linear-gradient(90deg, transparent 0 54px, rgba(59, 255, 190, 0.045) 55px),
    #020d1c;
}

.memory-cover::after {
  content: '';
  position: absolute;
  right: -25%;
  bottom: -35%;
  width: 85%;
  aspect-ratio: 1;
  border: 1px solid rgba(255, 143, 208, 0.2);
  border-radius: 50%;
  box-shadow: 0 0 80px rgba(255, 68, 177, 0.12);
}

.memory-cover__number {
  color: rgba(245, 248, 249, 0.88);
  font-family: 'Space Grotesk', sans-serif;
  font-size: clamp(4rem, 8vw, 7.5rem);
  font-weight: 500;
  letter-spacing: -0.08em;
  line-height: 0.85;
}

.memory-cover__line {
  width: 4.5rem;
  height: 2px;
  margin-top: auto;
  margin-bottom: 0.8rem;
  background: #3bffbe;
}

.memory-cover__category {
  color: #dce7eb;
  font-family: 'Manrope', sans-serif;
  font-size: 0.8rem;
  font-weight: 600;
}

.memory-featured__body {
  display: flex;
  min-width: 0;
  flex-direction: column;
  justify-content: center;
  padding: clamp(2rem, 5vw, 4.25rem);
}

.memory-meta {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.55rem 0.9rem;
  color: #91a6af;
  font-family: 'Manrope', sans-serif;
  font-size: 0.82rem;
  font-weight: 600;
}

.memory-meta > * + *::before {
  content: '·';
  margin-right: 0.9rem;
  color: #3bffbe;
}

.memory-meta__language {
  text-transform: uppercase;
}

.memory-featured h2 {
  max-width: 15ch;
  margin: 1rem 0 0;
  color: #f5f8f9;
  font-family: 'Space Grotesk', sans-serif;
  font-size: clamp(2rem, 4vw, 3.5rem);
  font-weight: 500;
  letter-spacing: -0.045em;
  line-height: 1;
}

.memory-featured__body > p {
  color: #b6c5cb;
  font-family: 'Manrope', sans-serif;
}

.memory-featured__body > p {
  max-width: 54ch;
  margin: 1.25rem 0 0;
  font-size: 1rem;
  line-height: 1.75;
}

.memory-action {
  align-self: flex-start;
  margin-top: 1.5rem;
  border-bottom: 1px solid rgba(59, 255, 190, 0.6);
  padding: 0.15rem 0 0.25rem;
  color: #3bffbe;
  font-family: 'Manrope', sans-serif;
  font-size: 0.9rem;
  font-weight: 700;
  transition: border-color 180ms ease, color 180ms ease;
}

.memory-featured__link:hover .memory-action,
.memory-featured__link:focus-visible .memory-action,
.memory-card__link:hover .memory-action,
.memory-card__link:focus-visible .memory-action {
  border-color: #ffe75f;
  color: #ffe75f;
}

.memories-archive {
  margin-top: clamp(3.5rem, 8vh, 6rem);
  padding-bottom: 1rem;
}

.memories-archive__header {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  border-bottom: 1px solid rgba(255, 255, 255, 0.13);
  padding-bottom: 1rem;
}

.memories-archive__header h2 {
  margin: 0;
  color: #f5f8f9;
  font-family: 'Space Grotesk', sans-serif;
  font-size: clamp(1.5rem, 3vw, 2.25rem);
  font-weight: 500;
}

.memories-archive__header p {
  margin: 0;
  color: #91a6af;
  font-family: 'Manrope', sans-serif;
  font-size: 0.82rem;
}

.memories-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1rem;
  padding-top: 1.25rem;
}

.memory-card {
  min-width: 0;
}

.memory-card__link {
  display: flex;
  min-height: 280px;
  flex-direction: column;
  border: 1px solid rgba(255, 255, 255, 0.13);
  border-radius: 0.85rem;
  padding: clamp(1.4rem, 3vw, 2rem);
  background: rgba(0, 10, 24, 0.54);
  color: inherit;
  transition: border-color 200ms ease, transform 200ms ease;
}

.memory-card__link:hover {
  border-color: rgba(255, 143, 208, 0.45);
  transform: translateY(-3px);
}

.memory-card__topline {
  display: flex;
  align-items: center;
  gap: 0.85rem;
  margin-bottom: 1.5rem;
  color: #ff8fd0;
  font-family: 'Space Grotesk', sans-serif;
  font-size: 1rem;
}

.memory-card__topline span:last-child {
  width: 3.5rem;
  height: 1px;
  background: rgba(255, 143, 208, 0.55);
}

.memory-card h3 {
  max-width: 20ch;
  margin: 1rem 0 0;
  color: #f5f8f9;
  font-family: 'Space Grotesk', sans-serif;
  font-size: clamp(1.55rem, 2.6vw, 2.2rem);
  font-weight: 500;
  letter-spacing: -0.035em;
  line-height: 1.08;
}

.memory-card p {
  margin: 1rem 0 0;
  color: #b6c5cb;
  font-family: 'Manrope', sans-serif;
  font-size: 1rem;
  line-height: 1.7;
}

.memory-card .memory-action {
  margin-top: auto;
  padding-top: 1.5rem;
}

@media screen and (max-width: 820px) {
  .memories-header__layout {
    display: block;
  }

  .memories-intro {
    margin-top: 1.5rem;
  }

  .memory-featured__link {
    grid-template-columns: minmax(180px, 0.55fr) minmax(0, 1.45fr);
  }
}

@media screen and (max-width: 767px) {
  .memories-page {
    height: auto;
    min-height: 100%;
    overflow: visible;
    padding: 5rem 0.9rem 3rem;
  }

  .memories-header h1 {
    max-width: 10ch;
    font-size: clamp(2.85rem, 13vw, 4rem);
  }

  .memories-intro {
    max-width: 35ch;
    font-size: 1rem;
  }

  .memory-featured__link {
    display: flex;
    min-height: 0;
    flex-direction: column;
  }

  .memory-cover {
    min-height: 145px;
    padding: 1.35rem;
  }

  .memory-cover__number {
    font-size: 4.2rem;
  }

  .memory-cover__line {
    width: 3.5rem;
    margin-bottom: 0.5rem;
  }

  .memory-featured__body {
    padding: 1.5rem 1.35rem 1.65rem;
  }

  .memory-featured h2 {
    font-size: 2.2rem;
  }

  .memory-meta {
    font-size: 0.78rem;
  }

  .memories-grid {
    grid-template-columns: minmax(0, 1fr);
  }

  .memory-card__link {
    min-height: 260px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .memories-header h1 {
    animation: none;
  }

  .memory-featured,
  .memory-card__link {
    transition: none;
  }
}
</style>
