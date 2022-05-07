<template>
  <div class="mt-2">
    <p class="text-xl">
      <span class="text-white font-saira">
        {{ text }}
        <a
          :href="url"
          target="_blank"
          class="text-custom-accent-600 hover:text-green-200"
        >
          here
        </a>
        <slot name="append" />
      </span>
    </p>
  </div>
</template>

<script>
export default {
  name: 'ContentLink',

  props: {
    text: {
      type: String,
      required: true
    },

    url: {
      type: String,
      required: true
    }
  }
}
</script>
