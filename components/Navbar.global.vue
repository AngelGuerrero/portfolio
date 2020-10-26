<template>
  <nav class="dev navbar p-0 d-flex">
    <div class="nav__menu dev d-none d-md-flex w-50 h-100 ml-auto">
      <div v-for="item in menuList" :key="item.id" class="menu__item dev">
        <nuxt-link :to="item.to" exact>
          {{ item.title }}
        </nuxt-link>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data () {
    return {
      hover: false,

      menu: [
        { title: 'Home', to: '/', active: false },
        { title: 'Me', to: 'me', active: false },
        { title: 'Lab', to: 'lab', active: false },
        { title: 'Project', to: 'projects', active: false },
        { title: 'Contact', to: 'contact', active: false }
      ]
    }
  },

  computed: {
    menuList () {
      return this.menu.map((item) => {
        item.active = item.to === this.$route.path
        return item
      })
    }
  },

  methods: {}
}
</script>

<style lang="scss" scoped>
.navbar {
  background-color: $principal;
  grid-column: 2/5;
  grid-row: 1/2;

  .nav__menu {
    // initial state
    opacity: 0;
    @include appear-from-opacity($duration: 3s, $delay: 2s);
  }
}

.menu__item {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;

  &:hover {
    a {
      color: $secondaryAccent;
    }
  }

  a {
    font-family: "Saira Semi Condensed", sans-serif;
    font-weight: 600;
    font-size: 16px;
    text-transform: uppercase;
    text-decoration: none;
    color: $gold;
  }
}

</style>
