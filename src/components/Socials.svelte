<script lang="ts">
  const socialLinks = [
    {
      className: "linkedin",
      url: "https://www.linkedin.com/",
    },
    {
      className: "youtube",
      url: "https://www.youtube.com/",
    },
    {
      className: "twitter",
      url: "https://twitter.com/",
    },
    {
      className: "instagram",
      url: "https://www.instagram.com/",
    },
    {
      className: "tiktok",
      url: "https://www.tiktok.com/",
    },
    {
      className: "discord",
      url: "https://discord.gg/",
    }
  ];

  export let classes;
</script>

{#each socialLinks as link}
  <a href={link.url} aria-label={link.className} target="_blank">
    <i class="fa-brands fa-{link.className} {classes}" />
  </a>
{/each}
