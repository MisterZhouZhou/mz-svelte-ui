<script>
  // header 高度
  export let height = '60'
</script>

<header class="mz-header" style="height:{height}px">
  <slot />
</header>

<style lang="scss">
  @import './index.scss';
</style>