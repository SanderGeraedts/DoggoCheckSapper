<script>
  // your script goes here
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
    background-color: var(--color-heading);
    box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
    transition: all 0.1s ease-in-out;
    font-size: 25px;
    width: 150px;
    height: 50px;
    border-radius: 50px;
  }

  button:active {
    box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.25);
    background-color: #ff8a65;
  }
</style>

<button>
  <slot />
</button>
