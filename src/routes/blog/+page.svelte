<script>
    import MetaxonaBannerPost from '$lib/assets/banners/mon_logo_building_stage_banner_bv_2.png'
    /** @type {import('./$types').PageData} */
    export let data;

    const {posts} = data
</script>

<div class="mb-12 w-full">
    <img src={MetaxonaBannerPost} alt="Metaxona Blog Banner" width="100%" />
</div>

<div class="px-4 pt-4 pb-40">
    <h1 class="text-4xl font-bold text-center pt-4 pb-20">Blog</h1>

    <section class="flex flex-row flex-wrap justify-center items-start gap-4">
        {#each posts as post}
            <a href={`/blog/${post.slug}`} title={JSON.stringify(post)}>
                <div class="max-w-72 dark:bg-slate-800 bg-neutral-100 p-2">
                    <div class="text-md font-bold line-clamp-2 capitalize">{post.title}</div>
                    {#if post.lastUpdated}
                        <small><span class="font-semibold">Updated:</span>  {post.lastUpdated}</small>
                    {:else}
                        <small><span class="font-semibold">Published:</span> {post.datePublished}</small>
                    {/if}
                    <p class="dark:text-neutral-400 text-neutral-600">{post.description}</p>
                    <div>
                        <small class="font-semibold">Tags:</small>
                        <div class="flex flex-row flex-wrap gap-2">
                            {#each post.tags as tag }
                                <div class="w-fit text-xs bg-cyan-400 text-black rounded-md p-1 font-semibold">{tag}</div>
                            {/each}
                        </div>
                    </div>
                    <div>
                        <small class="font-semibold">Categories:</small>
                        <div class="flex flex-row flex-wrap gap-2">
                            {#each post.categories as category }
                                <div class="w-fit text-xs bg-amber-400 text-black rounded-md p-1 font-semibold">{category}</div>
                            {/each}
                        </div>
                    </div>
                </div>
            </a>
        {/each}
    </section>
</div>