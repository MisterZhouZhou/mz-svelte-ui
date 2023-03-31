<script>
  // aside 宽度
  export let width = '300'
  export let divider = true
</script>

<aside class="mz-aside" class:is-divider={divider} style="width:{width}px">
  <slot />
</aside>

<style lang="scss">
  @import './index.scss';
</style>