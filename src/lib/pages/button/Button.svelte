<script>
  import Demo from '../../demo.svelte'
  import BasicUsage from './BasicUsage.svelte'
  import BasicUsageCode from './BasicUsage.md?raw'
  import DisabledButton from './DisabledButton.svelte'
  import DisabledButtonCode from './DisabledButton.md?raw'
  import TextButton from './TextButton.svelte'
  import TextButtonCode from './TextButton.md?raw'
  import IconButton from './IconButton.svelte'
  import IconButtonCode from './IconButton.md?raw'
  import ButtonGroup from './ButtonGroup.svelte'
  import ButtonGroupCode from './ButtonGroup.md?raw'
  import LoadingButton from './LoadingButton.svelte'
  import LoadingButtonCode from './LoadingButton.md?raw'
  import SizeButton from './SizeButton.svelte'
  import SizeButtonCode from './SizeButton.md?raw'
</script>

<h2>Basic usage</h2>
<Demo height={150} markdown={BasicUsageCode}>
  <div slot="preview">
    <BasicUsage />
  </div>
</Demo>


<h2>Disabled Button</h2>
<Demo height={150} markdown={DisabledButtonCode}>
  <div slot="preview">
    <DisabledButton />
  </div>
</Demo>

<h2>Text Button</h2>
<Demo height={150} markdown={TextButtonCode}>
  <div slot="preview">
    <TextButton />
  </div>
</Demo>

<h2>Icon Button</h2>
<Demo height={150} markdown={IconButtonCode}>
  <div slot="preview">
    <IconButton />
  </div>
</Demo>

<h2>Button Group</h2>
<Demo height={150} markdown={ButtonGroupCode}>
  <div slot="preview">
    <ButtonGroup />
  </div>
</Demo>

<h2>Loading Button</h2>
<Demo height={150} markdown={LoadingButtonCode}>
  <div slot="preview">
    <LoadingButton />
  </div>
</Demo>

<h2>Sizes</h2>
<Demo height={150} markdown={SizeButtonCode}>
  <div slot="preview">
    <SizeButton />
  </div>
</Demo>

<style lang="scss">
  :global(.mz-row.demo-row) {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
</style>
