<script>
    export let width = "w-auto" 
    export let height = "h-auto" 
</script>


<div class="flex flex-col p-4 border rounded dark:bg-slate-700 border-none {width} {height}">
    <slot /> 
</div>