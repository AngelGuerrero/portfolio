<template>
  <div class="me-page">
    <background-tag tag-name="Me" placement="me" />

    <section class="me-panel" aria-labelledby="me-title">
      <div class="me-content">
        <header class="me-intro">
          <h1 id="me-title">
            I’m happiest when an idea starts to work.
          </h1>
          <p class="me-lead">
            I'm Ángel. I write code because I still love that moment when
            something that only existed in my head begins to move, respond and
            become useful to someone else.
          </p>

          <div class="me-actions" aria-label="Social links">
            <a
              v-for="social in socials"
              :key="social.label"
              :href="social.url"
              :target="social.external ? '_blank' : null"
              :rel="social.external ? 'noopener noreferrer' : null"
            >
              {{ social.label }} <span aria-hidden="true">↗</span>
            </a>
          </div>
        </header>

        <article class="me-story" aria-labelledby="me-story-title">
          <p id="me-story-title" class="me-story__title">
            My history
          </p>

          <div class="me-history-list">
            <button
              v-for="(experience, index) in history"
              :key="experience.company"
              type="button"
              class="me-note"
              :class="{ 'me-note--active': activeExperienceIndex === index }"
              @mouseenter="showExperience(index)"
              @focus="showExperience(index)"
              @click="showExperience(index)"
            >
              <div class="me-note__heading">
                <span class="me-note__company">
                  {{ experience.company }}
                </span>
                <h2>{{ experience.title }}</h2>
              </div>
              <span class="me-note__hint" aria-hidden="true">
                {{ activeExperienceIndex === index ? 'Previewing' : 'Show preview' }}
              </span>
            </button>
          </div>
        </article>
      </div>

      <aside class="me-showcase" aria-live="polite">
        <transition name="me-preview" mode="out-in">
          <div
            v-if="activeExperience"
            :key="activeExperience.company"
            class="system-preview"
            :style="{ '--preview-accent': activeExperience.accent }"
          >
            <div class="system-preview__topline">
              <span>System preview</span>
              <button type="button" @click="clearExperience">
                Back to portrait
              </button>
            </div>

            <div
              v-if="activeExperience.image"
              class="system-window system-window--image"
            >
              <img
                :src="activeExperience.image"
                :alt="`${activeExperience.company} system preview`"
              >
            </div>

            <div v-else class="system-window" aria-hidden="true">
              <div class="system-window__bar">
                <span />
                <span />
                <span />
                <small>{{ activeExperience.site }}</small>
              </div>
              <div class="system-window__canvas">
                <div class="system-window__sidebar">
                  <i />
                  <i />
                  <i />
                  <i />
                </div>
                <div class="system-window__content">
                  <b />
                  <div class="system-window__metrics">
                    <i />
                    <i />
                    <i />
                  </div>
                  <div class="system-window__table">
                    <i v-for="row in 5" :key="row" />
                  </div>
                </div>
              </div>
            </div>

            <div class="system-preview__copy">
              <span>{{ activeExperience.previewLabel }}</span>
              <h2>{{ activeExperience.company }}</h2>
              <p>{{ activeExperience.text }}</p>
              <a
                :href="activeExperience.url"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit {{ activeExperience.site }} <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>

          <div v-else key="portrait" class="me-portrait" aria-label="Portrait of Ángel Guerrero">
            <photo-component />
            <p class="me-portrait__caption">
              <span>Ángel Guerrero</span>
              <span>Hover over a chapter.</span>
            </p>
          </div>
        </transition>
      </aside>
    </section>
  </div>
</template>

<script>
import BackgroundTag from '~/components/BackgroundTag.vue'
import PhotoComponent from '~/components/PhotoComponent.vue'

