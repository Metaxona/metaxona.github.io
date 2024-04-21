// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
    namespace App {
        // interface Error {}
        // interface Locals {}
        // interface PageData {}
        // interface PageState {}
        // interface Platform {}
    }

    type PostMetadata = {
        title:string;
        slug: string;
        description: string;
        datePublished: string;
        lastUpdated: string;
        tags: string[];
        categories: string[];
    }
}

export type {}
