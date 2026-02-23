import fs from 'fs/promises';
export const writeFile = async (path, data) => {
    try {
        await fs.writeFile(path, JSON.stringify(data, null, 2));
        console.log("data is written successfully");
    } catch (error) {
        console.log("error in writing file", error);
        throw error;
    }
}