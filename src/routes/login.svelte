<script>
  import Card from "../components/Card.svelte";
  import Input from "../components/Input.svelte";
  import Button from "../components/Button.svelte";

  let email = "";
  let password = "";
</script>

<Card>
  <Input settings={{ type: 'input' }} bind:value={email} />
  <Input settings={{ type: 'password' }} bind:value={password} />
  <Button>Login</Button>
  <p>{email}</p>
  <p>{password}</p>
</Card>
