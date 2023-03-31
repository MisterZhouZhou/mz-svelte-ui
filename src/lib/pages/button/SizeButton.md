```javascript
<script lang="ts">
  import { Button, Row } from 'mz-svelte-ui'
</script>

<div class="size">
  <Row>
    <Button>Default</Button>
    <Button size="medium">Medium</Button>
    <Button size="small">Small</Button>
    <Button size="mini">Mini</Button>
  </Row>
  <Row>
    <Button round>Default</Button>
    <Button size="medium" round>Medium</Button>
    <Button size="small" round>Small</Button>
    <Button size="mini" round>Mini</Button>
  </Row>
</div>

<style lang="scss">
  :global(.size .-row) {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
</style>
```