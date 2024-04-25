import Markdoc from '@markdoc/markdoc';
import { BASE_URL } from "$lib/utils/constants"

/** @type {import('./$types').EntryGenerator} */
export async function entries() {
    try{
        const response = await fetch(`${BASE_URL}/posts/metadata.json`)
        let blogMetadata = await response.json()

        return blogMetadata.slugs.map(
        /** @param {string} slug */    
        (slug)=>{ return {slug: slug} })
    }catch(err){
        console.log(err)
        return []
    }
}

/** @type {import('./$types').PageLoad} */
export async function load({fetch, params}) {
    const {slug} = params

    const response1 = await fetch(`${BASE_URL}/posts/${slug}/index.md`)
    const response2 = await fetch(`${BASE_URL}/posts/${slug}/toc.md`)
    const response3 = await fetch(`${BASE_URL}/posts/${slug}/metadata.json`)

    let content = await response1.text()
    let toc = await response2.text()
    let metadata = await response3.json()
    let postImage = `${BASE_URL}/posts/assets/${slug}.png`

    

    content = Markdoc.renderers.html(Markdoc.transform(Markdoc.parse(content), /* config here */))
    toc = Markdoc.renderers.html(Markdoc.transform(Markdoc.parse(toc), /* config here */))

    return { slug: slug, content: content, toc: toc, metadata: metadata, postImage: postImage };
};