import { derived, writable } from 'svelte/store';

export const user = writable({
  uuid: '',
  jwt: '',
});

export const loggedIn = derived(user, user => user.uuid !== '');