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

    {#if data.browserTheme === "dark"}
        <link rel="icon" type="image/svg+xml" href={"/favicon_dark.svg"}>
    {:else if data.browserTheme === "light"}
        <link rel="icon" type="image/svg+xml" href={"/favicon_light.svg"}>
    {/if}

</svelte:head>

<Header />
    <main class="min-h-svh dark:bg-slate-900 dark:text-white">
        <slot />
    </main>
<Footer />