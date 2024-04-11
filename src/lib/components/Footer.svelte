<script>
    import MetaxonaBlack from "$lib/assets/logo/Metaxona_Black.svg"
    import MetaxonaWhite from "$lib/assets/logo/Metaxona_White.svg"
    import { themeMode } from "$lib/stores/themeStore";
</script>

<footer class="shadow-md dark:bg-slate-800 dark:text-white flex flex-row justify-center items-center p-2">
    <div class="flex flex-row gap-2 justify-center items-center">
        <img src={ $themeMode === "light" ? MetaxonaBlack : MetaxonaWhite } alt="Metaxona" class="w-5 h-5" draggable="false" />
        <div>Metaxona</div>
        <div>©</div>
        <div><small>2022 - {new Date().getFullYear()}</small></div>
    </div>
</footer>