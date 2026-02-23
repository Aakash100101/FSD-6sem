import fs from 'fs/promises';
export const readFile = async (path,data) => {
    try {
        await fs.writeFile(path, JSON.stringify(data));
        console.log("data is written successfully");
    } catch (error) {
        console.log("error in writing file", error);
    }
}