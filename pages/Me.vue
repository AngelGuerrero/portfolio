<template>
  <div ref="page" class="me-page">
    <background-tag tag-name="Me" placement="me" />

    <div class="me-background-fx" aria-hidden="true">
      <div class="me-fx__orb me-fx__orb--cyan" />
      <div class="me-fx__orb me-fx__orb--pink" />
      <div class="me-fx__beam" />

      <svg
        class="me-network"
        viewBox="0 0 1000 1000"
        preserveAspectRatio="xMidYMid slice"
      >
        <path
          class="me-network__path"
          pathLength="1"
          stroke-dasharray="0 1000"
          stroke-dashoffset="0"
          d="M70 180 C220 80 310 320 470 220 S720 70 930 210"
        />
        <path
          class="me-network__path"
          pathLength="1"
          stroke-dasharray="0 1000"
          stroke-dashoffset="0"
          d="M-40 520 C170 390 260 680 470 510 S760 360 1040 550"
        />
        <path
          class="me-network__path"
          pathLength="1"
          stroke-dasharray="0 1000"
          stroke-dashoffset="0"
          d="M80 830 C250 680 390 940 560 760 S790 650 980 830"
        />
        <path
          class="me-network__path me-network__path--vertical"
          pathLength="1"
          stroke-dasharray="0 1000"
          stroke-dashoffset="0"
          d="M250 -40 C180 210 400 330 300 560 S300 850 470 1050"
        />

        <circle class="me-network__node" cx="70" cy="180" r="3" />
        <circle class="me-network__node" cx="470" cy="510" r="4" />
        <circle class="me-network__node" cx="560" cy="760" r="4" />
        <circle class="me-network__node" cx="980" cy="830" r="3" />
      </svg>
    </div>

    <section class="me-hero" aria-labelledby="me-title">
      <div class="me-hero__copy">
        <p class="me-kicker" data-hero>
          Senior Software Engineer · Querétaro, México
        </p>

        <h1 id="me-title" data-hero>
          <span class="me-title__line">I turn complex software into</span>
          <span class="me-title__line me-title__line--accent">
            systems people can trust.
          </span>
        </h1>

        <p class="me-hero__lead" data-hero>
          I am Ángel, a full stack engineer with 7+ years building and
          modernizing enterprise platforms, SaaS products and AI-enabled
          software—from architecture to interface.
        </p>

        <div class="me-actions" data-hero>
          <a
            class="me-button me-button--primary"
            href="/angel_guerrero_resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read my résumé <span aria-hidden="true">↗</span>
          </a>
          <a class="me-button" href="mailto:lasantiagoguerrero@gmail.com">
            Start a conversation
          </a>
        </div>
      </div>

      <aside class="me-hero__portrait" data-hero>
        <div class="me-portrait-frame">
          <img
            src="~/assets/images/me.png"
            alt="Ángel Guerrero, Senior Software Engineer"
          >
          <div class="me-portrait-note">
            <span>Currently</span>
            <p>
              Modernizing enterprise software with AI-assisted engineering
              workflows.
            </p>
          </div>
        </div>
      </aside>
    </section>

    <main>
      <section class="me-section me-positioning" aria-labelledby="positioning-title">
        <span class="me-section__ghost" aria-hidden="true">BUILD</span>

        <div class="me-section__heading" data-reveal>
          <p class="me-kicker">
            What I bring
          </p>
          <h2 id="positioning-title">
            More than implementation.
          </h2>
          <p>
            I am most useful where product needs, technical constraints and
            delivery pressure meet. I bring enough range to see the whole
            system and enough depth to make the details hold up.
          </p>
        </div>

        <div class="me-capabilities">
          <article
            v-for="capability in capabilities"
            :key="capability.number"
            class="me-capability"
            data-reveal
          >
            <span>{{ capability.number }}</span>
            <h3>{{ capability.title }}</h3>
            <p>{{ capability.text }}</p>
          </article>
        </div>
      </section>

      <section class="me-section me-experience" aria-labelledby="experience-title">
        <span class="me-section__ghost" aria-hidden="true">SHIP</span>

        <div class="me-section__heading me-section__heading--wide" data-reveal>
          <p class="me-kicker">
            Professional experience
          </p>
          <h2 id="experience-title">
            Work that moved from idea to production.
          </h2>
          <p>
            My path has taken me through enterprise modernization, financial
            products, AI applications, ecommerce integrations and interactive
            web experiences. These are the responsibilities behind the job
            titles.
          </p>
        </div>

        <div class="me-timeline">
          <article
            v-for="experience in experience"
            :key="`${experience.company}-${experience.period}`"
            class="me-role"
            data-reveal
          >
            <span class="me-role__line" aria-hidden="true" />
            <span class="me-role__halo" aria-hidden="true" />

            <div class="me-role__meta">
              <p class="me-role__period">
                {{ experience.period }}
              </p>
              <p>{{ experience.engagement }}</p>
              <span v-if="experience.current">Current role</span>
            </div>

            <div class="me-role__body">
              <p class="me-role__company">
                {{ experience.company }}
              </p>
              <h3>{{ experience.role }}</h3>
              <p class="me-role__summary">
                {{ experience.summary }}
              </p>

              <ul>
                <li
                  v-for="achievement in experience.achievements"
                  :key="achievement"
                >
                  {{ achievement }}
                </li>
              </ul>

              <div class="me-role__stack" aria-label="Technologies and focus">
                <span v-for="item in experience.stack" :key="item">
                  {{ item }}
                </span>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section class="me-section me-toolkit" aria-labelledby="toolkit-title">
        <span class="me-section__ghost" aria-hidden="true">TOOLS</span>

        <div class="me-section__heading" data-reveal>
          <p class="me-kicker">
            Technical range
          </p>
          <h2 id="toolkit-title">
            A stack chosen around the problem.
          </h2>
          <p>
            I am comfortable moving between frontend, backend, data and
            delivery concerns. Tools change; the goal is always software that
            remains understandable after launch.
          </p>
        </div>

        <dl class="me-toolkit__list" data-reveal>
          <div v-for="group in toolkit" :key="group.label">
            <dt>{{ group.label }}</dt>
            <dd>{{ group.items }}</dd>
          </div>
        </dl>
      </section>

      <section class="me-section me-method" aria-labelledby="method-title">
        <span class="me-section__ghost" aria-hidden="true">THINK</span>

        <div class="me-section__heading" data-reveal>
          <p class="me-kicker">
            How I work
          </p>
          <h2 id="method-title">
            Clear thinking, visible progress and maintainable decisions.
          </h2>
        </div>

        <div class="me-method__grid">
          <article v-for="principle in principles" :key="principle.title" data-reveal>
            <h3>{{ principle.title }}</h3>
            <p>{{ principle.text }}</p>
          </article>
        </div>
      </section>

      <section class="me-cta" aria-labelledby="cta-title" data-reveal>
        <span class="me-section__ghost" aria-hidden="true">HELLO</span>

        <p class="me-kicker">
          Available for the right challenge
        </p>
        <h2 id="cta-title">
          Need someone who can understand the system and still ship the work?
        </h2>
        <p>
          I am open to senior engineering roles, product collaborations and
          projects involving modernization, integrations, SaaS or AI-assisted
          software delivery.
        </p>

        <div class="me-cta__links">
          <a href="mailto:lasantiagoguerrero@gmail.com">
            Email me <span aria-hidden="true">↗</span>
          </a>
          <a
            href="https://wa.link/upltbr"
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp <span aria-hidden="true">↗</span>
          </a>
          <a
            href="https://linkedin.com/in/sanguerrero"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn <span aria-hidden="true">↗</span>
          </a>
          <a
            href="https://github.com/AngelGuerrero"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub <span aria-hidden="true">↗</span>
          </a>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
