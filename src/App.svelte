<script>
  import Header from "./components/Header/index.svelte";
  import GameCanvas from "./components/GameCanvas/index.svelte";
  import Menu from "./components/Menu/index.svelte";
</script>

<style>
  .appContainer {
    display: flex;
    flex-direction: column;
    height: 100vh;
    overflow: hidden;
  }
  :global(body) {
    background-image: url(/images/grass.jpg);
    padding: 0;
    margin: 0;
  }
</style>

<div class="appContainer">
  <Header />
  <GameCanvas />
  <Menu />
</div>
