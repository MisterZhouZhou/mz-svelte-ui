```javascript
<script lang="ts">
  import { Button, Row } from 'mz-svelte-ui'
</script>

<div class="basic-usage">
  <Row>
    <Button>Default</Button>
    <Button type="primary">Primary</Button>
    <Button type="success">Success</Button>
    <Button type="info">Info</Button>
    <Button type="warning">Warning</Button>
    <Button type="danger">Danger</Button>
  </Row>

  <Row>
    <Button plain>Plain</Button>
    <Button type="primary" plain>Primary</Button>
    <Button type="success" plain>Success</Button>
    <Button type="info" plain>Info</Button>
    <Button type="warning" plain>Warning</Button>
    <Button type="danger" plain>Danger</Button>
  </Row>

  <Row>
    <Button round>Round</Button>
    <Button type="primary" round>Primary</Button>
    <Button type="success" round>Success</Button>
    <Button type="info" round>Info</Button>
    <Button type="warning" round>Warning</Button>
    <Button type="danger" round>Danger</Button>
  </Row>

  <Row>
    <Button icon="mz-icon-search" circle />
    <Button type="primary" icon="mz-icon-edit" circle />
    <Button type="success" icon="mz-icon-check" circle />
    <Button type="info" icon="mz-icon-message" circle />
    <Button type="warning" icon="mz-icon-star-off" circle />
    <Button type="danger" icon="mz-icon-delete" circle />
  </Row>
</div>
```