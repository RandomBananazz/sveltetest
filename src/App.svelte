<script lang="ts">
  import Navbar from "./components/Navbar.svelte";
  import Home from "./routes/Home.svelte";
  import Footer from "./components/Footer.svelte";

  import { Router, Route } from "svelte-navigator";
  import SignIn from './routes/SignIn.svelte';
</script>

<main class="min-h-screen relative">
  <Router basepath="{import.meta.env.BASE_URL}" primary={false}>
    <Navbar />
    <div class="p-5 md:pb-52">
      <Route path="/">
        <Home />
      </Route>
      <Route path="/sign-in">
        <SignIn />
      </Route>
      <!--      <Route path="/about" component={About} />-->
      <!--      <Route path="/games" component={Games} />-->
      <!--      <Route path="/news" component={News} />-->
      <!--      <Route path="/careers" component={Careers} />-->
    </div>
    <Footer />
  </Router>
</main>
