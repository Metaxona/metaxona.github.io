import { marked } from "marked"
import { BASE_URL } from "$lib/utils/constants"
import metadata from "@/static/posts/metadata.json"
import { frontMatterRemover, autoHeadingIdRenderer } from '$lib/utils/markdown';

/** @type {import('./$types').EntryGenerator} */
export async function entries() {    
    try{
        let blogMetadata = metadata

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

    const { content: markdownContent } = frontMatterRemover(content)

    marked.use(autoHeadingIdRenderer);

    content = marked.parse(markdownContent).toString()
    toc = marked.parse(toc).toString()

    return { slug: slug, content: content, toc: toc, metadata: metadata, postImage: postImage };
};