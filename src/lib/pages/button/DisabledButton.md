```javascript
<script lang="ts">
  import { Button, Row } from 'mz-svelte-ui'
</script>

<div class="disabled-button">
  <Row>
    <Button disabled>Default</Button>
    <Button type="primary" disabled>Primary</Button>
    <Button type="success" disabled>Success</Button>
    <Button type="info" disabled>Info</Button>
    <Button type="warning" disabled>Warning</Button>
    <Button type="danger" disabled>Danger</Button>
  </Row>

  <Row>
    <Button plain disabled>Plain</Button>
    <Button type="primary" plain disabled>Primary</Button>
    <Button type="success" plain disabled>Success</Button>
    <Button type="info" plain disabled>Info</Button>
    <Button type="warning" plain disabled>Warning</Button>
    <Button type="danger" plain disabled>Danger</Button>
  </Row>
</div>
```