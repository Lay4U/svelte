import {fetchAPI} from "$lib/api.js";
import {goto} from "$app/navigation";
import {user} from "$lib/store.js";

export async function getAuthenticated() {
  const response = await fetchAPI('GET', '/users/auth', null);
  console.log(response);
  if (response.status !== 'OK') {
    console.error('Failed to fetch authenticated user');
  }
  user.set(response.data);
  return response.data;
}

export async function login(userForm) {
  const response = await fetchAPI('POST', '/login', userForm);

  if (response.status === 'OK') {
    const fetchUser = await getAuthenticated();
    user.set(fetchUser);
    console.log('Logged in successfully!');
    await goto('/');
  } else {
    console.log('Failed to login.');
  }
}

export async function logout() {
  const response = await fetchAPI('POST', '/logout', null);
  if (response.status === 'OK') {
    console.log('Logged out.');
    user.set(null);
    await goto('/');
  } else {
    console.log('Failed to login.');
  }
}
