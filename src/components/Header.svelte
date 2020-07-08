<script>
  import Wrapper from "./Wrapper.svelte";
</script>

<style>
  header {
    background-color: var(--color-heading);
  }

  header .logo {
    font-family: var(--font-heading);
    font-size: 35px;
    color: var(--color-white);
    padding-top: 5px;
  }
</style>

<header>
  <Wrapper>
    <div class="logo">DoggoCheck!</div>
  </Wrapper>
</header>
