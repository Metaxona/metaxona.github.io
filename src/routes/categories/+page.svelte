<script>
    export let data;

    const {postsByCategory, categoryList} = data
    
</script>

<div class="p-4">
    <div class="font-bold text-xl">Categories</div>

    <section class="flex flex-row flex-wrap gap-4 my-10">
        {#each categoryList as category }
            <a href={`#${category}`} class="text-sm font-bold bg-cyan-400 text-black p-1 rounded-md">{category}</a>
        {/each}
    </section>


    <div class="flex flex-row flex-wrap gap-8">
        {#each categoryList as category }
            <div id={category} class="flex flex-col gap-2 max-w-96 overflow-ellipsis">
                <h3 class="font-bold text-md">{category.toUpperCase()}</h3>
                <div class="flex flex-col text-wrap">
                    {#each postsByCategory[category] as categoryPost }
                        <a href={`/blog/${categoryPost.slug}`} title={categoryPost.title}>{categoryPost.title}</a>
                    {/each}
                </div>
            </div>
        {/each}
    </div>
</div>