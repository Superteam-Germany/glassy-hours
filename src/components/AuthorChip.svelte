<script lang="ts">
  export let post: any;
</script>

<div class="w-fit flex flex-col items-start justify-start">
  <div
    class="w-fit mb-5 p-2 pr-5 flex flex-row items-center border border-primary rounded-full"
  >
    <img src={post.data.author.image} alt="PFP" class="h-7 mr-2 rounded-full" />
    <div class="font-heading text-base">
      <a
        href={`https://twitter.com/${post.data.author.twitterName}`}
        rel="noreferrer"
        target="_blank">{post.data.author.name}</a
      >
    </div>
  </div>
</div>
