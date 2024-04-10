<script>
    import MetaxonaBlack from "$lib/assets/logo/Metaxona_Black.svg"
    import MetaxonaWhite from "$lib/assets/logo/Metaxona_White.svg"
    import ThemeSwitcher from "./ThemeSwitcher.svelte";
    import {themeMode} from "$lib/stores/themeStore"
</script>

<header class="w-full p-2 flex flex-row justify-between items-center shadow-md bg-white dark:bg-slate-800 dark:text-white gap-2 sticky top-0">
    <div class="">
        <a href="/" class="no-underline"><img src={ $themeMode === "light" ? MetaxonaBlack : MetaxonaWhite } alt="Metaxona" class="w-12 h-12" draggable="false" /></a>
    </div>
    <ThemeSwitcher className="dark:text-white" />
</header>