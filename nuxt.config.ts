// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@pinia/nuxt'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {}
    }
  },
  css: ['~/assets/css/tailwind.css', '~/assets/css/fonts.css'],

  app: {
    head: {
      title: 'Ingeniero de Software Freelance | Desarrollo a medida',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          hid: 'description',
          name: 'description',
          content:
            'Ingeniero de software freelance especializado en el desarrollo a medida. Experto en Laravel, Vue, Nuxt, React y más. Construyo aplicaciones web y de escritorio de alto rendimiento y calidad. ¡Contáctame para llevar tu proyecto al siguiente nivel!'
        },
        {
          name: 'keywords',
          content:
            'ingeniero de software freelance, desarrollo a medida, Laravel, Vue, Nuxt, Next, CodeIgniter, ASP.NET, Node.js, React, Rails, Java, Flask, Django, Windows Forms, C#, Docker, Grunt, Gulp, Git, aplicaciones web, aplicaciones de escritorio, desarrollo de software'
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content:
            'Ingeniero de Software Freelance | Desarrollo a Medida | Laravel, Vue, Nuxt, React'
        },
        // { hid: 'og:image', property: 'og:image', content: 'https://www.tusitio.com/imagen.jpg' }
        {
          hid: 'og:description',
          property: 'og:description',
          content:
            '¡Impulsa tu negocio con soluciones de software a medida! Soy un ingeniero de software freelance con experiencia en Laravel, Vue, Nuxt, React y otras tecnologías. Desarrollo aplicaciones web y de escritorio de alto rendimiento y calidad. ¡Trabajemos juntos para llevar tu proyecto al siguiente nivel!'
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: 'https://angelguerrero.vercel.com'
        },
        { hid: 'og:type', name: 'og:type', content: 'website' },
        {
          hid: 'og:site_name',
          property: 'og:site_name',
          content: 'Angel Guerrero Software Developer'
        },
        { hid: 'og:locale', property: 'og:locale', content: 'es_ES' }
      ],
      link: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Semi+Condensed:wght@600&display=swap'
        }
      ]
    }
  }
})
