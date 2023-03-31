<script>
  // footer 高度
  export let height = '60px'
</script>

<footer class="mz-footer" style="height:{height}">
  <slot />
</footer>

<style lang="scss">
  @import './index.scss';
</style>