<script>
  import { onMount } from 'svelte';
  import {goto} from "$app/navigation";
  import {logout} from "$lib/api/auth.js";
  import {user} from "$lib/store.js";

  function toggleDarkMode() {
    const html = document.querySelector('html');
    html.classList.toggle('dark');
  }

</script>

{@debug user}
<header class="flex items-center justify-between p-4 bg-gray-900 text-white">
    <div class="flex items-center">
        <img src="logo_admin.png" alt="Logo" class="h-8 mr-4">
    </div>

    {#if $user}
        <div class="flex items-center">
            <span class="text-sm mr-4">Connected as {$user.username}</span>
            <button class="bg-red-400 hover:bg-red-600 text-white rounded px-4 py-2" on:click={logout}>Logout</button>
        </div>
    {:else}
        <div class="flex items-center">
            <button class="bg-gray-500 hover:bg-gray-600 text-white rounded px-4 py-2 mr-4"
            on:click={() => goto('/user/login')}
            >Login</button>
            <button class="bg-gray-500 hover:bg-gray-600 text-white rounded px-4 py-2 mr-4"
            on:click={() => goto('/user/register')}
            >Signup</button>
            <button class="bg-gray-500 hover:bg-gray-600 text-white rounded px-4 py-2" on:click={toggleDarkMode}>Toggle Dark Mode</button>
        </div>
    {/if}


</header>
