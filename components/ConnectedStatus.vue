<template>
  <div
    class="dev
            w-full
            flex
            justify-center
            items-center
            font-cy-regular
            font-bold
            text-sm
            text-white
            overflow-hidden
            "
    :class="isConnected.color"
  >
    <a
      class="dev"
      :class="
        isConnected.show
          ? 'cursor-pointer hover:underline'
          : 'cursor-not-allowed'
      "
    >
      {{ isConnected.text }}
    </a>
    <span
      v-show="isConnected.show"
      class="dev flex h-3 w-3 overflow-hidden ml-2 animate-pulse"
    >
      <span
        class="dev relative inline-flex rounded-full h-3 w-3 bg-green-500"
      />
    </span>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState(['author']),

    isConnected () {
      const connected = this.author.connected

      return {
        color: connected ? 'text-green-500' : 'text-red-500',
        text: connected ? 'online' : 'offline',
        show: Boolean(connected)
      }
    }
  },

  async created () {
    await this.$store.dispatch('getAuthor')
  }
}
</script>
