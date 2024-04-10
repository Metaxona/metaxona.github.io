<script>
    import { themeMode } from '$lib/stores/themeStore';
    import { Icon, Moon, Sun } from 'svelte-hero-icons';

    /** @type {string} */
    export let className;
</script>

<svelte:head>
    {#if $themeMode === 'dark'}
        <script>
            document.documentElement.classList.add('dark');
        </script>
    {:else}
        <script>
            document.documentElement.classList.remove('dark');
        </script>
    {/if}
</svelte:head>

<div class="w-6">
    {#if $themeMode === 'light'}
        <button class="" on:click={themeMode.dark}>
            <Icon class={`${className}`} src={Moon} solid />
        </button>
    {:else if $themeMode === 'dark'}
        <button class="" on:click={themeMode.light}>
            <Icon class={`${className}`} src={Sun} solid />
        </button>
    {/if}
</div>