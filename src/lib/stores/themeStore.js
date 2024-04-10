import { writable } from 'svelte/store'

function setThemeMode() {
    const isBrowser = typeof window !== 'undefined'

    /**
     * @type {import('svelte/store').Writable<'dark' | 'light'>}
     */
    const { subscribe, set, update } = writable((isBrowser && localStorage.theme) || 'light')

    isBrowser && localStorage.theme && set(localStorage.theme)

    return {
        subscribe,
        light: () => {
            isBrowser && localStorage.theme === 'light'
            update(() => 'light')
        },
        dark: () => {
            isBrowser && localStorage.theme === 'dark'
            update(() => 'dark')
        }
    }
}

export const themeMode = setThemeMode()
