<script>
  import { setContext } from 'svelte'
  import a2s from '../util/Array2String'
  import a2st from '../util/Array2StyleString'
  export let gutter = 0
  export let type = ''
  export let justify = 'start'
  export let align = 'top'

  setContext('RowGutter', gutter)

  $: classString = a2s([
    'mz-row',
    ['mz-row--flex', type === 'flex'],
    [`is-justify-${justify}`, justify && justify !== 'start'],
    [`is-align-${align}`, align && align !== 'top'],
    $$props.class,
  ])

  $: style = a2st([
    ['margin-left', -gutter / 2, Boolean(gutter)],
    ['margin-right', -gutter / 2, Boolean(gutter)],
  ])
</script>

<div class={classString} {style}>
  <slot {gutter} />
</div>

<style lang="scss">
  @import './index.scss';
</style>