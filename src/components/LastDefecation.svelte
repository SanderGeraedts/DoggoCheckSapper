<script>
  import Button from "../components/Button.svelte";

  export let peed = false;
  export let timeDefecation = new Date();

  function addDefecation() {
    timeDefecation = new Date();
    console.log(timeDefecation);
  }
</script>

<style>
  .card {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    width: 100%;
    margin: 20px 0;
  }

  .card label {
    color: #3c3c3c;
  }

  .card .time {
    margin: 0;
    margin-top: -10px;
    font-weight: bold;
    font-size: 50px;
  }
</style>

<div class="card">
  <div class="text">
    <label for="time">
      Last
      {#if peed}pee{:else}poo{/if}
      :
    </label>
    <p class="time" name="time">
      {`${timeDefecation.getHours()}:${timeDefecation.getMinutes()}`}
    </p>
  </div>
  <Button on:click={addDefecation}>
    {#if peed}Peed{:else}Pooped{/if}
  </Button>
</div>
