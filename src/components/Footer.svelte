<script lang="ts">
  import Socials from "./Socials.svelte";

  let email = "";
  const handleSubscription = () => {
    console.log("Subscribed", email);
    email = "";
  };
</script>

<div
  class="min-h-52 absolute bottom-0 hidden w-full grid-cols-3 items-center gap-2 bg-brand-blue-700 p-4 md:grid"
>
  <div class="col-start-1 flex flex-col gap-3">
    <p
      class="select-none font-display text-2xl font-bold uppercase text-brand-blue-400 lg:text-3xl"
    >
      The future is near. Take a chance.
    </p>
    <p class="text-sm font-thin text-gray-200">
      © 2022 Pentabyte Studios, Inc. All Rights Reserved.
    </p>
  </div>

  <div
    class="col-start-2 flex flex-col items-center justify-center text-center"
  >
    <p class="text-2xl font-bold uppercase text-white">Subscribe</p>
    <p class="text-sm font-thin text-white">
      Be the first to hear about Pentabyte's latest and greatest!
    </p>
    <form
      on:submit|preventDefault={handleSubscription}
      class="relative my-2 flex w-full max-w-sm items-center justify-between text-white"
    >
      <input
        bind:value={email}
        class="placeholder-brand-blue-300 border-brand-blue-300 w-full border-b-2 bg-transparent p-2 "
        name="email"
        type="email"
        placeholder="Email"
        required
      />
      <button
        class="absolute right-0 mx-2"
        type="submit"
        aria-label="subscription"
      >
        <i class="fa-solid fa-paper-plane" />
      </button>
    </form>
  </div>

  <div
    class="col-start-3 flex flex-col gap-3 text-center text-xl font-bold uppercase text-white lg:text-2xl"
  >
    <span>Contact us</span>
    <div class="flex flex-row justify-evenly text-2xl lg:text-4xl">
      <Socials classes="text-white hover:text-gray-300" />
    </div>
  </div>
</div>