export default {
  layout: 'base',

  components: {
    BackgroundTag,
    PhotoComponent
  },

  data: () => ({
    activeExperienceIndex: null,
    socials: [
      {
        label: 'GitHub',
        url: 'https://github.com/AngelGuerrero',
        external: true
      },
      {
        label: 'WhatsApp',
        url: 'https://wa.link/upltbr',
        external: true
      },
      {
        label: 'Email',
        url: 'mailto:lasantiagoguerrero@gmail.com',
        external: false
      }
    ],
    history: [
      {
        company: 'H3C',
        title: 'Where the story began.',
        text: 'It was my first real step into building software for other people—and the place where curiosity became a profession.',
        url: 'https://www.h3c.com.mx/',
        site: 'h3c.com.mx',
        previewLabel: 'First systems',
        accent: '#00fff9',
        image: null
      },
      {
        company: 'Anclaje Media',
        title: 'I discovered the creative side of code.',
        text: 'It showed me that development is not only logic. It can also carry an idea, a voice and a visual intention.',
        url: 'http://anclajemedia.com.mx/',
        site: 'anclajemedia.com.mx',
        previewLabel: 'Creative technology',
        accent: '#ff79c6',
        image: null
      },
      {
        company: 'Pilgrim\'s',
        title: 'It felt like home.',
        text: 'It gave me room to grow, make mistakes and discover that a place can ask a lot from you while still feeling warm and familiar.',
        url: 'https://www.pilgrims.com.mx/',
        site: 'pilgrims.com.mx',
        previewLabel: 'Business software',
        accent: '#ffe75f',
        image: null
      },
      {
        company: 'Epix Industries',
        title: 'I learned to think beyond the first solution.',
        text: 'A good answer is rarely just the one that works today. This part of the road taught me to look further ahead.',
        url: 'https://epix.industries/',
        site: 'epix.industries',
        previewLabel: 'Industrial systems',
        accent: '#ff8a5b',
        image: null
      },
      {
        company: 'Grupo Icarus',
        title: 'I found the joy of a hard challenge.',
        text: 'The kind that follows you after the laptop is closed and makes the answer feel worth the wait.',
        url: 'https://www.grupoicarus.com.mx/',
        site: 'grupoicarus.com.mx',
        previewLabel: 'Complex challenges',
        accent: '#3bffbe',
        image: null
      },
      {
        company: 'Intelligential',
        title: 'I learned how to be part of a team.',
        text: 'Not only how to divide the work, but how to listen, trust someone else\'s idea and build something none of us could have made alone.',
        url: 'https://www.intelligential.tech/',
        site: 'intelligential.tech',
        previewLabel: 'Collaborative products',
        accent: '#9d8cff',
        image: null
      }
    ]
  }),

  computed: {
    activeExperience () {
      return this.activeExperienceIndex === null
        ? null
        : this.history[this.activeExperienceIndex]
    }
  },

  methods: {
    showExperience (index) {
      this.activeExperienceIndex = index
    },

    clearExperience () {
      this.activeExperienceIndex = null
    }
  },

  created () {
    this.$store.commit('setNavigation', {
      prev: '/',
      next: '/memories'
    })
  },

  head () {
    return {
      title: 'Me',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'A personal introduction to Ángel Guerrero and the places that shaped the way he creates software.'
        }
      ]
    }
  }
}
</script>

<style>
.me-page {
  box-sizing: border-box;
  position: relative;
  width: 100%;
  height: 100%;
  min-height: 0;
  overflow: hidden;
  padding: 1.1rem 1.5rem 1.25rem;
}

.me-panel {
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: minmax(0, 1.35fr) minmax(270px, 0.72fr);
  width: 100%;
  max-width: 1080px;
  height: 100%;
  margin: 0 auto;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 1rem;
  background:
    linear-gradient(135deg, rgba(255, 255, 255, 0.045), rgba(0, 255, 249, 0.018)),
    rgba(0, 8, 20, 0.7);
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.07),
    0 25px 70px rgba(0, 0, 0, 0.28);
  backdrop-filter: blur(13px);
}

.me-content {
  display: grid;
  min-width: 0;
  min-height: 0;
  grid-template-rows: auto minmax(0, 1fr);
}

.me-intro {
  padding: 4.2rem 2.6rem 1.45rem;
}

.me-eyebrow,
.me-story__title {
  margin: 0 0 0.8rem;
  color: #ff8fd0;
  font-family: 'Manrope', sans-serif;
  font-size: 0.68rem;
  font-weight: 500;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.me-intro h1 {
  max-width: 660px;
  margin: 0;
  background: var(--gradient);
  background-size: 400%;
  background-clip: text;
  color: transparent;
  font-family: 'Space Grotesk', sans-serif;
  font-size: clamp(2.7rem, 4.7vw, 4.7rem);
  font-weight: 500;
  letter-spacing: -0.045em;
  line-height: 0.98;
  animation: bgAnimation 35s alternate-reverse infinite;
}

.me-lead {
  max-width: 650px;
  margin: 1.05rem 0 0;
  color: #cbd7dc;
  font-family: 'Manrope', sans-serif;
  font-size: 0.94rem;
  line-height: 1.7;
}

.me-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  margin-top: 1.15rem;
}

.me-actions a {
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  padding: 0.2rem 0;
  color: #a9bbc3;
  font-family: 'Manrope', sans-serif;
  font-size: 0.76rem;
  font-weight: 600;
  letter-spacing: -0.01em;
  transition: color 180ms ease, transform 180ms ease;
}

.me-actions a::before {
  content: '';
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: #3bffbe;
  box-shadow: 0 0 8px rgba(59, 255, 190, 0.38);
  transition: background 180ms ease, box-shadow 180ms ease;
}

.me-actions a span {
  color: #617d86;
  font-size: 0.68rem;
  transition: color 180ms ease, transform 180ms ease;
}

