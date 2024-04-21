<script>
    export let data;

    const {postsByTag, tagList} = data
    
</script>

<div class="p-4">
    <div class="font-bold text-xl">Tags</div>

    <section class="flex flex-row flex-wrap gap-4 my-10">
        {#each tagList as tag }
            <a href={`#${tag}`} class="text-sm font-bold bg-cyan-400 text-black p-1 rounded-md">{tag}</a>
        {/each}
    </section>


    <div class="flex flex-row flex-wrap gap-8">
        {#each tagList as tag }
            <div id={tag} class="flex flex-col gap-2 max-w-96 overflow-ellipsis">
                <h3 class="font-bold text-md">{tag.toUpperCase()}</h3>
                <div class="flex flex-col text-wrap">
                    {#each postsByTag[tag] as tagPost }
                        <a href={`/blog/${tagPost.slug}`} title={tagPost.title}>{tagPost.title}</a>
                    {/each}
                </div>
            </div>
        {/each}
    </div>
</div>