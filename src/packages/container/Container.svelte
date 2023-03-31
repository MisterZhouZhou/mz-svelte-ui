<script>
  import a2s from '../util/Array2String'

  // 布局方向
  export let direction = 'horizontal'

  $: classString = a2s([
    'mz-container',
    ['is-vertical', direction === 'vertical'],
    $$props.class,
  ])
</script>

<div class="{classString}">
  <slot />
</div>

<style lang="scss">
  @import './index.scss';
</style>