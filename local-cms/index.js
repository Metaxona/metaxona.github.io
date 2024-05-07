import Markdoc from "@markdoc/markdoc";
import fs from "node:fs/promises";
import { exportJSONToFile } from "./utils/asyncJSONToFileExporter.js";
import { exportMDToFile } from "./utils/asyncExportToMD.js";
import { generateRSSContent } from "./utils/generateRSSContent.js";
import { exportXMLToFile } from "./utils/asyncExportToXML.js";

const ROOT = "."
const BASE_PATH = "./local-cms"
const POSTS_PATH = BASE_PATH + "/posts" 
const OUT_DIR = ROOT + "/static/posts"
const FILE_EXTENSION = ".md" 

async function getSlugs(){
    try {
        return (await fs.readdir(POSTS_PATH)).map((slug)=>slug.replace(FILE_EXTENSION, ""))
    } catch (error) {
        throw new Error(`Error Fetching Slugs: ${error}`)
    }
}

async function getContent(fileName){
    return await fs.readFile(`${POSTS_PATH}/${fileName}${FILE_EXTENSION}`, { encoding: 'utf8' })
}

function parseContent(content){
    return Markdoc.parse(content)
}

function getFrontMatter(content){
    return JSON.parse(content.attributes.frontmatter)
}

function getHeadings(content){
    return content.children.filter((node)=>node.type === "heading")
}

async function generateMetadataFile(frontmatter, slug){
    try {
        await exportJSONToFile(frontmatter, { fileName: "metadata", pathdir: `${OUT_DIR}/${slug}`})
    } catch (error) {
        throw new Error(`Error Generating Metadata File: ${error}`)
    }
}

async function generateMarkdownFile(content, slug){
    try {
        await exportMDToFile(content, { fileName: "index", pathdir: `${OUT_DIR}/${slug}`})
    } catch (error) {
        throw new Error(`Error Generating Markdown File: ${error}`)
    }
}

function generateTOC(headings){
    let toc = `` 

    const formatted = headings.map(heading=>heading.attributes)

    formatted.forEach((content)=>{
        const title = content.id.toLowerCase().split("-").map(function(word) {
            return (word.charAt(0).toUpperCase() + word.slice(1));
        }).join(' ')

        toc += `- [${title}](#${content.id})\n`
    })

    return toc
}

async function generateTOCMarkdownFile(content, slug){
    try {
        await exportMDToFile(content, { fileName: "toc", pathdir: `${OUT_DIR}/${slug}`})
    } catch (error) {
        throw new Error(`Error Generating Markdown File: ${error}`)
    }
}

async function getAllFrontMatters(){
    const slugs = await getSlugs()

    const frontmatters = Promise.allSettled(slugs.map(async (post)=>{
        try {
            const content = await getContent(post);
            const parsedContent = parseContent(content);
            return getFrontMatter(parsedContent);
        } catch (error) {
            throw new Error(`Error Fetching Front Matters: ${error}`)
        }
    }))

    return (await frontmatters).map(item=>item.value)
}

function generatePostMetadata(frontMatters){
    const metadata = {
        type: "posts",
        tags: [],
        categories: [],
        slugs: []
    }

    frontMatters.forEach((frontmatter)=>{
        metadata.slugs.push(frontmatter.slug)
        frontmatter.tags.forEach((tag)=>{
            metadata.tags.push(tag)
        })
        frontmatter.categories.forEach((category)=>{
            metadata.categories.push(category)
        })
    })

    metadata.tags = Array.from(new Set(metadata.tags))
    metadata.categories = Array.from(new Set(metadata.categories))

    return metadata
}

async function generatePostMetadataFile(metadata){
    try {
        await exportJSONToFile(metadata, { fileName: "metadata", pathdir: `${OUT_DIR}`})
    } catch (error) {
        throw new Error(`Error Generating Post Metadata File: ${error}`)
    }
}
async function generateRSSFile(rssContent){
    try {
        await exportXMLToFile(rssContent, { fileName: "rss", pathdir: `${ROOT}/static/` })
    } catch (error) {
        throw new Error(`Error Generating RSS File: ${error}`)
    }
}

async function main(){
    console.log("Date Generated: ", new Date().toUTCString())
    console.log("Generating Posts...")

    try {
        const slugs = await getSlugs()
        console.log("File Names / Slugs", slugs)

        slugs.forEach(async (post)=>{
            try {
                const content = await getContent(post);
                const parsedContent = parseContent(content);
                const frontmatter = getFrontMatter(parsedContent);

                const slug = frontmatter.slug;
                
                await generateMetadataFile(frontmatter, slug);
                await generateMarkdownFile(content, slug);
                
                const headings = getHeadings(parsedContent);
                const headingsFormatted = generateTOC(headings);
                await generateTOCMarkdownFile(headingsFormatted, slug);
            } catch (error) {
                throw new Error(`Error Processing Posts: ${error}`)
            }
        })

        const frontMatters = await getAllFrontMatters()
        const metadata = generatePostMetadata(frontMatters)
        console.log("Metadata", metadata)
        await generatePostMetadataFile(metadata)

        console.log("Post Generation Done")
        console.log("Generating RSS...")
        const rssContent = generateRSSContent(frontMatters)
        await (generateRSSFile(rssContent))
        console.log("RSS Generation Done")
    } catch (error) {
        throw new Error(`Error Generating Posts: ${error}`)
    }
}

main().catch(console.error)