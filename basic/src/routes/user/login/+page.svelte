<script>
  import { login } from "$lib/api/auth.js";

  let username = 'test';
  let password = 'test';

  const userForm = {username, password};

</script>

<slot>
    <div class="container">
        <h1>Login</h1>

        <form on:submit|preventDefault={() =>login(userForm)}>
            <div class="form-group">
                <label for="username">Username</label>
                <input type="text" id="username" bind:value={username} class="form-control" required>
            </div>

            <div class="form-group">
                <label for="password">Password</label>
                <input type="password" id="password" bind:value={password} class="form-control" required>
            </div>

            <button type="submit" class="btn btn-primary">Login</button>
        </form>
    </div>
</slot>

<style>
    .container {
        max-width: 400px;
        margin: 0 auto;
        padding: 2rem;
        border: 1px solid #ddd;
        border-radius: 0.5rem;
    }

    h1 {
        margin-bottom: 1rem;
    }

    .form-group {
        margin-bottom: 1rem;
    }

    label {
        display: block;
        margin-bottom: 0.5rem;
    }

    .form-control {
        width: 100%;
        padding: 0.5rem;
        border: 1px solid #ddd;
        border-radius: 0.25rem;
        font-size: 1rem;
        line-height: 1.5;
        transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    }

    .form-control:focus {
        outline: none;
        border-color: #4a90e2;
        box-shadow: 0 0 0 0.2rem rgba(74, 144, 226, 0.25);
    }

    button {
        display: block;
        width: 100%;
        padding: 0.5rem;
        color: #fff;
        background-color: #4a90e2;
        border: none;
        border-radius: 0.25rem;
        font-size: 1rem;
        line-height: 1.5;
        cursor: pointer;
        transition: background-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    }

    button:hover {
        background-color: #256bbf;
    }
</style>
