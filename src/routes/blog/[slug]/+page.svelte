<script>
    import "../../../markdown.css"
    export let data;
    import Banner from "$lib/assets/banners/mon_logo_building_stage_banner_2.png"
    import { onMount } from "svelte";
    import Prism from "prismjs";
    import 'prismjs/themes/prism-tomorrow.min.css';

    const { slug, content, toc, metadata } = data;
    const { title, description, tags, categories, lastUpdated, datePublished, keywords } = metadata;

    $: pageMetadata = {
        title: `Metaxona - ${title}`,
        keywords: `website, blog, ${tags.join()},${categories.join()},${keywords.join()}`,
        description: description,
        author: "Metaxona",
        publisher: "Metaxona",
        copyright: "Metaxona",
        audience: "Everyone",
        type: "Website",
        url: `https://metaxona.com`,
        image: "/assets/banner_meta_image.png",
        card: "summary_large_image"
    }

    onMount(()=>{
        document.querySelectorAll("pre").forEach((elem)=>{
            const lang = elem.getAttribute("data-language")?.toLowerCase()
            const code = document.createElement('code')
            code.classList.add(`language-${lang}`)
            code.innerHTML = elem.innerHTML
            elem.innerHTML = ""
            elem.classList.add(`line-number`)
            elem.appendChild(code)
        })

        Prism.highlightAll()
    })

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

<div class="grid grid-cols-1 md:grid-cols-7 justify-start items-start gap-2 pt-16 pb-40 px-4">
    <section class="col-span-1 md:sticky md:top-20 flex flex-col items-center gap-2">
        <h2 class="font-bold text-md">Table Of Contents</h2>
        {@html toc}
    </section>
    
    <section class="col-span-5 flex flex-col gap-2">
        <span class="text-sm capitalize mt-5"><a href="/blog">Blog</a> / <a href="/blog/{slug}" aria-disabled="true">{metadata.title}</a></span>
        <img src={Banner} alt={slug}>
        <h1 class="font-bold text-4xl text-center pb-8 pt-4 capitalize">{title}</h1>
        {@html content}

        <hr>
    </section>

    <section class="col-span-1 flex flex-col gap-2">
        <span class="font-bold">Metadata</span>

        <span class="font-bold">Date:</span>
        <p class="text-wrap">Published: {new Date(datePublished).toLocaleDateString()}</p>
        {#if lastUpdated}
            <p class="text-wrap">Updated: {new Date(lastUpdated).toLocaleDateString()}</p>
        {/if}

        <span class="font-bold">slug:</span>
        <p class="text-wrap">{slug}</p>
        
        <span class="font-bold">description:</span>
        <p class="text-wrap">{description}</p>
        
        <span class="font-bold">categories:</span>
        <div class="flex flex-row flex-wrap gap-2">
            {#each categories as category}
                <a href={`/categories/#${category}`} class="rounded-md bg-amber-400 text-black font-bold  text-xs p-1 w-fit">{category}</a>
            {/each}
        </div>

        <span class="font-bold">tags:</span>
        <div class="flex flex-row flex-wrap gap-2">
            {#each tags as tag}
            <a href={`/tags/#${tag}`} class="rounded-md bg-cyan-400 text-black font-bold  text-xs p-1 w-fit">{tag}</a>
            {/each}
        </div>

    </section>
</div>