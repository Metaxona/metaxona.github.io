/** @type {import('./$types').PageLoad} */
export async function load({ fetch }) {

    /**
     * @type {{posts: PostMetadata[] }}}
     */
    let result = {
        posts: []
    }

    try {
        
        const res = await fetch("/posts/metadata.json")
        const data = await res.json()

        const postsData = data.slugs.map(
            /**
             * @param {string} slug 
             */
            async (slug) => {
            const metadata = await fetch(`/posts/${slug}/metadata.json`)
            const m = await metadata.json()
            return m
        });

        /**
         * @type {PostMetadata[] | undefined}
         */

        const postsMetadata = (await Promise.allSettled(postsData)).map(
            /**
             * @param {any} item 
             * @returns 
             */
            (item)=>item.value)


        const posts = postsMetadata?.toSorted(
                /**
                 * @param {PostMetadata} a 
                 * @param {PostMetadata} b 
                 * @returns 
                 */
                (a, b)=>{
                return new Date(b.datePublished).getTime() - (new Date(b.datePublished)).getTime()
            })

            result = {
                posts
            }

    
    } catch (err) {
        console.log(err)
        result = {
            posts: []
        }
    }

    return result
};