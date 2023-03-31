<script lang="ts">
  import { Button, Row } from '../../..'
</script>

<div class="size">
  <Row class="demo-row">
    <Button>Default</Button>
    <Button size="medium">Medium</Button>
    <Button size="small">Small</Button>
    <Button size="mini">Mini</Button>
  </Row>
  <Row class="demo-row">
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
