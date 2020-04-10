<script>
  import { Score } from "../../store/score";
</script>

<style>
  @font-face {
    font-family: "poppins";
    src: url("/fonts/poppins/poppins-regular-webfont.woff2") format("woff2"),
      url("/fonts/poppins/poppins-regular-webfont.woff") format("woff");
    font-weight: normal;
    font-style: normal;
  }
  .headerContainer {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    align-items: center;
    padding: 15px;
    font-size: 21px;
    font-weight: bold;
    font-family: "poppins";
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),
      0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);
    background-color: #ab9060;
  }
</style>

<div class="headerContainer">
  <div>WACK-THE-DIGLET</div>
  <div>SCORE: {$Score}</div>
</div>
