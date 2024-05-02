import { access, mkdir, writeFile } from "fs/promises";

/**
 * 
 * @param {Object} jsonData 
 * @param {{ pathdir?: string; fileName?: string; log?: boolean }} options 
 */
export async function exportJSONToFile(
    jsonData,
    options 
) {
    options.log && console.log("Processing JSON For Export...");
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

        const _jsonData = JSON.stringify(jsonData, null, 2);

        const _path = options?.pathdir ? options.pathdir : "./exportedJSON/";
        const _fileName = options?.fileName
            ? options.fileName
            : _placeHolderName;

        await ensureDirectoryExists(_path);
        await writeFile(`${_path}/${_fileName}.json`, _jsonData);
        options.log && console.log(`Successfully Exported JSON To: ${_path}/${_fileName}.json`);
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