import {
  animate,
  createScope,
  onScroll,
  splitText,
  stagger,
  svg
} from 'animejs'
import BackgroundTag from '~/components/BackgroundTag.vue'

export default {
  layout: 'base',

  components: {
    BackgroundTag
  },

  data: () => ({
    animeScope: null,
    capabilities: [
      {
        number: '01',
        title: 'Architecture and modernization',
        text: 'I break legacy systems into maintainable modules, plan integrations and make architecture decisions that reflect real production constraints.'
      },
      {
        number: '02',
        title: 'Full stack product delivery',
        text: 'From APIs and business logic to responsive interfaces, I can carry a product through the layers required to make it genuinely usable.'
      },
      {
        number: '03',
        title: 'AI-assisted engineering',
        text: 'I use Codex, Claude, MCP, local LLMs, prompt engineering and specialized agents as engineering leverage while keeping review, maintainability and human judgment in the loop.'
      },
      {
        number: '04',
        title: 'Technical leadership',
        text: 'I translate requirements, organize delivery, review code and help teams make progress without losing sight of quality or the business outcome.'
      }
    ],
    experience: [
      {
        company: 'Brive Soluciones',
        role: 'Senior Software Engineer',
        period: 'Jan. 2026 - Present',
        engagement: 'Full-time · Mexico · Remote',
        current: true,
        summary: 'Modernizing enterprise software while connecting legacy environments with new platforms and delivery practices.',
        achievements: [
          'Modernize legacy systems and integrate new platforms across enterprise software environments.',
          'Use Codex, Claude, MCP, prompt engineering and AI agents to orchestrate legacy-to-modern migration work.',
          'Design maintainable modules and custom software with decisions grounded in production needs.'
        ],
        stack: ['Architecture', 'Legacy modernization', 'Codex', 'Claude', 'MCP', 'AI agents']
      },
      {
        company: 'Intelligential®',
        role: 'Software Engineer',
        period: 'Dec. 2025 - May. 2026',
        engagement: 'Contract · Mexico · Remote',
        current: false,
        summary: 'Extended and protected production systems where continuity mattered as much as new delivery.',
        achievements: [
          'Maintained and extended production software through new modules and custom feature development.',
          'Supported existing platforms across delivery, fixes and day-to-day system continuity.'
        ],
        stack: ['Production support', 'Custom modules', 'System continuity']
      },
      {
        company: 'Pigui',
        role: 'Senior Software Developer',
        period: 'Jun. 2025 - Aug. 2025',
        engagement: 'Contract · Mexico · Remote',
        current: false,
        summary: 'Continued an AI product directly with the client through integration work, onboarding and a strategic product pivot.',
        achievements: [
          'Delivered a Shopify API integration for product synchronization.',
          'Built a complete product onboarding flow.',
          'Refactored the codebase while preserving critical delivery milestones during a strategic pivot.'
        ],
        stack: ['AI product', 'Shopify API', 'Integrations', 'Refactoring']
      },
      {
        company: 'Zarape Code',
        role: 'Senior Software Developer',
        period: 'Jun. 2024 - Jun. 2025',
        engagement: 'Full-time · Mexico · Remote',
        current: false,
        summary: 'Led the end-to-end creation of an AI product MVP, from architecture and interface implementation to local LLM workflows.',
        achievements: [
          'Designed the system architecture and led MVP delivery with Node.js, Vue 3, TypeScript, REST and GraphQL.',
          'Implemented the product interface from Figma specifications.',
          'Integrated local LLM workflows with Ollama and third-party libraries while limiting technical debt.'
        ],
        stack: ['Node.js', 'Vue 3', 'TypeScript', 'GraphQL', 'Ollama']
      },
      {
        company: 'Lovlisoft',
        role: 'Senior Software Developer',
        period: 'Jun. 2023 - Mar. 2024',
        engagement: 'Freelance · Querétaro, Mexico',
        current: false,
        summary: 'Led technical delivery for a financial platform supporting group-loan operations.',
        achievements: [
          'Developed features and resolved defects across a Laravel and Vue platform.',
          'Managed Jira work and supported code quality across the team.',
          'Provided technical guidance to improve delivery clarity, operational efficiency and platform reliability.'
        ],
        stack: ['Laravel', 'Vue', 'Financial software', 'Jira', 'Technical guidance']
      },
      {
        company: 'Grupo Icarus S.A. de C.V.',
        role: 'Senior Frontend Developer',
        period: 'Aug. 2022 - May. 2023',
        engagement: 'Freelance · Querétaro, Mexico · Remote',
        current: false,
        summary: 'Led frontend delivery for a modern React application based on detailed product and design requirements.',
        achievements: [
          'Built interfaces with React, TypeScript, TailwindCSS and Vite from Adobe XD requirements.',
          'Coordinated user stories, sprint planning and code reviews.',
          'Troubleshot implementation issues to protect delivery quality.'
        ],
        stack: ['React', 'TypeScript', 'TailwindCSS', 'Vite', 'Code review']
      },
      {
        company: 'Intelligential®',
        role: 'Full Stack Software Developer',
        period: 'Oct. 2021 - Aug. 2022',
        engagement: 'Full-time · Querétaro, Mexico · Remote',
        current: false,
        summary: 'Built and improved a financial SaaS across interface, API, business logic and data layers.',
        achievements: [
          'Developed product modules with Vue.js, Node.js, Express, GraphQL and PostgreSQL.',
          'Integrated API services and implemented business logic.',
          'Resolved defects and improved application performance.'
        ],
        stack: ['Vue.js', 'Node.js', 'Express', 'GraphQL', 'PostgreSQL']
      },
      {
        company: 'Grupo Icarus S.A. de C.V.',
        role: 'Full Stack Software Developer',
        period: 'Jan. 2021 - Oct. 2021',
        engagement: 'Freelance · Querétaro, Mexico · Remote',
        current: false,
        summary: 'Owned full stack delivery for a web product, connecting client needs to a complete Vue and Laravel implementation.',
        achievements: [
          'Covered requirements, UI/UX, APIs and application performance.',
          'Coordinated directly with the client throughout delivery.'
        ],
        stack: ['Vue.js', 'Laravel', 'REST APIs', 'UI/UX', 'Client delivery']
      },
      {
        company: 'Epix Industries',
        role: 'Frontend Web Developer',
        period: 'Apr. 2021 - Aug. 2021',
        engagement: 'Part-time · Querétaro, Mexico · Remote',
        current: false,
        summary: 'Created expressive web interfaces for NFT art and application experiences in an international team.',
        achievements: [
          'Developed Vue.js interfaces for NFT art websites and application UIs.',
          'Integrated Three.js experiences to bring 3D work into the browser.',
          'Collaborated in English with an international team.'
        ],
        stack: ['Vue.js', 'Three.js', 'Interactive UI', 'International team']
      }
    ],
    toolkit: [
      {
        label: 'Languages',
        items: 'TypeScript, JavaScript, PHP and C#'
      },
      {
        label: 'Backend',
        items: 'Node.js, Express, Laravel, REST and GraphQL APIs'
      },
      {
        label: 'Frontend',
        items: 'Vue 3, React, TailwindCSS and Vite'
      },
      {
        label: 'Data',
        items: 'PostgreSQL, MySQL and SQL Server'
      },
      {
        label: 'AI workflows',
        items: 'Codex, Claude, MCP, Ollama, prompt engineering and specialized AI agents'
      },
      {
        label: 'Delivery',
        items: 'Docker, Git, Linux, Azure DevOps and Jira'
      }
    ],
    principles: [
      {
        title: 'Start with context',
        text: 'Before choosing a tool, I want to understand the user, the business rule, the existing system and the cost of changing it.'
      },
      {
        title: 'Make progress visible',
        text: 'I prefer small, reviewable steps, clear communication and working software that creates feedback early.'
      },
      {
        title: 'Leave a system healthier',
        text: 'Delivery matters, but so does what remains: readable code, sensible boundaries and fewer surprises for the next engineer.'
      }
    ]
  }),

  mounted () {
    document.body.classList.add('me-scroll-page')
    document.documentElement.classList.add('me-scroll-page-root')

    this.$nextTick(() => {
      const reduceMotion = window.matchMedia(
        '(prefers-reduced-motion: reduce)'
      ).matches

      this.animeScope = createScope({
        root: this.$refs.page
      }).add(() => {
        const textSplits = Array.from(
          this.$refs.page.querySelectorAll(
            '.me-title__line:not(.me-title__line--accent)'
          )
        ).map(line => splitText(line, {
          words: {
            wrap: 'clip'
          }
        }))

        if (!reduceMotion) {
          const titleWords = textSplits.reduce(
            (words, split) => words.concat(split.words),
            []
          )

          animate(titleWords, {
            translateY: {
              from: '115%'
            },
            opacity: {
              from: 0
            },
            delay: stagger(52),
            duration: 900,
            ease: 'out(4)'
          })

          animate('.me-title__line--accent', {
            translateY: {
              from: '105%'
            },
            opacity: {
              from: 0
            },
            delay: 260,
            duration: 920,
            ease: 'out(4)'
          })

          const heroElements = Array.from(
            this.$refs.page.querySelectorAll(
              '[data-hero]:not(#me-title)'
            )
          )

          animate(heroElements, {
            translateY: {
              from: '2.2rem'
            },
            opacity: {
              from: 0
            },
            delay: stagger(90),
            duration: 850,
            ease: 'out(4)'
          })
        }

        const pageScroll = () => onScroll({
          target: this.$refs.page,
          enter: 'top top',
          leave: 'bottom bottom',
          sync: reduceMotion ? 0.35 : 0.16
        })

        const networkPaths = Array.from(
          this.$refs.page.querySelectorAll('.me-network__path')
        )
        const networkDrawables = networkPaths.reduce(
          (drawables, path) => drawables.concat(svg.createDrawable(path)),
          []
        )

        animate(networkDrawables, {
          draw: ['0 0', '0 1'],
          delay: stagger(75),
          duration: 1000,
          ease: 'linear',
          autoplay: pageScroll()
        })

        animate('.me-network__node', {
          opacity: [0, reduceMotion ? 0.2 : 0.36],
          scale: [0.5, 1],
          delay: stagger(90),
          duration: 1000,
          ease: 'out(3)',
          autoplay: pageScroll()
        })

        animate('.me-fx__beam', {
          translateX: reduceMotion ? [0, 0] : ['0%', '65%'],
          rotate: reduceMotion ? ['-18deg', '-18deg'] : ['-18deg', '16deg'],
          opacity: [0.06, reduceMotion ? 0.12 : 0.32],
          duration: 1000,
          ease: 'linear',
          autoplay: pageScroll()
        })

        if (!reduceMotion) {
          animate('.me-fx__orb--cyan', {
            translateX: ['0%', '120%'],
            translateY: ['0%', '150%'],
            rotate: ['0deg', '160deg'],
            duration: 1000,
            ease: 'linear',
            autoplay: pageScroll()
          })

          animate('.me-fx__orb--pink', {
            translateX: ['0%', '-95%'],
            translateY: ['0%', '-130%'],
            rotate: ['0deg', '-140deg'],
            duration: 1000,
            ease: 'linear',
            autoplay: pageScroll()
          })

          animate('.me-portrait-frame img', {
            translateY: ['0%', '10%'],
            duration: 1000,
            ease: 'linear',
            autoplay: onScroll({
              target: '.me-hero',
              enter: 'top top',
              leave: 'top bottom',
              sync: 0.22
            })
          })
        }

        Array.from(
          this.$refs.page.querySelectorAll('.me-section__ghost')
        ).forEach((ghost) => {
          animate(ghost, {
            translateX: reduceMotion
              ? ['0%', '0%']
              : ['18%', '-12%'],
            opacity: [0, reduceMotion ? 0.06 : 0.11],
            duration: 1000,
            ease: 'linear',
            autoplay: onScroll({
              target: ghost.parentElement,
              enter: 'bottom top',
              leave: 'top bottom',
              sync: reduceMotion ? 0.35 : 0.18
            })
          })
        })

        Array.from(
          this.$refs.page.querySelectorAll('[data-reveal]')
        ).forEach((element, index) => {
          const elementScroll = () => onScroll({
            target: element,
            enter: 'bottom-=16%',
            repeat: false
          })

          if (element.classList.contains('me-role')) {
            const line = element.querySelector('.me-role__line')
            const halo = element.querySelector('.me-role__halo')
            const meta = element.querySelector('.me-role__meta')
            const body = element.querySelector('.me-role__body')

            animate(line, {
              scaleX: {
                from: 0
              },
              duration: reduceMotion ? 260 : 760,
              ease: 'out(3)',
              autoplay: elementScroll()
            })

            animate(meta, {
              translateX: {
                from: reduceMotion ? 0 : '-2.25rem'
              },
              opacity: {
                from: 0
              },
              delay: reduceMotion ? 40 : 110,
              duration: reduceMotion ? 280 : 680,
              ease: 'out(4)',
              autoplay: elementScroll()
            })

            animate(body, {
              translateX: {
                from: reduceMotion ? 0 : '3.25rem'
              },
              opacity: {
                from: 0
              },
              delay: reduceMotion ? 70 : 180,
              duration: reduceMotion ? 320 : 820,
              ease: 'out(4)',
              autoplay: elementScroll()
            })

            animate(halo, {
              opacity: {
                from: 0
              },
              scale: {
                from: reduceMotion ? 1 : 0.65
              },
              delay: reduceMotion ? 80 : 140,
              duration: reduceMotion ? 350 : 1050,
              ease: 'out(3)',
              autoplay: elementScroll()
            })

            return
          }

          const horizontalOffset = element.classList.contains('me-capability')
            ? (index % 2 === 0 ? '-2.1rem' : '2.1rem')
            : 0

          animate(element, {
            translateX: {
              from: reduceMotion ? 0 : horizontalOffset
            },
            translateY: {
              from: reduceMotion
                ? 0
                : (horizontalOffset ? '1.5rem' : '3.6rem')
            },
            opacity: {
              from: 0
            },
            scale: {
              from: reduceMotion
                ? 1
                : (horizontalOffset ? 0.975 : 1)
            },
            duration: reduceMotion ? 360 : 920,
            ease: 'out(4)',
            autoplay: elementScroll()
          })
        })

        return () => {
          textSplits.forEach(split => split.revert())
        }
      })

      document.fonts.ready.then(() => {
        if (this.animeScope) {
          this.animeScope.refresh()
        }
      })
    })
  },

  beforeDestroy () {
    document.body.classList.remove('me-scroll-page')
    document.documentElement.classList.remove('me-scroll-page-root')

    if (this.animeScope) {
      this.animeScope.revert()
      this.animeScope = null
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
          content: 'Ángel Guerrero is a Senior Software Engineer with 7+ years of experience in architecture, enterprise systems, SaaS, Codex, AI agents and full stack product delivery.'
        }
      ]
    }
  }
}
</script>

