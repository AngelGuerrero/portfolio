<template>
  <nav class="dev navbar mr-auto h-full flex justify-end">
    <!-- Menu -->
    <div class="dev nav__menu hidden sm:flex">
      <div v-for="item in menuList" :key="item.id" class="dev">
        <nuxt-link
          :to="item.to"
          exact
          class="h-full
                flex
                items-center
                px-8
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
      { title: 'Home', to: '/', active: false },
      { title: 'Me', to: 'me', active: false }
      // { title: 'Lab', to: 'lab', active: false },
      // { title: 'Project', to: 'projects', active: false },
      // { title: 'Contact', to: 'contact', active: false }
    ]
  }),

  computed: {
    menuList () {
      return this.menu.map((item) => {
        item.active = item.to === this.$route.path
        return item
      })
    }
  }
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
</style>
