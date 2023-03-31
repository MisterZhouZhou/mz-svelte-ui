<h2>Basic</h2>
<Demo height={210} markdown={BasicCode}>
  <div slot="preview">
    <Basic />
  </div>
</Demo>

<h2>Disabled</h2>
<Demo height={210} markdown={DisabledCode}>
  <div slot="preview">
    <Disabled />
  </div>
</Demo>


<h2>Underline</h2>
<Demo height={150} markdown={UnderlineCode}>
  <div slot="preview">
    <Underline />
  </div>
</Demo>

<h2>Icon</h2>
<Demo height={150} markdown={IconCode}>
  <div slot="preview">
    <Icon />
  </div>
</Demo>

<script>
  import Demo from '../../demo.svelte'
  import Basic from './Basic.svelte'
  import BasicCode from './Basic.md?raw'
  import Disabled from './Disabled.svelte'
  import DisabledCode from './Disabled.md?raw'
  import Underline from './Underline.svelte'
  import UnderlineCode from './Underline.md?raw'
  import Icon from './Icon.svelte'
  import IconCode from './Icon.md?raw'
</script>

<style lang="scss">

</style>