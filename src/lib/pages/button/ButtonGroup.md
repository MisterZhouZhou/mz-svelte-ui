```javascript
<script lang="ts">
  import { Button, ButtonGroup } from 'mz-svelte-ui'
</script>

<div class="button-group">
  <ButtonGroup>
    <Button type="primary" icon="mz-icon-arrow-left">Previous Page</Button>
    <Button type="primary">Next Page<i class="mz-icon-arrow-right mz-icon-right" /></Button>
  </ButtonGroup>
  <ButtonGroup>
    <Button type="primary" icon="mz-icon-edit" />
    <Button type="primary" icon="mz-icon-share" />
    <Button type="primary" icon="mz-icon-delete" />
  </ButtonGroup>
</div>
```