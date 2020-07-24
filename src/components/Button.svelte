<script>
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  function clicked() {
    dispatch("click");
  }
</script>

<style>
  button,
  button:active,
  button:focus {
    border: 0;
    outline: 0;
    cursor: pointer;
    margin: 0;
    padding: 0;
  }
  button {
    color: var(--color-white);
    /* background-color: var(--color-heading); */
    background: linear-gradient(114.56deg, #ff3d00 0%, #ff9878 100%);
    box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
    transition: all 0.1s ease-in-out;
    font-size: 25px;
    width: 150px;
    height: 50px;
    border-radius: 50px;
    -webkit-tap-highlight-color: transparent;
  }

  button:active {
    box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.25);
    background: linear-gradient(114.56deg, #ff5f2d 0%, #ffb29a 100%);
    /* background: #ff8a65; */
  }
</style>

<button on:click={clicked}>
  <slot />
</button>
