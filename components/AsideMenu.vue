<template>
  <aside class="z-10 flex flex-col justify-end h-full dev">
    <!-- Icons to social networks -->
    <div :class="{ 'links--animation': !isMobile }" class="flex flex-col">
      <!-- <nuxt-link
        to="/portfolio"
        title="Resume"
        class="flex items-center justify-center px-3 py-6 text-gray-600 transition-colors duration-300 dev hover:text-custom-green-500"
      >
        <icons-portfolio-component />
      </nuxt-link> -->
      <a href="https://github.com/AngelGuerrero" target="_blank" title="Ver perfil de GitHub y códigos"
          class="flex items-center justify-center px-3 py-6 text-2xl text-gray-600 transition-colors duration-300 dev hover:text-custom-green-500">
        <github-icon title="Ver perfil de GitHub y códigos" />
      </a>
      <a href="https://wa.link/upltbr" target="_blank" title="Abrir chat de Whatsapp"
          class="flex items-center justify-center px-3 py-6 text-2xl text-gray-600 transition-colors duration-300 dev hover:text-custom-green-500">
        <whatsapp-icon title="Abrir chat de Whatsapp" />
      </a>
      <a href="mailto:lasantiagoguerrero@gmail.com" target="_blank" title="Mandar correo electrónico"
          class="flex items-center justify-center px-3 py-6 text-2xl text-gray-600 transition-colors duration-300 dev hover:text-custom-green-500 ">
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