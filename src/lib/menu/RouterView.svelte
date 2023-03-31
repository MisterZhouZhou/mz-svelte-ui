<script>
	import { onMount } from 'svelte';
  import routes, { setCurrentRoute } from './router'
  let routerObj

  function handleHashChange({ target }) {
    const route = target.location.hash.slice(2)
    if (route) {
      // let routerObj = null;
      routes.map(v => {
        if (v.key && v.key === route) {
          routerObj = v
        } else if (v.children) {
          routerObj = v.children.find(nv => nv.key === route)
        }
      })
      if (routerObj) {
        routerObj = routerObj
        // 设置当前路由
        setCurrentRoute(route)
      }
    }
  }

  function handleLoad() {
    // 这里不执行, 开发过程中有时不执行，改为onMount
    window.location.hash
    // component = routes.find(v => v.key === window.location.hash.slice(2)).component
  }

  onMount(() => {
    window.location.hash = '#/overview'
    const route = window.location.hash.slice(2)
    if (route) {
      routes.map(v => {
        if (v.key && v.key === route) {
          routerObj = v
        } else if (v.children) {
          routerObj = v.children.find(nv => nv.key === route)
        }
      })
      if (routerObj) {
        routerObj = routerObj
        // 设置当前路由
        setCurrentRoute(route)
      }
    } 
  })
</script>

<svelte:window on:hashchange={handleHashChange} on:load={handleLoad} />

{#if routerObj}
  <svelte:component this={routerObj.component} {...routerObj.meta} />
{/if}
