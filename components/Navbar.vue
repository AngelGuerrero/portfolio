<template>
  <nav class="dev navbar mr-auto h-full flex justify-end">
    <!-- Menu -->
    <div class="dev nav__menu hidden sm:flex">
      <div v-for="item in menu" :key="item.to" class="dev">
        <nuxt-link
          :to="item.to"
          :exact="item.exact"
          active-class="nav__link--active"
          exact-active-class="nav__link--active"
          class="nav__link h-full
                flex
                items-center
                px-5
                text-sm
                font-cy-bold
                font-bold
                lowercase
                border-b-4
                border-custom-main-500
                text-custom-blue-700
                transition duration-700

                hover:bg-custom-blue-900
                hover:text-custom-blue-500
                hover:border-custom-contrast-500
                "
        >
          {{ item.title }}
        </nuxt-link>
      </div>
    </div>

    <!-- Connected Status -->
    <div class="dev visible sm:hidden w-full self-center">
      <ConnectedStatus />
    </div>
  </nav>
</template>

<script>
import ConnectedStatus from './ConnectedStatus.vue'

export default {
  components: {
    ConnectedStatus
  },

  data: () => ({
    menu: [
      { title: 'Home', to: '/', exact: true },
      { title: 'Me', to: '/me', exact: false },
      { title: 'Memories', to: '/memories', exact: false }
    ]
  })
}
</script>

<style scoped>
.navbar .nav__menu {
  opacity: 0;
  animation-name: appear;
  animation-duration: 3s;
  animation-delay: 0.5s;
  animation-fill-mode: forwards;
  backdrop-filter: blur(3px);
}

.nav__link--active,
.nav__link--active:hover,
.nav__link--active:focus {
  border-color: #ffe75f;
  background: rgba(0, 130, 153, 0.22);
  color: #00fff9;
}
</style>
