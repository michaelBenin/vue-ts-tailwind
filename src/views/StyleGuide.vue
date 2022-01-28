<template>
  <h1>Styleguide</h1>

  <div class="content-center">
    <h3>Colors</h3>
    <!-- Color name, when it's used, etc -->
  </div>

  <div class="content-center">
    <h3>SUBSCRIBE FORM</h3>
    <form class="m-4 flex">
      <input
        class="
          rounded-l-lg
          p-4
          border-t
          mr-0
          border-b border-l
          text-gray-800
          border-gray-200
          bg-white
        "
        placeholder="your@mail.com"
      />
      <button
        class="
          px-8
          rounded-r-lg
          bg-yellow-400
          text-gray-800
          font-bold
          p-4
          uppercase
          border-yellow-500 border-t border-b border-r
        "
      >
        Subscribe
      </button>
    </form>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue'
export default defineComponent({
  name: 'AboutPage',
  props: {
    msg: {
      type: String,
      required: true,
    },
  },
  setup: () => {
    const count = ref(0)
    return { count }
  },
})
</script>

<style scoped>
p {
  @apply my-4;
}

a {
  @apply text-link;
}

code {
  @apply bg-code py-0.5 px-1 text-code text-sm;
}
</style>
