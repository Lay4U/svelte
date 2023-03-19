<script>
  import {onMount} from 'svelte';
  import {fetchAPI} from "$lib/api.js";
  import {goto} from "$app/navigation";

  let user = {
    username: 'test',
    password: 'test',
    nickname: 'test',
    roleId: null
  };

  let roles = [];

  onMount(async () => {
    console.log('hi');
    const response = await fetchAPI('GET', '/roles');
    roles = response.data;
    user.roleIds = roles
      .filter(role => role.name === 'USER')
      .map(userRole => userRole.id)
      .filter((id, index, self) => self.indexOf(id) === index);
    console.log(user.roleIds);
  });

  async function handleSubmit() {
    let save = await fetchAPI('POST', '/users', user);
    console.log(save);
    if(save.status === 'CREATED') {
      await goto('/user/login');
    }
  }
</script>

<slot>
    <h1 class="text-2xl font-semibold mb-4">Register</h1>

    <form on:submit|preventDefault={handleSubmit}>
        <div class="flex flex-col mb-4">
            <label for="username" class="font-semibold">Username</label>
            <input type="text" id="username" bind:value={user.username} required class="rounded border-gray-400 border p-2" />
        </div>

        <div class="flex flex-col mb-4">
            <label for="password" class="font-semibold">Password</label>
            <input type="password" id="password" bind:value={user.password} required class="rounded border-gray-400 border p-2" />
        </div>

        <div class="flex flex-col mb-4">
            <label for="nickname" class="font-semibold">Nickname</label>
            <input type="text" id="nickname" bind:value={user.nickname} required class="rounded border-gray-400 border p-2" />
        </div>


        <button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded">
            Register
        </button>
    </form>
</slot>

<style>
    form {
        display: flex;
        flex-direction: column;
    }

    label {
        margin-bottom: 0.5rem;
    }

    input,
    select {
        margin-bottom: 1rem;
    }
</style>
