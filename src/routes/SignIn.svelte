<script lang="ts">
  import { useNavigate } from "svelte-navigator";
  import { loggedIn, user } from "../lib/stores";

  const navigate = useNavigate();

  let usernameEntry = "";
  let passwordEntry = "";

  let errorMessage = "";
  let disabled = false;

  if ($loggedIn) {
    navigate("/");
  }

  const Login = async () => {
    if (usernameEntry === "" || passwordEntry === "") {
      errorMessage = "Please enter a username and password";
      return;
    }

    try {
      disabled = true;
      errorMessage = "";
      const response = await fetch(`${import.meta.env.VITE_API_URL}/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: usernameEntry,
          password: passwordEntry,
        }),
      });
      if (response.ok) {
        const data = await response.json();
        $user = { uuid: data.data.UUID, jwt: data.data.Token };
        navigate("/");
      } else {
        errorMessage = "Invalid username or password";
      }
      disabled = false;
    } catch (e) {
      console.error(e);
      errorMessage = "Login failed";
      disabled = false;
    }
  };
</script>

<div class="flex justify-center my-24">
  <div class="flex flex-col px-20 py-16 items-center border-black border-solid border-2 rounded-3xl">
    <h1 class="font-display text-3xl mb-2 text-brand-blue-700 text-center">
      Login to Pentabyte
    </h1>
    <p class="text-sm text-red-700 {errorMessage ? 'visible' : 'invisible'}">
      {errorMessage} <br>
    </p>
    <form
      class="flex flex-col w-full"
      on:submit|preventDefault={Login}
    >
      <input
        bind:value={usernameEntry}
        type="text"
        class="focus:outline-0 border-b-2 border-brand-blue-400 px-2 py-1 my-3"
        placeholder="Username or Email"
      >
      <input
        bind:value={passwordEntry}
        type="password"
        class="focus:outline-0 border-b-2 border-brand-blue-400 px-2 py-1 my-3"
        placeholder="Password"
      >
      <button
        type="submit"
        class="disabled:bg-gray-500 bg-brand-blue-700 text-white font-display text-lg px-2 py-1 rounded-md my-3"
        {disabled}
      >
        {!disabled ? "Login" : "Loading..."}
      </button>
    </form>
  </div>
</div>