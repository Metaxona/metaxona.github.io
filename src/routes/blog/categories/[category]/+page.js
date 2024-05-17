import { BASE_URL } from '$lib/utils/constants'
import metadata from "@/static/posts/metadata.json"

/** @type {import('./$types').EntryGenerator} */
export async function entries() {    
    try{
        let blogMetadata = metadata

        return blogMetadata.categories.map(
        /** @param {string} category */    
        (category)=>{ return {category: category} })
    }catch(err){
        console.log(err)
        return []
    }
}

/** @type {import('./$types').PageLoad} */
export async function load({ fetch, params }) {

    const { category } = params

    /**
     * @type {{postsByCategory: {title: string, slug: string, tags: string[], categories: string[], description: string, lastUpdated: string, datePublished: string}[], category: string | any }}
     */
    let result = {
        category: "", postsByCategory: []
    }

    /**
     * @type {{[key: string] : {title: string, slug: string, tags: string[], categories: string[], description: string, lastUpdated: string, datePublished: string}[] }}
     */
      const postsByCategory = {}

    try {
        
        const res = await fetch(`${BASE_URL}/posts/metadata.json`)
        const data = await res.json()
        
        const categories = data.categories

        categories.map(
            /** @param {string} category */
            (category)=>{

            postsByCategory[category] = []
        })

        const posts = data.slugs.map(
            /**
             * @param {string} slug 
             */
            async (slug) => {
            const metadata = await fetch(`${BASE_URL}/posts/${slug}/metadata.json`)
            const m = await metadata.json()
            return m
        });

        /**
         * @type {PostMetadata[] | undefined}
         */

        const postsMetadata = (await Promise.allSettled(posts)).map(
            /**
             * @param {any} item 
             * @returns 
             */
            (item)=>item.value);

        postsMetadata?.map((item)=>{
            item.categories?.forEach(category=>{
                postsByCategory[category].push({title: item.title, slug: item.slug, categories: item.categories, tags: item.tags, description: item.description, datePublished: item.datePublished, lastUpdated: item.lastUpdated})
            })
        })
        
        const categoryPosts = postsByCategory[category]
            
        result = {
            postsByCategory: categoryPosts, category: category 
        }

    
    } catch (err) {
        console.log(err)
        result = {
            postsByCategory: [], category: category
        }
    }

    return result
};