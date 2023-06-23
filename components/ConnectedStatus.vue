<template>
  <div class="flex items-center justify-center w-full overflow-hidden text-sm font-bold text-white dev font-cy-regular "
      :class="isConnected.color">
    <a class="dev" :class="isConnected.show
        ? 'cursor-pointer hover:underline'
        : 'cursor-not-allowed'
      ">
      {{ isConnected.text }}
    </a>
    <span v-show="isConnected.show" class="flex w-3 h-3 ml-2 overflow-hidden dev animate-pulse">
      <span class="relative inline-flex w-3 h-3 bg-green-500 rounded-full dev" />
    </span>
  </div>
</template>

<script>
// import { mapState } from 'vuex'

export default {
  computed: {
    // ...mapState(['author']),

    // isConnected () {
    //   const connected = this.author.connected

    //   return {
    //     color: connected ? 'text-green-500' : 'text-red-500',
    //     text: connected ? 'online' : 'offline',
    //     show: Boolean(connected)
    //   }
    // }
  },

  // async created () {
  //   await this.$store.dispatch('getAuthor')
  // }
}
</script>
