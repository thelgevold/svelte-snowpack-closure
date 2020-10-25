<script>
  import { FriendsService } from "./friend-service";

  import { onMount } from "svelte";
  let count = 0;

  const friendsService = new FriendsService();
  const friends = friendsService.getFriends();

  onMount(() => {
    const interval = setInterval(() => count++, 1000);
    return () => {
      clearInterval(interval);
    };
  });
</script>

<style>
  .App {
    text-align: center;
  }
</style>

<div class="App">
  <header class="App-header">
    Welcome!!
    <p>Page has been open for <code>{count}</code> seconds.</p>
  </header>

  <ul>
    {#each friends as friend}
      <li>{friend.name}</li>
    {/each}
  </ul>
</div>
