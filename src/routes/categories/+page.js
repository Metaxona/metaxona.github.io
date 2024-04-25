import { BASE_URL } from '$lib/utils/constants'

/** @type {import('./$types').PageLoad} */
export async function load({ fetch }) {

    /**
     * @type {{postsByCategory: {[key: string] : {title: string, slug: string}[] }, categoryList: string[] | any[] }}
     */
    let result = {
        postsByCategory: {}, categoryList: []
    }

    /**
     * @type {{[key: string] : {title: string, slug: string}[] }}
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
            (item)=>item.value)


            postsMetadata?.map((item)=>{
                item.categories?.forEach(category=>{
                    postsByCategory[category].push({title: item.title, slug: item.slug})
                })
            })
                
             /**
             * @type {string[]}
             */
            const categoryList = Object.keys(postsByCategory)

            result = {
                postsByCategory, categoryList
            }

    
    } catch (err) {
        console.log(err)
        result = {
            postsByCategory: {}, categoryList: []
        }
    }

    return result
};