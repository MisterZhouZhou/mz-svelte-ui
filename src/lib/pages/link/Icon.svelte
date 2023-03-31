<script lang="ts">
  import { Link } from '../../..'
</script>

<div class="items">
  <Link icon="mz-icon-edit">Edit</Link>
  <Link>Check<i class="mz-icon-view mz-icon--right" /></Link>
</div>

<style lang="scss">
  .items {
    :global(.mz-link) {
      margin-right: 20px;
    }
  }
</style>