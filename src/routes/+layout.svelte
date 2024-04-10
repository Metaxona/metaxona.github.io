<script>
    import "../normalize.css";
    import "../app.css";
    import "../scrollstyle.css";
    import Header from "$lib/components/Header.svelte";
    import Footer from "$lib/components/Footer.svelte";

    /** @type {import('./$types').LayoutData} */
    export let data;

</script>

<svelte:head>
    
    <link rel="icon" type="image/svg+xml" href={`${data.browserTheme === "dark" ? "/favicon_dark.svg" : "/favicon_light.svg"}`}>

</svelte:head>

<Header />
    <main class="min-h-svh dark:bg-slate-900 dark:text-white">
        <slot />
    </main>
<Footer />