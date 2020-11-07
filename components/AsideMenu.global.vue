<template>
  <aside class="dev h-full flex flex-col justify-end">
    <!-- Icons to social networks -->
    <div :class="{ 'links--animation': !isMobile }" class="flex flex-col">
      <a
        href="https://github.com/AngelGuerrero"
        target="_blank"
        title="Ver perfil de GitHub y códigos"
        class="dev
              text-white
                flex
                justify-center
                items-center
                px-3
                py-6
                text-2xl
              hover:text-custom-accent"
      >
        <github-icon
          title="Ver perfil de GitHub y códigos"
        />
      </a>
      <a
        href="https://wa.link/upltbr"
        target="_blank"
        title="Abrir chat de Whatsapp"
        class="dev
              text-white
                flex
                justify-center
                items-center
                px-3
                py-6
                text-2xl
              hover:text-custom-accent"
      >
        <whatsapp-icon
          title="Abrir chat de Whatsapp"
        />
      </a>
      <a
        href="mailto:lasantiagoguerrero@gmail.com"
        target="_blank"
        title="Mandar correo electrónico"
        class="dev
              text-white
                flex
                justify-center
                items-center
                px-3
                py-6
                text-2xl
              hover:text-custom-accent"
      >
        <gmail-icon
          title="¡Mandar correo electrónico!"
        />
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
