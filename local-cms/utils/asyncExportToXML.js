import { access, mkdir, writeFile } from "fs/promises";

/**
 * 
 * @param {string} xmlContent 
 * @param {{ pathdir?: string; fileName?: string; log?: boolean }} options 
 */
export async function exportXMLToFile(
    xmlContent,
    options 
) {
    options.log && console.log("Processing XML For Export...");
    try {

        let date = new Date();
        date = new Date(
            Date.UTC(
                date.getUTCFullYear(),
                date.getUTCMonth(),
                date.getUTCDate(),
                date.getUTCHours(),
                date.getUTCMinutes(),
                date.getUTCSeconds()
            )
        );
        const _placeHolderName = `${date.getUTCFullYear()}_${
            date.getUTCMonth() + 1
        }_${date.getUTCDate()}_${date.getUTCHours()}_${date.getUTCMinutes()}_${date.getUTCSeconds()}`;

        const _path = options?.pathdir ? options.pathdir : "./exportedXML/";
        const _fileName = options?.fileName
            ? options.fileName
            : _placeHolderName;

        await ensureDirectoryExists(_path);
        await writeFile(`${_path}/${_fileName}.xml`, xmlContent);
        options.log && console.log(`Successfully Exported XML To: ${_path}/${_fileName}.md`);
    } catch (err) {
        throw err;
    }
}

/**
 * 
 * @param {string} dirPath 
 */
async function ensureDirectoryExists(dirPath) {
    try {
        await access(dirPath);
    } catch (error) {
        await mkdir(dirPath, { recursive: true });
    }
}