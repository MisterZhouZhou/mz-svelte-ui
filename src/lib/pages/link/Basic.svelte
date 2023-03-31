<script>
  import { Link } from '../../..'
</script>

<div class="items">
  <Link href="https://github.com/koory1st/svelte-element-ui" target="_blank">default</Link>
  <Link type="primary">primary</Link>
  <Link type="success">success</Link>
  <Link type="warning">warning</Link>
  <Link type="danger">danger</Link>
  <Link type="info">info</Link>
</div>

<style lang="scss">
  .items {
    :global(.mz-link) {
      margin-right: 20px;
    }
  }
</style>