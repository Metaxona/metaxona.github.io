<script>
    export let width = "w-auto" 
    export let height = "h-auto" 
</script>


<div class="flex flex-col p-4 border rounded bg-slate-200 dark:bg-slate-700 border-none shadow-md {width} {height}">
    <slot /> 
</div>