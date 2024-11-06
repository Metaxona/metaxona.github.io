<script>
    export let value = ""

    const styles = {
        default: "bg-slate-900 text-white dark:bg-white dark:text-black shadow-md",
        secondary: "bg-slate-600 text-white shadow-md",
    }

    /**
     * @type {keyof styles}
     */
    export let type = "default"

</script>

<div class={`rounded-xl text-xs font-semibold p-1 px-2 bg ${styles[type]}`}>{value}</div>