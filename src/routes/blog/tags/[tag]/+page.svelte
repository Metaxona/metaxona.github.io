<script>
    export let data;

    const {postsByTag, tag} = data

    let pageMetadata = {
        title: `Metaxona - Blog Tags: ${tag}`,
        keywords: `website, blog, tags, ${tag}`,
        description: 'blog tags page',
        author: "Metaxona",
        publisher: "Metaxona",
        copyright: "Metaxona",
        audience: "Everyone",
        type: "Website",
        url: `https://metaxona.com/blog/tags/${encodeURIComponent(tag)}`,
        image: "/assets/banner_meta_image.png",
        card: "summary_large_image"
    }
    
</script>

<svelte:head>
    <title>{pageMetadata.title}</title>
    <meta name="title" content={pageMetadata.title}>
    <meta name="description" content={pageMetadata.description}>
    <meta name="keywords" content={pageMetadata.keywords}>
    <meta name="author" content={pageMetadata.author}>
    <meta name="publisher" content={pageMetadata.publisher}>
    <meta name="copyright" content={pageMetadata.copyright}>
    <meta name="audience" content={pageMetadata.audience}>

    <!-- Open Graph / Facebook -->
    <meta property="og:type" content={pageMetadata.type}>
    <meta property="og:url" content={pageMetadata.url}>
    <meta property="og:title" content={pageMetadata.title}>
    <meta property="og:description" content={pageMetadata.description}>
    <meta property="og:image" content={pageMetadata.image}>

    <!-- Twitter -->
    <meta property="twitter:card" content={pageMetadata.card}>
    <meta property="twitter:url" content={pageMetadata.url}>
    <meta property="twitter:title" content={pageMetadata.title}>
    <meta property="twitter:description" content={pageMetadata.description}>
    <meta property="twitter:image" content={pageMetadata.image}>
</svelte:head> 

<div class="p-4">
    <div class="font-bold text-4xl text-center mb-5">{tag}</div>
    <p class="text-sm capitalize mt-5 pb-20 text-center"><a href="/blog">Blog</a> / <a href="/blog/tags">Tags</a> / <a href="/blog/tags/{encodeURIComponent(tag)}" aria-disabled="true">{tag}</a></p>

    <div class="flex flex-row flex-wrap gap-8 justify-center">
        {#each postsByTag as post}
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
    </div>

</div>