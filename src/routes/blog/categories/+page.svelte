<script>
    export let data;

    const {postsByCategory, categoryList} = data

    let pageMetadata = {
        title: `Metaxona - Blog Categories`,
        keywords: `website, blog, tags, ${categoryList.join(",")}`,
        description: 'blog categories page',
        author: "Metaxona",
        publisher: "Metaxona",
        copyright: "Metaxona",
        audience: "Everyone",
        type: "Website",
        url: `https://metaxona.com/blog/categories`,
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
    <div class="font-bold text-4xl text-center mb-10">Categories</div>


    <section class="flex flex-row flex-wrap gap-4 my-10">
        {#each categoryList as category }
            <a href={`/blog/categories/${category}`} class="text-sm font-bold bg-cyan-400 text-black p-1 rounded-md">{category}</a>
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