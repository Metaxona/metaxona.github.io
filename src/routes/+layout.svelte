<script>
    import "../normalize.css";
    import "../app.css";
    import "../scrollstyle.css";
    import Header from "$lib/components/Header.svelte";
    import Footer from "$lib/components/Footer.svelte";

    /** @type {import('./$types').LayoutData} */
    export let data;

    const pageMetadata = {
        title: "Metaxona",
        keywords: "",
        description: "Metaxona - A Portfolio + Blog Website",
        author: "Metaxona",
        publisher: "Metaxona",
        copyright: "Metaxona",
        audience: "Everyone",
        type: "Website",
        url: "https://metaxona.com",
        image: "/assets/banner_meta_image.png",
        card: "summary_large_image"
    }

</script>

<svelte:head>

    {#if data.browserTheme === "dark"}
        <link rel="icon" type="image/svg+xml" href={"/favicon_dark.svg"}>
    {:else if data.browserTheme === "light"}
        <link rel="icon" type="image/svg+xml" href={"/favicon_light.svg"}>
    {/if}

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

<Header />
    <main class="min-h-svh dark:bg-slate-900 dark:text-white">
        <slot />
    </main>
<Footer />