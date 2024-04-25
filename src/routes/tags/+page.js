import { BASE_URL } from '$lib/utils/constants'

/** @type {import('./$types').PageLoad} */
export async function load({ fetch }) {

    /**
     * @type {{postsByTag: {[key: string] : {title: string, slug: string}[] }, tagList: string[] | any[] }}
     */
    let result = {
        postsByTag: {}, tagList: []
    }

    /**
     * @type {{[key: string] : {title: string, slug: string}[] }}
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
            (item)=>item.value)


            postsMetadata?.map((item)=>{
                item.tags?.forEach(tag=>{
                    postsByTag[tag].push({title: item.title, slug: item.slug})
                })
            })
                
             /**
             * @type {string[]}
             */
            const tagList = Object.keys(postsByTag)

            result = {
                postsByTag, tagList
            }

    
    } catch (err) {
        console.log(err)
        result = {
            postsByTag: {}, tagList: []
        }
    }

    return result
};