<script>
  import parser from './markdown/md-parser'
  // 代码区域高度
  export let height = 0
  // 展示的代码markdown内容
  export let markdown

  // 是否显示代码
  let showCode = false

  function handleShowCode() {
    showCode = !showCode
  }
</script>

<div class="demo-block">
  <div class="source">
    <slot name="preview"></slot>
  </div>
  {#if showCode}
    <div class="meta" style="height: {height}px">
      <slot name="code">{@html parser.render(markdown)}</slot>
    </div>
  {/if}
  <div class="demo-block-control">
    <span on:click={handleShowCode}>显示代码</span>
  </div>
</div>

<style lang="scss">
  .demo-block {
    border: 1px solid #ebebeb;
    border-radius: 3px;
    transition: .2s;
    margin-bottom: 24px;
    .source {
      padding: 24px;
    }
    .meta {
      background-color: #fafafa;
      border-top: 1px solid #eaeefb;
      overflow-y: auto;
      height: 0;
      transition: height .2s;
      padding: 0 20px;
    }
    .demo-block-control {
      display: flex;
      align-items: center;
      justify-content: center;
      border-top: 1px solid #eaeefb;
      height: 44px;
      box-sizing: border-box;
      background-color: #fff;
      border-bottom-left-radius: 4px;
      border-bottom-right-radius: 4px;
      text-align: center;
      margin-top: -1px;
      color: #d3dce6;
      cursor: pointer;
      position: relative;
    }
  }
</style>