<script lang="ts">
  import { Link } from '../../..'
</script>

<div class="items">
  <Link underline={false} type='primary'>Without Underline</Link>
  <Link type='success'>With Underline</Link>
</div>

<style lang="scss">
  .items {
    :global(.mz-link) {
      margin-right: 20px;
    }
  }
</style>