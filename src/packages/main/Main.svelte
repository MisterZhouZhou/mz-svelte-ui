<script>
  export let padding = true
</script>

<main class="mz-main" class:is-padding={padding}>
  <slot />
</main>

<style lang="scss">
  @import './index.scss'
</style>