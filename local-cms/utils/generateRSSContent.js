/**
 * @typedef {{
 * baseURL?: string, 
 * title?: string, 
 * link?: string, 
 * description?: string, 
 * language?: string, 
 * publishDate?: string, 
 * lastBuildDate?: string,
 * copyright?: string,
 * generator?: string,
 * managingEditor?: string,
 * webMaster?: string,
 * author?: string,
 * path?: string,
 * source?: string
 * }} RSSConfig
 *  
 */

/**
 * @typedef {{
 * title:string;
 * slug: string;
 * description: string;
 * datePublished: string;
 * lastUpdated: string;
 * tags: string[];
 * categories: string[];
 * }} PostMetadata
 */

/**
 * @type {RSSConfig}
 */
const defaultConfig = {
    baseURL: "https://metaxona.com",
    copyright: `Metaxona © 2022 - ${new Date().getUTCFullYear()}`,
    generator: "Metaxona Local CMS V1.0.0",
    language: "en-us",
    lastBuildDate: `${new Date().toUTCString()}`,
    link: "https://metaxona.com/blog",
    path: "https://metaxona.com",
    author: "metaxonadev@gmail.com (Metaxona)",
    managingEditor: "metaxonadev@gmail.com (Metaxona)",
    webMaster: "metaxonadev@gmail.com (Metaxona)",
    title: "Metaxona Blog RSS",
    description: "Metaxona Blog RSS Feed",
    publishDate: `${new Date("2024-5-7").toUTCString()}`,
    source: "Metaxona's Blog"
}


/**
 * 
 * @param {RSSConfig} config 
 * @param {PostMetadata[]} postsMetadata
 */
export function generateRSSContent(postsMetadata, config = defaultConfig){

    let items = ''

    postsMetadata.forEach(
        /**
         * @param {PostMetadata} post
         */
        (post)=>{

            let categories = ''
            post.categories.forEach((category)=>{
                categories += `
                <category>${category}</category>
                `
            })

            items += `
            <item>
            <title>${post.title}</title>
            <author>${config.author}</author>
            <link>${config.baseURL}/blog/${post.slug}</link>
            ${categories}
            <description>${post.description}</description>
            <pubDate>${(post.lastUpdated) ? new Date(post.lastUpdated).toUTCString() : new Date(post.datePublished).toUTCString()}</pubDate>
            <guid isPermaLink="false">${config.baseURL}/blog/${post.slug}</guid>
            <comments>${config.baseURL}/blog/${post.slug}#comments</comments>
            <source url="${config.path}/rss.xml">${config.source}</source>
            </item>
            `
        })

    const content = `<rss xmlns:atom="http://www.w3.org/2005/Atom" version="2.0">
        <channel>
        <title>${config.title}</title>
        <link>${config.link}</link>
        <description>${config.description}</description>
        <language>${config.description}</language>
        <pubDate>${config.publishDate}</pubDate>
        <lastBuildDate>${config.lastBuildDate}</lastBuildDate>
        <docs>https://www.rssboard.org/rss-specification</docs>
        <generator>${config.generator}</generator>
        <managingEditor>${config.managingEditor}</managingEditor>
        <webMaster>${config.webMaster}</webMaster>
        <atom:link href="${config.path}/rss.xml" rel="self" type="application/rss+xml"/>
        ${items}
        </channel>
    </rss>
    `
    
    return content
}