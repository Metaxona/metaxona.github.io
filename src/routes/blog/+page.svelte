<script>
    import MetaxonaBannerPost from '$lib/assets/banners/mon_logo_building_stage_banner_bv_2.png'
    import { Icon, Rss } from 'svelte-hero-icons';
    /** @type {import('./$types').PageData} */
    export let data;

    const {posts} = data
</script>

<div class="mb-12 w-full">
    <img src={MetaxonaBannerPost} alt="Metaxona Blog Banner" width="100%" />
</div>

<div class="px-4 pt-4 pb-40">
    <h1 class="text-4xl font-bold text-center pt-4 pb-10">Blog</h1>

    <nav class="flex flex-wrap gap-4 text-lg font-semibold justify-center items-center pb-10">
        <li class="list-none hover:underline hover:underline-offset-8"><a href="/blog/categories">Categories</a></li>
        <span>|</span>
        <li class="list-none hover:underline hover:underline-offset-8"><a href="/blog/tags">Tags</a></li>
    </nav>

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

<section class="py-10">
    <a class="flex justify-center items-center" href="/rss.xml" title="RSS Feed"><Icon src={Rss} size="32" /></a>
</section>