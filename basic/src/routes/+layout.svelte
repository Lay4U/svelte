<script>
  import Header from '$lib/components/Header.svelte';
  import Sidebar from "$lib/components/Sidebar.svelte";
  import "../app.css";
  import {beforeUpdate, onMount, setContext} from 'svelte';
  import {getAuthenticated} from "$lib/api/auth.js";
  import { user } from "$lib/store.js";


  onMount(async () => {
    const authenticatedUser = await getAuthenticated();
    if(authenticatedUser){
      user.update((user) => {
        user = authenticatedUser;
        return user;
      });
    }
  });
</script>

<header>
    <Header/>
</header>

<div class="flex min-h-screen">
    {#if user}
        <aside>
            <Sidebar/>
        </aside>
    {/if}

    <main class="w-3/4 p-4">
        <slot/>
    </main>
</div>

<style>
    header {
        background-color: #333;
        color: #fff;
        padding: 1rem;
    }

    aside {
        background-color: #f7f7f7;
        border-right: 1px solid #ddd;
    }

    @media (max-width: 768px) {
        .flex-wrap {
            flex-wrap: wrap;
        }

        aside {
            width: 100%;
            border-right: none;
            border-bottom: 1px solid #ddd;
        }

        main {
            width: 100%;
        }
    }
</style>