.me-actions a:hover,
.me-actions a:focus {
  color: #ffffff;
  outline: none;
  transform: translateY(-1px);
}

.me-actions a:hover::before,
.me-actions a:focus::before {
  background: #ffe75f;
  box-shadow: 0 0 10px rgba(255, 231, 95, 0.5);
}

.me-actions a:hover span,
.me-actions a:focus span {
  color: #ffe75f;
  transform: translate(2px, -2px);
}

.me-story {
  min-height: 0;
  overflow-y: auto;
  border-top: 1px solid rgba(255, 255, 255, 0.09);
  padding: 1.25rem 2.6rem 1.6rem;
  scrollbar-color: #20aa8c transparent;
  scrollbar-width: thin;
}

.me-story__title {
  color: #3bffbe;
}

.me-history-list {
  display: flex;
  flex-direction: column;
}

.me-note {
  display: flex;
  width: 100%;
  min-height: 4.5rem;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  border: 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.075);
  padding: 0.85rem 0.9rem;
  background: transparent;
  color: inherit;
  cursor: default;
  text-align: left;
  transition:
    background 180ms ease,
    padding 180ms ease;
}

.me-note:hover,
.me-note:focus-visible,
.me-note--active {
  background: linear-gradient(90deg, rgba(59, 255, 190, 0.045), transparent);
  outline: none;
  padding-right: 1.15rem;
  padding-left: 1.15rem;
}

.me-note:focus-visible {
  box-shadow: inset 2px 0 0 #3bffbe;
}

.me-note__heading {
  display: grid;
  min-width: 0;
  flex: 1;
  grid-template-columns: minmax(105px, 0.38fr) minmax(0, 1fr);
  align-items: center;
  gap: 1rem;
}

.me-note__company {
  display: block;
  color: #ff8fd0;
  font-family: 'Manrope', sans-serif;
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.01em;
}

.me-note h2 {
  margin: 0;
  color: #f3f7f8;
  font-family: 'Space Grotesk', sans-serif;
  font-size: 1.05rem;
  font-weight: 400;
  letter-spacing: -0.02em;
  line-height: 1.25;
}

.me-note__hint {
  flex: 0 0 auto;
  color: #617983;
  font-family: 'Manrope', sans-serif;
  font-size: 0.65rem;
  transition: color 180ms ease;
}

.me-note:hover .me-note__hint,
.me-note:focus-visible .me-note__hint,
.me-note--active .me-note__hint {
  color: #3bffbe;
}

.me-showcase {
  position: relative;
  min-height: 0;
  overflow: hidden;
  border-left: 1px solid rgba(255, 255, 255, 0.1);
  background:
    radial-gradient(circle at 60% 70%, rgba(255, 68, 177, 0.1), transparent 34%),
    rgba(255, 255, 255, 0.018);
}

.me-showcase::before {
  content: '';
  position: absolute;
  z-index: 0;
  inset: 1rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 0.7rem;
}

.me-portrait,
.system-preview {
  position: relative;
  z-index: 1;
  width: 100%;
  height: 100%;
}

.me-portrait {
  display: flex;
  align-items: center;
  justify-content: center;
}

.me-portrait .personal-image__wrapper {
  position: relative;
  z-index: 1;
  opacity: 0.78;
}

.me-portrait__caption {
  position: absolute;
  right: 1.5rem;
  bottom: 1.45rem;
  left: 1.5rem;
  z-index: 2;
  display: flex;
  justify-content: space-between;
  margin: 0;
  color: #6e858f;
  font-family: 'Manrope', sans-serif;
  font-size: 0.6rem;
}

.system-preview {
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2rem 1.5rem;
}

.system-preview__topline {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.7rem;
  color: #6f858f;
  font-family: 'Manrope', sans-serif;
  font-size: 0.55rem;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}

.system-preview__topline button {
  border: 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.14);
  padding: 0 0 0.15rem;
  background: transparent;
  color: #7f949d;
  cursor: pointer;
  font: inherit;
  letter-spacing: inherit;
  text-transform: inherit;
  transition: border-color 160ms ease, color 160ms ease;
}

.system-preview__topline button:hover,
.system-preview__topline button:focus-visible {
  border-color: var(--preview-accent);
  color: var(--preview-accent);
  outline: none;
}

.system-window {
  overflow: hidden;
  border: 1px solid color-mix(in srgb, var(--preview-accent) 35%, transparent);
  border-radius: 0.55rem;
  background: #06121d;
  box-shadow: 0 20px 55px rgba(0, 0, 0, 0.32);
}

.system-window--image {
  aspect-ratio: 16 / 10;
}

.system-window--image img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top center;
}

.system-window__bar {
  display: flex;
  align-items: center;
  gap: 0.3rem;
  height: 1.75rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.075);
  padding: 0 0.65rem;
}

