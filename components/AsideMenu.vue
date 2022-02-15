<template>
  <aside class="dev h-full flex flex-col justify-end z-10">
    <!-- Icons to social networks -->
    <div :class="{ 'links--animation': !isMobile }" class="flex flex-col">
      <nuxt-link
        to="/portafolio.pdf"
        target="_blank"
        title="Resume"
        class="dev
              text-gray-600
              flex
              justify-center
              items-center
              px-3
              py-6
              transition-colors duration-300
              hover:text-custom-green-500"
      >
        <svg
          class="h-6"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M21
               13.255A23.931
               23.931
               0
               0112
               15c-3.183
               0-6.22-.62-9-1.745M16
               6V4a2
               2
               0
               00-2-2h-4a2
               2
               0
               00-2
               2v2m4
               6h.01M5
               20h14a2
               2
               0
               002-2V8a2
               2
               0
               00-2-2H5a2
               2
               0
               00-2
               2v10a2
               2
               0
               002
               2z"
          />
        </svg>
      </nuxt-link>
      <a
        href="https://github.com/AngelGuerrero"
        target="_blank"
        title="Ver perfil de GitHub y códigos"
        class="dev
              text-gray-600
                flex
                justify-center
                items-center
                px-3
                py-6
                text-2xl
                transition-colors duration-300
              hover:text-custom-green-500"
      >
        <github-icon title="Ver perfil de GitHub y códigos" />
      </a>
      <a
        href="https://wa.link/upltbr"
        target="_blank"
        title="Abrir chat de Whatsapp"
        class="dev
              text-gray-600
                flex
                justify-center
                items-center
                px-3
                py-6
                text-2xl
                transition-colors duration-300
              hover:text-custom-green-500"
      >
        <whatsapp-icon title="Abrir chat de Whatsapp" />
      </a>
      <a
        href="mailto:lasantiagoguerrero@gmail.com"
        target="_blank"
        title="Mandar correo electrónico"
        class="dev
              text-gray-600
                flex
                justify-center
                items-center
                px-3
                py-6
                text-2xl
                transition-colors duration-300
              hover:text-custom-green-500
              "
      >
        <gmail-icon title="¡Mandar correo electrónico!" />
      </a>
    </div>
  </aside>
</template>

<script>
export default {
  props: {
    //
    // Doesn't play animations on mobile devices
    //
    isMobile: {
      type: Boolean,
      default: true
    }
  }
}
</script>

<style lang="scss" scoped></style>
