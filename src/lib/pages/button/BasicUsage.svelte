<script lang="ts">
  import { Button, Row } from '../../..'
</script>

<div class="basic-usage">
  <Row class="demo-row">
    <Button on:click={() => alert('222')}>Default</Button>
    <Button type="primary">Primary</Button>
    <Button type="success">Success</Button>
    <Button type="info">Info</Button>
    <Button type="warning">Warning</Button>
    <Button type="danger">Danger</Button>
  </Row>

  <Row class="demo-row">
    <Button plain>Plain</Button>
    <Button type="primary" plain>Primary</Button>
    <Button type="success" plain>Success</Button>
    <Button type="info" plain>Info</Button>
    <Button type="warning" plain>Warning</Button>
    <Button type="danger" plain>Danger</Button>
  </Row>

  <Row class="demo-row">
    <Button round>Round</Button>
    <Button type="primary" round>Primary</Button>
    <Button type="success" round>Success</Button>
    <Button type="info" round>Info</Button>
    <Button type="warning" round>Warning</Button>
    <Button type="danger" round>Danger</Button>
  </Row>

  <Row class="demo-row">
    <Button icon="-icon-search" circle />
    <Button type="primary" icon="-icon-edit" circle />
    <Button type="success" icon="-icon-check" circle />
    <Button type="info" icon="-icon-message" circle />
    <Button type="warning" icon="-icon-star-off" circle />
    <Button type="danger" icon="-icon-delete" circle />
  </Row>
</div>

