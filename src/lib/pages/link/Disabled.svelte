<script>
  import { Link } from '../../..'
</script>

<div class="items">
  <Link disabled>default</Link>
  <Link type="primary" disabled>primary</Link>
  <Link type="success" disabled>success</Link>
  <Link type="warning" disabled>warning</Link>
  <Link type="danger" disabled>danger</Link>
  <Link type="info" disabled>info</Link>
</div>

<style lang="scss">
  .items {
    :global(.mz-link) {
      margin-right: 20px;
    }
  }
</style>