<style>
html.me-scroll-page-root,
body.me-scroll-page {
  height: auto;
  min-height: 100%;
}

body.me-scroll-page {
  overflow-x: hidden;
  overflow-y: auto;
}

.me-scroll-page .wrapper {
  height: auto;
  min-height: 100vh;
  grid-template-rows: 4rem auto 4rem;
  overflow-x: clip !important;
  overflow-y: visible !important;
}

.me-scroll-page .main {
  overflow: visible;
}

.me-page {
  box-sizing: border-box;
  position: relative;
  width: 100%;
  overflow: hidden;
  color: #dce8ec;
  font-family: 'Atkinson Hyperlegible', 'Segoe UI', sans-serif;
}

.me-page::before {
  content: '';
  position: absolute;
  top: 18rem;
  right: -18rem;
  width: 42rem;
  height: 42rem;
  border-radius: 50%;
  background: rgba(255, 68, 177, 0.055);
  filter: blur(100px);
  pointer-events: none;
}

.me-background-fx {
  position: fixed;
  z-index: 0;
  inset: 0;
  overflow: hidden;
  pointer-events: none;
}

.me-fx__orb {
  position: absolute;
  width: clamp(22rem, 42vw, 38rem);
  aspect-ratio: 1;
  border-radius: 44% 56% 63% 37% / 47% 41% 59% 53%;
  opacity: 0.14;
  filter: blur(80px);
  will-change: transform;
}

