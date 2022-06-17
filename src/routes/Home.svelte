<script lang="ts">
  import { loggedIn, user } from '../lib/stores';
</script>

<div>
  <p>{$loggedIn ? `Welcome ${$user.uuid}` : `You are not logged in!`}</p>
</div>

