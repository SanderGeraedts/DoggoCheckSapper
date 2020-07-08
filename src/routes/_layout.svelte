<script>
  import Nav from "../components/Nav.svelte";
  import Header from "../components/Header.svelte";
  import Wrapper from "../components/Wrapper.svelte";

  export let segment;
</script>

<style>

</style>

<Header />
<Wrapper>
  <main>
    <slot />
  </main>
</Wrapper>

<Nav {segment} />
