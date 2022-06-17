<script lang="ts">
  import logo from "../assets/logo_right.png";
  import { Link } from "svelte-navigator";
  import MobileDrawer from "./MobileDrawer.svelte";
  import { loggedIn, user } from '../lib/stores';

  const navLinks = [
    {
      name: "About",
      url: "/about",
    },
    {
      name: "Games",
      url: "/games",
    },
    {
      name: "News",
      url: "/news",
    },
    {
      name: "Careers",
      url: "/careers",
    },
  ];

  let drawerOpen = false;
  const showDrawer = () => {
    drawerOpen = !drawerOpen;
  };
</script>

<!--  MOBILE DRAWER (hidden on medium screens)  -->
<MobileDrawer {showDrawer} {navLinks} {drawerOpen} />

<div
  class="sticky top-0 z-10 flex h-fit items-center justify-between border-b-2 border-dashed border-brand-blue-700 bg-white p-7"
>
  <Link to="/#">
    <img src={logo} class="h-12 lg:h-16" alt="logo" />
  </Link>

  <!--  DESKTOP NAVBAR (hide on small screens)  -->
  {#each navLinks as link}
    <Link to={link.url}>
      <span
        class="hidden text-xl font-bold uppercase text-brand-blue-700 hover:text-brand-blue-500 md:inline-block lg:text-2xl"
        >{link.name}</span
      >
    </Link>
  {/each}

  {#if !$loggedIn}
    <Link to="/sign-in">
      <button
        class="hidden h-10 rounded-full bg-brand-blue-700 px-5 hover:bg-brand-blue-500 md:inline-block"
      >
        <span class="select-none font-bold uppercase text-white">Sign In</span>
      </button>
    </Link>
  {:else}
    <button
      class="hidden h-10 rounded-full bg-brand-blue-700 px-5 hover:bg-brand-blue-500 md:inline-block"
      on:click={() => {
        $user = { uuid: '', jwt: '' };
      }}
    >
      <span class="select-none font-bold uppercase text-white">Sign Out</span>
    </button>
  {/if}
  <!--  END DESKTOP NAVBAR  -->

  <!--  MOBILE DRAWER BUTTON  -->
  <button
    class="border-none focus:outline-none md:hidden"
    on:click={showDrawer}
  >
    <i class="fa-solid fa-bars text-3xl text-brand-blue-700" />
  </button>
</div>
