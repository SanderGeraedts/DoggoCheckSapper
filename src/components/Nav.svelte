<script>
  import DogIcon from "./nav-icons/DogIcon.svelte";
  import GraphIcon from "./nav-icons/GraphIcon.svelte";
  import HomeIcon from "./nav-icons/HomeIcon.svelte";
  import WeightIcon from "./nav-icons/WeightIcon.svelte";
  export let segment;
</script>

<style>
  nav {
    position: fixed;
    background-color: #323232;
    bottom: 0;
    width: 100vw;
    height: 100px;
  }

  nav ul {
    display: flex;
    justify-content: space-evenly;
    margin: 0;
    padding: 0;
    list-style: none;
    height: 100%;
  }

  nav ul li {
    width: 100%;
    margin: 0;
    padding: 0;
  }

  nav a {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    text-align: center;
    transition: color 0.1s ease-in-out;
    text-decoration: none;
    color: var(--color-white);
    font-family: var(--font-heading);
  }

  nav a[aria-current] {
    color: var(--color-heading);
  }

  nav a :global(svg) {
    margin: 0 auto;
    padding: 5px 0;
  }
</style>

<nav>
  <ul>
    <li>
      <a aria-current={segment === undefined ? 'page' : undefined} href=".">
        <HomeIcon color={segment === undefined ? 'fd5621' : 'ffffff'} />
        Home
      </a>
    </li>
    <li>
      <a
        aria-current={segment === 'overview' ? 'page' : undefined}
        href="overview">
        <GraphIcon color={segment === 'overview' ? 'fd5621' : 'ffffff'} />
        Overview
      </a>
    </li>
    <li>
      <a aria-current={segment === 'weight' ? 'page' : undefined} href="weight">
        <WeightIcon color={segment === 'weight' ? 'fd5621' : 'ffffff'} />
        Weight
      </a>
    </li>
    <li>
      <a aria-current={segment === 'dogs' ? 'page' : undefined} href="dogs">
        <DogIcon color={segment === 'dogs' ? 'fd5621' : 'ffffff'} />
        Dogs
      </a>
    </li>
  </ul>
</nav>
