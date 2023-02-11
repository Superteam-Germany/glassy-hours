<script lang="ts">
  export let url: string = "";
</script>

<div>
  {#if url.length > 0}
    <iframe
      class="video-player"
      src={url}
      title="Video Player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowfullscreen
    />
  {/if}
  <div class="video-player--empty">
    <p class="text-center text-lg font-light text-white/70">
      Recording of the talk will be available after the event.
    </p>
  </div>
</div>

<style lang="postcss">
  .video-player {
    @apply w-full mb-20 aspect-video border border-primary rounded-2xl hover:shadow-primary/30 shadow-2xl transition-all duration-300;
  }
  .video-player--empty {
    @apply w-full mb-20 flex items-center justify-center aspect-video border border-primary rounded-2xl shadow-2xl bg-gradient-to-br from-primary/10 to-primary/10;
  }
</style>
