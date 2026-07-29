<template>
  <div class="memory-page">
    <background-tag tag-name="Memory" placement="article" />

    <article class="memory-article">
      <header class="memory-article__header">
        <nuxt-link to="/memories" class="memory-back">
          <span aria-hidden="true">←</span> All memories
        </nuxt-link>
        <h1>{{ memory.title }}</h1>
      </header>

      <div
        class="memory-article__layout"
        :class="{ 'memory-article__layout--with-toc': hasTableOfContents }"
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
    </article>
  </div>
</template>

<script>
import BackgroundTag from '~/components/BackgroundTag.vue'

export default {
  layout: 'base',

  components: {
    BackgroundTag
  },

  async asyncData ({ $content, params, error }) {
    try {
      const memory = await $content('memories', params.slug).fetch()

      return { memory }
    } catch (exception) {
      error({
        statusCode: 404,
        message: 'This memory has not been written yet.'
      })
    }
  },

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
  padding: clamp(2rem, 5vh, 4rem) clamp(1rem, 4vw, 3rem) 4rem;
  scrollbar-color: rgba(32, 170, 140, 0.58) transparent;
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
  background: rgba(32, 170, 140, 0.58);
}

.memory-article {
  position: relative;
  z-index: 1;
  width: min(100%, 1040px);
  margin: 0 auto;
}

.memory-article__header {
  max-width: 850px;
  margin: 0 auto;
  padding: 0 0 clamp(2.2rem, 5vh, 4rem);
}

.memory-back {
  display: inline-flex;
  align-items: center;
  gap: 0.55rem;
  margin-bottom: 1.6rem;
  color: #8fa5ae;
  font-family: 'Manrope', sans-serif;
  font-size: 0.78rem;
  font-weight: 600;
  transition: color 180ms ease;
}

.memory-back:hover,
.memory-back:focus-visible {
  color: #3bffbe;
  outline: none;
}

.memory-article__header h1 {
  margin: 0;
  background: var(--gradient);
  background-size: 400%;
  background-clip: text;
  color: transparent;
  font-family: 'Space Grotesk', sans-serif;
  font-size: clamp(2.65rem, 6.5vw, 5.8rem);
  font-weight: 500;
  letter-spacing: -0.055em;
  line-height: 0.96;
  animation: bgAnimation 35s alternate-reverse infinite;
}

.memory-article__layout {
  width: min(100%, 850px);
  margin: 0 auto;
}

.memory-article__layout--with-toc {
  display: grid;
  width: 100%;
  grid-template-columns: 170px minmax(0, 720px);
  justify-content: center;
  gap: clamp(2rem, 5vw, 4.5rem);
}

.memory-toc {
  min-width: 0;
}

.memory-toc nav {
  position: sticky;
  top: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
  border-left: 1px solid rgba(255, 255, 255, 0.12);
  padding-left: 1rem;
}

.memory-toc a {
  color: #718993;
  font-family: 'Manrope', sans-serif;
  font-size: 0.7rem;
  line-height: 1.4;
  transition: color 160ms ease;
}

.memory-toc a:hover,
.memory-toc a:focus-visible {
  color: #3bffbe;
  outline: none;
}

.memory-toc__depth-3 {
  padding-left: 0.65rem;
}

.memory-content {
  min-width: 0;
  color: #c7d3d8;
  font-family: 'Manrope', sans-serif;
  font-size: clamp(1rem, 1.2vw, 1.08rem);
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
  margin: 3.4rem 0 1.1rem;
  font-size: clamp(1.8rem, 3vw, 2.65rem);
}

.memory-content h3 {
  margin: 2.5rem 0 0.9rem;
  font-size: clamp(1.3rem, 2vw, 1.75rem);
}

.memory-content p,
.memory-content ul,
.memory-content ol {
  margin: 1.25rem 0;
}

.memory-content a {
  border-bottom: 1px solid rgba(59, 255, 190, 0.55);
  color: #3bffbe;
}

.memory-content blockquote {
  margin: 2.3rem 0;
  border-left: 3px solid #ff8fd0;
  padding: 0.3rem 0 0.3rem 1.4rem;
  color: #e2e9ec;
  font-family: 'Space Grotesk', sans-serif;
  font-size: 1.25rem;
  line-height: 1.55;
}

.memory-content img,
.memory-content video,
.memory-content iframe {
  display: block;
  width: 100%;
  max-width: 100%;
  margin: 2.5rem 0;
  border: 1px solid rgba(255, 255, 255, 0.13);
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
  margin: 2.2rem 0;
}

.memory-content pre {
  max-width: 100%;
  margin: 0;
  overflow-x: auto;
  border: 1px solid rgba(59, 255, 190, 0.2);
  border-radius: 0.75rem;
  padding: 3.45rem 1.25rem 1.25rem;
  background: rgba(0, 7, 17, 0.9);
  color: #dce8ec;
  font-family: ui-monospace, SFMono-Regular, Consolas, monospace;
  font-size: 0.82rem;
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
  min-height: 2.45rem;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  padding: 0 0.75rem;
  color: #718993;
  font-family: 'Manrope', sans-serif;
  font-size: 0.66rem;
  pointer-events: none;
}

.memory-content div.code-toolbar > .toolbar > .toolbar-item {
  display: flex;
  align-items: center;
}

.memory-content div.code-toolbar > .toolbar .toolbar-item span {
  color: #718993;
  font-family: 'Manrope', sans-serif;
  font-size: 0.66rem;
  font-weight: 600;
  letter-spacing: 0.05em;
  text-transform: uppercase;
}

.memory-content div.code-toolbar > .toolbar button {
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 0.35rem;
  background: rgba(255, 255, 255, 0.045);
  padding: 0.28rem 0.55rem;
  color: #a9bbc3;
  font-family: 'Manrope', sans-serif;
  font-size: 0.63rem;
  font-weight: 600;
  cursor: pointer;
  pointer-events: auto;
  transition:
    border-color 160ms ease,
    color 160ms ease,
    background-color 160ms ease;
}

.memory-content div.code-toolbar > .toolbar button:hover,
.memory-content div.code-toolbar > .toolbar button:focus-visible {
  border-color: rgba(59, 255, 190, 0.55);
  background: rgba(59, 255, 190, 0.08);
  color: #3bffbe;
  outline: none;
}

.memory-content .token.comment,
.memory-content .token.prolog,
.memory-content .token.doctype,
.memory-content .token.cdata {
  color: #637983;
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
  font-size: 0.87em;
}

@media screen and (max-width: 900px) {
  .memory-article__layout--with-toc {
    display: block;
    width: min(100%, 720px);
  }

  .memory-toc {
    margin-bottom: 2.5rem;
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
    padding-bottom: 2.5rem;
  }

  .memory-article__header h1 {
    font-size: clamp(2.75rem, 13vw, 4.4rem);
  }

  .memory-toc nav {
    display: flex;
  }

  .memory-content {
    font-size: 1rem;
    line-height: 1.75;
  }

  .memory-content pre {
    margin-right: -0.25rem;
    margin-left: -0.25rem;
    padding: 3.25rem 1rem 1rem;
    font-size: 0.74rem;
  }

  .memory-content div.code-toolbar > .toolbar {
    right: -0.25rem;
    left: -0.25rem;
  }
}

@media (prefers-reduced-motion: reduce) {
  .memory-article__header h1 {
    animation: none;
  }
}
</style>
