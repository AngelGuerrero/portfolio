<template>
  <div ref="scene" class="memory-page">
    <background-tag tag-name="Memory" placement="article" />

    <article
      class="memory-article"
      :lang="memory.language || 'en'"
      aria-labelledby="memory-title"
    >
      <header class="memory-article__header" data-article-reveal>
        <nuxt-link to="/memories" class="memory-back">
          <span aria-hidden="true">←</span> All memories
        </nuxt-link>

        <div class="memory-article__meta">
          <span v-if="memory.category">{{ memory.category }}</span>
          <time v-if="memory.publishedAt" :datetime="memory.publishedAt">
            {{ formatDate(memory) }}
          </time>
          <span v-if="memory.readingTime">{{ memory.readingTime }}</span>
          <span v-if="memory.language" class="memory-article__language">
            {{ memory.language }}
          </span>
        </div>

        <h1 id="memory-title">
          {{ memory.title }}
        </h1>
        <p v-if="memory.description" class="memory-article__lead">
          {{ memory.description }}
        </p>
      </header>

      <div
        class="memory-article__layout"
        :class="{ 'memory-article__layout--with-toc': hasTableOfContents }"
        data-article-reveal
      >
        <aside v-if="hasTableOfContents" class="memory-toc">
          <nav aria-label="On this memory">
            <a
              v-for="heading in memory.toc"
              :key="heading.id"
              :href="`#${heading.id}`"
              :class="`memory-toc__depth-${heading.depth}`"
            >
              {{ heading.text }}
            </a>
          </nav>
        </aside>

        <nuxt-content :document="memory" class="memory-content" />
      </div>

      <nav
        v-if="newerMemory || olderMemory"
        class="memory-navigation"
        aria-label="More memories"
        data-article-reveal
      >
        <nuxt-link
          v-if="newerMemory"
          :to="newerMemory.path"
          class="memory-navigation__link memory-navigation__link--newer"
        >
          <span>Newer memory</span>
          <strong>← {{ newerMemory.title }}</strong>
        </nuxt-link>

        <nuxt-link
          v-if="olderMemory"
          :to="olderMemory.path"
          class="memory-navigation__link memory-navigation__link--older"
        >
          <span>Earlier memory</span>
          <strong>{{ olderMemory.title }} →</strong>
        </nuxt-link>
      </nav>
    </article>
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

  async asyncData ({ $content, params, error }) {
    try {
      const memory = await $content('memories', params.slug).fetch()
      const memories = await $content('memories')
        .only(['title', 'path', 'order'])
        .sortBy('order', 'desc')
        .fetch()
      const currentIndex = memories.findIndex(entry => (
        entry.path === memory.path
      ))

      return {
        memory,
        newerMemory: currentIndex > 0 ? memories[currentIndex - 1] : null,
        olderMemory: currentIndex >= 0 && currentIndex < memories.length - 1
          ? memories[currentIndex + 1]
          : null
      }
    } catch (exception) {
      error({
        statusCode: 404,
        message: 'This memory has not been written yet.'
      })
    }
  },

  data: () => ({
    animeScope: null
  }),

  computed: {
    hasTableOfContents () {
      return this.memory.toc && this.memory.toc.length > 1
    }
  },

  created () {
    this.$store.commit('setNavigation', {
      prev: '/memories',
      next: ''
    })
  },

  mounted () {
    this.renderCodeBlocks()

    const reduceMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches

    if (reduceMotion) {
      return
    }

    this.animeScope = createScope({
      root: this.$refs.scene
    }).add(() => {
      animate('[data-article-reveal]', {
        opacity: [0, 1],
        translateY: [20, 0],
        delay: stagger(130),
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
    renderCodeBlocks () {
      this.$nextTick(() => {
        this.$prism.highlightAllUnder(this.$el)
        this.attachCopyFeedback()
      })
    },

    attachCopyFeedback () {
      const buttons = this.$el.querySelectorAll('.copy-to-clipboard-button')

      buttons.forEach((button) => {
        if (button.dataset.memoryCopyReady) {
          return
        }

        button.dataset.memoryCopyReady = 'true'
        button.addEventListener('click', async () => {
          const code = button.closest('.code-toolbar').querySelector('code')
          const label = button.querySelector('span')

          try {
            await navigator.clipboard.writeText(code.textContent)
            button.dataset.copyState = 'copy-success'
            label.textContent = 'Copied'
          } catch (error) {
            button.dataset.copyState = 'copy-error'
            label.textContent = 'Select code'
          }

          window.setTimeout(() => {
            button.dataset.copyState = 'copy'
            label.textContent = 'Copy'
          }, 1800)
        })
      })
    },

    formatDate (memory) {
      if (!memory.publishedAt) {
        return ''
      }

      const locale = memory.language === 'es' ? 'es-MX' : 'en-US'
      const date = new Date(`${memory.publishedAt}T12:00:00`)

      return new Intl.DateTimeFormat(locale, {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
      }).format(date)
    }
  },

  head () {
    return {
      title: this.memory.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.memory.description
        }
      ]
    }
  }
}
</script>

<style>
.memory-page {
  box-sizing: border-box;
  position: relative;
  width: 100%;
  height: 100%;
  overflow-y: auto;
  padding: clamp(2.75rem, 7vh, 5.25rem) clamp(1rem, 5vw, 4.5rem) 5rem;
  scrollbar-color: rgba(59, 255, 190, 0.45) transparent;
  scrollbar-gutter: stable;
  scrollbar-width: thin;
  user-select: text;
}

.memory-page::-webkit-scrollbar {
  width: 6px;
}

.memory-page::-webkit-scrollbar-track {
  background: transparent;
}

.memory-page::-webkit-scrollbar-thumb {
  border-radius: 999px;
  background: rgba(59, 255, 190, 0.45);
}

.memory-article {
  position: relative;
  z-index: 1;
  width: min(100%, 980px);
  margin: 0 auto;
}

.memory-article__header {
  width: min(100%, 760px);
  margin: 0 auto;
  padding-bottom: clamp(2.75rem, 6vh, 4.75rem);
}

.memory-back {
  display: inline-flex;
  min-height: 44px;
  align-items: center;
  gap: 0.55rem;
  margin: -0.6rem 0 1.75rem -0.75rem;
  border-radius: 0.45rem;
  padding: 0.55rem 0.75rem;
  color: #aabac1;
  font-family: 'Manrope', sans-serif;
  font-size: 0.875rem;
  font-weight: 650;
  transition: color 180ms ease, background-color 180ms ease;
}

.memory-back:hover {
  background: rgba(59, 255, 190, 0.07);
  color: #3bffbe;
}

.memory-back:focus-visible,
.memory-toc a:focus-visible,
.memory-navigation__link:focus-visible,
.memory-content a:focus-visible,
.memory-content div.code-toolbar > .toolbar button:focus-visible {
  outline: 3px solid #3bffbe;
  outline-offset: 3px;
}

.memory-article__meta {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.55rem 0.9rem;
  color: #98abb3;
  font-family: 'Manrope', sans-serif;
  font-size: 0.875rem;
  font-weight: 600;
}

.memory-article__meta > * + *::before {
  content: '·';
  margin-right: 0.9rem;
  color: #3bffbe;
}

.memory-article__language {
  text-transform: uppercase;
}

.memory-article__header h1 {
  max-width: 13ch;
  margin: 1.15rem 0 0;
  background: var(--gradient);
  background-size: 400%;
  background-clip: text;
  color: transparent;
  font-family: 'Space Grotesk', sans-serif;
  font-size: clamp(3.25rem, 5.6vw, 4.6rem);
  font-weight: 500;
  letter-spacing: -0.052em;
  line-height: 0.98;
  animation: bgAnimation 35s alternate-reverse infinite;
}

.memory-article__lead {
  max-width: 62ch;
  margin: 1.65rem 0 0;
  color: #d2dde1;
  font-family: 'Manrope', sans-serif;
  font-size: clamp(1.08rem, 1.6vw, 1.2rem);
  line-height: 1.7;
}

.memory-article__layout {
  width: min(100%, 680px);
  margin: 0 auto;
}

.memory-article__layout--with-toc {
  display: grid;
  width: 100%;
  grid-template-columns: 180px minmax(0, 680px);
  justify-content: center;
  gap: clamp(2rem, 5vw, 4rem);
}

.memory-toc {
  min-width: 0;
}

.memory-toc nav {
  position: sticky;
  top: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  border-left: 1px solid rgba(255, 255, 255, 0.14);
  padding-left: 0.85rem;
}

.memory-toc a {
  display: flex;
  min-height: 32px;
  align-items: center;
  border-radius: 0.3rem;
  padding: 0.25rem 0.4rem;
  color: #91a6af;
  font-family: 'Manrope', sans-serif;
  font-size: 0.8rem;
  line-height: 1.45;
  transition: color 160ms ease, background-color 160ms ease;
}

.memory-toc a:hover {
  background: rgba(59, 255, 190, 0.06);
  color: #3bffbe;
}

.memory-toc__depth-3 {
  padding-left: 0.8rem !important;
}

.memory-content {
  min-width: 0;
  max-width: 68ch;
  color: #cbd7dc;
  font-family: 'Manrope', sans-serif;
  font-size: clamp(1.03rem, 1.25vw, 1.1rem);
  line-height: 1.85;
}

.memory-content > :first-child {
  margin-top: 0;
}

.memory-content h2,
.memory-content h3 {
  scroll-margin-top: 2rem;
  color: #f5f8f9;
  font-family: 'Space Grotesk', sans-serif;
  font-weight: 500;
  letter-spacing: -0.035em;
  line-height: 1.15;
}

.memory-content h2 {
  margin: 3.6rem 0 1.2rem;
  font-size: clamp(1.9rem, 3vw, 2.6rem);
}

.memory-content h3 {
  margin: 2.7rem 0 1rem;
  font-size: clamp(1.4rem, 2vw, 1.8rem);
}

.memory-content p,
.memory-content ul,
.memory-content ol {
  margin: 1.4rem 0;
}

.memory-content a {
  border-bottom: 1px solid rgba(59, 255, 190, 0.62);
  color: #69ffd0;
}

.memory-content blockquote {
  margin: 2.5rem 0;
  border-left: 3px solid #ff8fd0;
  padding: 0.4rem 0 0.4rem 1.4rem;
  color: #e2e9ec;
  font-family: 'Space Grotesk', sans-serif;
  font-size: 1.3rem;
  line-height: 1.55;
}

.memory-content img,
.memory-content video,
.memory-content iframe {
  display: block;
  width: 100%;
  max-width: 100%;
  margin: 2.75rem 0;
  border: 1px solid rgba(255, 255, 255, 0.14);
  border-radius: 0.8rem;
  background: rgba(0, 8, 20, 0.72);
}

.memory-content video,
.memory-content iframe {
  aspect-ratio: 16 / 9;
}

.memory-content iframe {
  height: auto;
}

.memory-content .nuxt-content-highlight,
.memory-content div.code-toolbar {
  position: relative;
  margin: 2.4rem 0;
}

.memory-content pre {
  max-width: 100%;
  margin: 0;
  overflow-x: auto;
  border: 1px solid rgba(59, 255, 190, 0.24);
  border-radius: 0.75rem;
  padding: 3.65rem 1.25rem 1.25rem;
  background: rgba(0, 7, 17, 0.92);
  color: #dce8ec;
  font-family: ui-monospace, SFMono-Regular, Consolas, monospace;
  font-size: 0.875rem;
  line-height: 1.7;
  tab-size: 2;
  text-shadow: none;
}

.memory-content pre code,
.memory-content pre .token {
  text-shadow: none;
}

.memory-content div.code-toolbar > .toolbar {
  position: absolute;
  z-index: 2;
  top: 0;
  right: 0;
  left: 0;
  display: flex;
  min-height: 2.75rem;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  padding: 0 0.75rem;
  color: #91a6af;
  font-family: 'Manrope', sans-serif;
  font-size: 0.75rem;
  pointer-events: none;
}

.memory-content div.code-toolbar > .toolbar > .toolbar-item {
  display: flex;
  align-items: center;
}

.memory-content div.code-toolbar > .toolbar .toolbar-item span {
  color: #91a6af;
  font-family: 'Manrope', sans-serif;
  font-size: 0.75rem;
  font-weight: 650;
  letter-spacing: 0.05em;
  text-transform: uppercase;
}

.memory-content div.code-toolbar > .toolbar button {
  min-height: 36px;
  border: 1px solid rgba(255, 255, 255, 0.16);
  border-radius: 0.4rem;
  background: rgba(255, 255, 255, 0.055);
  padding: 0.4rem 0.7rem;
  color: #bdcbd1;
  font-family: 'Manrope', sans-serif;
  font-size: 0.75rem;
  font-weight: 650;
  cursor: pointer;
  pointer-events: auto;
  transition: border-color 160ms ease, color 160ms ease, background-color 160ms ease;
}

.memory-content div.code-toolbar > .toolbar button:hover {
  border-color: rgba(59, 255, 190, 0.6);
  background: rgba(59, 255, 190, 0.09);
  color: #3bffbe;
}

.memory-content .token.comment,
.memory-content .token.prolog,
.memory-content .token.doctype,
.memory-content .token.cdata {
  color: #81969f;
  font-style: italic;
}

.memory-content .token.punctuation {
  color: #b7c8cf;
}

.memory-content .token.property,
.memory-content .token.tag,
.memory-content .token.constant,
.memory-content .token.symbol,
.memory-content .token.deleted {
  color: #ff7dbb;
}

.memory-content .token.boolean,
.memory-content .token.number {
  color: #ffad72;
}

.memory-content .token.selector,
.memory-content .token.attr-name,
.memory-content .token.string,
.memory-content .token.char,
.memory-content .token.builtin,
.memory-content .token.inserted {
  color: #c8f56a;
}

.memory-content .token.operator,
.memory-content .token.entity,
.memory-content .token.url,
.memory-content .language-css .token.string,
.memory-content .style .token.string {
  background: transparent;
  color: #72d9ff;
}

.memory-content .token.atrule,
.memory-content .token.attr-value,
.memory-content .token.keyword {
  color: #ff8fd0;
}

.memory-content .token.function,
.memory-content .token.class-name {
  color: #ffe75f;
}

.memory-content .token.regex,
.memory-content .token.important,
.memory-content .token.variable {
  color: #3bffbe;
}

.memory-content :not(pre) > code {
  border-radius: 0.25rem;
  padding: 0.15rem 0.35rem;
  background: rgba(59, 255, 190, 0.1);
  color: #69ffd0;
  font-family: ui-monospace, SFMono-Regular, Consolas, monospace;
  font-size: 0.9em;
}

.memory-navigation {
  display: grid;
  width: min(100%, 760px);
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1rem;
  margin: clamp(4rem, 9vh, 7rem) auto 0;
  border-top: 1px solid rgba(255, 255, 255, 0.14);
  padding-top: 1.25rem;
}

.memory-navigation__link {
  display: flex;
  min-height: 92px;
  flex-direction: column;
  justify-content: center;
  border-radius: 0.65rem;
  padding: 1rem;
  color: #e2eaed;
  transition: background-color 180ms ease, color 180ms ease;
}

.memory-navigation__link:hover {
  background: rgba(59, 255, 190, 0.065);
  color: #3bffbe;
}

.memory-navigation__link span {
  margin-bottom: 0.45rem;
  color: #91a6af;
  font-family: 'Manrope', sans-serif;
  font-size: 0.78rem;
  font-weight: 650;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}

.memory-navigation__link strong {
  font-family: 'Space Grotesk', sans-serif;
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.35;
}

.memory-navigation__link--older {
  grid-column: 2;
  text-align: right;
}

@media screen and (max-width: 900px) {
  .memory-article__layout--with-toc {
    display: block;
    width: min(100%, 680px);
  }

  .memory-toc {
    margin-bottom: 2.75rem;
  }

  .memory-toc nav {
    position: static;
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media screen and (max-width: 767px) {
  .memory-page {
    height: auto;
    min-height: 100%;
    overflow: visible;
    padding: 5rem 1rem 3rem;
  }

  .memory-article__header {
    padding-bottom: 3rem;
  }

  .memory-back {
    margin-bottom: 1.4rem;
  }

  .memory-article__header h1 {
    max-width: 11ch;
    font-size: clamp(2.75rem, 12vw, 4rem);
  }

  .memory-article__lead {
    font-size: 1.05rem;
  }

  .memory-toc nav {
    display: flex;
  }

  .memory-content {
    max-width: none;
    font-size: 1rem;
    line-height: 1.8;
  }

  .memory-content pre {
    margin-right: -0.25rem;
    margin-left: -0.25rem;
    padding: 3.5rem 1rem 1rem;
    font-size: 0.8rem;
  }

  .memory-content div.code-toolbar > .toolbar {
    right: -0.25rem;
    left: -0.25rem;
  }

  .memory-navigation {
    grid-template-columns: minmax(0, 1fr);
  }

  .memory-navigation__link--older {
    grid-column: 1;
  }
}

@media (prefers-reduced-motion: reduce) {
  .memory-article__header h1 {
    animation: none;
  }

  .memory-back,
  .memory-toc a,
  .memory-navigation__link,
  .memory-content div.code-toolbar > .toolbar button {
    transition: none;
  }
}
</style>
