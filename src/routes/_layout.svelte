<script>
  import { goto, stores } from "@sapper/app";

  import Auth from "../methods/auth.js";

  import Nav from "../components/Nav.svelte";
  import Header from "../components/Header.svelte";
  import Wrapper from "../components/Wrapper.svelte";

  const { page } = stores();

  export let segment;

  if (typeof window !== "undefined" && typeof document !== "undefined") {
    page.subscribe(({ path, params, query }) => {
      const from = window.location.pathname;
      const redirect = href => {
        goto(href);
      };

      Auth.beforeChange(from, path, redirect, params, query);
    });
  }
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
