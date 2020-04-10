<script>
  import { Gameplay } from "../../store/gameplay";
  import { Score } from "../../store/score";
  const toggle = () => {
    Gameplay.toggle();
  };
</script>

<style>
  div {
    padding: 15px 15px 10px 15px;
    font-family: "poppins";
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #ab9060;
    box-shadow: 0 -5px 5px -5px #333;
  }
  button {
    padding: 5px 8px 5px 8px;
    text-transform: uppercase;
    font-weight: bold;
    cursor: pointer;
    font-size: 21px;
    border-radius: 5px;
    border: 1px solid black;
    background-color: #ab9060;
  }
  button:hover {
    background-color: #856f4b;
  }
</style>

<div>
  <button on:click={() => toggle()}>
    {#if $Gameplay}Stop Game{:else}Start Game{/if}
  </button>
</div>
