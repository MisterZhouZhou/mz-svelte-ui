<script>
  import parser from './markdown/md-parser'

  export let markdown = ''
</script>

{#if markdown}
  {@html parser.render(markdown)}
{/if}