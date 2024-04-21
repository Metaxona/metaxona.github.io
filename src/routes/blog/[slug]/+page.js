import Markdoc from '@markdoc/markdoc';

/** @type {import('./$types').PageLoad} */
export async function load({fetch, params}) {
    const {slug} = params

    const response1 = await fetch(`/posts/${slug}/index.md`)
    const response2 = await fetch(`/posts/${slug}/toc.md`)
    const response3 = await fetch(`/posts/${slug}/metadata.json`)

    let content = await response1.text()
    let toc = await response2.text()
    let metadata = await response3.json()
    let postImage = `/posts/assets/${slug}.png`

    content = Markdoc.renderers.html(Markdoc.transform(Markdoc.parse(content), /* config here */))
    toc = Markdoc.renderers.html(Markdoc.transform(Markdoc.parse(toc), /* config here */))

    return { slug: slug, content: content, toc: toc, metadata: metadata, postImage: postImage };
};