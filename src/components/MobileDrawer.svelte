<script lang="ts">
  import { Link } from 'svelte-navigator';
  import Socials from './Socials.svelte';
  import icon_white from '../assets/icon_white.png';
  import { loggedIn } from '../lib/stores';

  let isLoggedIn;
  loggedIn.subscribe((value) => {
    isLoggedIn = value;
  });

  export let showDrawer;
  export let navLinks;
  export let drawerOpen;
</script>

<div
  class="fixed z-20 flex h-full w-full flex-col justify-between bg-brand-blue-700 p-7 transition-all duration-300 md:hidden
        {!drawerOpen ? 'ml-[-100%]' : 'ml-0'}"
>
  <div class="flex h-fit items-center justify-between">
    <Link to="/#" on:click={showDrawer}>
      <img src={icon_white} class="h-12 lg:h-16" alt="logo"/>
    </Link>
    <button on:click={showDrawer}>
      <i class="fa-solid fa-times text-3xl text-white hover:text-gray-300"/>
    </button>
  </div>
  <div class="flex flex-col gap-8">
    {#each navLinks as link}
      <Link to={link.url} on:click={showDrawer}>
        <div class="flex justify-between text-white hover:text-gray-300">
          <span class="w-fit font-display text-4xl font-bold uppercase"
          >{link.name}</span
          >
          <i class="fa-solid fa-chevron-down text-3xl"/>
        </div>
      </Link>
    {/each}
  </div>

  <div class="flex justify-center">
    {#if !isLoggedIn}
      <Link to="/sign-in">
        <button
          on:click={showDrawer}
          class="rounded-br-2xl rounded-tl-2xl bg-white px-10 py-3 font-bold hover:bg-gray-300"
        >
          <span class="select-none text-2xl uppercase text-brand-blue-700">Sign In</span>
        </button>
      </Link>
    {:else}
      <button
        on:click={() => {
          showDrawer();
          loggedIn.set(false);
        }}
        class="rounded-br-2xl rounded-tl-2xl bg-white px-10 py-3 font-bold hover:bg-gray-300"
      >
        <span class="select-none text-2xl uppercase text-brand-blue-700">Sign Out</span>
      </button>
    {/if}
  </div>

  <div class="flex flex-row justify-evenly text-4xl">
    <Socials classes="text-white hover:text-gray-300"/>
  </div>
</div>
