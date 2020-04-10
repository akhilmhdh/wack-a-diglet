<script>
  import Diglet from "./diglet.svelte";

  import { onMount } from "svelte";
  import { Score } from "../../store/score";
  import { Gameplay } from "../../store/gameplay";

  import { Random } from "../../util/random";
  import { ConstrainedRandom } from "../../util/constrainedRandom";

  let diglets = new Array(3);
  let GameCanvas;
  let peep;

  //We use recursive timeout function to carryout the game
  //The timer will be stopped when 1 min is over
  const wackBegin = () => {
    const currentSet = [];
    const maxima = Random(3);
    for (let i = 0; i <= maxima; i++) {
      const currentOne = Random(9);
      if (
        !GameCanvas.querySelectorAll(".column")[currentOne].className.includes(
          "appear"
        )
      ) {
        currentSet.push(currentOne);
      }
    }
    currentSet.map(el => {
      GameCanvas.querySelectorAll(".column")[el].className = "column appear";
    });
    peep = setTimeout(() => {
      currentSet.map(el => {
        GameCanvas.querySelectorAll(".column")[el].className = "column";
      });
      if ($Gameplay) {
        wackBegin();
      } else {
        clearTimeout(peep);
      }
    }, ConstrainedRandom(3000, 1000));
  };

  //Resets the gameplay on each start

  $: if ($Gameplay) {
    GameCanvas.querySelectorAll(".column").forEach(el => {
      el.className = "column";
    });
    Score.reset();
    const gameover = setTimeout(() => {
      Gameplay.toggle();
    }, 60000);
    wackBegin();
  }

  //the click function to enable hitting

  const wackIt = evt => {
    if (evt.target.className === "column appear") {
      Score.increment();
      evt.target.className += " wacked";
      evt.target.ontransitionend = () => {
        evt.target.className = "column";
      };
    }
  };
</script>

<style>
  .GameCanvasContainer {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .row {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .column {
    margin: 0 2.5px 0 2.5px;
  }
  .diglet-container > div:first-child {
    transform: scale(0.7);
  }
  .diglet-container > div:nth-child(2) {
    transform: scale(0.9);
  }
  .diglet-container > div:last-child {
    transform: scale(1.1);
  }
</style>

<div class="GameCanvasContainer">
  <div bind:this={GameCanvas} class="diglet-container">
    {#each diglets as item}
      <div class="row">
        {#each diglets as item}
          <div class="column" on:click={wackIt}>
            <Diglet />
          </div>
        {/each}
      </div>
    {/each}
  </div>
</div>