.system-window__bar > span {
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.2);
}

.system-window__bar > span:first-child {
  background: var(--preview-accent);
}

.system-window__bar small {
  overflow: hidden;
  margin-left: 0.4rem;
  color: #617984;
  font-family: 'Manrope', sans-serif;
  font-size: 0.47rem;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.system-window__canvas {
  display: grid;
  height: 190px;
  grid-template-columns: 48px 1fr;
}

.system-window__sidebar {
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  border-right: 1px solid rgba(255, 255, 255, 0.06);
  padding: 1rem 0.65rem;
  background: rgba(255, 255, 255, 0.015);
}

.system-window__sidebar i {
  display: block;
  height: 5px;
  border-radius: 99px;
  background: rgba(255, 255, 255, 0.1);
}

.system-window__sidebar i:first-child {
  background: var(--preview-accent);
}

.system-window__content {
  padding: 1rem;
}

.system-window__content > b {
  display: block;
  width: 46%;
  height: 7px;
  border-radius: 99px;
  background: rgba(255, 255, 255, 0.16);
}

.system-window__metrics {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.45rem;
  margin-top: 0.9rem;
}

.system-window__metrics i {
  height: 44px;
  border: 1px solid rgba(255, 255, 255, 0.07);
  border-radius: 0.3rem;
  background: linear-gradient(135deg, color-mix(in srgb, var(--preview-accent) 13%, transparent), transparent);
}

.system-window__table {
  margin-top: 0.8rem;
}

.system-window__table i {
  display: block;
  height: 7px;
  margin-top: 0.42rem;
  border-radius: 99px;
  background: rgba(255, 255, 255, 0.065);
}

.system-window__table i:nth-child(even) {
  width: 84%;
}

.system-preview__copy {
  padding: 1.2rem 0.2rem 0;
}

.system-preview__copy > span {
  color: var(--preview-accent);
  font-family: 'Manrope', sans-serif;
  font-size: 0.68rem;
  font-weight: 600;
}

.system-preview__copy h2 {
  margin: 0.25rem 0 0.5rem;
  color: #f5f8f9;
  font-family: 'Space Grotesk', sans-serif;
  font-size: 1.7rem;
  font-weight: 400;
  letter-spacing: -0.035em;
}

.system-preview__copy p {
  margin: 0;
  color: #93a6af;
  font-family: 'Manrope', sans-serif;
  font-size: 0.73rem;
  line-height: 1.55;
}

.system-preview__copy a {
  display: inline-block;
  margin-top: 0.8rem;
  border-bottom: 1px solid var(--preview-accent);
  padding-bottom: 0.18rem;
  color: var(--preview-accent);
  font-family: 'Manrope', sans-serif;
  font-size: 0.58rem;
}

.system-preview__copy a:focus {
  outline: 2px solid #ffe75f;
  outline-offset: 3px;
}

.me-preview-enter-active,
.me-preview-leave-active {
  transition: opacity 180ms ease, transform 180ms ease;
}

.me-preview-enter,
.me-preview-leave-to {
  opacity: 0;
  transform: translateY(8px);
}

@media screen and (max-width: 959px) {
  .me-page {
    height: auto;
    min-height: 100%;
    overflow: visible;
    padding: 3.5rem clamp(0.8rem, 3vw, 1.5rem) 2rem;
  }

  .me-panel {
    display: grid;
    height: auto;
    grid-template-columns: minmax(0, 1fr);
    overflow: hidden;
  }

  .me-content {
    display: block;
  }

  .me-intro {
    padding: 4.5rem clamp(1.25rem, 5vw, 2.6rem) 1.5rem;
  }

  .me-intro h1 {
    font-size: clamp(2.8rem, 10vw, 4.6rem);
  }

  .me-story {
    overflow: visible;
    padding: 1.35rem clamp(1.25rem, 5vw, 2.6rem) 1.6rem;
  }

  .me-note {
    display: block;
    padding: 1rem;
  }

  .me-note__hint {
    display: block;
    margin-top: 0.4rem;
  }

  .me-note h2 {
    font-size: 1.05rem;
  }

  .me-note p {
    font-size: 0.8rem;
  }

  .me-showcase {
    min-height: clamp(440px, 70vw, 620px);
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    border-left: 0;
  }

  .system-preview {
    min-height: clamp(440px, 70vw, 620px);
    padding: 2.5rem clamp(1.25rem, 5vw, 2.6rem);
  }
}

@media screen and (min-width: 640px) and (max-width: 959px) {
  .me-note {
    min-height: 5rem;
  }

  .me-note__heading {
    grid-template-columns: minmax(120px, 0.32fr) minmax(0, 1fr);
  }
}

@media (prefers-reduced-motion: reduce) {
  .me-intro h1 {
    animation: none;
  }
}
</style>
