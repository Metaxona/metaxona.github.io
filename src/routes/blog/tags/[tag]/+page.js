import { BASE_URL } from '$lib/utils/constants'
import metadata from "../../../../../static/posts/metadata.json"

/** @type {import('./$types').EntryGenerator} */
export async function entries() {    
    try{
        let blogMetadata = metadata

        return blogMetadata.tags.map(
        /** @param {string} tag */    
        (tag)=>{ return {tag: tag} })
    }catch(err){
        console.log(err)
        return []
    }
}

/** @type {import('./$types').PageLoad} */
export async function load({ fetch, params }) {

    const { tag } = params

    /**
     * @type {{postsByTag: {title: string, slug: string, tags: string[], categories: string[], description: string, lastUpdated: string, datePublished: string}[], tag: string | any }}
     */
    let result = {
        tag: "", postsByTag: []
    }

    /**
     * @type {{[key: string] : {title: string, slug: string, tags: string[], categories: string[], description: string, lastUpdated: string, datePublished: string}[] }}
     */
      const postsByTag = {}

    try {
        
        const res = await fetch(`${BASE_URL}/posts/metadata.json`)
        const data = await res.json()
        
        const tags = data.tags

        tags.map(
            /** @param {string} tag */
            (tag)=>{

            postsByTag[tag] = []
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
            item.tags?.forEach(tag=>{
                postsByTag[tag].push({title: item.title, slug: item.slug, categories: item.categories, tags: item.tags, description: item.description, datePublished: item.datePublished, lastUpdated: item.lastUpdated})
            })
        })
        
        const tagPosts = postsByTag[tag]
            
        result = {
            postsByTag: tagPosts, tag: tag 
        }

    
    } catch (err) {
        console.log(err)
        result = {
            postsByTag: [], tag: tag
        }
    }

    return result
};