<template>
  <aside class="dev h-full flex flex-col justify-end z-10">
    <!-- Icons to social networks -->
    <div :class="{ 'links--animation': !isMobile }" class="flex flex-col">
      <a
        href="/angel_guerrero_resume.pdf"
        download
        title="Download resume"
        aria-label="Download Ángel Guerrero resume"
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
          aria-hidden="true"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 3v12m0 0l-4-4m4 4l4-4M5 19h14"
          />
        </svg>
      </a>
      <a
        href="https://github.com/AngelGuerrero"
        target="_blank"
        rel="noopener noreferrer"
        title="View GitHub profile and code"
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
        <github-icon title="View GitHub profile and code" />
      </a>
      <a
        href="https://wa.link/upltbr"
        target="_blank"
        rel="noopener noreferrer"
        title="Open WhatsApp chat"
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
        <whatsapp-icon title="Open WhatsApp chat" />
      </a>
      <a
        href="mailto:lasantiagoguerrero@gmail.com"
        target="_blank"
        title="Send an email"
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
        <gmail-icon title="Send an email" />
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
