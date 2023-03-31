<script>
  import routes, { currentRoute } from './router'
</script>

{#each routes as route}
  <nav>
    <a class:active={$currentRoute === route.key} href={`#/${route.key}`}>{route.displayName}</a>
  </nav>
  <!-- 是否有children -->
  {#if route.children}
    {#each route.children as childRoute}
      <nav>
        <a class:active={$currentRoute === childRoute.key} class:child={route.children} href={`#/${childRoute.key}`}>{childRoute.displayName}</a>
      </nav>
    {/each}
  {/if}
  
{/each}

<style lang="scss">
  nav {
    height: 40px;
    a {
      height: 100%;
      width: 100%;
      line-height: 1;
      text-decoration: none;
      display: flex;
      align-items: center;
      padding-left: 20px;
      color: #8e9299;
      &.active {
        background-color: lightpink;
        color: #f56666;
      }
      &.child {
        padding-left: 40px;
      }
    }
  }
</style>