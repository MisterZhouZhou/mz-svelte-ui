<script>
  import { Container, Header, Footer, Aside, Main } from '.'
  import Menu from '$lib/menu/Menu.svelte'
  import RouterView from '$lib/menu/RouterView.svelte'
</script>

<Container direction="vertical" class="demo-container">
  <Header height="80">
    <div class="title">mz-svelte-ui</div>
  </Header>
  <Container>
    <Aside>
      <Menu />
    </Aside>
    <Main padding={false}>
      <div class="content">
        <RouterView />
      </div>
    </Main>
  </Container>
  <Footer>
    <div class="footer">
      mz-svelte-ui © 2023 Developed by mz
    </div>
  </Footer>
</Container>

<style lang="scss">
  :global(body) {
    margin: 0;
  }
  :global(.demo-container) {
    height: 100vh;
    overflow: hidden;
  }
  .title {
    font-size: 30px;
    color: #131313;
    font-weight: 600;
    height: 100%;
    line-height: 2.5;
  }
  .content {
    margin-left: 20px;
    height: calc(100vh - 160px);
    overflow: auto;
  }
  .footer {
    text-align: center;
  }
</style>