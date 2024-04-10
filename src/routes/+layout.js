import { browser } from '$app/environment'

/** @type {import('./$types').LayoutLoad} */
export async function load() {
    let browserTheme = 'light'

    if (
        browser &&
        window &&
        window.matchMedia &&
        window.matchMedia('(prefers-color-scheme: dark)').matches
    ) {
        browserTheme = 'dark'
    }

    return { browserTheme }
}
