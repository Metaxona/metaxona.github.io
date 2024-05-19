/**
 * 
 * @param {string} markdownContent 
*/
export default function frontMatterRemover(markdownContent, {startString, endString} = {startString: "---", endString: "---"}){
    
    const matcherString = `^${startString}(.*?)${endString}`
    const matcher = new RegExp(matcherString, 's')

    try {
        const matches = markdownContent.match(matcher)

        if(!matches || matches.length < 1) throw new Error("No Front Matter Found")

        const cleaned = markdownContent.replace(matches[0], "")

        return { content: cleaned, error: undefined }

    } catch (error) {
        
        return { content: "", error: error }
    
    }

}