<script>
    import { page } from '$app/stores';
</script>

<svelte:head>
    <title>Metaxona - {$page.status} | {$page?.error?.message}</title>
</svelte:head>

<div class="w-svh h-svh flex justify-center items-center">
    <span class="text-4xl">{$page.status} | {$page?.error?.message}</span>
</div>