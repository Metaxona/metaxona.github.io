
/**
 * 
 * @param {string} markdownContent 
*/
export default function parseJSONFrontMatter(markdownContent, {startString, endString} = {startString: "---", endString: "---"}){
    
    const matcherString = `^${startString}(.*?)${endString}`
    const matcher = new RegExp(matcherString, 's')

    try {

        const matches = markdownContent.match(matcher)

        if(!matches || matches.length < 1) throw new Error("No Front Matter Found")

        const frontMatterString = matches[0].replaceAll('---', "").trim()

        const frontMatter = JSON.parse(frontMatterString)

        return { frontMatter: frontMatter, error: undefined }

    } catch (error) {
        
        return { frontMatter: undefined, error: error }
    
    }

}