.me-fx__orb--cyan {
  top: -18%;
  left: -20%;
  background: radial-gradient(circle at 45% 45%, #00fff9, rgba(59, 255, 190, 0.16) 52%, transparent 72%);
}

.me-fx__orb--pink {
  right: -18%;
  bottom: -12%;
  background: radial-gradient(circle at 52% 45%, #ff44b1, rgba(132, 92, 246, 0.18) 54%, transparent 72%);
}

.me-fx__beam {
  position: absolute;
  top: 18%;
  left: -32%;
  width: 78%;
  height: 8rem;
  background: linear-gradient(90deg, transparent, rgba(59, 255, 190, 0.18), rgba(255, 231, 95, 0.1), transparent);
  filter: blur(34px);
  opacity: 0.06;
  transform: rotate(-18deg);
  will-change: transform, opacity;
}

.me-network {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  opacity: 0.42;
}

.me-network__path {
  fill: none;
  stroke: rgba(59, 255, 190, 0.25);
  stroke-width: 1.1;
  vector-effect: non-scaling-stroke;
}

.me-network__path:nth-of-type(2) {
  stroke: rgba(255, 143, 208, 0.22);
}

.me-network__path:nth-of-type(3) {
  stroke: rgba(255, 231, 95, 0.2);
}

.me-network__path--vertical {
  stroke: rgba(114, 217, 255, 0.2);
}

.me-network__node {
  fill: #3bffbe;
  opacity: 0;
  filter: drop-shadow(0 0 4px rgba(59, 255, 190, 0.42));
  transform: scale(0.5);
  transform-box: fill-box;
  transform-origin: center;
}

.me-network__node:nth-of-type(3n + 2) {
  fill: #ff8fd0;
  filter: drop-shadow(0 0 4px rgba(255, 143, 208, 0.4));
}

.me-network__node:nth-of-type(3n) {
  fill: #ffe75f;
  filter: drop-shadow(0 0 4px rgba(255, 231, 95, 0.38));
}

.me-page a {
  text-decoration: none;
}

.me-hero,
.me-section,
.me-cta {
  box-sizing: border-box;
  width: min(100% - clamp(2rem, 8vw, 8rem), 1160px);
  margin: 0 auto;
}

.me-hero {
  position: relative;
  z-index: 1;
  display: grid;
  min-height: calc(100vh - 8rem);
  grid-template-columns: minmax(0, 1.45fr) minmax(280px, 0.65fr);
  align-items: center;
  gap: clamp(3rem, 7vw, 7rem);
  padding: clamp(5rem, 10vh, 8rem) 0;
}

.me-kicker {
  margin: 0 0 1.2rem;
  color: #3bffbe;
  font-size: 0.82rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
}

.me-hero h1 {
  max-width: 810px;
  margin: 0;
  color: #f5f8f9;
  font-family: 'Space Grotesk', sans-serif;
  font-size: clamp(3.25rem, 6vw, 6.2rem);
  font-weight: 500;
  letter-spacing: -0.065em;
  line-height: 0.91;
}

.me-title__line {
  display: block;
}

.me-title__line--accent {
  background: var(--gradient);
  background-size: 400%;
  background-clip: text;
  color: transparent;
  animation: bgAnimation 35s alternate-reverse infinite;
}

.me-hero__lead {
  max-width: 720px;
  margin: 2.4rem 0 0;
  color: #d5e0e4;
  font-size: clamp(1.05rem, 1.6vw, 1.3rem);
  line-height: 1.65;
}

.me-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
  margin-top: 2.5rem;
}

.me-button {
  display: inline-flex;
  min-height: 2.9rem;
  align-items: center;
  justify-content: center;
  gap: 0.55rem;
  border: 1px solid rgba(255, 255, 255, 0.17);
  border-radius: 99px;
  padding: 0 1.25rem;
  color: #dce8ec;
  font-size: 0.9rem;
  font-weight: 700;
  transition:
    border-color 180ms ease,
    background 180ms ease,
    color 180ms ease,
    transform 180ms ease;
}

.me-button--primary {
  border-color: #3bffbe;
  background: #3bffbe;
  color: #00131c;
}

.me-button:hover,
.me-button:focus-visible {
  border-color: #ffe75f;
  color: #ffe75f;
  outline: none;
  transform: translateY(-2px);
}

.me-button--primary:hover,
.me-button--primary:focus-visible {
  background: #ffe75f;
  color: #00131c;
}

.me-hero__portrait {
  position: relative;
}

.me-portrait-frame {
  position: relative;
  overflow: hidden;
  aspect-ratio: 4 / 5;
  border-radius: 0.5rem;
  background: #081723;
}

.me-portrait-frame::after {
  content: '';
  position: absolute;
  z-index: 1;
  inset: 0;
  background:
    linear-gradient(to top, rgba(0, 8, 20, 0.68), transparent 45%),
    linear-gradient(135deg, rgba(59, 255, 190, 0.12), transparent 45%);
  pointer-events: none;
}

.me-portrait-frame img {
  display: block;
  width: 100%;
  height: 120%;
  margin-top: -10%;
  object-fit: cover;
  object-position: 50% 20%;
  filter: grayscale(1) contrast(1.03);
}

.me-portrait-note {
  position: absolute;
  z-index: 2;
  right: 0;
  bottom: 0;
  left: 0;
  margin: 0;
  padding: 5rem 1.25rem 1.2rem;
  background: linear-gradient(
    to bottom,
    transparent,
    rgba(0, 8, 20, 0.74) 42%,
    rgba(0, 8, 20, 0.96)
  );
}

.me-portrait-note::before {
  content: '';
  display: block;
  width: 2.8rem;
  height: 1px;
  margin-bottom: 0.8rem;
  background: #3bffbe;
  box-shadow: 0 0 8px rgba(59, 255, 190, 0.35);
}

.me-portrait-note span {
  color: #3bffbe;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.me-portrait-note p {
  max-width: 28ch;
  margin: 0.45rem 0 0;
  color: #b2c2c8;
  font-size: 0.82rem;
  line-height: 1.55;
}

.me-section {
  position: relative;
  z-index: 1;
  border-top: 1px solid rgba(255, 255, 255, 0.11);
  padding: clamp(6rem, 12vw, 10rem) 0;
}

.me-section__ghost {
  position: absolute;
  z-index: -1;
  top: clamp(2rem, 8vw, 7rem);
  right: -0.04em;
  color: rgba(220, 232, 236, 0.9);
  font-family: 'Space Grotesk', sans-serif;
  font-size: clamp(7rem, 19vw, 17rem);
  font-weight: 600;
  letter-spacing: -0.08em;
  line-height: 0.7;
  opacity: 0;
  white-space: nowrap;
  will-change: transform, opacity;
}

.me-section__heading {
  max-width: 650px;
}

.me-section__heading--wide {
  max-width: 820px;
}

.me-section__heading h2,
.me-cta h2 {
  margin: 0;
  color: #f5f8f9;
  font-family: 'Space Grotesk', sans-serif;
  font-size: clamp(2.7rem, 5.2vw, 5.3rem);
  font-weight: 500;
  letter-spacing: -0.055em;
  line-height: 0.98;
}

.me-section__heading > p:last-child {
  margin: 1.4rem 0 0;
  color: #a9bbc3;
  font-size: 1.06rem;
  line-height: 1.8;
}

.me-capabilities {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0;
  margin-top: 5rem;
}

.me-capability {
  min-height: 15rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding: 2rem clamp(1rem, 3vw, 2.5rem) 2rem 0;
}

.me-capability:nth-child(even) {
  border-left: 1px solid rgba(255, 255, 255, 0.1);
  padding-right: 0;
  padding-left: clamp(1rem, 3vw, 2.5rem);
}

.me-capability > span {
  color: #ff8fd0;
  font-family: 'Space Grotesk', sans-serif;
  font-size: 0.78rem;
  font-weight: 700;
}

.me-capability h3,
.me-method h3 {
  margin: 2.8rem 0 0.7rem;
  color: #edf3f5;
  font-family: 'Space Grotesk', sans-serif;
  font-size: clamp(1.4rem, 2vw, 1.9rem);
  font-weight: 400;
  letter-spacing: -0.035em;
}

.me-capability p,
.me-method article p {
  max-width: 480px;
  margin: 0;
  color: #9fb2b9;
  font-size: 0.98rem;
  line-height: 1.8;
}

.me-timeline {
  margin-top: 5rem;
}

.me-role {
  position: relative;
  display: grid;
  grid-template-columns: minmax(170px, 0.34fr) minmax(0, 1fr);
  gap: clamp(2rem, 7vw, 7rem);
  padding: clamp(2.7rem, 5vw, 4.5rem) 0;
}

.me-role__line {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  height: 1px;
  background: linear-gradient(
    90deg,
    rgba(59, 255, 190, 0.72),
    rgba(255, 255, 255, 0.14) 28%,
    rgba(255, 255, 255, 0.08)
  );
  transform-origin: left center;
}

.me-role__halo {
  --role-halo: rgba(59, 255, 190, 0.16);
  position: absolute;
  z-index: 0;
  top: 5%;
  right: 1%;
  width: min(54%, 34rem);
  aspect-ratio: 1.8;
  border-radius: 50%;
  background: radial-gradient(ellipse, var(--role-halo), transparent 68%);
  filter: blur(28px);
  opacity: 0.52;
  pointer-events: none;
  transform-origin: center;
}

.me-role:nth-child(3n + 2) .me-role__halo {
  --role-halo: rgba(255, 143, 208, 0.14);
}

.me-role:nth-child(3n) .me-role__halo {
  --role-halo: rgba(255, 231, 95, 0.12);
}

.me-role__meta,
.me-role__body {
  position: relative;
  z-index: 1;
}

.me-role__meta p {
  margin: 0;
  color: #9aadb5;
  font-size: 0.84rem;
  line-height: 1.65;
}

.me-role__meta .me-role__period {
  margin-bottom: 0.35rem;
  color: #c5d1d6;
  font-family: 'Space Grotesk', sans-serif;
  font-size: 0.95rem;
}

.me-role__meta > span {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  margin-top: 1.1rem;
  color: #3bffbe;
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
}

.me-role__meta > span::before {
  content: '';
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: #3bffbe;
  box-shadow: 0 0 9px rgba(59, 255, 190, 0.7);
}

.me-role__company {
  margin: 0 0 0.55rem;
  color: #ff8fd0;
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.me-role h3 {
  margin: 0;
  color: #f5f8f9;
  font-family: 'Space Grotesk', sans-serif;
  font-size: clamp(1.8rem, 3vw, 3rem);
  font-weight: 400;
  letter-spacing: -0.045em;
}

.me-role__summary {
  max-width: 760px;
  margin: 1rem 0 0;
  color: #b7c8cf;
  font-size: 1.06rem;
  line-height: 1.75;
}

.me-role ul {
  display: grid;
  gap: 0.65rem;
  max-width: 780px;
  margin: 1.6rem 0 0;
  padding: 0;
  list-style: none;
}

.me-role li {
  position: relative;
  padding-left: 1.2rem;
  color: #9aadb5;
  font-size: 0.96rem;
  line-height: 1.75;
}

.me-role li::before {
  content: '';
  position: absolute;
  top: 0.72em;
  left: 0;
  width: 5px;
  height: 1px;
  background: #3bffbe;
}

.me-role__stack {
  display: flex;
  flex-wrap: wrap;
  gap: 0.45rem;
  margin-top: 1.8rem;
}

.me-role__stack span {
  border: 1px solid rgba(255, 255, 255, 0.11);
  border-radius: 99px;
  padding: 0.35rem 0.65rem;
  color: #91a6ae;
  font-size: 0.8rem;
}

.me-toolkit {
  display: grid;
  grid-template-columns: minmax(0, 0.85fr) minmax(0, 1fr);
  gap: clamp(4rem, 10vw, 10rem);
}

.me-toolkit__list {
  margin: 0;
}

.me-toolkit__list div {
  display: grid;
  grid-template-columns: 115px 1fr;
  gap: 1rem;
  border-top: 1px solid rgba(255, 255, 255, 0.11);
  padding: 1.25rem 0;
}

.me-toolkit__list dt {
  color: #3bffbe;
  font-size: 0.82rem;
  font-weight: 700;
}

.me-toolkit__list dd {
  margin: 0;
  color: #b7c8cf;
  font-size: 0.96rem;
  line-height: 1.65;
}

.me-method__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: clamp(1.5rem, 4vw, 4rem);
  margin-top: 5rem;
}

.me-method article {
  border-top: 1px solid rgba(255, 255, 255, 0.11);
  padding-top: 1.5rem;
}

.me-method h3 {
  margin-top: 0;
}

.me-cta {
  position: relative;
  z-index: 1;
  padding: clamp(7rem, 14vw, 12rem) 0;
}

.me-cta h2 {
  max-width: 950px;
}

.me-cta > p:not(.me-kicker) {
  max-width: 690px;
  margin: 1.5rem 0 0;
  color: #a9bbc3;
  font-size: 1.06rem;
  line-height: 1.8;
}

.me-cta__links {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem 2rem;
  margin-top: 2.5rem;
}

.me-cta__links a {
  border-bottom: 1px solid rgba(59, 255, 190, 0.5);
  padding-bottom: 0.3rem;
  color: #3bffbe;
  font-size: 0.92rem;
  font-weight: 700;
  transition:
    border-color 180ms ease,
    color 180ms ease;
}

.me-cta__links a:hover,
.me-cta__links a:focus-visible {
  border-color: #ffe75f;
  color: #ffe75f;
  outline: none;
}

@media screen and (max-width: 959px) {
  .me-network {
    opacity: 0.28;
  }

  .me-fx__orb {
    opacity: 0.1;
    filter: blur(60px);
  }

  .me-section__ghost {
    right: -0.02em;
    font-size: clamp(6rem, 30vw, 11rem);
  }

  .me-hero,
  .me-section,
  .me-cta {
    width: min(100% - 2rem, 720px);
  }

  .me-hero {
    min-height: auto;
    grid-template-columns: minmax(0, 1fr);
    gap: 4rem;
    padding: 7rem 0 6rem;
  }

  .me-hero__portrait {
    width: min(100%, 430px);
  }

  .me-toolkit {
    grid-template-columns: minmax(0, 1fr);
  }

  .me-method__grid {
    grid-template-columns: minmax(0, 1fr);
  }
}

@media screen and (max-width: 639px) {
  .me-hero h1 {
    font-size: clamp(3.05rem, 15vw, 4.5rem);
  }

  .me-capabilities {
    grid-template-columns: minmax(0, 1fr);
  }

  .me-capability:nth-child(even) {
    border-left: 0;
    padding-left: 0;
  }

  .me-role {
    grid-template-columns: minmax(0, 1fr);
    gap: 1.5rem;
  }

  .me-toolkit__list div {
    grid-template-columns: minmax(0, 1fr);
    gap: 0.45rem;
  }

  .me-section__heading h2,
  .me-cta h2 {
    font-size: clamp(2.6rem, 12vw, 4rem);
  }
}

@media (prefers-reduced-motion: reduce) {
  .me-title__line--accent {
    animation: none;
  }

  .me-fx__orb {
    opacity: 0.08;
  }
}
</style>
